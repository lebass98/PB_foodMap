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

export type MainSectionType = "all" | "food" | "attraction" | "parking";

export interface Place {
  id: string;
  name: string;
  mainType: "food" | "attraction" | "parking"; // 맛집 vs 가볼만한곳 vs 주차장
  category: string; // 한식, 일식, 중식, 베이커리, 해변, 전망대, 테마파크, 야경 등
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
  userDistanceNum?: number;
  hotelDistanceInfo: string; // 해운대 씨클라우드 호텔 기준 거리 및 소요시간
  operatingHours: string; // 영업시간 및 휴무일 / 관람시간
  todayHours: string;
  breakTime?: string;
  lastOrder?: string;
  holiday: string;
  highlight: string;
  reviewSummary: string[]; // 영상 속 상세 리뷰 및 꿀팁 (타임스탬프)
  menuItems: MenuItem[]; // 대표 메뉴 or 주요 체험/입장권 정보
  reviewsList: ReviewItem[]; // 방문자 리뷰 목록
}

export type Restaurant = Place;

export interface MapRegion {
  latitude: number;
  longitude: number;
  zoom: number;
}
