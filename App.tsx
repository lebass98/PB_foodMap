import "./global.css";
import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as Location from "expo-location";
import {
  MapPin,
  Search,
  Star,
  Compass,
  Bookmark,
  Sparkles,
  Flame,
  Coffee,
  Utensils,
  Fish,
  Pizza,
  Soup,
  Map as MapIcon,
  List as ListIcon,
  Navigation,
  Crosshair,
  X,
  ArrowUpDown,
  Car,
  ExternalLink,
  Clock,
  PlayCircle,
  ChevronRight,
  Info,
  Plus,
  Minus,
} from "lucide-react-native";
import { NaverMapView, NaverMapViewRef } from "./src/components/NaverMapView";
import { RestaurantDetailModal } from "./src/components/RestaurantDetailModal";
import { SAMPLE_RESTAURANTS } from "./src/data/restaurants";
import { Restaurant } from "./src/types/restaurant";
import { calculateDistance } from "./src/utils/location";
import { fetchDrivingRoute, DrivingRouteResult } from "./src/utils/routing";
import {
  openNaverMapNavigation,
  openKakaoMapNavigation,
} from "./src/utils/navigationApp";

// 해운대 씨클라우드 호텔 기본 좌표
const HOTEL_COORDINATES = {
  latitude: 35.1595,
  longitude: 129.1625,
};

const CATEGORIES = [
  { id: "all", name: "전체 (12곳)", icon: Flame },
  { id: "korean", name: "한식/국밥", icon: Utensils },
  { id: "japanese", name: "일식/라멘/장어", icon: Fish },
  { id: "cafe", name: "베이커리/빵지순례", icon: Coffee },
  { id: "chinese", name: "중식/대만/만두", icon: Soup },
  { id: "western", name: "피자/양식", icon: Pizza },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
    "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
  });

  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>(["1", "3", "9"]);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(SAMPLE_RESTAURANTS[0]);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

  const mapViewRef = useRef<NaverMapViewRef>(null);

  // GPS 위치 관련 상태
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(HOTEL_COORDINATES);
  const [locationName, setLocationName] =
    useState<string>("해운대 씨클라우드 호텔");
  const [isLoadingLocation, setIsLoadingLocation] = useState<boolean>(false);
  const [sortByDistance, setSortByDistance] = useState<boolean>(false);

  // 차량 경로(Driving Route) 관련 상태
  const [drivingRoute, setDrivingRoute] = useState<DrivingRouteResult | null>(
    null
  );
  const [isLoadingRoute, setIsLoadingRoute] = useState<boolean>(false);

  // 현재 GPS 위치 가져오기
  const fetchCurrentLocation = async (isManual: boolean = false) => {
    try {
      setIsLoadingLocation(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        if (isManual) {
          Alert.alert(
            "위치 권한 필요",
            "현재 위치를 기반으로 주변 맛집을 찾으려면 위치 권한을 허용해 주세요. (기본값: 해운대 씨클라우드 호텔)"
          );
        }
        setIsLoadingLocation(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      const currentCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setUserLocation(currentCoords);

      try {
        const reverseGeocoded = await Location.reverseGeocodeAsync(
          currentCoords
        );
        if (reverseGeocoded && reverseGeocoded.length > 0) {
          const item = reverseGeocoded[0];
          const region = item.region || item.city || "";
          const district = item.district || item.subregion || item.street || "";
          setLocationName(`${region} ${district}`.trim() || "내 현재 위치");
        } else {
          setLocationName("내 현재 위치");
        }
      } catch (geoError) {
        setLocationName("내 현재 위치");
      }

      if (isManual) {
        setDrivingRoute(null);
      }
    } catch (error) {
      console.warn("GPS Location error:", error);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  useEffect(() => {
    fetchCurrentLocation(false);
  }, []);

  // 차량 길찾기 시작
  const handleStartDrivingRoute = async (target: Restaurant) => {
    setViewMode("map");
    setSelectedRestaurant(target);

    const startLat = userLocation
      ? userLocation.latitude
      : HOTEL_COORDINATES.latitude;
    const startLng = userLocation
      ? userLocation.longitude
      : HOTEL_COORDINATES.longitude;

    try {
      setIsLoadingRoute(true);
      const routeResult = await fetchDrivingRoute(
        startLat,
        startLng,
        target.latitude,
        target.longitude
      );
      setDrivingRoute(routeResult);
    } catch (e) {
      Alert.alert("경로 탐색 오류", "차량 경로를 불러오지 못했습니다.");
    } finally {
      setIsLoadingRoute(false);
    }
  };

  const handleClearRoute = () => {
    setDrivingRoute(null);
  };

  // 맛집 데이터 (거리 계산 포함)
  const processedRestaurants = useMemo(() => {
    const baseCoords = userLocation || HOTEL_COORDINATES;
    return SAMPLE_RESTAURANTS.map((item) => {
      const calc = calculateDistance(
        baseCoords.latitude,
        baseCoords.longitude,
        item.latitude,
        item.longitude
      );
      return {
        ...item,
        distance: calc.text,
        distanceMeters: calc.meters,
      };
    });
  }, [userLocation]);

  // 카테고리, 검색어, 정렬 필터링
  const filteredRestaurants = useMemo(() => {
    let result = processedRestaurants.filter((item) => {
      const matchCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        item.reviewSummary.some((r) =>
          r.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCategory && matchSearch;
    });

    if (sortByDistance) {
      result = [...result].sort(
        (a, b) => (a.distanceMeters || 0) - (b.distanceMeters || 0)
      );
    }

    return result;
  }, [processedRestaurants, activeCategory, searchQuery, sortByDistance]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setDrivingRoute(null);
  };

  const handleOpenDetailModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsDetailModalOpen(true);
  };

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#f97316" />
        <Text className="mt-3 text-sm text-slate-500 font-medium font-sans">
          부산 맛집 지도 로딩 중...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white font-sans" edges={["top"]}>
        <StatusBar style="dark" />

        {/* Top Header */}
        <View className="bg-white px-5 pt-3 pb-3 flex-row items-center justify-between border-b border-slate-100 relative">
          {/* Left Balance Spacer */}
          <View className="w-20 flex-row items-center">
            <View className="w-8 h-8 rounded-full bg-orange-50 items-center justify-center border border-orange-200">
              <Text className="text-base">🐆</Text>
            </View>
          </View>

          {/* Center App Title */}
          <View className="flex-row items-center justify-center">
            <Text className="text-xl font-black text-slate-900 tracking-tight font-sans">
              표범맛집
            </Text>
          </View>

          {/* Right View Mode Toggle (Map <-> List: Icon only) */}
          <View className="w-20 flex-row justify-end">
            <View className="flex-row bg-slate-100 p-1 rounded-2xl border border-slate-200/80 items-center">
              <TouchableOpacity
                onPress={() => setViewMode("map")}
                activeOpacity={0.8}
                className={`w-8 h-8 items-center justify-center rounded-xl ${
                  viewMode === "map"
                    ? "bg-orange-500 shadow-sm shadow-orange-300"
                    : ""
                }`}
              >
                <MapIcon
                  size={16}
                  color={viewMode === "map" ? "#ffffff" : "#64748b"}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setViewMode("list")}
                activeOpacity={0.8}
                className={`w-8 h-8 items-center justify-center rounded-xl ${
                  viewMode === "list"
                    ? "bg-orange-500 shadow-sm shadow-orange-300"
                    : ""
                }`}
              >
                <ListIcon
                  size={16}
                  color={viewMode === "list" ? "#ffffff" : "#64748b"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View className="bg-white px-5 py-2.5">
          <View className="flex-row items-center bg-slate-100 rounded-2xl px-3.5 py-2.5 border border-slate-200/80">
            <Search size={18} color="#94a3b8" />
            <TextInput
              placeholder="상호명, 메뉴(우육탕면, 불고기, 피자), 타임스탬프 검색..."
              placeholderTextColor="#94a3b8"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 ml-2 text-sm text-slate-900 font-sans"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <X size={16} color="#94a3b8" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Category Horizontal Filter */}
        <View className="bg-white pb-3 border-b border-slate-100">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => {
                    setActiveCategory(cat.id);
                    setDrivingRoute(null);
                  }}
                  activeOpacity={0.7}
                  className={`flex-row items-center px-3.5 py-2 rounded-xl mr-2 ${
                    isActive
                      ? "bg-orange-500 shadow-md shadow-orange-200"
                      : "bg-slate-50 border border-slate-200/80"
                  }`}
                >
                  <Icon size={14} color={isActive ? "#ffffff" : "#64748b"} />
                  <Text
                    className={`ml-1.5 text-xs font-semibold font-sans ${
                      isActive ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Main Content Area */}
        <View className="flex-1 bg-slate-100 relative">
          {viewMode === "map" ? (
            /* MAP VIEW */
            <View className="flex-1 relative">
              <NaverMapView
                ref={mapViewRef}
                restaurants={filteredRestaurants}
                selectedRestaurantId={selectedRestaurant?.id}
                userLocation={userLocation}
                routeCoordinates={drivingRoute ? drivingRoute.coordinates : null}
                onSelectRestaurant={handleSelectRestaurant}
                center={HOTEL_COORDINATES}
              />

              {/* Driving Route Top Dashboard */}
              {drivingRoute && selectedRestaurant && (
                <View className="absolute top-3 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 border border-orange-200 shadow-xl shadow-orange-100 flex-row items-center justify-between">
                  <View className="flex-row items-center flex-1 mr-2">
                    <View className="w-10 h-10 rounded-xl bg-orange-500 items-center justify-center mr-3 shadow-md shadow-orange-200">
                      <Car size={20} color="#ffffff" />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row items-center">
                        <Text className="text-sm font-black text-orange-600 font-sans">
                          차량 약 {drivingRoute.durationText}
                        </Text>
                        <Text className="text-xs text-slate-500 ml-2 font-sans">
                          ({drivingRoute.distanceText})
                        </Text>
                      </View>
                      <Text
                        className="text-xs text-slate-700 font-medium mt-0.5 font-sans"
                        numberOfLines={1}
                      >
                        {selectedRestaurant.name} 방면 실시간 주행 경로
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={handleClearRoute}
                    activeOpacity={0.7}
                    className="w-7 h-7 rounded-full bg-slate-100 items-center justify-center border border-slate-200"
                  >
                    <X size={14} color="#64748b" />
                  </TouchableOpacity>
                </View>
              )}

              {/* Map Floating Location Badge */}
              {!drivingRoute && (
                <View className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md shadow-slate-200 flex-row items-center">
                  <MapPin size={14} color="#f97316" />
                  <Text className="text-xs font-bold text-slate-800 ml-1.5 font-sans">
                    {selectedRestaurant
                      ? selectedRestaurant.location
                      : "부산 맛집"}
                  </Text>
                  <Text className="text-[11px] text-orange-600 font-medium ml-2 font-sans">
                    {filteredRestaurants.length}곳 탐색 중
                  </Text>
                </View>
              )}

              {/* Right Floating Controls: Location + Vertical Zoom (+ / -) */}
              {!drivingRoute && (
                <View className="absolute top-4 right-4 flex-col items-center gap-2">
                  {/* GPS My Location Floating Button */}
                  <TouchableOpacity
                    onPress={() => fetchCurrentLocation(true)}
                    activeOpacity={0.85}
                    className="w-11 h-11 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 items-center justify-center shadow-lg shadow-slate-300/60"
                  >
                    {isLoadingLocation ? (
                      <ActivityIndicator size="small" color="#3b82f6" />
                    ) : (
                      <Crosshair size={20} color="#3b82f6" />
                    )}
                  </TouchableOpacity>

                  {/* Vertical Zoom Controls (+ / -) */}
                  <View className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg shadow-slate-300/60 overflow-hidden">
                    <TouchableOpacity
                      onPress={() => mapViewRef.current?.zoomIn()}
                      activeOpacity={0.8}
                      className="w-11 h-11 items-center justify-center border-b border-slate-100 active:bg-orange-50"
                    >
                      <Plus size={20} color="#0f172a" />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => mapViewRef.current?.zoomOut()}
                      activeOpacity={0.8}
                      className="w-11 h-11 items-center justify-center active:bg-orange-50"
                    >
                      <Minus size={20} color="#0f172a" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* Bottom Floating Restaurant Preview Card */}
              {selectedRestaurant && (
                <View className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl p-4 border border-slate-100 shadow-2xl shadow-slate-400/50">
                  <TouchableOpacity
                    onPress={() => handleOpenDetailModal(selectedRestaurant)}
                    activeOpacity={0.9}
                  >
                    <View className="flex-row">
                      <Image
                        source={{ uri: selectedRestaurant.image }}
                        className="w-24 h-24 rounded-2xl bg-slate-100"
                        resizeMode="cover"
                      />
                      <View className="flex-1 ml-3.5 justify-between">
                        <View>
                          <View className="flex-row items-center justify-between">
                            <Text
                              className="text-base font-black text-slate-900 flex-1 mr-2 font-sans"
                              numberOfLines={1}
                            >
                              {selectedRestaurant.name}
                            </Text>
                            <TouchableOpacity
                              onPress={() =>
                                toggleFavorite(selectedRestaurant.id)
                              }
                              activeOpacity={0.7}
                              className="p-1"
                            >
                              <Bookmark
                                size={18}
                                color={
                                  favorites.includes(selectedRestaurant.id)
                                    ? "#f97316"
                                    : "#94a3b8"
                                }
                                fill={
                                  favorites.includes(selectedRestaurant.id)
                                    ? "#f97316"
                                    : "transparent"
                                }
                              />
                            </TouchableOpacity>
                          </View>

                          <View className="flex-row items-center mt-1">
                            <Star size={13} color="#f59e0b" fill="#f59e0b" />
                            <Text className="text-xs font-bold text-slate-800 ml-1 font-sans">
                              {selectedRestaurant.rating}
                            </Text>
                            <Text className="text-xs text-slate-400 ml-1 font-sans">
                              ({selectedRestaurant.reviews})
                            </Text>
                            <Text className="text-xs text-slate-300 mx-1.5">
                              ·
                            </Text>
                            <Text className="text-xs text-slate-600 font-medium font-sans">
                              {selectedRestaurant.categoryLabel}
                            </Text>
                          </View>

                          <Text
                            className="text-[11px] text-slate-500 mt-1 font-sans"
                            numberOfLines={1}
                          >
                            {selectedRestaurant.address}
                          </Text>
                        </View>

                        {/* Hotel Distance Badge */}
                        <View className="bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100 mt-1.5 flex-row items-center">
                          <Car size={11} color="#ea580c" />
                          <Text className="text-[10.5px] font-bold text-orange-700 ml-1 font-sans">
                            {selectedRestaurant.hotelDistanceInfo}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>

                  {/* Navigation Action Buttons */}
                  <View className="flex-row items-center gap-2.5 mt-3.5 pt-3 border-t border-slate-100">
                    <TouchableOpacity
                      onPress={() => handleOpenDetailModal(selectedRestaurant)}
                      activeOpacity={0.8}
                      className="flex-1 bg-slate-900 py-3.5 rounded-2xl flex-row items-center justify-center shadow-md shadow-slate-300"
                    >
                      <Info size={15} color="#ffffff" />
                      <Text className="text-xs font-black text-white ml-1.5 font-sans">
                        가게 상세 정보 보기
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() =>
                        handleStartDrivingRoute(selectedRestaurant)
                      }
                      activeOpacity={0.8}
                      className="w-12 h-12 bg-orange-500 rounded-2xl items-center justify-center shadow-md shadow-orange-200"
                    >
                      <Car size={20} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          ) : (
            /* LIST VIEW */
            <ScrollView
              className="flex-1 px-5 pt-4 bg-slate-50"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
            >
              {/* Header Banner */}
              <View className="bg-gradient-to-r from-orange-500 to-amber-500 bg-orange-500 rounded-3xl p-5 mb-4 shadow-lg shadow-orange-200">
                <View className="flex-row items-center mb-1">
                  <Sparkles size={16} color="#fed7aa" />
                  <Text className="text-xs font-extrabold text-orange-100 ml-1 font-sans">
                    해운대 씨클라우드 호텔 기준
                  </Text>
                </View>
                <Text className="text-lg font-black text-white leading-tight font-sans">
                  부산 대표 핫플레이스{"\n"}줄 서는 맛집 BEST 12
                </Text>
              </View>

              {/* List Controls */}
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-sm font-bold text-slate-800 font-sans">
                  맛집 ({filteredRestaurants.length}곳)
                </Text>

                <TouchableOpacity
                  onPress={() => setSortByDistance((prev) => !prev)}
                  activeOpacity={0.7}
                  className={`flex-row items-center px-2.5 py-1.5 rounded-lg border ${
                    sortByDistance
                      ? "bg-orange-50 border-orange-200"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <ArrowUpDown
                    size={12}
                    color={sortByDistance ? "#ea580c" : "#64748b"}
                  />
                  <Text
                    className={`text-xs ml-1 font-semibold font-sans ${
                      sortByDistance ? "text-orange-600" : "text-slate-600"
                    }`}
                  >
                    {sortByDistance ? "거리순 정렬됨" : "기본 순서"}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* 12 Restaurant Cards */}
              {filteredRestaurants.map((item) => {
                const isFav = favorites.includes(item.id);
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleOpenDetailModal(item)}
                    activeOpacity={0.85}
                    className="bg-white rounded-3xl overflow-hidden mb-4 border border-slate-100 shadow-sm shadow-slate-200"
                  >
                    <View className="relative">
                      <Image
                        source={{ uri: item.image }}
                        className="w-full h-44 bg-slate-100"
                        resizeMode="cover"
                      />
                      <TouchableOpacity
                        onPress={() => toggleFavorite(item.id)}
                        activeOpacity={0.8}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md items-center justify-center"
                      >
                        <Bookmark
                          size={16}
                          color={isFav ? "#f97316" : "#ffffff"}
                          fill={isFav ? "#f97316" : "transparent"}
                        />
                      </TouchableOpacity>
                      <View className="absolute bottom-3 left-3 bg-black/60 px-2.5 py-1 rounded-md flex-row items-center">
                        <Car size={11} color="#ffffff" />
                        <Text className="text-[11px] font-bold text-white ml-1 font-sans">
                          {item.hotelDistanceInfo}
                        </Text>
                      </View>
                    </View>

                    <View className="p-4">
                      <View className="flex-row items-center justify-between mb-1">
                        <Text className="text-base font-black text-slate-900 font-sans">
                          {item.name}
                        </Text>
                        <View className="flex-row items-center">
                          <Star size={13} color="#f59e0b" fill="#f59e0b" />
                          <Text className="text-xs font-bold text-slate-800 ml-1 font-sans">
                            {item.rating}
                          </Text>
                          <Text className="text-xs text-slate-400 ml-0.5 font-sans">
                            ({item.reviews})
                          </Text>
                        </View>
                      </View>

                      <Text className="text-xs text-slate-500 mb-1.5 font-sans">
                        {item.address} · {item.categoryLabel}
                      </Text>

                      <Text
                        className="text-xs text-slate-700 font-medium mb-2.5 font-sans"
                        numberOfLines={2}
                      >
                        {item.highlight}
                      </Text>

                      {/* Video Review Summary Box */}
                      <View className="bg-amber-50/70 rounded-xl p-2.5 border border-amber-200/60 mb-3">
                        <View className="flex-row items-center mb-1">
                          <PlayCircle size={12} color="#dc2626" />
                          <Text className="text-[10.5px] font-bold text-amber-900 ml-1 font-sans">
                            영상 추천 평:
                          </Text>
                        </View>
                        <Text
                          className="text-[11px] text-amber-950 font-normal leading-relaxed font-sans"
                          numberOfLines={2}
                        >
                          {item.reviewSummary[0]}
                        </Text>
                      </View>

                      {/* Operating Hours */}
                      <View className="flex-row items-center mb-3">
                        <Clock size={12} color="#94a3b8" />
                        <Text
                          className="text-[11px] text-slate-500 ml-1.5 flex-1 font-sans"
                          numberOfLines={1}
                        >
                          {item.operatingHours}
                        </Text>
                      </View>

                      <View className="flex-row items-center justify-between pt-2 border-t border-slate-100">
                        <View className="flex-row flex-wrap gap-1.5 flex-1 mr-2">
                          {item.tags.slice(0, 2).map((tag, idx) => (
                            <View
                              key={idx}
                              className="bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100"
                            >
                              <Text className="text-[10px] font-medium text-orange-600 font-sans">
                                #{tag}
                              </Text>
                            </View>
                          ))}
                        </View>

                        {/* Direct Driving Button in List */}
                        <TouchableOpacity
                          onPress={() => handleStartDrivingRoute(item)}
                          activeOpacity={0.8}
                          className="w-9 h-9 bg-orange-50 rounded-xl border border-orange-200 items-center justify-center mr-1.5"
                        >
                          <Car size={16} color="#ea580c" />
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => handleOpenDetailModal(item)}
                          activeOpacity={0.8}
                          className="bg-slate-900 px-3.5 py-2 rounded-xl flex-row items-center"
                        >
                          <Text className="text-xs font-bold text-white font-sans">
                            상세보기 &gt;
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
        </View>

        {/* Fullscreen Restaurant Detail Modal */}
        <RestaurantDetailModal
          visible={isDetailModalOpen}
          restaurant={selectedRestaurant}
          isFavorite={
            selectedRestaurant
              ? favorites.includes(selectedRestaurant.id)
              : false
          }
          onToggleFavorite={toggleFavorite}
          onClose={() => setIsDetailModalOpen(false)}
          onStartRoute={handleStartDrivingRoute}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
