import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
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
  const mainTabs = [
    {
      id: "all" as MainSectionType,
      title: "전체 둘러보기",
      count: totalCounts.all,
      icon: Sparkles,
      color: "#1856FF",
      activeBg: "bg-blue-50 border-blue-500",
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
      activeBg: "bg-orange-50 border-[#E89558]",
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
      activeBg: "bg-blue-50 border-[#1856FF]",
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
      activeBg: "bg-emerald-50 border-emerald-600",
      activeText: "text-emerald-700",
      badgeBg: "bg-emerald-100 text-emerald-700",
      desc: "명소/맛집 반경 1km 22곳 요금&할인",
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 flex-row justify-end">
        {/* Backdrop Touchable */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          className="flex-1"
        />

        {/* Sidebar Drawer Container */}
        <View className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex-col">
          {/* Drawer Header */}
          <View className="pt-12 px-5 pb-4 bg-slate-900 border-b border-slate-800">
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center">
                <View className="w-9 h-9 rounded-xl overflow-hidden border border-blue-400/50 bg-white items-center justify-center mr-2.5 shadow-md">
                  <Image
                    source={require("../../assets/glory_logo.png")}
                    style={{ width: 32, height: 32 }}
                    resizeMode="contain"
                  />
                </View>
                <View>
                  <Text className="text-base font-black text-white font-sans tracking-tight">
                    Glory Travel
                  </Text>
                  <Text className="text-[11px] font-medium text-slate-400 font-sans">
                    부산 여행 종합 내비 지도
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={onClose}
                activeOpacity={0.8}
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 items-center justify-center"
              >
                <X size={18} color="#ffffff" />
              </TouchableOpacity>
            </View>

            {/* Current Base Location Info */}
            <View className="flex-row items-center bg-slate-800/90 px-3 py-2 rounded-xl border border-slate-700">
              <MapPin size={13} color="#60A5FA" />
              <Text className="text-xs font-bold text-slate-200 ml-1.5 font-sans flex-1" numberOfLines={1}>
                기준: {locationName}
              </Text>
            </View>
          </View>

          {/* Drawer Scrollable Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 16, paddingBottom: 40 }}
            className="flex-1"
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
                          ? `${tab.activeBg} shadow-sm`
                          : "bg-slate-50/80 border-slate-200/80"
                      }`}
                    >
                      <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center flex-1 mr-2">
                          <View
                            className={`w-8 h-8 rounded-xl items-center justify-center mr-2.5 ${
                              isSelected ? "bg-white shadow-xs" : "bg-white/80"
                            }`}
                          >
                            <Icon size={18} color={tab.color} />
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
                              : "bg-slate-200 text-slate-700"
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

                  return (
                    <TouchableOpacity
                      key={cat.id}
                      onPress={() => {
                        onSelectCategory(cat.id);
                      }}
                      activeOpacity={0.8}
                      className={`flex-row items-center px-3 py-2 rounded-xl border ${
                        isCatActive
                          ? mainTab === "food"
                            ? "bg-[#E89558] border-[#E89558] shadow-sm"
                            : mainTab === "parking"
                            ? "bg-emerald-600 border-emerald-600 shadow-sm"
                            : "bg-[#1856FF] border-[#1856FF] shadow-sm"
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
              <View className="flex-row bg-slate-100 p-1 rounded-2xl border border-slate-200/80 mb-2.5">
                <TouchableOpacity
                  onPress={() => onSelectViewMode("map")}
                  activeOpacity={0.8}
                  className={`flex-1 flex-row items-center justify-center py-2.5 rounded-xl ${
                    viewMode === "map" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <MapIcon
                    size={16}
                    color={viewMode === "map" ? "#1856FF" : "#64748b"}
                  />
                  <Text
                    className={`ml-2 text-xs font-black font-sans ${
                      viewMode === "map" ? "text-[#1856FF]" : "text-slate-600"
                    }`}
                  >
                    지도 보기
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => onSelectViewMode("list")}
                  activeOpacity={0.8}
                  className={`flex-1 flex-row items-center justify-center py-2.5 rounded-xl ${
                    viewMode === "list" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <ListIcon
                    size={16}
                    color={viewMode === "list" ? "#1856FF" : "#64748b"}
                  />
                  <Text
                    className={`ml-2 text-xs font-black font-sans ${
                      viewMode === "list" ? "text-[#1856FF]" : "text-slate-600"
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
                    ? "bg-blue-50 border-blue-300"
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
                  className={`w-5 h-5 rounded-full items-center justify-center ${
                    sortByDistance ? "bg-[#1856FF]" : "bg-slate-300"
                  }`}
                >
                  <Text className="text-[10px] font-black text-white">
                    {sortByDistance ? "ON" : "OFF"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Drawer Footer */}
          <View className="p-4 bg-slate-50 border-t border-slate-200">
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.8}
              className="bg-[#1856FF] py-3.5 rounded-2xl items-center justify-center shadow-md active:scale-98"
            >
              <Text className="text-sm font-black text-white font-sans">
                선택 완료 및 지도 보기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
