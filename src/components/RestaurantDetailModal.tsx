import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  Share,
  Platform,
} from "react-native";
import {
  X,
  Star,
  MapPin,
  Clock,
  Phone,
  Share2,
  Bookmark,
  Car,
  PlayCircle,
  ArrowLeft,
  Navigation,
  Route,
} from "lucide-react-native";
import { Place } from "../types/restaurant";

interface RestaurantDetailModalProps {
  restaurant: Place | null;
  visible: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onShowRoute?: (place: Place) => void;
  onStartRoute?: (place: Place) => void | Promise<void>;
}

export const RestaurantDetailModal: React.FC<RestaurantDetailModalProps> = ({
  restaurant,
  visible,
  onClose,
  isFavorite,
  onToggleFavorite,
  onShowRoute,
  onStartRoute,
}) => {
  if (!restaurant) return null;

  const handlePhoneCall = () => {
    if (restaurant.phone) {
      Linking.openURL(`tel:${restaurant.phone}`);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        title: `[Glory Travel] ${restaurant.name}`,
        message: `[Glory Travel 부산 여행 추천]\n📍 ${restaurant.name} (${restaurant.categoryLabel})\n🌟 별점: ${restaurant.rating} / 리뷰: ${restaurant.reviews}개\n🚗 호텔에서: ${restaurant.hotelDistanceInfo}\n💡 요약: ${restaurant.highlight}\n주소: ${restaurant.address}`,
      });
    } catch (error) {
      console.log("공유 오류:", error);
    }
  };

  const handleShowMapRoute = () => {
    onClose();
    if (onStartRoute) {
      onStartRoute(restaurant);
    } else if (onShowRoute) {
      onShowRoute(restaurant);
    }
  };

  const isParking = restaurant.mainType === "parking";
  const isAttraction = restaurant.mainType === "attraction";

  const typeConfig = isParking
    ? {
        gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
        label: "🅿️ 공영주차장",
        tagBg: "rgba(5, 150, 105, 0.12)",
        tagBorder: "border-emerald-200/80",
        tagText: "text-emerald-700",
        btnGradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
      }
    : isAttraction
    ? {
        gradient: "linear-gradient(135deg, #1856FF 0%, #8B5CF6 100%)",
        label: "🎡 가볼만한곳",
        tagBg: "rgba(24, 86, 255, 0.12)",
        tagBorder: "border-blue-200/80",
        tagText: "text-[#1856FF]",
        btnGradient: "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)",
      }
    : {
        gradient: "linear-gradient(135deg, #FF6B4A 0%, #F59E0B 100%)",
        label: "🍽️ 맛집",
        tagBg: "rgba(255, 107, 74, 0.12)",
        tagBorder: "border-orange-200/80",
        tagText: "text-[#CE7636]",
        btnGradient: "linear-gradient(135deg, #FF6B4A 0%, #F59E0B 100%)",
      };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/40 backdrop-blur-md flex-col justify-end items-center">
        {/* Backdrop Touchable to Close */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          className="absolute inset-0 w-full h-full"
        />

        {/* Floating Ultra-Transparent Frosted Glass Modal Sheet */}
        <View
          style={{
            background: "rgba(255, 255, 255, 0.52)",
            backdropFilter: "blur(30px) saturate(200%)",
            WebkitBackdropFilter: "blur(30px) saturate(200%)",
          } as any}
          className="w-full max-w-2xl h-[90%] rounded-t-[36px] overflow-hidden border-t border-x border-white/70 shadow-2xl flex-col relative z-20"
        >
          {/* Top Handle / Grab Bar */}
          <View className="w-full items-center pt-2.5 pb-1">
            <View className="w-12 h-1.5 rounded-full bg-slate-400/60" />
          </View>

          {/* Floating Frosted Glass Top Navigation Bar */}
          <View
            style={{
              background: "rgba(255, 255, 255, 0.40)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            } as any}
            className="flex-row items-center justify-between px-5 pt-2 pb-3 border-b border-white/50 shadow-xs z-30"
          >
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.8}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 items-center justify-center shadow-sm active:scale-95"
            >
              <ArrowLeft size={20} color="#141414" />
            </TouchableOpacity>

            <View className="flex-row items-center gap-2">
              <TouchableOpacity
                onPress={handleShare}
                activeOpacity={0.8}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 items-center justify-center shadow-sm active:scale-95"
              >
                <Share2 size={18} color="#141414" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => onToggleFavorite(restaurant.id)}
                activeOpacity={0.8}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 items-center justify-center shadow-sm active:scale-95"
              >
                <Bookmark
                  size={18}
                  color={isFavorite ? "#1856FF" : "#141414"}
                  fill={isFavorite ? "#1856FF" : "transparent"}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Scrollable Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
            className="flex-1"
          >
            {/* Hero Image with Frosted Gradient Overlays */}
            <View className="relative w-full h-80 bg-slate-100">
              <Image
                source={{ uri: restaurant.image }}
                className="w-full h-full"
                resizeMode="cover"
              />
              {/* Luminous Distance Badge */}
              <View className="absolute bottom-4 left-5 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full flex-row items-center border border-white/20 shadow-lg">
                <Car size={13} color="#FFFFFF" />
                <Text className="text-xs font-bold text-white ml-1.5 font-sans">
                  {restaurant.hotelDistanceInfo}
                </Text>
              </View>

              {/* Category Tag Badge with Vivid Gradient */}
              <View
                style={{ background: typeConfig.gradient } as any}
                className="absolute top-16 left-5 px-3 py-1 rounded-full shadow-lg border border-white/30"
              >
                <Text className="text-xs font-black text-white font-sans">
                  {typeConfig.label}
                </Text>
              </View>
            </View>

            {/* Place Header Info Card (Ultra-Transparent Frosted Glass) */}
            <View
              style={{
                background: "rgba(255, 255, 255, 0.48)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              } as any}
              className="px-5 pt-5 pb-6 border-b border-white/60 shadow-xs"
            >
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-2xl font-black text-[#141414] tracking-tight flex-1 mr-3 font-sans">
                  {restaurant.name}
                </Text>
                <View className="flex-row items-center bg-amber-50/90 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-200/80 shadow-sm">
                  <Star size={14} color="#f59e0b" fill="#f59e0b" />
                  <Text className="text-xs font-black text-amber-900 ml-1 font-sans">
                    {restaurant.rating}
                  </Text>
                </View>
              </View>

              <Text className="text-xs font-bold text-[#1856FF] mb-2.5 font-sans">
                {restaurant.categoryLabel} · {restaurant.location}
              </Text>

              <Text className="text-sm text-slate-800 leading-relaxed font-medium mb-4 font-sans">
                {restaurant.highlight}
              </Text>

              {/* Tags (Glass Pills) */}
              <View className="flex-row flex-wrap gap-1.5 mb-4">
                {restaurant.tags.map((tag, idx) => (
                  <View
                    key={idx}
                    style={{ background: typeConfig.tagBg } as any}
                    className={`${typeConfig.tagBorder} px-2.5 py-1 rounded-lg border backdrop-blur-sm shadow-xs`}
                  >
                    <Text
                      className={`text-xs font-bold ${typeConfig.tagText} font-sans`}
                    >
                      #{tag}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Quick Action Buttons (Call & Route with Gradient) */}
              <View className="flex-row gap-2.5 pt-2">
                <TouchableOpacity
                  onPress={handlePhoneCall}
                  activeOpacity={0.8}
                  className="flex-1 bg-white/80 backdrop-blur-xl border border-white/80 py-3.5 rounded-2xl flex-row items-center justify-center shadow-sm active:scale-98"
                >
                  <Phone size={16} color="#141414" />
                  <Text className="text-xs font-bold text-[#141414] ml-1.5 font-sans">
                    전화 걸기
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleShowMapRoute}
                  activeOpacity={0.8}
                  style={{ background: typeConfig.btnGradient } as any}
                  className="flex-1 py-3.5 rounded-2xl flex-row items-center justify-center shadow-md border border-white/30 active:scale-98"
                >
                  <Route size={16} color="#ffffff" />
                  <Text className="text-xs font-black text-white ml-1.5 font-sans">
                    지도 경로 보기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Detailed Info Sections with Ultra-Transparent Glass Containers */}
            <View className="px-5 py-6 flex flex-col gap-6">
              {/* Address & Operating Hours Glass Card */}
              <View
                style={{
                  background: "rgba(255, 255, 255, 0.52)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                } as any}
                className="rounded-3xl p-5 border border-white/70 shadow-card flex flex-col gap-3.5"
              >
                <View className="flex-row items-start">
                  <MapPin size={16} color={isParking ? "#059669" : "#1856FF"} className="mt-0.5" />
                  <View className="flex-1 ml-2.5">
                    <Text className="text-xs font-bold text-[#141414] font-sans">
                      주소
                    </Text>
                    <Text className="text-xs text-slate-700 mt-0.5 font-sans leading-relaxed">
                      {restaurant.address}
                    </Text>
                  </View>
                </View>

                <View className="h-px bg-white/60" />

                <View className="flex-row items-start">
                  <Clock size={16} color={isParking ? "#059669" : "#1856FF"} className="mt-0.5" />
                  <View className="flex-1 ml-2.5">
                    <Text className="text-xs font-bold text-[#141414] font-sans">
                      {isParking ? "운영시간 및 휴무일" : "이용 / 영업시간 및 휴무일"}
                    </Text>
                    <Text className="text-xs text-slate-700 mt-0.5 font-sans leading-relaxed">
                      {restaurant.operatingHours}
                    </Text>
                    {restaurant.breakTime && (
                      <Text className="text-[11px] font-semibold text-amber-700 mt-1 font-sans">
                         브레이크타임: {restaurant.breakTime}
                      </Text>
                    )}
                    {restaurant.lastOrder && (
                      <Text className="text-[11px] text-slate-600 font-sans">
                        라스트오더: {restaurant.lastOrder}
                      </Text>
                    )}
                  </View>
                </View>
              </View>

              {/* Menu / Admission Pricing Glass Card */}
              <View className="flex flex-col gap-3">
                <Text className="text-lg font-black text-[#141414] font-sans">
                  {isParking
                    ? "주차 요금 & 할인 혜택"
                    : isAttraction
                      ? "이용 요금 & 주요 코스"
                      : "대표 메뉴 & 가격"}
                </Text>
                <View
                  style={{
                    background: "rgba(255, 255, 255, 0.52)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  } as any}
                  className="rounded-3xl p-5 border border-white/70 shadow-card flex flex-col gap-3.5"
                >
                  {restaurant.menuItems.map((menu, index) => (
                    <View
                      key={index}
                      className={`pb-3.5 ${index !== restaurant.menuItems.length - 1
                          ? "border-b border-white/60"
                          : ""
                        }`}
                    >
                      <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center flex-1 mr-2">
                          {menu.isSignature && (
                            <View
                              style={{
                                background: isParking
                                  ? "linear-gradient(135deg, #059669 0%, #10B981 100%)"
                                  : "linear-gradient(135deg, #1856FF 0%, #3B82F6 100%)",
                              } as any}
                              className="px-1.5 py-0.5 rounded shadow-xs mr-1.5"
                            >
                              <Text className="text-[10px] font-black text-white font-sans">
                                {isParking ? "기본" : "대표"}
                              </Text>
                            </View>
                          )}
                          <Text className="text-sm font-bold text-[#141414] font-sans">
                            {menu.name}
                          </Text>
                        </View>
                        <Text className={`text-sm font-black ${isParking ? "text-emerald-700" : "text-[#1856FF]"} font-sans`}>
                          {menu.price}
                        </Text>
                      </View>
                      {menu.description && (
                        <Text className="text-xs text-slate-600 mt-1 font-sans leading-relaxed">
                          {menu.description}
                        </Text>
                      )}
                    </View>
                  ))}
                </View>
              </View>

              {/* Video Timestamp / Parking Tips Review Glass Card (Transparent Blur Tint) */}
              <View
                style={{
                  background: isParking
                    ? "rgba(5, 150, 105, 0.12)"
                    : "rgba(24, 86, 255, 0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                } as any}
                className={`rounded-3xl p-5 border ${isParking ? "border-emerald-300/70" : "border-blue-300/70"} shadow-card`}
              >
                <View className="flex-row items-center mb-2.5">
                  <PlayCircle size={17} color={isParking ? "#059669" : "#1856FF"} />
                  <Text className="text-sm font-bold text-slate-900 ml-1.5 font-sans">
                    {isParking
                      ? "주차 요금 체계 & 인근 연계 명소 (1km 반경)"
                      : isAttraction
                        ? "영상 속 상세 리뷰 & 여행 꿀팁 (타임스탬프)"
                        : "영상 속 상세 리뷰 & 메뉴 평 (타임스탬프)"}
                  </Text>
                </View>
                <View className="space-y-1.5">
                  {restaurant.reviewSummary.map((rev, idx) => (
                    <Text
                      key={idx}
                      className="text-xs text-slate-800 font-medium leading-relaxed font-sans mb-1"
                    >
                      • {rev}
                    </Text>
                  ))}
                </View>
              </View>

              {/* Visitor Reviews Section */}
              <View className="flex flex-col gap-3">
                <View className="flex-row justify-between items-end">
                  <Text className="text-lg font-black text-[#141414] font-sans">
                    방문자 리뷰
                  </Text>
                  <Text className="text-xs font-bold text-[#1856FF] font-sans">
                    리뷰 {restaurant.reviews}개 전체보기 &gt;
                  </Text>
                </View>

                {restaurant.reviewsList.map((review) => (
                  <View
                    key={review.id}
                    style={{
                      background: "rgba(255, 255, 255, 0.52)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    } as any}
                    className="rounded-3xl p-5 border border-white/70 shadow-card flex flex-col gap-2.5"
                  >
                    <View className="flex-row items-center gap-2.5">
                      <View className="w-8 h-8 rounded-full bg-blue-100/90 items-center justify-center">
                        <Text className="text-xs font-bold text-[#1856FF] font-sans">
                          {review.author[0]}
                        </Text>
                      </View>
                      <View className="flex-1">
                        <Text className="text-xs font-bold text-[#141414] font-sans">
                          {review.author}
                        </Text>
                        <View className="flex-row items-center mt-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={11}
                              color="#f59e0b"
                              fill="#f59e0b"
                            />
                          ))}
                        </View>
                      </View>
                      <Text className="text-[11px] text-slate-500 font-sans">
                        {review.date}
                      </Text>
                    </View>
                    <Text className="text-xs text-slate-800 leading-relaxed font-sans">
                      {review.content}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Sticky Bottom Bar: Show Route on Map with Vivid Glass Gradient */}
          <View
            style={{
              background: "rgba(255, 255, 255, 0.50)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            } as any}
            className="absolute bottom-0 left-0 right-0 border-t border-white/60 p-4 pb-6 flex-row gap-3 shadow-modal"
          >
            <TouchableOpacity
              onPress={handleShowMapRoute}
              activeOpacity={0.85}
              style={{
                background: "linear-gradient(135deg, #1856FF 0%, #3B82F6 50%, #6366F1 100%)",
              } as any}
              className="flex-1 py-4 rounded-2xl shadow-xl shadow-blue-500/30 border border-white/30 flex-row items-center justify-center active:scale-[0.98]"
            >
              <Navigation size={18} color="#ffffff" />
              <Text className="text-sm font-black text-white ml-2 font-sans">
                지도에서 가는 길 & 소요시간 확인 🗺️
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
