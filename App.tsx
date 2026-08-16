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
  Clock,
  PlayCircle,
  Info,
  Plus,
  Minus,
  Palmtree,
  Camera,
  Trees,
  Moon,
  FerrisWheel,
  Ticket,
} from "lucide-react-native";
import { NaverMapView, NaverMapViewRef } from "./src/components/NaverMapView";
import { RestaurantDetailModal } from "./src/components/RestaurantDetailModal";
import { SAMPLE_PLACES } from "./src/data/restaurants";
import { Place, MainSectionType } from "./src/types/restaurant";
import { calculateDistance } from "./src/utils/location";
import { fetchDrivingRoute, DrivingRouteResult } from "./src/utils/routing";

// 해운대 씨클라우드 호텔 기본 좌표
const HOTEL_COORDINATES = {
  latitude: 35.1595,
  longitude: 129.1625,
};

const FOOD_CATEGORIES = [
  { id: "all", name: "전체 맛집", icon: Flame },
  { id: "korean", name: "한식/국밥", icon: Utensils },
  { id: "japanese", name: "일식/라멘/장어", icon: Fish },
  { id: "chinese", name: "중식/대만/만두", icon: Soup },
  { id: "cafe", name: "베이커리/빵지순례", icon: Coffee },
  { id: "western", name: "피자/양식", icon: Pizza },
];

const ATTRACTION_CATEGORIES = [
  { id: "all", name: "전체 명소", icon: FerrisWheel },
  { id: "beach", name: "해변/해변열차", icon: Palmtree },
  { id: "view", name: "전망대/랜드마크", icon: Camera },
  { id: "nature", name: "자연/해안산책로", icon: Trees },
  { id: "night", name: "야경/복합문화", icon: Moon },
  { id: "culture", name: "사찰/문화마을", icon: Ticket },
  { id: "theme", name: "테마파크/루지", icon: FerrisWheel },
];

const ALL_CATEGORIES = [
  { id: "all", name: "전체 (20곳)", icon: Sparkles },
  { id: "food_all", name: "맛집 전체", icon: Utensils },
  { id: "attraction_all", name: "가볼만한곳 전체", icon: FerrisWheel },
  { id: "beach", name: "해변/바다", icon: Palmtree },
  { id: "korean", name: "한식", icon: Utensils },
  { id: "japanese", name: "일식", icon: Fish },
  { id: "cafe", name: "베이커리", icon: Coffee },
  { id: "view", name: "전망대", icon: Camera },
  { id: "night", name: "야경", icon: Moon },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
    "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
  });

  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [mainTab, setMainTab] = useState<MainSectionType>("all"); // 'all' | 'food' | 'attraction'
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>(["f1", "f3", "a1"]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(
    SAMPLE_PLACES[0]
  );
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
            "현재 위치를 기반으로 주변 맛집/명소를 찾으려면 위치 권한을 허용해 주세요."
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
  const handleStartDrivingRoute = async (target: Place) => {
    setViewMode("map");
    setSelectedPlace(target);

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

  // 장소 데이터 (거리 계산 포함)
  const processedPlaces = useMemo(() => {
    const baseCoords = userLocation || HOTEL_COORDINATES;
    return SAMPLE_PLACES.map((item) => {
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

  // 메인 탭에 따른 서브 카테고리 목록
  const currentCategories = useMemo(() => {
    if (mainTab === "food") return FOOD_CATEGORIES;
    if (mainTab === "attraction") return ATTRACTION_CATEGORIES;
    return ALL_CATEGORIES;
  }, [mainTab]);

  // 대분류, 카테고리, 검색어, 정렬 필터링
  const filteredPlaces = useMemo(() => {
    let result = processedPlaces.filter((item) => {
      // 1. 대분류 필터 (전체 / 맛집 / 가볼만한곳)
      if (mainTab === "food" && item.mainType !== "food") return false;
      if (mainTab === "attraction" && item.mainType !== "attraction")
        return false;

      // 2. 서브 카테고리 필터
      let matchCategory = true;
      if (activeCategory !== "all") {
        if (activeCategory === "food_all") matchCategory = item.mainType === "food";
        else if (activeCategory === "attraction_all")
          matchCategory = item.mainType === "attraction";
        else matchCategory = item.category === activeCategory;
      }

      // 3. 검색어 필터
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
  }, [processedPlaces, mainTab, activeCategory, searchQuery, sortByDistance]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectPlace = (place: Place) => {
    setSelectedPlace(place);
    setDrivingRoute(null);
  };

  const handleOpenDetailModal = (place: Place) => {
    setSelectedPlace(place);
    setIsDetailModalOpen(true);
  };

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#f97316" />
        <Text className="mt-3 text-sm text-slate-500 font-medium font-sans">
          표범여행 로딩 중...
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
              표범여행
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

        {/* Main Section Tab: [전체 (20)] / [🍽️ 맛집 (12)] / [🎡 가볼만한곳 (8)] */}
        <View className="bg-white px-5 pt-2.5 pb-2">
          <View className="flex-row bg-slate-100 p-1 rounded-2xl border border-slate-200/80">
            <TouchableOpacity
              onPress={() => {
                setMainTab("all");
                setActiveCategory("all");
              }}
              activeOpacity={0.8}
              className={`flex-1 py-2 rounded-xl items-center justify-center ${
                mainTab === "all" ? "bg-white shadow-sm" : ""
              }`}
            >
              <Text
                className={`text-xs font-black font-sans ${
                  mainTab === "all" ? "text-slate-900" : "text-slate-500"
                }`}
              >
                전체 (20)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setMainTab("food");
                setActiveCategory("all");
              }}
              activeOpacity={0.8}
              className={`flex-1 py-2 rounded-xl items-center justify-center flex-row ${
                mainTab === "food" ? "bg-orange-500 shadow-sm" : ""
              }`}
            >
              <Text
                className={`text-xs font-black font-sans ${
                  mainTab === "food" ? "text-white" : "text-slate-600"
                }`}
              >
                🍽️ 맛집 (12)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setMainTab("attraction");
                setActiveCategory("all");
              }}
              activeOpacity={0.8}
              className={`flex-1 py-2 rounded-xl items-center justify-center flex-row ${
                mainTab === "attraction" ? "bg-sky-600 shadow-sm" : ""
              }`}
            >
              <Text
                className={`text-xs font-black font-sans ${
                  mainTab === "attraction" ? "text-white" : "text-slate-600"
                }`}
              >
                🎡 가볼만한곳 (8)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="bg-white px-5 pb-2">
          <View className="flex-row items-center bg-slate-100 rounded-2xl px-3.5 py-2.5 border border-slate-200/80">
            <Search size={18} color="#94a3b8" />
            <TextInput
              placeholder="맛집, 해변열차, 전망대, 메뉴, 꿀팁 검색..."
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

        {/* Dynamic Category Horizontal Filter */}
        <View className="bg-white pb-3 border-b border-slate-100">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {currentCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const isAttractionTab = mainTab === "attraction";

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
                      ? isAttractionTab
                        ? "bg-sky-600 shadow-md shadow-sky-200"
                        : "bg-orange-500 shadow-md shadow-orange-200"
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
                restaurants={filteredPlaces}
                selectedRestaurantId={selectedPlace?.id}
                userLocation={userLocation}
                routeCoordinates={drivingRoute ? drivingRoute.coordinates : null}
                onSelectRestaurant={handleSelectPlace}
                center={HOTEL_COORDINATES}
              />

              {/* Driving Route Top Dashboard */}
              {drivingRoute && selectedPlace && (
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
                        {selectedPlace.name} 방면 실시간 주행 경로
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
                    {selectedPlace ? selectedPlace.location : "부산 여행"}
                  </Text>
                  <Text className="text-[11px] text-orange-600 font-medium ml-2 font-sans">
                    {filteredPlaces.length}곳 탐색 중
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

              {/* Bottom Floating Place Preview Card */}
              {selectedPlace && (
                <View className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl p-4 border border-slate-100 shadow-2xl shadow-slate-400/50">
                  <TouchableOpacity
                    onPress={() => handleOpenDetailModal(selectedPlace)}
                    activeOpacity={0.9}
                  >
                    <View className="flex-row">
                      <Image
                        source={{ uri: selectedPlace.image }}
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
                              {selectedPlace.mainType === "attraction"
                                ? "🎡 "
                                : "🍽️ "}
                              {selectedPlace.name}
                            </Text>
                            <TouchableOpacity
                              onPress={() => toggleFavorite(selectedPlace.id)}
                              activeOpacity={0.7}
                              className="p-1"
                            >
                              <Bookmark
                                size={18}
                                color={
                                  favorites.includes(selectedPlace.id)
                                    ? "#f97316"
                                    : "#94a3b8"
                                }
                                fill={
                                  favorites.includes(selectedPlace.id)
                                    ? "#f97316"
                                    : "transparent"
                                }
                              />
                            </TouchableOpacity>
                          </View>

                          <View className="flex-row items-center mt-1">
                            <Star size={13} color="#f59e0b" fill="#f59e0b" />
                            <Text className="text-xs font-bold text-slate-800 ml-1 font-sans">
                              {selectedPlace.rating}
                            </Text>
                            <Text className="text-xs text-slate-400 ml-1 font-sans">
                              ({selectedPlace.reviews})
                            </Text>
                            <Text className="text-xs text-slate-300 mx-1.5">
                              ·
                            </Text>
                            <Text className="text-xs text-slate-600 font-medium font-sans">
                              {selectedPlace.categoryLabel}
                            </Text>
                          </View>

                          <Text
                            className="text-[11px] text-slate-500 mt-1 font-sans"
                            numberOfLines={1}
                          >
                            {selectedPlace.address}
                          </Text>
                        </View>

                        {/* Hotel Distance Badge */}
                        <View
                          className={`${
                            selectedPlace.mainType === "attraction"
                              ? "bg-sky-50 border-sky-100"
                              : "bg-orange-50 border-orange-100"
                          } px-2.5 py-1 rounded-lg border mt-1.5 flex-row items-center`}
                        >
                          <Car
                            size={11}
                            color={
                              selectedPlace.mainType === "attraction"
                                ? "#0284c7"
                                : "#ea580c"
                            }
                          />
                          <Text
                            className={`text-[10.5px] font-bold ${
                              selectedPlace.mainType === "attraction"
                                ? "text-sky-700"
                                : "text-orange-700"
                            } ml-1 font-sans`}
                          >
                            {selectedPlace.hotelDistanceInfo}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>

                  {/* Navigation Action Buttons */}
                  <View className="flex-row items-center gap-2.5 mt-3.5 pt-3 border-t border-slate-100">
                    <TouchableOpacity
                      onPress={() => handleOpenDetailModal(selectedPlace)}
                      activeOpacity={0.8}
                      className="flex-1 bg-slate-900 py-3.5 rounded-2xl flex-row items-center justify-center shadow-md shadow-slate-300"
                    >
                      <Info size={15} color="#ffffff" />
                      <Text className="text-xs font-black text-white ml-1.5 font-sans">
                        상세 정보 & 꿀팁 보기
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => handleStartDrivingRoute(selectedPlace)}
                      activeOpacity={0.8}
                      className={`w-12 h-12 ${
                        selectedPlace.mainType === "attraction"
                          ? "bg-sky-600 shadow-sky-200"
                          : "bg-orange-500 shadow-orange-200"
                      } rounded-2xl items-center justify-center shadow-md`}
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
              <View className="bg-gradient-to-r from-orange-500 to-sky-600 bg-orange-500 rounded-3xl p-5 mb-4 shadow-lg shadow-orange-200">
                <View className="flex-row items-center mb-1">
                  <Sparkles size={16} color="#fed7aa" />
                  <Text className="text-xs font-extrabold text-orange-100 ml-1 font-sans">
                    해운대 씨클라우드 호텔 기준
                  </Text>
                </View>
                <Text className="text-lg font-black text-white leading-tight font-sans">
                  부산 대표 핫플레이스{"\n"}맛집 & 가볼만한곳 BEST 20
                </Text>
              </View>

              {/* List Controls */}
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-sm font-bold text-slate-800 font-sans">
                  전체 ({filteredPlaces.length}곳)
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

              {/* Places Cards List */}
              {filteredPlaces.map((item) => {
                const isFav = favorites.includes(item.id);
                const isAttraction = item.mainType === "attraction";

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
                      <View
                        className={`absolute top-3 left-3 ${
                          isAttraction ? "bg-sky-600" : "bg-orange-500"
                        } px-2.5 py-1 rounded-full`}
                      >
                        <Text className="text-[10px] font-black text-white font-sans">
                          {isAttraction ? "🎡 가볼만한곳" : "🍽️ 맛집"}
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
                      <View
                        className={`${
                          isAttraction
                            ? "bg-sky-50/70 border-sky-200/60"
                            : "bg-amber-50/70 border-amber-200/60"
                        } rounded-xl p-2.5 border mb-3`}
                      >
                        <View className="flex-row items-center mb-1">
                          <PlayCircle
                            size={12}
                            color={isAttraction ? "#0284c7" : "#dc2626"}
                          />
                          <Text
                            className={`text-[10.5px] font-bold ${
                              isAttraction ? "text-sky-900" : "text-amber-900"
                            } ml-1 font-sans`}
                          >
                            {isAttraction ? "여행 추천 꿀팁:" : "영상 추천 평:"}
                          </Text>
                        </View>
                        <Text
                          className={`text-[11px] ${
                            isAttraction ? "text-sky-950" : "text-amber-950"
                          } font-normal leading-relaxed font-sans`}
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
                              className={`${
                                isAttraction
                                  ? "bg-sky-50 border-sky-100"
                                  : "bg-orange-50 border-orange-100"
                              } px-2 py-0.5 rounded-md border`}
                            >
                              <Text
                                className={`text-[10px] font-medium ${
                                  isAttraction
                                    ? "text-sky-700"
                                    : "text-orange-600"
                                } font-sans`}
                              >
                                #{tag}
                              </Text>
                            </View>
                          ))}
                        </View>

                        {/* Direct Driving Button in List */}
                        <TouchableOpacity
                          onPress={() => handleStartDrivingRoute(item)}
                          activeOpacity={0.8}
                          className={`w-9 h-9 ${
                            isAttraction
                              ? "bg-sky-50 border-sky-200"
                              : "bg-orange-50 border-orange-200"
                          } rounded-xl border items-center justify-center mr-1.5`}
                        >
                          <Car
                            size={16}
                            color={isAttraction ? "#0284c7" : "#ea580c"}
                          />
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

        {/* Fullscreen Place Detail Modal */}
        <RestaurantDetailModal
          visible={isDetailModalOpen}
          restaurant={selectedPlace}
          isFavorite={
            selectedPlace ? favorites.includes(selectedPlace.id) : false
          }
          onToggleFavorite={toggleFavorite}
          onClose={() => setIsDetailModalOpen(false)}
          onStartRoute={handleStartDrivingRoute}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
