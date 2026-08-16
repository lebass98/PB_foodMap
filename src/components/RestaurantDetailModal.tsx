import React from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
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
  Navigation,
  ExternalLink,
  Clock,
  Car,
  PlayCircle,
  ChevronRight,
} from "lucide-react-native";
import { Restaurant } from "../types/restaurant";
import { openNaverMapNavigation } from "../utils/navigationApp";

interface RestaurantDetailModalProps {
  visible: boolean;
  restaurant: Restaurant | null;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onClose: () => void;
  onStartRoute: (restaurant: Restaurant) => void;
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
        message: `[부산 맛집] ${restaurant.name}\n위치: ${restaurant.address}\n${restaurant.hotelDistanceInfo}\n\n${restaurant.highlight}`,
      });
    } catch (e) {}
  };

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

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Hero Image Section */}
          <View className="relative w-full h-80 bg-slate-100">
            <Image
              source={{ uri: restaurant.image }}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </View>

          {/* Main Content Canvas */}
          <View className="relative -mt-6 bg-white rounded-t-[32px] pt-6 px-5 flex flex-col gap-5">
            {/* Header: Title, Rating, Address */}
            <View>
              <View className="flex-row justify-between items-start">
                <Text className="text-2xl font-black text-slate-900 flex-1 mr-3 font-sans">
                  {restaurant.name}
                </Text>
                <View className="bg-orange-500 px-3 py-1 rounded-full flex-row items-center shadow-sm shadow-orange-200">
                  <Star size={14} color="#ffffff" fill="#ffffff" />
                  <Text className="text-sm font-bold text-white ml-1 font-sans">
                    {restaurant.rating}
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center mt-2">
                <MapPin size={15} color="#64748b" />
                <Text className="text-sm text-slate-600 ml-1 flex-1 font-sans">
                  {restaurant.address}
                </Text>
              </View>

              {/* Hotel Distance Info Badge */}
              <View className="bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100 mt-2.5 flex-row items-center self-start">
                <Car size={13} color="#ea580c" />
                <Text className="text-xs font-bold text-orange-700 ml-1.5 font-sans">
                  {restaurant.hotelDistanceInfo}
                </Text>
              </View>

              {/* Tags */}
              <View className="flex-row flex-wrap gap-1.5 mt-3">
                {restaurant.tags.map((tag, idx) => (
                  <View
                    key={idx}
                    className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60"
                  >
                    <Text className="text-xs font-medium text-slate-700 font-sans">
                      #{tag}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Quick Actions Row */}
            <View className="flex-row justify-between gap-3 border-b border-slate-100 pb-5">
              <TouchableOpacity
                onPress={handlePhoneCall}
                activeOpacity={0.8}
                className="flex-1 flex-col items-center justify-center py-3.5 bg-slate-50 rounded-2xl border border-slate-200/60 active:scale-95 shadow-sm"
              >
                <Phone size={20} color="#f97316" />
                <Text className="text-xs font-bold text-slate-800 mt-1.5 font-sans">
                  전화하기
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  onClose();
                  onStartRoute(restaurant);
                }}
                activeOpacity={0.8}
                className="flex-1 flex-col items-center justify-center py-3.5 bg-slate-50 rounded-2xl border border-slate-200/60 active:scale-95 shadow-sm"
              >
                <Navigation size={20} color="#3b82f6" />
                <Text className="text-xs font-bold text-slate-800 mt-1.5 font-sans">
                  차량 길찾기
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  openNaverMapNavigation({
                    name: restaurant.name,
                    latitude: restaurant.latitude,
                    longitude: restaurant.longitude,
                  })
                }
                activeOpacity={0.8}
                className="flex-1 flex-col items-center justify-center py-3.5 bg-slate-50 rounded-2xl border border-slate-200/60 active:scale-95 shadow-sm"
              >
                <ExternalLink size={20} color="#10b981" />
                <Text className="text-xs font-bold text-slate-800 mt-1.5 font-sans">
                  네이버맵
                </Text>
              </TouchableOpacity>
            </View>

            {/* Info Section (Hours & Status) */}
            <View className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col gap-3">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-1.5">
                  <Clock size={16} color="#f97316" />
                  <Text className="text-base font-bold text-slate-900 font-sans">
                    영업 정보
                  </Text>
                </View>
                <View className="bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  <Text className="text-xs font-bold text-emerald-600 font-sans">
                    영업 중
                  </Text>
                </View>
              </View>

              <View className="flex flex-col gap-2 text-sm text-slate-600 pl-6 border-l-2 border-orange-200 ml-1">
                <View className="flex-row justify-between">
                  <Text className="text-xs font-medium text-slate-500 font-sans">
                    영업 시간
                  </Text>
                  <Text className="text-xs font-bold text-slate-900 font-sans">
                    {restaurant.todayHours}
                  </Text>
                </View>

                {restaurant.breakTime && (
                  <View className="flex-row justify-between">
                    <Text className="text-xs font-medium text-slate-500 font-sans">
                      브레이크 타임
                    </Text>
                    <Text className="text-xs font-semibold text-slate-700 font-sans">
                      {restaurant.breakTime}
                    </Text>
                  </View>
                )}

                {restaurant.lastOrder && (
                  <View className="flex-row justify-between">
                    <Text className="text-xs font-medium text-slate-500 font-sans">
                      라스트 오더
                    </Text>
                    <Text className="text-xs font-semibold text-slate-700 font-sans">
                      {restaurant.lastOrder}
                    </Text>
                  </View>
                )}

                <View className="flex-row justify-between">
                  <Text className="text-xs font-medium text-slate-500 font-sans">
                    정기 휴무
                  </Text>
                  <Text className="text-xs font-bold text-orange-600 font-sans">
                    {restaurant.holiday}
                  </Text>
                </View>
              </View>
            </View>

            {/* Menu Section */}
            <View className="flex flex-col gap-3">
              <Text className="text-lg font-black text-slate-900 font-sans">
                대표 메뉴
              </Text>
              <View className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                {restaurant.menuItems.map((menu, idx) => (
                  <View
                    key={idx}
                    className={`p-4 ${
                      idx < restaurant.menuItems.length - 1
                        ? "border-b border-slate-200/60"
                        : ""
                    } ${menu.isSignature ? "bg-orange-50/40" : ""}`}
                  >
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center gap-2">
                        <Text className="text-sm font-bold text-slate-900 font-sans">
                          {menu.name}
                        </Text>
                        {menu.isSignature && (
                          <View className="bg-orange-500 px-2 py-0.5 rounded-full">
                            <Text className="text-[10px] font-bold text-white font-sans">
                              인기
                            </Text>
                          </View>
                        )}
                      </View>
                      <Text className="text-sm font-bold text-orange-600 font-sans">
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
            <View className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/80">
              <View className="flex-row items-center mb-2.5">
                <PlayCircle size={16} color="#dc2626" />
                <Text className="text-sm font-bold text-amber-950 ml-1.5 font-sans">
                  영상 속 상세 리뷰 & 메뉴 평 (타임스탬프)
                </Text>
              </View>
              <View className="space-y-1.5">
                {restaurant.reviewSummary.map((rev, idx) => (
                  <Text
                    key={idx}
                    className="text-xs text-amber-950 font-normal leading-relaxed font-sans mb-1"
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
                    <View className="w-8 h-8 rounded-full bg-orange-100 items-center justify-center">
                      <Text className="text-xs font-bold text-orange-600 font-sans">
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

        {/* Sticky Bottom Bar */}
        <View className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 p-4 pb-6 flex-row gap-3">
          <TouchableOpacity
            onPress={() =>
              openNaverMapNavigation({
                name: restaurant.name,
                latitude: restaurant.latitude,
                longitude: restaurant.longitude,
              })
            }
            activeOpacity={0.8}
            className="flex-1 bg-orange-500 py-4 rounded-2xl shadow-lg shadow-orange-200 flex-row items-center justify-center active:scale-[0.98]"
          >
            <Navigation size={18} color="#ffffff" />
            <Text className="text-sm font-black text-white ml-2 font-sans">
              네이버 내비로 길안내 시작 🧭
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
