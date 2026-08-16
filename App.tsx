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
  { id: "all", name: "전체 맛집 (15)", icon: Flame },
  { id: "korean", name: "한식/국밥/경유 (6)", icon: Utensils },
  { id: "cafe", name: "베이커리/디저트 (3)", icon: Coffee },
  { id: "japanese", name: "일식/라멘/장어 (2)", icon: Fish },
  { id: "chinese", name: "중식/대만/만두 (2)", icon: Soup },
  { id: "western", name: "피자/양식 (2)", icon: Pizza },
];

const ATTRACTION_CATEGORIES = [
  { id: "all", name: "전체 명소 (32)", icon: FerrisWheel },
  { id: "beach", name: "해변/요트/해변열차 (6)", icon: Palmtree },
  { id: "view", name: "전망대/케이블카/야경 (6)", icon: Camera },
  { id: "nature", name: "자연/해안산책로/숲 (6)", icon: Trees },
  { id: "culture", name: "사찰/문화마을/시장 (8)", icon: Ticket },
  { id: "cafe", name: "기장 오션뷰카페 (3)", icon: Coffee },
  { id: "theme", name: "과학관/체험 (3)", icon: FerrisWheel },
];

const ALL_CATEGORIES = [
  { id: "all", name: "전체 (47곳)", icon: Sparkles },
  { id: "food_all", name: "맛집 (15곳)", icon: Utensils },
  { id: "attraction_all", name: "가볼만한곳 (32곳)", icon: FerrisWheel },
  { id: "beach", name: "해변/요트/해변열차", icon: Palmtree },
  { id: "view", name: "전망대/케이블카/야경", icon: Camera },
  { id: "nature", name: "자연/해안산책로/숲", icon: Trees },
  { id: "culture", name: "역사/문화/시장/사찰", icon: Ticket },
  { id: "korean", name: "한식/국밥/경유맛집", icon: Utensils },
  { id: "cafe", name: "베이커리/오션뷰카페", icon: Coffee },
  { id: "theme", name: "과학관/체험", icon: FerrisWheel },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
    "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
  });

  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [mainTab, setMainTab] = useState<MainSectionType>("all");
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

      if (isManual && mapViewRef.current) {
        mapViewRef.current.panTo(
          currentCoords.latitude,
          currentCoords.longitude
        );
      }

      try {
        const reverseGeocode = await Location.reverseGeocodeAsync(currentCoords);
        if (reverseGeocode && reverseGeocode.length > 0) {
          const first = reverseGeocode[0];
          const name =
            first.street || first.district || first.city || "현재 위치";
          setLocationName(name);
        }
      } catch (geoError) {
        setLocationName("현재 위치");
      }
    } catch (error) {
      if (isManual) {
        Alert.alert("위치 오류", "현재 위치를 가져오는 중 오류가 발생했습니다.");
      }
    } finally {
      setIsLoadingLocation(false);
    }
  };

  useEffect(() => {
    fetchCurrentLocation(false);
  }, []);

  // 북마크 토글
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 장소 선택 핸들러
  const handleSelectPlace = (place: Place) => {
    setSelectedPlace(place);
    setDrivingRoute(null);
  };

  // 상세 모달 열기 핸들러
  const handleOpenDetailModal = (place: Place) => {
    setSelectedPlace(place);
    setIsDetailModalOpen(true);
  };

  // 자체 도로 경로선 및 소요시간 요청 핸들러
  const handleStartDrivingRoute = async (destination: Place) => {
    const origin = userLocation || HOTEL_COORDINATES;

    try {
      setIsLoadingRoute(true);
      const route = await fetchDrivingRoute(
        origin.latitude,
        origin.longitude,
        destination.latitude,
        destination.longitude
      );

      if (route) {
        setDrivingRoute(route);
        setSelectedPlace(destination);
        setViewMode("map");
      } else {
        Alert.alert("경로 안내", "경로 정보를 불러오지 못했습니다.");
      }
    } catch (err) {
      Alert.alert("경로 오류", "경로를 계산하는 중 오류가 발생했습니다.");
    } finally {
      setIsLoadingRoute(false);
    }
  };

  // 경로 지우기
  const handleClearRoute = () => {
    setDrivingRoute(null);
  };

  // 현재 탭에 맞는 서브 카테고리 목록
  const currentCategories = useMemo(() => {
    if (mainTab === "food") return FOOD_CATEGORIES;
    if (mainTab === "attraction") return ATTRACTION_CATEGORIES;
    return ALL_CATEGORIES;
  }, [mainTab]);

  // 필터링 및 검색된 장소 목록
  const filteredPlaces = useMemo(() => {
    return SAMPLE_PLACES.map((item) => {
      if (userLocation) {
        const dist = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          item.latitude,
          item.longitude
        );
        return { ...item, userDistanceNum: dist.meters };
      }
      return { ...item, userDistanceNum: 999999 };
    })
      .filter((item) => {
        // 1. 메인 섹션 탭 필터
        if (mainTab === "food" && item.mainType !== "food") return false;
        if (mainTab === "attraction" && item.mainType !== "attraction")
          return false;

        // 2. 카테고리 필터
        if (mainTab === "all") {
          if (activeCategory === "food_all")
            return item.mainType === "food";
          if (activeCategory === "attraction_all")
            return item.mainType === "attraction";
          if (activeCategory !== "all" && item.category !== activeCategory)
            return false;
        } else {
          if (activeCategory !== "all" && item.category !== activeCategory) {
            return false;
          }
        }

        // 3. 검색어 필터
        if (searchQuery.trim() !== "") {
          const query = searchQuery.toLowerCase().trim();
          const matchName = item.name.toLowerCase().includes(query);
          const matchAddress = item.address.toLowerCase().includes(query);
          const matchTags = item.tags.some((tag) =>
            tag.toLowerCase().includes(query)
          );
          const matchHighlight = item.highlight.toLowerCase().includes(query);
          const matchMenu = item.menuItems.some((menu) =>
            menu.name.toLowerCase().includes(query)
          );
          const matchReview = item.reviewSummary.some((rev) =>
            rev.toLowerCase().includes(query)
          );
          return (
            matchName ||
            matchAddress ||
            matchTags ||
            matchHighlight ||
            matchMenu ||
            matchReview
          );
        }

        return true;
      })
      .sort((a, b) => {
        if (sortByDistance) {
          return (a.userDistanceNum || 0) - (b.userDistanceNum || 0);
        }
        return 0;
      });
  }, [mainTab, activeCategory, searchQuery, userLocation, sortByDistance]);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#1856FF" />
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

        {/* Top Header with Glassmorphism */}
        <View className="bg-white/90 backdrop-blur-xl px-5 pt-3 pb-3 flex-row items-center justify-between border-b border-slate-100 relative shadow-sm">
          {/* Left Balance Spacer with Leopard Badge */}
          <View className="w-24 flex-row items-center">
            <View className="w-8 h-8 rounded-full bg-blue-50 items-center justify-center border border-blue-200/80 shadow-xs">
              <Text className="text-base">🐆</Text>
            </View>
          </View>

          {/* Center App Title */}
          <View className="flex-row items-center justify-center">
            <Text className="text-xl font-black text-[#141414] tracking-tight font-sans">
              표범여행
            </Text>
          </View>

          {/* Right View Mode Toggle (Map <-> List: Icon only) */}
          <View className="w-24 flex-row justify-end">
            <View className="flex-row bg-slate-100/90 p-1 rounded-2xl border border-slate-200/80 items-center shadow-xs">
              <TouchableOpacity
                onPress={() => setViewMode("map")}
                activeOpacity={0.8}
                className={`w-8 h-8 items-center justify-center rounded-xl transition-all ${
                  viewMode === "map"
                    ? "bg-[#1856FF] shadow-sm shadow-blue-500/30"
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
                className={`w-8 h-8 items-center justify-center rounded-xl transition-all ${
                  viewMode === "list"
                    ? "bg-[#1856FF] shadow-sm shadow-blue-500/30"
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

        {/* Main Section Tab: [전체 (47)] / [🍽️ 맛집 (15)] / [🎡 가볼만한곳 (32)] */}
        <View className="bg-white/95 px-5 pt-2.5 pb-2">
          <View className="flex-row bg-slate-100/90 p-1 rounded-2xl border border-slate-200/80 shadow-xs">
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
                  mainTab === "all" ? "text-[#141414]" : "text-slate-500"
                }`}
              >
                전체 (47)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setMainTab("food");
                setActiveCategory("all");
              }}
              activeOpacity={0.8}
              className={`flex-1 py-2 rounded-xl items-center justify-center flex-row ${
                mainTab === "food" ? "bg-[#E89558] shadow-sm shadow-orange-500/30" : ""
              }`}
            >
              <Text
                className={`text-xs font-black font-sans ${
                  mainTab === "food" ? "text-white" : "text-slate-600"
                }`}
              >
                🍽️ 맛집 (15)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setMainTab("attraction");
                setActiveCategory("all");
              }}
              activeOpacity={0.8}
              className={`flex-1 py-2 rounded-xl items-center justify-center flex-row ${
                mainTab === "attraction" ? "bg-[#1856FF] shadow-sm shadow-blue-500/30" : ""
              }`}
            >
              <Text
                className={`text-xs font-black font-sans ${
                  mainTab === "attraction" ? "text-white" : "text-slate-600"
                }`}
              >
                🎡 가볼만한곳 (32)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar with Glass Input */}
        <View className="bg-white/95 px-5 pb-2">
          <View className="flex-row items-center bg-slate-100/90 rounded-2xl px-3.5 py-2.5 border border-slate-200/80 shadow-xs">
            <Search size={18} color="#94a3b8" />
            <TextInput
              placeholder="맛집, 해변열차, 전망대, 메뉴, 꿀팁 검색..."
              placeholderTextColor="#94a3b8"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 ml-2 text-sm text-[#141414] font-sans"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <X size={16} color="#94a3b8" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Dynamic Category Horizontal Filter (Glass Pills) */}
        <View className="bg-white pb-3 border-b border-slate-100">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {currentCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const isFoodActive = mainTab === "food";

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
                      ? isFoodActive
                        ? "bg-[#E89558] shadow-sm shadow-orange-500/20"
                        : "bg-[#1856FF] shadow-sm shadow-blue-500/20"
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

              {/* In-App Driving Route Top Dashboard (Frosted Glass Panel with Luminous Border) */}
              {drivingRoute && selectedPlace && (
                <View className="absolute top-3 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-4 border border-blue-500/30 shadow-glassHover flex-row items-center justify-between z-50">
                  <View className="flex-row items-center flex-1 mr-2">
                    <View
                      className={`w-12 h-12 rounded-2xl ${
                        selectedPlace.mainType === "attraction"
                          ? "bg-[#1856FF] shadow-blue-500/30"
                          : "bg-[#E89558] shadow-orange-500/30"
                      } items-center justify-center mr-3 shadow-md`}
                    >
                      <Car size={24} color="#ffffff" />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row items-center">
                        <Text
                          className={`text-base font-black ${
                            selectedPlace.mainType === "attraction"
                              ? "text-[#1856FF]"
                              : "text-[#CE7636]"
                          } font-sans`}
                        >
                          차량 약 {drivingRoute.durationText} 소요
                        </Text>
                        <Text className="text-xs font-bold text-slate-500 ml-2 font-sans">
                          ({drivingRoute.distanceText})
                        </Text>
                      </View>
                      <Text
                        className="text-xs text-[#141414] font-semibold mt-0.5 font-sans"
                        numberOfLines={1}
                      >
                        씨클라우드 호텔 ➔ {selectedPlace.name} 가는 길
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={handleClearRoute}
                    activeOpacity={0.7}
                    className="w-8 h-8 rounded-full bg-slate-100 items-center justify-center border border-slate-200"
                  >
                    <X size={16} color="#64748b" />
                  </TouchableOpacity>
                </View>
              )}

              {/* Map Floating Location Badge (Frosted Pill) */}
              {!drivingRoute && (
                <View className="absolute top-4 left-4 bg-white/92 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-glass flex-row items-center">
                  <MapPin size={14} color="#1856FF" />
                  <Text className="text-xs font-bold text-[#141414] ml-1.5 font-sans">
                    {selectedPlace ? selectedPlace.location : "부산 여행"}
                  </Text>
                  <Text className="text-[11px] text-[#1856FF] font-medium ml-2 font-sans">
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
                    className="w-11 h-11 bg-white/92 backdrop-blur-md rounded-2xl border border-white/80 items-center justify-center shadow-glass active:scale-95"
                  >
                    {isLoadingLocation ? (
                      <ActivityIndicator size="small" color="#1856FF" />
                    ) : (
                      <Crosshair size={20} color="#1856FF" />
                    )}
                  </TouchableOpacity>

                  {/* Vertical Zoom Controls (+ / -) */}
                  <View className="bg-white/92 backdrop-blur-md rounded-2xl border border-white/80 shadow-glass overflow-hidden">
                    <TouchableOpacity
                      onPress={() => mapViewRef.current?.zoomIn()}
                      activeOpacity={0.8}
                      className="w-11 h-11 items-center justify-center border-b border-slate-100 active:bg-blue-50"
                    >
                      <Plus size={20} color="#141414" />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => mapViewRef.current?.zoomOut()}
                      activeOpacity={0.8}
                      className="w-11 h-11 items-center justify-center active:bg-blue-50"
                    >
                      <Minus size={20} color="#141414" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* Bottom Floating Place Preview Card (Frosted Glass Card) */}
              {selectedPlace && (
                <View className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-4 border border-white/80 shadow-modal">
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
                              className="text-base font-black text-[#141414] flex-1 mr-2 font-sans"
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
                                    ? "#1856FF"
                                    : "#94a3b8"
                                }
                                fill={
                                  favorites.includes(selectedPlace.id)
                                    ? "#1856FF"
                                    : "transparent"
                                }
                              />
                            </TouchableOpacity>
                          </View>

                          <View className="flex-row items-center mt-1">
                            <Star size={13} color="#f59e0b" fill="#f59e0b" />
                            <Text className="text-xs font-bold text-[#141414] ml-1 font-sans">
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
                              ? "bg-blue-50/80 border-blue-100"
                              : "bg-orange-50/80 border-orange-100"
                          } px-2.5 py-1 rounded-lg border mt-1.5 flex-row items-center`}
                        >
                          <Car
                            size={11}
                            color={
                              selectedPlace.mainType === "attraction"
                                ? "#1856FF"
                                : "#CE7636"
                            }
                          />
                          <Text
                            className={`text-[10.5px] font-bold ${
                              selectedPlace.mainType === "attraction"
                                ? "text-[#1856FF]"
                                : "text-[#CE7636]"
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
                      className="flex-1 bg-[#141414] py-3.5 rounded-2xl flex-row items-center justify-center shadow-sm active:scale-98"
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
                          ? "bg-[#1856FF] shadow-blue-500/25"
                          : "bg-[#E89558] shadow-orange-500/25"
                      } rounded-2xl items-center justify-center shadow-md active:scale-95`}
                    >
                      <Car size={20} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          ) : (
            /* LIST VIEW with Glassmorphic Cards */
            <ScrollView
              className="flex-1 px-5 pt-4 bg-slate-50"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 40 }}
            >
              {/* Header Banner with Premium Glass Gradient */}
              <View className="bg-gradient-to-r from-[#1856FF] to-[#3A344E] bg-[#1856FF] rounded-3xl p-5 mb-4 shadow-lg shadow-blue-500/20 border border-white/20">
                <View className="flex-row items-center mb-1">
                  <Sparkles size={16} color="#BFD3FE" />
                  <Text className="text-xs font-extrabold text-blue-100 ml-1 font-sans">
                    해운대 씨클라우드 호텔 기준
                  </Text>
                </View>
                <Text className="text-lg font-black text-white leading-tight font-sans">
                  부산 대표 핫플레이스{"\n"}맛집 & 가볼만한곳 BEST 47
                </Text>
              </View>

              {/* List Controls */}
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-sm font-bold text-[#141414] font-sans">
                  전체 ({filteredPlaces.length}곳)
                </Text>

                <TouchableOpacity
                  onPress={() => setSortByDistance((prev) => !prev)}
                  activeOpacity={0.7}
                  className={`flex-row items-center px-2.5 py-1.5 rounded-lg border ${
                    sortByDistance
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <ArrowUpDown
                    size={12}
                    color={sortByDistance ? "#1856FF" : "#64748b"}
                  />
                  <Text
                    className={`text-xs ml-1 font-semibold font-sans ${
                      sortByDistance ? "text-[#1856FF]" : "text-slate-600"
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
                    className="bg-white rounded-3xl overflow-hidden mb-4 border border-slate-100 shadow-card"
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
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-md items-center justify-center border border-white/20"
                      >
                        <Bookmark
                          size={16}
                          color={isFav ? "#1856FF" : "#ffffff"}
                          fill={isFav ? "#1856FF" : "transparent"}
                        />
                      </TouchableOpacity>
                      <View className="absolute bottom-3 left-3 bg-slate-900/75 backdrop-blur-md px-2.5 py-1 rounded-md flex-row items-center border border-white/20">
                        <Car size={11} color="#ffffff" />
                        <Text className="text-[11px] font-bold text-white ml-1 font-sans">
                          {item.hotelDistanceInfo}
                        </Text>
                      </View>
                      <View
                        className={`absolute top-3 left-3 ${
                          isAttraction ? "bg-[#1856FF]" : "bg-[#E89558]"
                        } px-2.5 py-1 rounded-full border border-white/30`}
                      >
                        <Text className="text-[10px] font-black text-white font-sans">
                          {isAttraction ? "🎡 가볼만한곳" : "🍽️ 맛집"}
                        </Text>
                      </View>
                    </View>

                    <View className="p-4">
                      <View className="flex-row items-center justify-between mb-1">
                        <Text className="text-base font-black text-[#141414] font-sans">
                          {item.name}
                        </Text>
                        <View className="flex-row items-center">
                          <Star size={13} color="#f59e0b" fill="#f59e0b" />
                          <Text className="text-xs font-bold text-[#141414] ml-1 font-sans">
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
                        className="text-xs text-slate-700 font-medium mb-2.5 font-sans leading-relaxed"
                        numberOfLines={2}
                      >
                        {item.highlight}
                      </Text>

                      {/* Video Review Summary Box */}
                      <View className="bg-blue-50/80 border border-blue-200/60 rounded-2xl p-3 mb-3">
                        <View className="flex-row items-center mb-1">
                          <PlayCircle size={13} color="#1856FF" />
                          <Text className="text-[11px] font-bold text-slate-900 ml-1 font-sans">
                            {isAttraction ? "여행 추천 꿀팁:" : "영상 추천 평:"}
                          </Text>
                        </View>
                        <Text
                          className="text-[11px] text-slate-800 font-normal leading-relaxed font-sans"
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
                                  ? "bg-blue-50 border-blue-100"
                                  : "bg-orange-50 border-orange-100"
                              } px-2 py-0.5 rounded-md border`}
                            >
                              <Text
                                className={`text-[10px] font-bold ${
                                  isAttraction
                                    ? "text-[#1856FF]"
                                    : "text-[#CE7636]"
                                } font-sans`}
                              >
                                #{tag}
                              </Text>
                            </View>
                          ))}
                        </View>

                        {/* Direct Driving Route Button */}
                        <TouchableOpacity
                          onPress={() => handleStartDrivingRoute(item)}
                          activeOpacity={0.8}
                          className="w-9 h-9 bg-blue-50 border border-blue-200 rounded-xl items-center justify-center mr-1.5 active:scale-95"
                        >
                          <Car size={16} color="#1856FF" />
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => handleOpenDetailModal(item)}
                          activeOpacity={0.8}
                          className="bg-[#141414] px-3.5 py-2 rounded-xl flex-row items-center active:scale-98"
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
