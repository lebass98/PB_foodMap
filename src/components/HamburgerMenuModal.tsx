import React, { useEffect, useRef } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import {
  X,
  Sparkles,
  Utensils,
  FerrisWheel,
  CircleParking,
  MapPin,
  Map as MapIcon,
  List as ListIcon,
  ArrowUpDown,
} from "lucide-react-native";
import { MainSectionType } from "../types/restaurant";

interface CategoryOption {
  id: string;
  name: string;
  icon: any;
}

interface HamburgerMenuModalProps {
  visible: boolean;
  onClose: () => void;
  mainTab: MainSectionType;
  onSelectMainTab: (tab: MainSectionType) => void;
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  categories: CategoryOption[];
  viewMode: "map" | "list";
  onSelectViewMode: (mode: "map" | "list") => void;
  sortByDistance: boolean;
  onToggleSortByDistance: () => void;
  totalCounts: {
    all: number;
    food: number;
    attraction: number;
    parking: number;
  };
  locationName: string;
}

const DRAWER_WIDTH = Math.min(Dimensions.get("window").width * 0.82, 360);

export const HamburgerMenuModal: React.FC<HamburgerMenuModalProps> = ({
  visible,
  onClose,
  mainTab,
  onSelectMainTab,
  activeCategory,
  onSelectCategory,
  categories,
  viewMode,
  onSelectViewMode,
  sortByDistance,
  onToggleSortByDistance,
  totalCounts,
  locationName,
}) => {
  const slideAnim = useRef(new Animated.Value(DRAWER_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          damping: 22,
          stiffness: 200,
          mass: 0.9,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      slideAnim.setValue(DRAWER_WIDTH);
      fadeAnim.setValue(0);
    }
  }, [visible]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: DRAWER_WIDTH,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  const mainTabs = [
    {
      id: "all" as MainSectionType,
      title: "전체 둘러보기",
      count: totalCounts.all,
      icon: Sparkles,
      color: "#1856FF",
      activeBg: "bg-blue-50/90 border-blue-400",
      activeText: "text-[#1856FF]",
      badgeBg: "bg-blue-100 text-blue-700",
      desc: "부산 핫플 맛집 15곳 + 대표 명소 32곳",
    },
    {
      id: "food" as MainSectionType,
      title: "맛집 BEST",
      count: totalCounts.food,
      icon: Utensils,
      color: "#E89558",
      activeBg: "bg-orange-50/90 border-orange-400",
      activeText: "text-[#CE7636]",
      badgeBg: "bg-orange-100 text-orange-700",
      desc: "경유 맛집 3곳 + 줄 서는 부산 12대 핫플",
    },
    {
      id: "attraction" as MainSectionType,
      title: "가볼만한곳 명소",
      count: totalCounts.attraction,
      icon: FerrisWheel,
      color: "#1856FF",
      activeBg: "bg-blue-50/90 border-[#1856FF]",
      activeText: "text-[#1856FF]",
      badgeBg: "bg-blue-100 text-blue-700",
      desc: "전망대·해변열차·야경·힐링숲 32선",
    },
    {
      id: "parking" as MainSectionType,
      title: "공영주차장",
      count: totalCounts.parking,
      icon: CircleParking,
      color: "#059669",
      activeBg: "bg-emerald-50/90 border-emerald-500",
      activeText: "text-emerald-700",
      badgeBg: "bg-emerald-100 text-emerald-700",
      desc: "명소/맛집 반경 1km 22곳 요금&할인",
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <View className="flex-1 flex-row justify-end relative">
        {/* Animated Dim Backdrop */}
        <Animated.View
          style={{ opacity: fadeAnim }}
          className="absolute inset-0 bg-black/40"
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={handleClose}
            className="flex-1 w-full h-full"
          />
        </Animated.View>

        {/* Sidebar Drawer Container (Slide-in from Right to Left, Pure White Glass) */}
        <Animated.View
          style={{
            width: DRAWER_WIDTH,
            transform: [{ translateX: slideAnim }],
          }}
          className="bg-white h-full shadow-2xl flex-col border-l border-slate-100 z-50"
        >
          {/* Pure White Header (Compact Padding) */}
          <View className="pt-4 px-5 pb-4 bg-white border-b border-slate-100 shadow-xs">
            <View className="flex-row items-center justify-between mb-3.5">
              <View className="flex-row items-center">
                <View className="w-9 h-9 rounded-xl overflow-hidden border border-slate-200/90 bg-white items-center justify-center mr-2.5 shadow-sm">
                  <Image
                    source={require("../../assets/glory_logo.png")}
                    style={{ width: 32, height: 32 }}
                    resizeMode="contain"
                  />
                </View>
                <View>
                  <Text className="text-base font-black text-[#141414] font-sans tracking-tight">
                    Glory Travel
                  </Text>
                  <Text className="text-[11px] font-medium text-slate-500 font-sans">
                    부산 여행 종합 내비 지도
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={handleClose}
                activeOpacity={0.8}
                className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 items-center justify-center active:scale-95"
              >
                <X size={17} color="#141414" />
              </TouchableOpacity>
            </View>

            {/* Current Base Location Info (Clean White Card) */}
            <View className="flex-row items-center bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/80">
              <MapPin size={13} color="#1856FF" />
              <Text className="text-xs font-bold text-slate-700 ml-1.5 font-sans flex-1" numberOfLines={1}>
                출발 기준: {locationName}
              </Text>
            </View>
          </View>

          {/* Drawer Scrollable Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 16, paddingBottom: 30 }}
            className="flex-1 bg-white"
          >
            {/* Section 1: Main Tabs */}
            <View className="mb-6">
              <Text className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2.5 font-sans px-1">
                메인 여행 카테고리
              </Text>

              <View className="gap-2">
                {mainTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isSelected = mainTab === tab.id;

                  const iconGradient =
                    tab.id === "food"
                      ? "linear-gradient(135deg, #FF6B4A 0%, #F59E0B 100%)"
                      : tab.id === "attraction"
                      ? "linear-gradient(135deg, #1856FF 0%, #8B5CF6 100%)"
                      : tab.id === "parking"
                      ? "linear-gradient(135deg, #059669 0%, #10B981 100%)"
                      : "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)";

                  return (
                    <TouchableOpacity
                      key={tab.id}
                      onPress={() => {
                        onSelectMainTab(tab.id);
                        onSelectCategory("all");
                      }}
                      activeOpacity={0.8}
                      className={`p-3 rounded-2xl border transition-all ${
                        isSelected
                          ? tab.activeBg + " shadow-sm"
                          : "bg-slate-50/70 border-slate-200/70"
                      }`}
                    >
                      <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center flex-1 mr-2">
                          <View
                            style={
                              isSelected
                                ? ({
                                    background: iconGradient,
                                  } as any)
                                : undefined
                            }
                            className={`w-8 h-8 rounded-xl items-center justify-center mr-2.5 ${
                              isSelected
                                ? "shadow-sm border border-white/40"
                                : "bg-white border border-slate-200/70"
                            }`}
                          >
                            <Icon size={16} color={isSelected ? "#ffffff" : tab.color} />
                          </View>
                          <View className="flex-1">
                            <Text
                              className={`text-sm font-black font-sans ${
                                isSelected ? tab.activeText : "text-slate-800"
                              }`}
                            >
                              {tab.title}
                            </Text>
                            <Text
                              className="text-[11px] text-slate-500 font-medium font-sans mt-0.5"
                              numberOfLines={1}
                            >
                              {tab.desc}
                            </Text>
                          </View>
                        </View>

                        <View
                          className={`px-2.5 py-1 rounded-full ${
                            isSelected
                              ? tab.badgeBg
                              : "bg-slate-200/80 text-slate-700"
                          }`}
                        >
                          <Text className="text-xs font-black font-sans">
                            {tab.count}곳
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Section 2: Sub-categories Filter */}
            <View className="mb-6">
              <Text className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2.5 font-sans px-1">
                세부 테마 필터 ({mainTab === "all" ? "전체" : mainTab === "food" ? "맛집" : mainTab === "attraction" ? "명소" : "주차장"})
              </Text>

              <View className="flex-row flex-wrap gap-1.5">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isCatActive = activeCategory === cat.id;

                  const chipGradient =
                    mainTab === "food"
                      ? "linear-gradient(135deg, #FF6B4A 0%, #F59E0B 100%)"
                      : mainTab === "parking"
                      ? "linear-gradient(135deg, #059669 0%, #10B981 100%)"
                      : "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)";

                  return (
                    <TouchableOpacity
                      key={cat.id}
                      onPress={() => {
                        onSelectCategory(cat.id);
                      }}
                      activeOpacity={0.8}
                      style={
                        isCatActive
                          ? ({
                              background: chipGradient,
                            } as any)
                          : undefined
                      }
                      className={`flex-row items-center px-3 py-2 rounded-xl border ${
                        isCatActive
                          ? "shadow-md border-white/30"
                          : "bg-slate-50 border-slate-200/80"
                      }`}
                    >
                      <Icon
                        size={13}
                        color={isCatActive ? "#ffffff" : "#64748b"}
                      />
                      <Text
                        className={`text-xs font-bold ml-1.5 font-sans ${
                          isCatActive ? "text-white" : "text-slate-700"
                        }`}
                      >
                        {cat.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Section 3: View Mode & Quick Controls */}
            <View className="mb-4">
              <Text className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2.5 font-sans px-1">
                보기 및 정렬 설정
              </Text>

              {/* View Mode Toggle Button */}
              <View className="flex-row bg-slate-100 p-1 rounded-2xl border border-slate-200/80 mb-2.5 shadow-xs">
                <TouchableOpacity
                  onPress={() => onSelectViewMode("map")}
                  activeOpacity={0.8}
                  style={
                    viewMode === "map"
                      ? ({
                          background:
                            "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)",
                        } as any)
                      : undefined
                  }
                  className={`flex-1 flex-row items-center justify-center py-2.5 rounded-xl ${
                    viewMode === "map"
                      ? "shadow-sm shadow-blue-500/30 border border-white/30"
                      : ""
                  }`}
                >
                  <MapIcon
                    size={16}
                    color={viewMode === "map" ? "#ffffff" : "#64748b"}
                  />
                  <Text
                    className={`ml-2 text-xs font-black font-sans ${
                      viewMode === "map" ? "text-white" : "text-slate-600"
                    }`}
                  >
                    지도 보기
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => onSelectViewMode("list")}
                  activeOpacity={0.8}
                  style={
                    viewMode === "list"
                      ? ({
                          background:
                            "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)",
                        } as any)
                      : undefined
                  }
                  className={`flex-1 flex-row items-center justify-center py-2.5 rounded-xl ${
                    viewMode === "list"
                      ? "shadow-sm shadow-blue-500/30 border border-white/30"
                      : ""
                  }`}
                >
                  <ListIcon
                    size={16}
                    color={viewMode === "list" ? "#ffffff" : "#64748b"}
                  />
                  <Text
                    className={`ml-2 text-xs font-black font-sans ${
                      viewMode === "list" ? "text-white" : "text-slate-600"
                    }`}
                  >
                    목록 보기
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Distance Sort Button */}
              <TouchableOpacity
                onPress={onToggleSortByDistance}
                activeOpacity={0.8}
                className={`p-3 rounded-2xl border flex-row items-center justify-between ${
                  sortByDistance
                    ? "bg-blue-50 border-blue-300 shadow-xs"
                    : "bg-slate-50 border-slate-200/80"
                }`}
              >
                <View className="flex-row items-center">
                  <ArrowUpDown
                    size={16}
                    color={sortByDistance ? "#1856FF" : "#64748b"}
                  />
                  <Text
                    className={`text-xs font-bold ml-2 font-sans ${
                      sortByDistance ? "text-[#1856FF]" : "text-slate-700"
                    }`}
                  >
                    거리순 정렬 ({sortByDistance ? "적용 중" : "기본 추천순"})
                  </Text>
                </View>

                <View
                  style={
                    sortByDistance
                      ? ({
                          background:
                            "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)",
                        } as any)
                      : undefined
                  }
                  className={`w-6 h-6 rounded-full items-center justify-center ${
                    sortByDistance
                      ? "shadow-xs border border-white/30"
                      : "bg-slate-300"
                  }`}
                >
                  <Text className="text-[10px] font-black text-white">
                    {sortByDistance ? "ON" : "OFF"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Pure White Drawer Footer */}
          <View className="p-4 bg-white border-t border-slate-100">
            <TouchableOpacity
              onPress={handleClose}
              activeOpacity={0.85}
              style={{
                background:
                  "linear-gradient(135deg, #1856FF 0%, #3B82F6 50%, #6366F1 100%)",
              } as any}
              className="py-3.5 rounded-2xl items-center justify-center shadow-xl shadow-blue-500/30 border border-white/30 active:scale-98"
            >
              <Text className="text-sm font-black text-white font-sans">
                선택 완료 및 지도 보기
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
