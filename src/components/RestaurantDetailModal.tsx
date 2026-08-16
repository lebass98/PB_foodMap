import React from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Share,
  Alert,
} from "react-native";
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Star,
  MapPin,
  Phone,
  Clock,
  Car,
  PlayCircle,
  Route,
} from "lucide-react-native";
import { Place } from "../types/restaurant";

interface RestaurantDetailModalProps {
  visible: boolean;
  restaurant: Place | null;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onClose: () => void;
  onStartRoute: (restaurant: Place) => void;
}

export const RestaurantDetailModal: React.FC<RestaurantDetailModalProps> = ({
  visible,
  restaurant,
  isFavorite,
  onToggleFavorite,
  onClose,
  onStartRoute,
}) => {
  if (!restaurant) return null;

  const handlePhoneCall = () => {
    if (restaurant.phone) {
      Linking.openURL(`tel:${restaurant.phone}`).catch(() => {
        Alert.alert("전화 연결 실패", "전화 앱을 열 수 없습니다.");
      });
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `[표범여행] ${restaurant.name}\n위치: ${restaurant.address}\n${restaurant.hotelDistanceInfo}\n\n${restaurant.highlight}`,
      });
    } catch (e) {}
  };

  const handleShowMapRoute = () => {
    onClose();
    onStartRoute(restaurant);
  };

  const isAttraction = restaurant.mainType === "attraction";

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-white font-sans">
        {/* Floating Top Navigation Bar */}
        <View className="absolute top-0 left-0 right-0 z-50 flex-row items-center justify-between px-5 pt-3 pb-3 bg-white/80 backdrop-blur-md border-b border-slate-100/80">
          <TouchableOpacity
            onPress={onClose}
            activeOpacity={0.8}
            className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center shadow-sm"
          >
            <ArrowLeft size={20} color="#0f172a" />
          </TouchableOpacity>

          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              onPress={handleShare}
              activeOpacity={0.8}
              className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center shadow-sm"
            >
              <Share2 size={18} color="#0f172a" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onToggleFavorite(restaurant.id)}
              activeOpacity={0.8}
              className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center shadow-sm"
            >
              <Bookmark
                size={18}
                color={isFavorite ? "#f97316" : "#0f172a"}
                fill={isFavorite ? "#f97316" : "transparent"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110 }}
        >
          {/* Hero Image */}
          <View className="relative w-full h-80 bg-slate-100">
            <Image
              source={{ uri: restaurant.image }}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute bottom-4 left-5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex-row items-center">
              <Car size={13} color="#ffffff" />
              <Text className="text-xs font-bold text-white ml-1.5 font-sans">
                {restaurant.hotelDistanceInfo}
              </Text>
            </View>

            <View
              className={`absolute top-16 left-5 ${
                isAttraction ? "bg-sky-600" : "bg-orange-500"
              } px-3 py-1 rounded-full shadow-md`}
            >
              <Text className="text-xs font-black text-white font-sans">
                {isAttraction ? "🎡 가볼만한곳" : "🍽️ 맛집"}
              </Text>
            </View>
          </View>

          {/* Place Header Info */}
          <View className="px-5 pt-5 pb-6 border-b border-slate-100">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-2xl font-black text-slate-900 tracking-tight flex-1 mr-3 font-sans">
                {restaurant.name}
              </Text>
              <View className="flex-row items-center bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                <Star size={14} color="#f59e0b" fill="#f59e0b" />
                <Text className="text-xs font-black text-amber-900 ml-1 font-sans">
                  {restaurant.rating}
                </Text>
              </View>
            </View>

            <Text className="text-xs font-semibold text-orange-600 mb-2 font-sans">
              {restaurant.categoryLabel} · {restaurant.location}
            </Text>

            <Text className="text-sm text-slate-700 leading-relaxed font-medium mb-4 font-sans">
              {restaurant.highlight}
            </Text>

            {/* Tags */}
            <View className="flex-row flex-wrap gap-1.5 mb-4">
              {restaurant.tags.map((tag, idx) => (
                <View
                  key={idx}
                  className={`${
                    isAttraction
                      ? "bg-sky-50 border-sky-200"
                      : "bg-orange-50 border-orange-200"
                  } px-2.5 py-1 rounded-lg border`}
                >
                  <Text
                    className={`text-xs font-semibold ${
                      isAttraction ? "text-sky-800" : "text-orange-700"
                    } font-sans`}
                  >
                    #{tag}
                  </Text>
                </View>
              ))}
            </View>

            {/* Quick Action Buttons */}
            <View className="flex-row gap-2.5 pt-2">
              <TouchableOpacity
                onPress={handlePhoneCall}
                activeOpacity={0.8}
                className="flex-1 bg-slate-50 border border-slate-200 py-3 rounded-2xl flex-row items-center justify-center"
              >
                <Phone size={16} color="#0f172a" />
                <Text className="text-xs font-bold text-slate-800 ml-1.5 font-sans">
                  전화 걸기
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleShowMapRoute}
                activeOpacity={0.8}
                className={`flex-1 ${
                  isAttraction
                    ? "bg-sky-50 border-sky-200"
                    : "bg-orange-50 border-orange-200"
                } border py-3 rounded-2xl flex-row items-center justify-center`}
              >
                <Route
                  size={16}
                  color={isAttraction ? "#0284c7" : "#ea580c"}
                />
                <Text
                  className={`text-xs font-bold ${
                    isAttraction ? "text-sky-700" : "text-orange-600"
                  } ml-1.5 font-sans`}
                >
                  지도 경로 보기
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Detailed Info Sections */}
          <View className="px-5 py-6 flex flex-col gap-6">
            {/* Address & Operating Hours Card */}
            <View className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col gap-3">
              <View className="flex-row items-start">
                <MapPin size={16} color="#64748b" className="mt-0.5" />
                <View className="flex-1 ml-2.5">
                  <Text className="text-xs font-bold text-slate-900 font-sans">
                    주소
                  </Text>
                  <Text className="text-xs text-slate-600 mt-0.5 font-sans">
                    {restaurant.address}
                  </Text>
                </View>
              </View>

              <View className="h-px bg-slate-200/60" />

              <View className="flex-row items-start">
                <Clock size={16} color="#64748b" className="mt-0.5" />
                <View className="flex-1 ml-2.5">
                  <Text className="text-xs font-bold text-slate-900 font-sans">
                    이용 / 영업시간 및 휴무일
                  </Text>
                  <Text className="text-xs text-slate-600 mt-0.5 font-sans">
                    {restaurant.operatingHours}
                  </Text>
                  {restaurant.breakTime && (
                    <Text className="text-[11px] text-amber-600 mt-1 font-sans">
                      브레이크타임: {restaurant.breakTime}
                    </Text>
                  )}
                  {restaurant.lastOrder && (
                    <Text className="text-[11px] text-slate-500 font-sans">
                      라스트오더: {restaurant.lastOrder}
                    </Text>
                  )}
                </View>
              </View>
            </View>

            {/* Menu / Admission Pricing Section */}
            <View className="flex flex-col gap-3">
              <Text className="text-lg font-black text-slate-900 font-sans">
                {isAttraction ? "이용 요금 & 주요 코스" : "대표 메뉴 & 가격"}
              </Text>
              <View className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col gap-3">
                {restaurant.menuItems.map((menu, index) => (
                  <View
                    key={index}
                    className={`pb-3 ${
                      index !== restaurant.menuItems.length - 1
                        ? "border-b border-slate-200/60"
                        : ""
                    }`}
                  >
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center flex-1 mr-2">
                        {menu.isSignature && (
                          <View
                            className={`${
                              isAttraction ? "bg-sky-600" : "bg-orange-500"
                            } px-1.5 py-0.5 rounded mr-1.5`}
                          >
                            <Text className="text-[10px] font-bold text-white font-sans">
                              대표
                            </Text>
                          </View>
                        )}
                        <Text className="text-sm font-bold text-slate-900 font-sans">
                          {menu.name}
                        </Text>
                      </View>
                      <Text
                        className={`text-sm font-black ${
                          isAttraction ? "text-sky-700" : "text-orange-600"
                        } font-sans`}
                      >
                        {menu.price}
                      </Text>
                    </View>
                    {menu.description && (
                      <Text className="text-xs text-slate-500 mt-1 font-sans">
                        {menu.description}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </View>

            {/* Video Timestamp Review Section */}
            <View
              className={`${
                isAttraction
                  ? "bg-sky-50/80 border-sky-200/80"
                  : "bg-amber-50/80 border-amber-200/80"
              } rounded-2xl p-4 border`}
            >
              <View className="flex-row items-center mb-2.5">
                <PlayCircle
                  size={16}
                  color={isAttraction ? "#0284c7" : "#dc2626"}
                />
                <Text
                  className={`text-sm font-bold ${
                    isAttraction ? "text-sky-950" : "text-amber-950"
                  } ml-1.5 font-sans`}
                >
                  {isAttraction
                    ? "영상 속 상세 리뷰 & 여행 꿀팁 (타임스탬프)"
                    : "영상 속 상세 리뷰 & 메뉴 평 (타임스탬프)"}
                </Text>
              </View>
              <View className="space-y-1.5">
                {restaurant.reviewSummary.map((rev, idx) => (
                  <Text
                    key={idx}
                    className={`text-xs ${
                      isAttraction ? "text-sky-950" : "text-amber-950"
                    } font-normal leading-relaxed font-sans mb-1`}
                  >
                    • {rev}
                  </Text>
                ))}
              </View>
            </View>

            {/* Visitor Reviews Section */}
            <View className="flex flex-col gap-3">
              <View className="flex-row justify-between items-end">
                <Text className="text-lg font-black text-slate-900 font-sans">
                  방문자 리뷰
                </Text>
                <Text className="text-xs font-bold text-orange-600 font-sans">
                  리뷰 {restaurant.reviews}개 전체보기 &gt;
                </Text>
              </View>

              {restaurant.reviewsList.map((review) => (
                <View
                  key={review.id}
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col gap-2.5"
                >
                  <View className="flex-row items-center gap-2.5">
                    <View
                      className={`w-8 h-8 rounded-full ${
                        isAttraction ? "bg-sky-100" : "bg-orange-100"
                      } items-center justify-center`}
                    >
                      <Text
                        className={`text-xs font-bold ${
                          isAttraction ? "text-sky-700" : "text-orange-600"
                        } font-sans`}
                      >
                        {review.author[0]}
                      </Text>
                    </View>
                    <View className="flex-1">
                      <Text className="text-xs font-bold text-slate-900 font-sans">
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
                    <Text className="text-[11px] text-slate-400 font-sans">
                      {review.date}
                    </Text>
                  </View>
                  <Text className="text-xs text-slate-700 leading-relaxed font-sans">
                    {review.content}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Sticky Bottom Bar: Show Route on Map */}
        <View className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 p-4 pb-6 flex-row gap-3">
          <TouchableOpacity
            onPress={handleShowMapRoute}
            activeOpacity={0.8}
            className={`flex-1 ${
              isAttraction
                ? "bg-sky-600 shadow-sky-200"
                : "bg-orange-500 shadow-orange-200"
            } py-4 rounded-2xl shadow-lg flex-row items-center justify-center active:scale-[0.98]`}
          >
            <Route size={18} color="#ffffff" />
            <Text className="text-sm font-black text-white ml-2 font-sans">
              지도에서 가는 길 & 소요시간 확인 🗺️
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
