import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from "react";
import { View, Platform, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { Place } from "../types/restaurant";

export interface NaverMapViewRef {
  zoomIn: () => void;
  zoomOut: () => void;
  panTo: (lat: number, lng: number) => void;
}

interface NaverMapViewProps {
  restaurants: Place[];
  selectedRestaurantId?: string | null;
  userLocation?: { latitude: number; longitude: number } | null;
  routeCoordinates?: [number, number][] | null;
  onSelectRestaurant?: (restaurant: Place) => void;
  clientId?: string;
  center?: { latitude: number; longitude: number };
  zoom?: number;
}

export const NaverMapView = forwardRef<NaverMapViewRef, NaverMapViewProps>(
  (
    {
      restaurants,
      selectedRestaurantId,
      userLocation,
      routeCoordinates,
      onSelectRestaurant,
      clientId = "YOUR_NAVER_CLIENT_ID",
      center = { latitude: 35.1595, longitude: 129.1625 },
      zoom = 14,
    },
    ref
  ) => {
    const webViewRef = useRef<WebView>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // 최신 props 참조 유지 (클로저 이슈 방지)
    const restaurantsRef = useRef(restaurants);
    restaurantsRef.current = restaurants;
    const onSelectRestaurantRef = useRef(onSelectRestaurant);
    onSelectRestaurantRef.current = onSelectRestaurant;

    const sendMessage = (messageObj: any) => {
      const jsonStr = JSON.stringify(messageObj);
      if (Platform.OS === "web") {
        iframeRef.current?.contentWindow?.postMessage(jsonStr, "*");
      } else {
        webViewRef.current?.postMessage(jsonStr);
      }
    };

    useImperativeHandle(ref, () => ({
      zoomIn: () => {
        sendMessage({ type: "ZOOM_IN" });
      },
      zoomOut: () => {
        sendMessage({ type: "ZOOM_OUT" });
      },
      panTo: (lat: number, lng: number) => {
        sendMessage({ type: "PAN_TO", lat, lng });
      },
    }));

    // Web 브라우저 환경에서 iframe으로부터 postMessage 수신
    useEffect(() => {
      if (Platform.OS === "web") {
        const handleWebMessage = (event: MessageEvent) => {
          try {
            const data =
              typeof event.data === "string"
                ? JSON.parse(event.data)
                : event.data;
            if (data && data.type === "SELECT_RESTAURANT") {
              const target = restaurantsRef.current.find(
                (r) => String(r.id) === String(data.id)
              );
              if (target && onSelectRestaurantRef.current) {
                onSelectRestaurantRef.current(target);
              }
            }
          } catch (e) {}
        };

        window.addEventListener("message", handleWebMessage);
        return () => window.removeEventListener("message", handleWebMessage);
      }
    }, []);

    // HTML을 memoize하여 selectedRestaurantId나 route 변경 시 WebView/iframe이 리로드(깜박임)되지 않도록 방지
    const mapHtml = useMemo(() => {
      const serializedRestaurants = JSON.stringify(restaurants);

      return `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>FoodMap</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  ${
    clientId && clientId !== "YOUR_NAVER_CLIENT_ID"
      ? `<script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}"></script>`
      : ""
  }
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif; }
    html, body, #map { width: 100%; height: 100%; overflow: hidden; background-color: #f8fafc; }
    
    .custom-div-icon {
      background: transparent !important;
      border: none !important;
      pointer-events: auto !important;
    }

    /* 맛집(오렌지) & 가볼만한곳(에메랄드/블루) 말풍선 마커 */
    .custom-marker {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      background: #ffffff;
      border: 2.5px solid #f97316;
      border-radius: 9999px;
      padding: 6px 13px;
      box-shadow: 0 4px 14px rgba(249, 115, 22, 0.32), 0 2px 5px rgba(0,0,0,0.1);
      white-space: nowrap;
      cursor: pointer;
      font-weight: 700;
      font-size: 12px;
      color: #0f172a;
      width: max-content;
      min-width: max-content;
      position: relative;
      transform: translate(-50%, -100%);
      margin-top: -8px;
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      pointer-events: auto !important;
      z-index: 100;
    }

    .custom-marker.attraction {
      border-color: #0284c7;
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.32), 0 2px 5px rgba(0,0,0,0.1);
    }
    .custom-marker.attraction::after {
      border-top-color: #0284c7;
    }

    .custom-marker:hover {
      transform: translate(-50%, -100%) scale(1.08);
    }

    .custom-marker:active {
      transform: translate(-50%, -100%) scale(0.95);
    }

    .custom-marker-title {
      font-weight: 700;
      letter-spacing: -0.2px;
      padding-right: 2px;
    }

    .custom-marker::after {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 7px solid #f97316;
    }

    .custom-marker.active {
      background: #f97316 !important;
      color: #ffffff !important;
      border-color: #ea580c !important;
      transform: translate(-50%, -100%) scale(1.2) !important;
      z-index: 9999 !important;
      box-shadow: 0 8px 25px rgba(234, 88, 12, 0.55) !important;
    }
    .custom-marker.active::after {
      border-top-color: #ea580c !important;
    }

    .custom-marker.attraction.active {
      background: #0284c7 !important;
      color: #ffffff !important;
      border-color: #0369a1 !important;
      box-shadow: 0 8px 25px rgba(2, 132, 199, 0.55) !important;
    }
    .custom-marker.attraction.active::after {
      border-top-color: #0369a1 !important;
    }

    .marker-star {
      color: #f59e0b;
      font-size: 11px;
      font-weight: 800;
    }
    .custom-marker.active .marker-star {
      color: #fef08a !important;
    }

    /* GPS User Marker */
    .user-location-marker {
      position: relative;
      width: 22px;
      height: 22px;
      transform: translate(-50%, -50%);
    }
    .user-location-dot {
      width: 14px;
      height: 14px;
      background: #3b82f6;
      border: 2.5px solid #ffffff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 8px rgba(59, 130, 246, 0.7);
      z-index: 2;
    }
    .user-location-pulse {
      width: 32px;
      height: 32px;
      background: rgba(59, 130, 246, 0.35);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: pulse 2s infinite ease-out;
      z-index: 1;
    }
    @keyframes pulse {
      0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const restaurants = ${serializedRestaurants};
    let userLoc = null;
    let currentRoute = null;
    const centerLat = ${center.latitude};
    const centerLng = ${center.longitude};
    let selectedId = "f1";
    let mapInstance = null;
    let restaurantMarkers = [];
    let userMarker = null;
    let routePolyline = null;

    function sendToReactNative(data) {
      const msg = JSON.stringify(data);
      if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        window.ReactNativeWebView.postMessage(msg);
      }
      if (window.parent && window.parent.postMessage) {
        window.parent.postMessage(msg, "*");
      }
    }

    window.selectMarker = function(id) {
      selectedId = String(id);
      document.querySelectorAll('.custom-marker').forEach(el => el.classList.remove('active'));
      const target = document.getElementById('marker-' + id);
      if (target) {
        target.classList.add('active');
      }
      sendToReactNative({ type: 'SELECT_RESTAURANT', id: String(id) });
    };

    function drawRoute(coords) {
      if (!mapInstance || !coords || coords.length === 0) {
        if (routePolyline) {
          if (routePolyline.setMap) routePolyline.setMap(null);
          else if (routePolyline.remove) routePolyline.remove();
          routePolyline = null;
        }
        return;
      }

      if (routePolyline) {
        if (routePolyline.setMap) routePolyline.setMap(null);
        else if (routePolyline.remove) routePolyline.remove();
        routePolyline = null;
      }

      if (window.naver && window.naver.maps && mapInstance instanceof naver.maps.Map) {
        const path = coords.map(c => new naver.maps.LatLng(c[0], c[1]));
        routePolyline = new naver.maps.Polyline({
          map: mapInstance,
          path: path,
          strokeColor: '#f97316',
          strokeWeight: 6,
          strokeOpacity: 0.95,
          strokeLineCap: 'round',
          strokeLineJoin: 'round'
        });

        const bounds = new naver.maps.LatLngBounds();
        path.forEach(p => bounds.extend(p));
        mapInstance.fitBounds(bounds, { top: 70, right: 40, bottom: 240, left: 40 });
      } else {
        routePolyline = L.polyline(coords, {
          color: '#f97316',
          weight: 6,
          opacity: 0.95,
          lineCap: 'round',
          lineJoin: 'round'
        }).addTo(mapInstance);

        mapInstance.fitBounds(routePolyline.getBounds(), {
          paddingTopLeft: [40, 70],
          paddingBottomRight: [40, 240]
        });
      }
    }

    function initMap() {
      if (window.naver && window.naver.maps) {
        try {
          mapInstance = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(centerLat, centerLng),
            zoom: ${zoom},
            zoomControl: false,
            scaleControl: false,
            mapDataControl: false,
          });

          restaurants.forEach(item => {
            const isActive = String(item.id) === String(selectedId);
            const isAttraction = item.mainType === 'attraction';
            const iconPrefix = isAttraction ? '🎡 ' : '';
            const marker = new naver.maps.Marker({
              position: new naver.maps.LatLng(item.latitude, item.longitude),
              map: mapInstance,
              icon: {
                content: \`
                  <div class="custom-marker \${isAttraction ? 'attraction' : ''} \${isActive ? 'active' : ''}" id="marker-\${item.id}" onclick="event.stopPropagation(); window.selectMarker('\${item.id}');">
                    <span class="custom-marker-title">\${iconPrefix}\${item.name}</span>
                    <span class="marker-star">★ \${item.rating}</span>
                  </div>
                \`,
                anchor: new naver.maps.Point(0, 0)
              }
            });

            naver.maps.Event.addListener(marker, 'click', () => {
              window.selectMarker(item.id);
            });

            restaurantMarkers.push({ id: item.id, marker });
          });
          return;
        } catch (e) {
          console.error("Naver map fallback", e);
        }
      }

      mapInstance = L.map('map', {
        zoomControl: false,
        attributionControl: false
      }).setView([centerLat, centerLng], ${zoom});

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(mapInstance);

      restaurants.forEach(item => {
        const isActive = String(item.id) === String(selectedId);
        const isAttraction = item.mainType === 'attraction';
        const iconPrefix = isAttraction ? '🎡 ' : '';
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: \`
            <div class="custom-marker \${isAttraction ? 'attraction' : ''} \${isActive ? 'active' : ''}" id="marker-\${item.id}" onclick="event.stopPropagation(); window.selectMarker('\${item.id}');">
              <span class="custom-marker-title">\${iconPrefix}\${item.name}</span>
              <span class="marker-star">★ \${item.rating}</span>
            </div>
          \`,
          iconSize: [0, 0],
          iconAnchor: [0, 0]
        });

        const marker = L.marker([item.latitude, item.longitude], { icon: customIcon }).addTo(mapInstance);
        marker.on('click', (e) => {
          if (e.originalEvent) e.originalEvent.stopPropagation();
          window.selectMarker(item.id);
        });
        restaurantMarkers.push({ id: item.id, marker });
      });
    }

    window.handleRNMessage = function(data) {
      if (data.type === 'PAN_TO') {
        if (mapInstance) {
          if (window.naver && window.naver.maps && mapInstance instanceof naver.maps.Map) {
            mapInstance.panTo(new naver.maps.LatLng(data.lat, data.lng));
          } else if (mapInstance.panTo) {
            mapInstance.panTo([data.lat, data.lng], { animate: true, duration: 0.4 });
          }
        }
      } else if (data.type === 'ZOOM_IN') {
        if (mapInstance) {
          if (window.naver && window.naver.maps && mapInstance instanceof naver.maps.Map) {
            mapInstance.setZoom(mapInstance.getZoom() + 1, true);
          } else if (mapInstance.zoomIn) {
            mapInstance.zoomIn();
          }
        }
      } else if (data.type === 'ZOOM_OUT') {
        if (mapInstance) {
          if (window.naver && window.naver.maps && mapInstance instanceof naver.maps.Map) {
            mapInstance.setZoom(mapInstance.getZoom() - 1, true);
          } else if (mapInstance.zoomOut) {
            mapInstance.zoomOut();
          }
        }
      } else if (data.type === 'SET_SELECTED') {
        selectedId = String(data.id);
        document.querySelectorAll('.custom-marker').forEach(el => el.classList.remove('active'));
        const target = document.getElementById('marker-' + data.id);
        if (target) {
          target.classList.add('active');
        }
      } else if (data.type === 'UPDATE_USER_LOCATION') {
        userLoc = { latitude: data.lat, longitude: data.lng };
        if (window.naver && window.naver.maps && mapInstance instanceof naver.maps.Map) {
          if (!userMarker) {
            userMarker = new naver.maps.Marker({
              position: new naver.maps.LatLng(data.lat, data.lng),
              map: mapInstance,
              icon: {
                content: '<div class="user-location-marker"><div class="user-location-pulse"></div><div class="user-location-dot"></div></div>',
                anchor: new naver.maps.Point(0, 0)
              }
            });
          } else {
            userMarker.setPosition(new naver.maps.LatLng(data.lat, data.lng));
          }
        } else if (mapInstance) {
          if (!userMarker) {
            const userIcon = L.divIcon({
              className: 'custom-div-icon',
              html: '<div class="user-location-marker"><div class="user-location-pulse"></div><div class="user-location-dot"></div></div>',
              iconSize: [0, 0],
              iconAnchor: [0, 0]
            });
            userMarker = L.marker([data.lat, data.lng], { icon: userIcon }).addTo(mapInstance);
          } else {
            userMarker.setLatLng([data.lat, data.lng]);
          }
        }
      } else if (data.type === 'DRAW_ROUTE') {
        currentRoute = data.coordinates;
        drawRoute(currentRoute);
      } else if (data.type === 'CLEAR_ROUTE') {
        currentRoute = null;
        drawRoute(null);
      }
    };

    window.addEventListener('message', (event) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        window.handleRNMessage(data);
      } catch (e) {}
    });

    document.addEventListener("DOMContentLoaded", initMap);
    if (document.readyState === "complete" || document.readyState === "interactive") {
      initMap();
    }
  </script>
</body>
</html>
      `;
    }, [restaurants, clientId, zoom]);

    // 마커 선택 변경 시 HTML을 리빌드하지 않고 postMessage로만 변경
    useEffect(() => {
      if (selectedRestaurantId && !routeCoordinates) {
        const selected = restaurants.find(
          (r) => String(r.id) === String(selectedRestaurantId)
        );
        if (selected) {
          sendMessage({
            type: "PAN_TO",
            lat: selected.latitude,
            lng: selected.longitude,
          });
          sendMessage({
            type: "SET_SELECTED",
            id: selected.id,
          });
        }
      }
    }, [selectedRestaurantId]);

    useEffect(() => {
      if (userLocation) {
        sendMessage({
          type: "UPDATE_USER_LOCATION",
          lat: userLocation.latitude,
          lng: userLocation.longitude,
        });
      }
    }, [userLocation]);

    useEffect(() => {
      if (routeCoordinates && routeCoordinates.length > 0) {
        sendMessage({
          type: "DRAW_ROUTE",
          coordinates: routeCoordinates,
        });
      } else {
        sendMessage({ type: "CLEAR_ROUTE" });
      }
    }, [routeCoordinates]);

    const handleMessage = (event: any) => {
      try {
        const data = JSON.parse(event.nativeEvent?.data || event.data);
        if (data.type === "SELECT_RESTAURANT") {
          const target = restaurantsRef.current.find(
            (r) => String(r.id) === String(data.id)
          );
          if (target && onSelectRestaurantRef.current) {
            onSelectRestaurantRef.current(target);
          }
        }
      } catch (err) {
        console.warn("Message parsing error:", err);
      }
    };

    if (Platform.OS === "web") {
      return (
        <View style={styles.container}>
          <iframe
            ref={iframeRef}
            srcDoc={mapHtml}
            style={{ width: "100%", height: "100%", border: "none" }}
            title="Naver FoodMap"
          />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <WebView
          ref={webViewRef}
          originWhitelist={["*"]}
          source={{ html: mapHtml }}
          onMessage={handleMessage}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={styles.webView}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f8fafc",
  },
  webView: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
