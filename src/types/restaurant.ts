export interface MenuItem {
  name: string;
  price: string;
  isSignature?: boolean;
  description?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
}

export interface Restaurant {
  id: string;
  name: string;
  category: "all" | "korean" | "cafe" | "japanese" | "western" | "chinese";
  categoryLabel: string;
  location: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  reviews: number;
  image: string;
  phone: string;
  tags: string[];
  distance: string;
  distanceMeters?: number;
  hotelDistanceInfo: string; // 해운대 씨클라우드 호텔 기준 거리 및 소요시간
  operatingHours: string; // 영업시간 및 휴무일
  todayHours: string;
  breakTime?: string;
  lastOrder?: string;
  holiday: string;
  highlight: string;
  reviewSummary: string[]; // 영상 속 상세 리뷰 및 메뉴 평
  menuItems: MenuItem[]; // 메뉴 목록
  reviewsList: ReviewItem[]; // 방문자 리뷰 목록
}

export interface MapRegion {
  latitude: number;
  longitude: number;
  zoom: number;
}
