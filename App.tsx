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
  useWindowDimensions,
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
  CircleParking,
  Menu,
  CloudSun,
} from "lucide-react-native";
import { NaverMapView, NaverMapViewRef } from "./src/components/NaverMapView";
import { RestaurantDetailModal } from "./src/components/RestaurantDetailModal";
import { HamburgerMenuModal } from "./src/components/HamburgerMenuModal";
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
  { id: "all", name: "전체", icon: Flame },
  { id: "korean", name: "한식/국밥/경유 (6)", icon: Utensils },
  { id: "cafe", name: "베이커리/디저트 (3)", icon: Coffee },
  { id: "japanese", name: "일식/라멘/장어 (2)", icon: Fish },
  { id: "chinese", name: "중식/대만/만두 (2)", icon: Soup },
  { id: "western", name: "피자/양식 (2)", icon: Pizza },
];

const ATTRACTION_CATEGORIES = [
  { id: "all", name: "전체", icon: FerrisWheel },
  { id: "beach", name: "해변/요트/해변열차 (6)", icon: Palmtree },
  { id: "view", name: "전망대/케이블카/야경 (6)", icon: Camera },
  { id: "nature", name: "자연/해안산책로/숲 (6)", icon: Trees },
  { id: "culture", name: "사찰/문화마을/시장 (8)", icon: Ticket },
  { id: "cafe", name: "기장 오션뷰카페 (3)", icon: Coffee },
  { id: "theme", name: "과학관/체험 (3)", icon: FerrisWheel },
];

const PARKING_CATEGORIES = [
  { id: "all", name: "전체", icon: CircleParking },
  { id: "haeundae", name: "해운대/송정/미포 (5)", icon: MapPin },
  { id: "gwangalli", name: "광안리/민락/남구 (5)", icon: MapPin },
  { id: "yeongdo", name: "영도/태종대/흰여울 (4)", icon: MapPin },
  { id: "nampo", name: "남포/자갈치/초량/감천 (6)", icon: MapPin },
  { id: "gijang", name: "기장/오시리아/용궁사 (2)", icon: MapPin },
];

const ALL_CATEGORIES = [
  { id: "all", name: "전체", icon: Sparkles },
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
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  // 반응형: 1280px 이상에서 사이드바 고정 모드
  const { width: windowWidth } = useWindowDimensions();
  const isWideScreen = windowWidth >= 1280;

  const totalCounts = useMemo(() => {
    const foodCount = SAMPLE_PLACES.filter((p) => p.mainType === "food").length;
    const attractionCount = SAMPLE_PLACES.filter(
      (p) => p.mainType === "attraction"
    ).length;
    const parkingCount = SAMPLE_PLACES.filter(
      (p) => p.mainType === "parking"
    ).length;
    return {
      all: foodCount + attractionCount,
      food: foodCount,
      attraction: attractionCount,
      parking: parkingCount,
    };
  }, []);

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
    if (mainTab === "parking") return PARKING_CATEGORIES;
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
        // 1. 메인 섹션 탭 필터 (사용자 요구사항: 전체 탭에서는 주차장을 제외하고, 주차장 탭 활성화 시에만 노출)
        if (mainTab === "all" && item.mainType === "parking") return false;
        if (mainTab === "food" && item.mainType !== "food") return false;
        if (mainTab === "attraction" && item.mainType !== "attraction")
          return false;
        if (mainTab === "parking" && item.mainType !== "parking") return false;

        // 2. 카테고리 필터
        if (mainTab === "all") {
          if (activeCategory === "food_all")
            return item.mainType === "food";
          if (activeCategory === "attraction_all")
            return item.mainType === "attraction";
          if (activeCategory !== "all" && item.category !== activeCategory)
            return false;
        } else if (mainTab === "parking") {
          if (activeCategory === "haeundae") {
            return ["p1", "p2", "p3", "p4", "p5"].includes(item.id);
          }
          if (activeCategory === "gwangalli") {
            return ["p6", "p7", "p8", "p9", "p10"].includes(item.id);
          }
          if (activeCategory === "yeongdo") {
            return ["p11", "p12", "p13", "p14"].includes(item.id);
          }
          if (activeCategory === "nampo") {
            return ["p15", "p16", "p17", "p18", "p19", "p20"].includes(item.id);
          }
          if (activeCategory === "gijang") {
            return ["p21", "p22"].includes(item.id);
          }
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
        <Text className="mt-3 text-xs text-slate-600 font-bold font-sans">
          Glory Travel 로딩 중...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-transparent font-sans" edges={["top"]}>
        <StatusBar style="dark" />

        {/* Outer Layout: PC 모드(>=1280px)일 때는 좌우 분할, 모바일일 때는 단일 세로 분할 */}
        <View className="flex-1 flex-row w-full h-full relative overflow-hidden">
          {/* Left Column: Header + Main Map/List View + Mobile Dock */}
          <View className="flex-1 flex-col h-full relative bg-slate-100">
            {/* Top Header with Ultra-Transparent Glassmorphism */}
            <View
              style={{
                background: "rgba(255, 255, 255, 0.45)",
                backdropFilter: "blur(32px) saturate(220%)",
                WebkitBackdropFilter: "blur(32px) saturate(220%)",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255, 255, 255, 0.6)",
              } as any}
              className="px-4 pt-2.5 pb-2.5 z-30 shadow-sm"
            >
              {/* Row 1: Logo, Title, Quick Status Badge, View Mode Toggle, Hamburger Button */}
              <View className="flex-row items-center justify-between mb-2">
            {/* Left: Brand Title */}
            <TouchableOpacity
              onPress={() => setIsHamburgerOpen(true)}
              activeOpacity={0.8}
              className="flex-row items-center py-1"
            >
              <Text className="text-base font-black text-[#141414] tracking-tight font-sans">
                Glory Travel
              </Text>
            </TouchableOpacity>

            {/* Right: Quick Tab Indicator & Controls */}
            <View className="flex-row items-center gap-1.5">
              {/* Quick Tab Badge (Click opens Hamburger menu) */}
              <TouchableOpacity
                onPress={() => setIsHamburgerOpen(true)}
                activeOpacity={0.8}
                style={{
                  background:
                    mainTab === "food"
                      ? "linear-gradient(135deg, rgba(255, 107, 74, 0.15), rgba(245, 158, 11, 0.15))"
                      : mainTab === "attraction"
                        ? "linear-gradient(135deg, rgba(24, 86, 255, 0.15), rgba(99, 102, 241, 0.15))"
                        : mainTab === "parking"
                          ? "linear-gradient(135deg, rgba(5, 150, 105, 0.15), rgba(16, 185, 129, 0.15))"
                          : "rgba(255, 255, 255, 0.7)",
                } as any}
                className={`px-3 py-1.5 rounded-xl border backdrop-blur-md flex-row items-center shadow-xs ${mainTab === "food"
                    ? "border-orange-300/80"
                    : mainTab === "attraction"
                      ? "border-blue-300/80"
                      : mainTab === "parking"
                        ? "border-emerald-300/80"
                        : "border-white/80"
                  }`}
              >
                <Text
                  className={`text-[11px] font-black font-sans ${mainTab === "food"
                      ? "text-[#CE7636]"
                      : mainTab === "attraction"
                        ? "text-[#1856FF]"
                        : mainTab === "parking"
                          ? "text-emerald-700"
                          : "text-slate-700"
                    }`}
                >
                  {mainTab === "food"
                    ? `맛집 (${totalCounts.food})`
                    : mainTab === "attraction"
                      ? `명소 (${totalCounts.attraction})`
                      : mainTab === "parking"
                        ? `주차장 (${totalCounts.parking})`
                        : `전체 (${totalCounts.all})`}
                </Text>
              </TouchableOpacity>

              {/* View Mode Toggle (Map <-> List) */}
              <View className="flex-row bg-white/60 backdrop-blur-md p-0.5 rounded-xl border border-white/80 items-center shadow-xs">
                <TouchableOpacity
                  onPress={() => setViewMode("map")}
                  activeOpacity={0.8}
                  style={
                    viewMode === "map"
                      ? ({
                        background:
                          "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)",
                      } as any)
                      : undefined
                  }
                  className={`w-7 h-7 items-center justify-center rounded-lg ${viewMode === "map"
                      ? "shadow-sm shadow-blue-500/30 border border-white/25"
                      : ""
                    }`}
                >
                  <MapIcon
                    size={14}
                    color={viewMode === "map" ? "#ffffff" : "#64748b"}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setViewMode("list")}
                  activeOpacity={0.8}
                  style={
                    viewMode === "list"
                      ? ({
                        background:
                          "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)",
                      } as any)
                      : undefined
                  }
                  className={`w-7 h-7 items-center justify-center rounded-lg ${viewMode === "list"
                      ? "shadow-sm shadow-blue-500/30 border border-white/25"
                      : ""
                    }`}
                >
                  <ListIcon
                    size={14}
                    color={viewMode === "list" ? "#ffffff" : "#64748b"}
                  />
                </TouchableOpacity>
              </View>

                {/* Hamburger Menu Trigger Button - 배경 없는 3줄 바 아이콘 (1280px 미만에서만 표시) */}
                {!isWideScreen && (
                  <TouchableOpacity
                    onPress={() => setIsHamburgerOpen(true)}
                    activeOpacity={0.6}
                    className="p-1.5 items-center justify-center ml-1"
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <View className="w-5 h-4 justify-between items-start">
                      <View className="w-5 h-[2.5px] bg-[#141414] rounded-full" />
                      <View className="w-3.5 h-[2.5px] bg-[#141414] rounded-full" />
                      <View className="w-5 h-[2.5px] bg-[#141414] rounded-full" />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Row 2: Slim Glassmorphism Search Bar */}
            <View className="flex-row items-center bg-white/60 backdrop-blur-md rounded-xl px-3 py-2 border border-white/80 shadow-xs">
              <Search size={15} color="#94a3b8" />
              <TextInput
                placeholder="맛집, 해변열차, 전망대, 메뉴, 주차장 검색..."
                placeholderTextColor="#94a3b8"
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="flex-1 ml-2 text-xs text-[#141414] font-sans"
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery("")}>
                  <X size={15} color="#94a3b8" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Main Map / List View Container */}
          <View className="flex-1 relative">
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
                <View className="absolute top-3 left-4 right-4 bg-white/75 backdrop-blur-2xl rounded-3xl p-4 border border-white/80 shadow-glassHover flex-row items-center justify-between z-50">
                  <View className="flex-row items-center flex-1 mr-2">
                    <View
                      style={{
                        background:
                          selectedPlace.mainType === "parking"
                            ? "linear-gradient(135deg, #059669 0%, #10B981 100%)"
                            : selectedPlace.mainType === "attraction"
                              ? "linear-gradient(135deg, #1856FF 0%, #8B5CF6 100%)"
                              : "linear-gradient(135deg, #FF6B4A 0%, #F59E0B 100%)",
                      } as any}
                      className="w-12 h-12 rounded-2xl items-center justify-center mr-3 shadow-md border border-white/30"
                    >
                      <Car size={24} color="#ffffff" />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row items-center">
                        <Text
                          className={`text-base font-black ${selectedPlace.mainType === "parking"
                              ? "text-emerald-700"
                              : selectedPlace.mainType === "attraction"
                                ? "text-[#1856FF]"
                                : "text-[#CE7636]"
                            } font-sans`}
                        >
                          차량 약 {drivingRoute.durationText} 소요
                        </Text>
                      </View>
                      <Text
                        className="text-xs text-slate-600 font-semibold font-sans mt-0.5"
                        numberOfLines={1}
                      >
                        {selectedPlace.name} (거리: {drivingRoute.distanceText})
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={handleClearRoute}
                    activeOpacity={0.8}
                    style={{
                      background:
                        "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
                    } as any}
                    className="px-3 py-2 rounded-xl shadow-md border border-white/20 active:scale-95"
                  >
                    <Text className="text-xs font-black text-white font-sans">
                      종료
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

                {/* Floating Map Controller Buttons with Ultra-Transparent Glassmorphism & Blur */}
                {!drivingRoute && (
                  <View className="absolute right-4 top-4 gap-3 items-center z-40">
                    {/* Current Location GPS Button */}
                    <TouchableOpacity
                      onPress={() => fetchCurrentLocation(true)}
                      activeOpacity={0.8}
                      style={{
                        background: "rgba(255, 255, 255, 0.42)",
                        backdropFilter: "blur(24px) saturate(200%)",
                        WebkitBackdropFilter: "blur(24px) saturate(200%)",
                        borderWidth: 1,
                        borderColor: "rgba(255, 255, 255, 0.75)",
                      } as any}
                      className="w-11 h-11 rounded-2xl items-center justify-center shadow-lg active:scale-95"
                    >
                      {isLoadingLocation ? (
                        <ActivityIndicator size="small" color="#1856FF" />
                      ) : (
                        <Crosshair size={20} color="#1856FF" />
                      )}
                    </TouchableOpacity>

                    {/* Vertical Zoom Controls (+ / -) */}
                    <View
                      style={{
                        background: "rgba(255, 255, 255, 0.42)",
                        backdropFilter: "blur(24px) saturate(200%)",
                        WebkitBackdropFilter: "blur(24px) saturate(200%)",
                        borderWidth: 1,
                        borderColor: "rgba(255, 255, 255, 0.75)",
                      } as any}
                      className="rounded-2xl shadow-lg overflow-hidden"
                    >
                      <TouchableOpacity
                        onPress={() => mapViewRef.current?.zoomIn()}
                        activeOpacity={0.8}
                        className="w-11 h-11 items-center justify-center border-b border-white/60 active:bg-white/40"
                      >
                        <Plus size={20} color="#141414" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => mapViewRef.current?.zoomOut()}
                        activeOpacity={0.8}
                        className="w-11 h-11 items-center justify-center active:bg-white/40"
                      >
                        <Minus size={20} color="#141414" />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

                {/* Bottom Floating Place Preview Card (Ultra-Transparent Frosted Glass) */}
                {selectedPlace && (
                  <View
                    style={{
                      background: "rgba(255, 255, 255, 0.48)",
                      backdropFilter: "blur(32px) saturate(210%)",
                      WebkitBackdropFilter: "blur(32px) saturate(210%)",
                    } as any}
                    className={`absolute ${!isWideScreen ? "bottom-20" : "bottom-6"} left-4 right-4 rounded-3xl p-4 border border-white/80 shadow-2xl z-40`}
                  >
                  <TouchableOpacity
                    onPress={() => handleOpenDetailModal(selectedPlace)}
                    activeOpacity={0.9}
                  >
                    <View className="flex-row">
                      <Image
                        source={{ uri: selectedPlace.image }}
                        className="w-24 h-24 rounded-2xl bg-slate-100/80 border border-white/70 shadow-sm"
                        resizeMode="cover"
                      />
                      <View className="flex-1 ml-3.5 justify-between">
                        <View>
                          <View className="flex-row items-center justify-between">
                            <Text
                              className="text-base font-black text-[#141414] flex-1 mr-2 font-sans"
                              numberOfLines={1}
                            >
                              {selectedPlace.mainType === "parking"
                                ? "🅿️ "
                                : selectedPlace.mainType === "attraction"
                                  ? "🎡 "
                                  : "🍽️ "}
                              {selectedPlace.name}
                            </Text>
                            <View className="flex-row items-center gap-1">
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
                                      : "#64748b"
                                  }
                                  fill={
                                    favorites.includes(selectedPlace.id)
                                      ? "#1856FF"
                                      : "transparent"
                                  }
                                />
                              </TouchableOpacity>

                              <TouchableOpacity
                                onPress={() => setSelectedPlace(null)}
                                activeOpacity={0.7}
                                className="p-1 w-6 h-6 rounded-full bg-slate-300/60 backdrop-blur-sm items-center justify-center ml-0.5 active:scale-95 border border-white/50"
                              >
                                <X size={13} color="#334155" />
                              </TouchableOpacity>
                            </View>
                          </View>

                          <View className="flex-row items-center mt-1">
                            <View className="flex-row items-center bg-amber-50/90 backdrop-blur-xs px-2 py-0.5 rounded-full border border-amber-200/80">
                              <Star size={12} color="#f59e0b" fill="#f59e0b" />
                              <Text className="text-xs font-bold text-[#141414] ml-1 font-sans">
                                {selectedPlace.rating}
                              </Text>
                              <Text className="text-xs text-slate-400 ml-1 font-sans">
                                ({selectedPlace.reviews})
                              </Text>
                            </View>
                            <Text className="text-xs text-slate-400 mx-1.5 font-bold">
                              ·
                            </Text>
                            <Text className="text-xs text-slate-700 font-bold font-sans">
                              {selectedPlace.categoryLabel}
                            </Text>
                          </View>

                          <Text
                            className="text-[11px] text-slate-600 mt-1 font-sans font-medium"
                            numberOfLines={1}
                          >
                            {selectedPlace.address}
                          </Text>
                        </View>

                        {/* Hotel Distance Badge (Transparent Tint Pill) */}
                        <View
                          style={{
                            background:
                              selectedPlace.mainType === "parking"
                                ? "rgba(5, 150, 105, 0.15)"
                                : selectedPlace.mainType === "attraction"
                                  ? "rgba(24, 86, 255, 0.15)"
                                  : "rgba(255, 107, 74, 0.15)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                          } as any}
                          className={`px-2.5 py-1 rounded-lg border mt-1.5 flex-row items-center ${selectedPlace.mainType === "parking"
                              ? "border-emerald-300/80"
                              : selectedPlace.mainType === "attraction"
                                ? "border-blue-300/80"
                                : "border-orange-300/80"
                            }`}
                        >
                          <Car
                            size={11}
                            color={
                              selectedPlace.mainType === "parking"
                                ? "#059669"
                                : selectedPlace.mainType === "attraction"
                                  ? "#1856FF"
                                  : "#CE7636"
                            }
                          />
                          <Text
                            className={`text-[10.5px] font-bold ${selectedPlace.mainType === "parking"
                                ? "text-emerald-800"
                                : selectedPlace.mainType === "attraction"
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

                  {/* Navigation Action Buttons with Vivid Glassmorphism Gradients */}
                  <View className="flex-row items-center gap-2.5 mt-3.5 pt-3 border-t border-white/70">
                    <TouchableOpacity
                      onPress={() => handleOpenDetailModal(selectedPlace)}
                      activeOpacity={0.8}
                      style={{
                        background:
                          "linear-gradient(135deg, #1856FF 0%, #3B82F6 50%, #6366F1 100%)",
                      } as any}
                      className="flex-1 py-3.5 rounded-2xl flex-row items-center justify-center shadow-lg shadow-blue-500/25 border border-white/30 active:scale-98"
                    >
                      <Info size={15} color="#ffffff" />
                      <Text className="text-xs font-black text-white ml-1.5 font-sans">
                        상세 정보 & 꿀팁 보기
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => handleStartDrivingRoute(selectedPlace)}
                      activeOpacity={0.8}
                      style={{
                        background:
                          selectedPlace.mainType === "parking"
                            ? "linear-gradient(135deg, #059669 0%, #10B981 100%)"
                            : selectedPlace.mainType === "attraction"
                              ? "linear-gradient(135deg, #1856FF 0%, #8B5CF6 100%)"
                              : "linear-gradient(135deg, #FF6B4A 0%, #F59E0B 100%)",
                      } as any}
                      className="w-12 h-12 rounded-2xl items-center justify-center shadow-lg border border-white/30 active:scale-95"
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
              className="flex-1 px-5 pt-3 bg-slate-50"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: !isWideScreen ? 110 : 40 }}
            >
              {/* List Controls */}
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-sm font-bold text-[#141414] font-sans">
                  {mainTab === "parking"
                    ? `공영주차장 (${filteredPlaces.length}곳)`
                    : mainTab === "food"
                      ? `맛집 (${filteredPlaces.length}곳)`
                      : mainTab === "attraction"
                        ? `명소 (${filteredPlaces.length}곳)`
                        : `전체 (${filteredPlaces.length}곳)`}
                </Text>

                <TouchableOpacity
                  onPress={() => setSortByDistance((prev) => !prev)}
                  activeOpacity={0.7}
                  className={`flex-row items-center px-2.5 py-1.5 rounded-lg border ${sortByDistance
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white border-slate-200"
                    }`}
                >
                  <ArrowUpDown
                    size={12}
                    color={sortByDistance ? "#1856FF" : "#64748b"}
                  />
                  <Text
                    className={`text-xs ml-1 font-semibold font-sans ${sortByDistance ? "text-[#1856FF]" : "text-slate-600"
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
                const isParking = item.mainType === "parking";

                const typeGradient = isParking
                  ? "linear-gradient(135deg, #059669 0%, #10B981 100%)"
                  : isAttraction
                    ? "linear-gradient(135deg, #1856FF 0%, #8B5CF6 100%)"
                    : "linear-gradient(135deg, #FF6B4A 0%, #F59E0B 100%)";

                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleOpenDetailModal(item)}
                    activeOpacity={0.85}
                    className="bg-white/80 backdrop-blur-2xl rounded-3xl overflow-hidden mb-4 border border-white/70 shadow-modal"
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
                        style={{ background: typeGradient } as any}
                        className="absolute top-3 left-3 px-2.5 py-1 rounded-full border border-white/30 shadow-md"
                      >
                        <Text className="text-[10px] font-black text-white font-sans">
                          {isParking
                            ? "🅿️ 공영주차장"
                            : isAttraction
                              ? "🎡 가볼만한곳"
                              : "🍽️ 맛집"}
                        </Text>
                      </View>
                    </View>

                    <View className="p-4">
                      <View className="flex-row items-center justify-between mb-1">
                        <Text className="text-base font-black text-[#141414] font-sans">
                          {item.name}
                        </Text>
                        <View className="flex-row items-center bg-amber-50/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-amber-200/80">
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

                      {/* Review / Parking Summary Box with Glass Tint */}
                      <View
                        style={{
                          background: isParking
                            ? "rgba(5, 150, 105, 0.08)"
                            : "rgba(24, 86, 255, 0.08)",
                        } as any}
                        className={`border ${isParking ? "border-emerald-200/80" : "border-blue-200/80"} backdrop-blur-sm rounded-2xl p-3 mb-3`}
                      >
                        <View className="flex-row items-center mb-1">
                          <PlayCircle size={13} color={isParking ? "#059669" : "#1856FF"} />
                          <Text className="text-[11px] font-bold text-slate-900 ml-1 font-sans">
                            {isParking ? "주차 꿀팁 & 연계:" : isAttraction ? "여행 추천 꿀팁:" : "영상 추천 평:"}
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

                      <View className="flex-row items-center justify-between pt-2 border-t border-white/60">
                        <View className="flex-row flex-wrap gap-1.5 flex-1 mr-2">
                          {item.tags.slice(0, 2).map((tag, idx) => (
                            <View
                              key={idx}
                              style={{
                                background: isParking
                                  ? "rgba(5, 150, 105, 0.1)"
                                  : isAttraction
                                    ? "rgba(24, 86, 255, 0.1)"
                                    : "rgba(255, 107, 74, 0.1)",
                              } as any}
                              className={`px-2 py-0.5 rounded-md border ${isParking
                                  ? "border-emerald-200/80"
                                  : isAttraction
                                    ? "border-blue-200/80"
                                    : "border-orange-200/80"
                                }`}
                            >
                              <Text
                                className={`text-[10px] font-bold ${isParking
                                    ? "text-emerald-700"
                                    : isAttraction
                                      ? "text-[#1856FF]"
                                      : "text-[#CE7636]"
                                  } font-sans`}
                              >
                                #{tag}
                              </Text>
                            </View>
                          ))}
                        </View>

                        {/* Direct Driving Route Button with Gradient */}
                        <TouchableOpacity
                          onPress={() => handleStartDrivingRoute(item)}
                          activeOpacity={0.8}
                          style={{ background: typeGradient } as any}
                          className="w-9 h-9 rounded-xl items-center justify-center mr-1.5 shadow-sm border border-white/30 active:scale-95"
                        >
                          <Car size={16} color="#ffffff" />
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => handleOpenDetailModal(item)}
                          activeOpacity={0.8}
                          style={{
                            background: "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)",
                          } as any}
                          className="px-3.5 py-2 rounded-xl flex-row items-center shadow-md border border-white/30 active:scale-98"
                        >
                          <Text className="text-xs font-black text-white font-sans">
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

        {/* Mobile Bottom Floating Dock Bar (Glassmorphism) - PC 버전 아닐 때만 표시 */}
          {!isWideScreen && (
            <View className="absolute bottom-3 left-4 right-4 z-40">
              <View
                style={{
                  background: "rgba(255, 255, 255, 0.68)",
                  backdropFilter: "blur(30px) saturate(220%)",
                  WebkitBackdropFilter: "blur(30px) saturate(220%)",
                  borderWidth: 1,
                  borderColor: "rgba(255, 255, 255, 0.85)",
                } as any}
                className="flex-row items-center justify-around py-1.5 px-1 rounded-3xl shadow-xl"
              >
                {/* 1. 전체보기 */}
                <TouchableOpacity
                  onPress={() => {
                    setMainTab("all");
                    setActiveCategory("all");
                    setDrivingRoute(null);
                  }}
                  activeOpacity={0.7}
                  className="flex-1 items-center justify-center py-1"
                >
                  <Sparkles
                    size={20}
                    color={mainTab === "all" ? "#1856FF" : "#94a3b8"}
                  />
                  <Text
                    className={`text-[11px] mt-1 font-sans ${
                      mainTab === "all"
                        ? "font-black text-[#1856FF]"
                        : "font-medium text-slate-500"
                    }`}
                  >
                    전체보기
                  </Text>
                </TouchableOpacity>

                {/* 2. 맛집 */}
                <TouchableOpacity
                  onPress={() => {
                    setMainTab("food");
                    setActiveCategory("all");
                    setDrivingRoute(null);
                  }}
                  activeOpacity={0.7}
                  className="flex-1 items-center justify-center py-1"
                >
                  <Utensils
                    size={20}
                    color={mainTab === "food" ? "#FF6B4A" : "#94a3b8"}
                  />
                  <Text
                    className={`text-[11px] mt-1 font-sans ${
                      mainTab === "food"
                        ? "font-black text-[#FF6B4A]"
                        : "font-medium text-slate-500"
                    }`}
                  >
                    맛집
                  </Text>
                </TouchableOpacity>

                {/* 3. 명소 */}
                <TouchableOpacity
                  onPress={() => {
                    setMainTab("attraction");
                    setActiveCategory("all");
                    setDrivingRoute(null);
                  }}
                  activeOpacity={0.7}
                  className="flex-1 items-center justify-center py-1"
                >
                  <FerrisWheel
                    size={20}
                    color={mainTab === "attraction" ? "#1856FF" : "#94a3b8"}
                  />
                  <Text
                    className={`text-[11px] mt-1 font-sans ${
                      mainTab === "attraction"
                        ? "font-black text-[#1856FF]"
                        : "font-medium text-slate-500"
                    }`}
                  >
                    명소
                  </Text>
                </TouchableOpacity>

                {/* 4. 주차장 */}
                <TouchableOpacity
                  onPress={() => {
                    setMainTab("parking");
                    setActiveCategory("all");
                    setDrivingRoute(null);
                  }}
                  activeOpacity={0.7}
                  className="flex-1 items-center justify-center py-1"
                >
                  <CircleParking
                    size={20}
                    color={mainTab === "parking" ? "#059669" : "#94a3b8"}
                  />
                  <Text
                    className={`text-[11px] mt-1 font-sans ${
                      mainTab === "parking"
                        ? "font-black text-[#059669]"
                        : "font-medium text-slate-500"
                    }`}
                  >
                    주차장
                  </Text>
                </TouchableOpacity>

                {/* 5. 날씨 (준비중) */}
                <View className="flex-1 items-center justify-center py-1 opacity-45">
                  <CloudSun size={20} color="#94a3b8" />
                  <View className="flex-row items-center mt-1">
                    <Text className="text-[11px] font-medium text-slate-400 font-sans">
                      날씨
                    </Text>
                    <View className="ml-0.5 px-1 py-0.2 bg-slate-200/90 rounded-full">
                      <Text className="text-[8px] font-bold text-slate-500 font-sans">
                        준비중
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Right Column: Fixed Sidebar for PC Mode (1280px 이상) - 상단부터 하단까지 풀 높이 차지 */}
        {isWideScreen && (
          <HamburgerMenuModal
            visible={true}
            isFixed={true}
            onClose={() => {}}
            mainTab={mainTab}
            onSelectMainTab={(tab) => {
              setMainTab(tab);
              setDrivingRoute(null);
            }}
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
              setDrivingRoute(null);
            }}
            categories={currentCategories}
            viewMode={viewMode}
            onSelectViewMode={setViewMode}
            sortByDistance={sortByDistance}
            onToggleSortByDistance={() => setSortByDistance(!sortByDistance)}
            totalCounts={totalCounts}
            locationName={locationName}
          />
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

        {/* Slide-over Hamburger Menu Drawer Modal - 1280px 미만에서만 */}
        {!isWideScreen && (
          <HamburgerMenuModal
            visible={isHamburgerOpen}
            onClose={() => setIsHamburgerOpen(false)}
            mainTab={mainTab}
            onSelectMainTab={(tab) => {
              setMainTab(tab);
              setDrivingRoute(null);
            }}
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
              setDrivingRoute(null);
            }}
            categories={currentCategories}
            viewMode={viewMode}
            onSelectViewMode={setViewMode}
            sortByDistance={sortByDistance}
            onToggleSortByDistance={() => setSortByDistance(!sortByDistance)}
            totalCounts={totalCounts}
            locationName={locationName}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

