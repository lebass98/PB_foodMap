import { Place } from "../types/restaurant";

export const SAMPLE_PLACES: Place[] = [
  // =========================================================================
  // 🍽️ [맛집 BEST 15] - 부산 12대 핫플 + 고속도로/경유 맛집 3곳
  // =========================================================================
  {
    id: "f1",
    name: "새재할매집 (문경새재IC)",
    mainType: "food",
    category: "korean",
    categoryLabel: "한식/약돌돼지석쇠구이",
    location: "경북 문경시 문경읍 (문경새재IC 5분)",
    address: "경북 문경시 문경읍 새재로 922",
    latitude: 36.7621,
    longitude: 128.0772,
    rating: 4.8,
    reviews: 820,
    phone: "054-571-5600",
    image: require("../../assets/saejae_halmae.png"),
    tags: ["문경새재IC5분", "40년전통", "약돌돼지석쇠구이", "더덕구이", "고속도로경유맛집"],
    distance: "시흥 162km / 부산 233km",
    hotelDistanceInfo: "시흥 출발 약 162km (1시간 50분) · 해운대까지 약 233km (2시간 40분)",
    operatingHours: "11:00 ~ 19:00 (주말 ~20:00) · 연중무휴",
    todayHours: "11:00 - 19:00",
    holiday: "연중무휴",
    highlight: "시흥➔부산 가는 길 문경새재IC 5분! 40년 전통 불향 가득 약돌돼지 고추장 석쇠구이와 산채나물",
    reviewSummary: [
      "40년 전통의 문경새재 대표 노포",
      "불향 가득 머금은 약돌돼지 석쇠구이와 정갈한 산채나물 반찬이 일품",
      "시흥 은행동 출발 약 1시간 50분 지점으로 점심 식사 경유지로 최적",
    ],
    menuItems: [
      {
        name: "고추장양념 석쇠구이 정식 (시그니처)",
        price: "15,000원",
        isSignature: true,
        description: "문경 특산 약돌돼지에 매콤달콤 고추장 양념을 발라 숯불에 구워낸 석쇠구이",
      },
      {
        name: "더덕구이 정식",
        price: "16,000원",
        description: "향긋한 자연산 더덕을 양념해 숯불에 구운 건강 보양식",
      },
    ],
    reviewsList: [
          {
                id: "r_f1_1",
                author: "강민수",
                date: "3일 전",
                rating: 5,
                content: "부산 가는 길에 문경새재IC에서 빠져서 들렀는데 불향 가득한 약돌돼지 석쇠구이가 일품입니다. 나물 반찬도 정갈하고 밥도둑이에요."
          },
          {
                id: "r_f1_2",
                author: "Traveler_K",
                date: "1주 전",
                rating: 5,
                content: "40년 전통이 느껴지는 깊은 맛! 더덕구이 향이 너무 좋고 고추장 양념 석쇠구이와 쌈 싸먹으면 운전 피로가 싹 풀립니다."
          },
          {
                id: "r_f1_3",
                author: "박서현",
                date: "2주 전",
                rating: 5,
                content: "고속도로 휴게소 대신 나와서 먹길 정말 잘했어요. 주차 편하고 매장도 넓어서 가족 식사로 대만족했습니다."
          },
          {
                id: "r_f1_4",
                author: "이진호",
                date: "3주 전",
                rating: 4,
                content: "불맛이 확 살아있고 고기가 야들야들합니다. 주말 점심엔 웨이팅 살짝 있지만 회전율 빨라요."
          },
          {
                id: "r_f1_5",
                author: "Kim_DY",
                date: "1달 전",
                rating: 5,
                content: "약돌돼지라 그런지 잡내 하나 없이 쫄깃합니다. 된장찌개도 시골 된장 맛이라 밥 두 공기 비웠네요."
          }
    ],
  },
  {
    id: "f2",
    name: "교리김밥 본점 (경주IC)",
    mainType: "food",
    category: "korean",
    categoryLabel: "분식/전국3대김밥",
    location: "경북 경주시 탑동 (경주IC 6분)",
    address: "경북 경주시 탑리3길 2 (탑동)",
    latitude: 35.8239,
    longitude: 129.2178,
    rating: 4.8,
    reviews: 2150,
    phone: "054-772-5130",
    image: require("../../assets/gyori_kimbap.jpg"),
    tags: ["경주IC6분", "전국3대김밥", "계란지단김밥", "교리국수", "차안간식포장"],
    distance: "시흥 332km / 부산 73km",
    hotelDistanceInfo: "시흥 출발 약 332km (3시간 38분) · 해운대까지 약 73km (약 55분)",
    operatingHours: "08:30 ~ 17:30 (주말 ~18:30) · 매주 수요일 정기휴무",
    todayHours: "08:30 - 17:30",
    holiday: "매주 수요일 정기휴무",
    highlight: "경주IC 6분 거리! 얇게 썬 고소한 계란지단이 가득 찬 전국 3대 김밥, 부산 가는 길 차 안 간식 포장 추천",
    reviewSummary: [
      "얇게 썬 고소한 계란지단이 가득 찬 전국 3대 김밥집",
      "부산 가는 길에 차 안 간식용으로 포장하기에 최적",
      "진한 멸치 육수의 교리국수와 조합 추천",
    ],
    menuItems: [
      {
        name: "교리김밥 (2줄 / 시그니처)",
        price: "11,000원",
        isSignature: true,
        description: "부드럽고 푹신한 계란지단이 꽉 찬 전국 3대 명품 김밥",
      },
      {
        name: "교리국수",
        price: "8,500원",
        description: "진한 멸치 육수에 지단과 양념장이 올라간 온국수",
      },
    ],
    reviewsList: [
          {
                id: "r_f2_1",
                author: "최유진",
                date: "2일 전",
                rating: 5,
                content: "계란지단이 김밥의 80%를 차지하는데 전혀 느끼하지 않고 고소하고 짭조름합니다. 차 안에서 부산 가면서 먹기 딱 좋아요!"
          },
          {
                id: "r_f2_2",
                author: "김현우",
                date: "5일 전",
                rating: 5,
                content: "경주IC 바로 근처라 동선 최고입니다. 교리국수 국물도 멸치 향 진하고 김밥이랑 환상 조합이네요."
          },
          {
                id: "r_f2_3",
                author: "Soo_B",
                date: "1주 전",
                rating: 4,
                content: "전국 3대 김밥 명성답게 폭신폭신한 계란 식감이 매력적입니다. 포장 대기 줄이 길어도 금방 줄어듭니다."
          },
          {
                id: "r_f2_4",
                author: "정성훈",
                date: "2주 전",
                rating: 5,
                content: "아침 일찍 오픈해서 부산 여행 출발할 때 브런치 간식으로 2줄 포장해서 먹으니 든든하네요."
          },
          {
                id: "r_f2_5",
                author: "이지은",
                date: "1달 전",
                rating: 5,
                content: "자극적이지 않고 계속 손이 가는 중독성 있는 맛. 경주 지날 때마다 필수 코스로 들릅니다."
          }
    ],
  },
  {
    id: "f3",
    name: "금천 아지매 보리밥 (청도/밀양IC)",
    mainType: "food",
    category: "korean",
    categoryLabel: "한식/시골보리밥",
    location: "경북 청도군 금천면 (밀양/남청도IC 방면)",
    address: "경북 청도군 금천면 금천로 471",
    latitude: 35.6989,
    longitude: 128.8789,
    rating: 4.7,
    reviews: 640,
    phone: "054-372-9092",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=900&q=85",
    tags: ["밀양남청도IC방면", "푸짐한시골밥상", "보리밥정식", "촌두부파전", "구수한촌된장"],
    distance: "시흥 328km / 부산 78km",
    hotelDistanceInfo: "시흥 출발 약 328km (3시간 40분) · 해운대까지 약 78km (1시간 5분)",
    operatingHours: "10:30 ~ 19:00 · 매달 2·4번째 월요일 정기휴무",
    todayHours: "10:30 - 19:00",
    holiday: "매달 2·4번째 월요일 정기휴무",
    highlight: "청도 현지인이 찾는 푸짐한 시골 밥상! 싱싱한 나물과 구수한 촌된장찌개, 촌두부로 속 편한 식사",
    reviewSummary: [
      "청도 현지인들이 찾는 푸짐한 시골 밥상",
      "싱싱한 나물과 구수한 촌된장찌개로 속 편하게 든든한 점심 식사 가능",
      "촌두부, 파전과 함께 즐기면 꿀조합",
    ],
    menuItems: [
      {
        name: "보리밥 정식 (시그니처)",
        price: "9,000원",
        isSignature: true,
        description: "각종 제철 산나물과 구수한 촌된장찌개 보리비빔밥",
      },
      {
        name: "촌두부",
        price: "8,000원",
        description: "직접 만든 고소하고 따뜻한 시골 촌두부와 겉절이",
      },
      {
        name: "해물파전",
        price: "10,000원",
        description: "바삭하고 두툼하게 부쳐낸 시골 파전",
      },
    ],
    reviewsList: [
          {
                id: "r_f3_1",
                author: "윤성민",
                date: "4일 전",
                rating: 5,
                content: "진짜 시골 할머니가 차려주신 것 같은 푸짐한 한상! 10가지가 넘는 나물과 강된장에 비벼 먹는 보리밥이 감동입니다."
          },
          {
                id: "r_f3_2",
                author: "한미경",
                date: "1주 전",
                rating: 5,
                content: "청도IC에서 8분 거리라 접근성 좋고 가성비 최고입니다. 촌두부와 도토리묵도 꼭 추가해서 드셔보세요."
          },
          {
                id: "r_f3_3",
                author: "오세훈",
                date: "2주 전",
                rating: 5,
                content: "부모님 모시고 갔는데 나물이 신선하고 짜지 않다고 너무 좋아하셨어요. 건강해지는 맛!"
          },
          {
                id: "r_f3_4",
                author: "Lee_JS",
                date: "3주 전",
                rating: 4,
                content: "고소한 참기름과 직접 담근 된장이 끝내줍니다. 숭늉으로 마무리하니 속이 아주 편안해요."
          },
          {
                id: "r_f3_5",
                author: "박준영",
                date: "1달 전",
                rating: 5,
                content: "부산 내려가기 전 든든하고 속 편한 한 끼로 최고였습니다. 밥과 반찬 리필도 친절하게 챙겨주세요."
          }
    ],
  },
  {
    id: "f4",
    name: "융캉찌에",
    mainType: "food",
    category: "chinese",
    categoryLabel: "대만음식/우육면",
    location: "부산 수영구 광안리",
    address: "부산 수영구 광안해변로277번길 10 1층",
    latitude: 35.1567,
    longitude: 129.1189,
    rating: 4.8,
    reviews: 428,
    phone: "051-751-2255",
    image: require("../../assets/yongkangjie.jpg"),
    tags: ["미쉐린 빕구르망", "블루리본", "우육탕면", "탄탄면", "가지튀김"],
    distance: "약 6.0km",
    hotelDistanceInfo: "거리: 약 6.0km · 차량 약 15~18분 (광안대교 경유)",
    operatingHours: "11:00 ~ 21:30 (B.T 15:00~16:00 / L.O 21:00) · 연중무휴",
    todayHours: "11:00 - 21:30",
    breakTime: "15:00 - 16:00",
    lastOrder: "21:00",
    holiday: "연중무휴 (정기휴무 없음)",
    highlight: "미쉐린 빕구르망 & 블루리본 선정, 타이베이 융캉제 골목 분위기를 그대로 재현한 대만 미식",
    reviewSummary: [
      "미쉐린 빕구르망 & 블루리본 선정 대만 음식점 [01:31]",
      "타이베이 미식거리 '융캉제' 골목 분위기를 그대로 재현함 [02:00]",
      "우육탕면: 진하게 우려낸 육수와 부드러운 고기가 일품 [02:12]",
      "탄탄면: 국물 없는 스타일로 고소함 뒤에 은근한 매콤함이 매력적 [02:12]",
      "마파두부덮밥: 몽글한 두부와 매콤짭조름한 양념의 조화 [02:25]",
      "가지튀김 & 오이무침: 겉바속촉 가지튀김과 새콤한 오이무침 추천 [02:25]",
    ],
    menuItems: [
      {
        name: "우육탕면 (시그니처)",
        price: "11,500원",
        isSignature: true,
        description: "12시간 푹 우려낸 깊은 대만식 사골 육수와 부드러운 아롱사태 수육",
      },
      {
        name: "탄탄면",
        price: "10,500원",
        description: "국물 없이 고소한 땅콩소스와 매콤한 고추기름이 어우러진 비빔면",
      },
      {
        name: "가지튀김",
        price: "7,500원",
        description: "바삭한 튀김옷 속 촉촉한 채즙이 터지는 특제 간장소스 가지튀김",
      },
      {
        name: "마파두부덮밥",
        price: "11,000원",
        description: "몽글몽글한 연두부와 사천식 매콤 소스의 든든한 덮밥",
      },
    ],
    reviewsList: [
          {
                id: "r_f4_1",
                author: "장원영",
                date: "1일 전",
                rating: 5,
                content: "미쉐린 빕구르망 선정될 만합니다! 타이베이 융캉제 현지 우육탕면보다 국물이 더 깊고 고기가 입에서 녹아요."
          },
          {
                id: "r_f4_2",
                author: "이승기",
                date: "3일 전",
                rating: 5,
                content: "가지튀김 겉바속촉 미쳤습니다. 탄탄면의 고소함과 마라향 밸런스도 완벽해서 광안리 올 때마다 필수 코스예요."
          },
          {
                id: "r_f4_3",
                author: "Hong_G",
                date: "1주 전",
                rating: 5,
                content: "광안리 해변 바로 근처라 위치도 좋고 레트로한 대만 분위기 인테리어가 여행 온 기분을 제대로 살려줍니다."
          },
          {
                id: "r_f4_4",
                author: "김수민",
                date: "2주 전",
                rating: 4,
                content: "돼지고기 덮밥(루로우판)과 레몬치킨도 꼭 드셔보세요. 웨이팅은 테이블링 걸어두면 수월합니다."
          },
          {
                id: "r_f4_5",
                author: "Park_TH",
                date: "3주 전",
                rating: 5,
                content: "면발이 쫄깃하고 국물이 느끼하지 않아 국물까지 싹 비웠습니다. 부산 최고의 대만 요리 맛집!"
          }
    ],
  },
  {
    id: "f5",
    name: "광안리 진미언양불고기",
    mainType: "food",
    category: "korean",
    categoryLabel: "한식/언양불고기",
    location: "부산 수영구 남천바다로",
    address: "부산 수영구 남천바다로33번길 7 (광안동)",
    latitude: 35.1485,
    longitude: 129.1126,
    rating: 4.9,
    reviews: 582,
    phone: "051-753-1632",
    image: require("../../assets/jinmi_bulgogi.jpg"),
    tags: ["44년 전통", "성시경 먹을텐데", "언양불고기", "김치찌개 별미"],
    distance: "약 8.0km",
    hotelDistanceInfo: "거리: 약 8.0km · 차량 약 18~22분 (광안대교 경유)",
    operatingHours: "11:00 ~ 22:00 (라스트오더 21:00) · 연중무휴",
    todayHours: "11:00 - 22:00",
    lastOrder: "21:00",
    holiday: "연중무휴 (명절 등 변동 가능)",
    highlight: "44년 전통의 추억 맛집이자 성시경 '먹을텐데' 극찬! 살살 녹는 언양불고기와 진득한 김치찌개",
    reviewSummary: [
      "44년 전통의 추억 맛집이자 성시경 '먹을텐데' 소개 맛집 [03:10, 03:39]",
      "언양불고기: 마늘양념의 감칠맛이 깊고, 불판에서 살짝 익혀 입에 넣으면 사르르 녹아내림 [04:07]",
      "김치찌개(진짜 별미): 김치찜과 찌개 중간의 진득한 국물에 푹 익은 김치 산미와 돼지고기 고소함 [04:47]",
      "김치찌개+된장찌개+계란찜 3종 세트 가성비 최고 [04:58]",
    ],
    menuItems: [
      {
        name: "언양불고기 (200g / 시그니처)",
        price: "33,000원",
        isSignature: true,
        description: "최상급 한우 암소를 마늘 특제 양념에 재워 숯불에 구워내는 사르르 녹는 불고기",
      },
      {
        name: "진미 김치찌개 (진짜 별미)",
        price: "8,000원",
        description: "김치찜과 찌개 중간의 진득한 국물에 푹 익은 김치 산미와 돼지고기의 진한 고소함",
      },
    ],
    reviewsList: [
          {
                id: "r_f5_1",
                author: "조민재",
                date: "2일 전",
                rating: 5,
                content: "광안리 언양불고기 원조다운 퀄리티! 참숯 향이 솔솔 배어있고 씹을수록 육즙이 팡팡 터집니다."
          },
          {
                id: "r_f5_2",
                author: "배수지",
                date: "4일 전",
                rating: 5,
                content: "이 집의 진정한 킥은 김치찌개입니다. 고기 다 먹고 칼칼한 찌개에 밥 비벼 먹으면 극락이에요."
          },
          {
                id: "r_f5_3",
                author: "송중기",
                date: "1주 전",
                rating: 5,
                content: "고기가 너무 부드러워서 아이들도 어르신도 잘 드십니다. 백김치와의 조화도 훌륭해요."
          },
          {
                id: "r_f5_4",
                author: "Jung_H",
                date: "2주 전",
                rating: 4,
                content: "직원분들이 직접 알맞게 구워주셔서 편하게 먹을 수 있어요. 주차장도 넓어서 접근성 좋습니다."
          },
          {
                id: "r_f5_5",
                author: "강다니엘",
                date: "1달 전",
                rating: 5,
                content: "달지 않고 담백한 양념이 한우 고기 본연의 맛을 살려줍니다. 광안리 오면 무조건 재방문하는 곳!"
          }
    ],
  },
  {
    id: "f6",
    name: "나가하마만게츠",
    mainType: "food",
    category: "japanese",
    categoryLabel: "일식/돈코츠라멘",
    location: "부산 해운대구 해리단길",
    address: "부산 해운대구 우동1로 57 대영빌딩 1층",
    latitude: 35.1633,
    longitude: 129.1610,
    rating: 4.9,
    reviews: 690,
    phone: "051-731-0886",
    image: require("../../assets/nagahama_mangetsu.png"),
    tags: ["미쉐린 가이드", "블루리본", "후쿠오카 정통", "야끼라멘", "수제교자"],
    distance: "약 1.4km",
    hotelDistanceInfo: "거리: 약 1.4km · 차량 약 5분 (도보 약 15~18분 가능)",
    operatingHours: "평일 11:00~20:30 (B.T 15:30~16:30) / 주말 브레이크타임 없음",
    todayHours: "11:00 - 20:30",
    breakTime: "15:30 - 16:30 (평일)",
    lastOrder: "20:00",
    holiday: "명절 당일 외 연중무휴",
    highlight: "미쉐린 가이드 & 블루리본 선정 후쿠오카 36년 전통 라멘집! 묵직한 돈코츠와 불향 야끼라멘",
    reviewSummary: [
      "미쉐린 가이드 & 블루리본 선정 후쿠오카 정통 라멘집 [05:58]",
      "돈코츠라멘: 잡내 없이 묵직하고 진한 육수에 얇은 면발의 조화 [05:58]",
      "야끼라멘: 국물 없이 볶아낸 면에 짭조름한 소스가 배어 맥주와 찰떡궁합 [06:20, 06:39]",
      "수제 교자 & 크림치즈: 육즙 가득한 교자와 후식 수제 크림치즈가 별미 [06:09, 06:53]",
    ],
    menuItems: [
      {
        name: "나가하마 라멘 (시그니처)",
        price: "10,000원",
        isSignature: true,
        description: "잡내 없이 묵직하고 진한 돈코츠 사골 육수에 얇고 꼬들한 면발",
      },
      {
        name: "야끼라멘 (볶음 라멘)",
        price: "11,000원",
        description: "국물 없이 볶아낸 면에 짭조름한 소스가 배어 맥주와 찰떡궁합인 불향 볶음면",
      },
    ],
    reviewsList: [
          {
                id: "r_f6_1",
                author: "신동엽",
                date: "1일 전",
                rating: 5,
                content: "후쿠오카 본점의 맛을 그대로 재현한 진한 돈코츠 라멘! 면 익힘 정도 선택 가능한 점도 정통 그대로입니다."
          },
          {
                id: "r_f6_2",
                author: "유재석",
                date: "3일 전",
                rating: 5,
                content: "차슈가 두툼하고 부드러우며 국물이 진득합니다. 교자만두 바삭함도 예술이에요."
          },
          {
                id: "r_f6_3",
                author: "Kim_Nara",
                date: "5일 전",
                rating: 5,
                content: "해운대 해리단길 1등 맛집 인정. 갓김치와 초생강 곁들여 먹으면 느끼함 제로입니다."
          },
          {
                id: "r_f6_4",
                author: "박보검",
                date: "2주 전",
                rating: 4,
                content: "오픈런 필수지만 그만한 가치가 충분합니다. 후식으로 주시는 수제 생초콜릿까지 완벽한 마무리!"
          },
          {
                id: "r_f6_5",
                author: "아이유",
                date: "3주 전",
                rating: 5,
                content: "국내에서 먹어본 하카타 라멘 중 단연 원탑입니다. 마늘 빻아 넣으면 국물 맛이 2배로 깊어져요."
          }
    ],
  },
  {
    id: "f7",
    name: "수변최고돼지국밥 민락본점",
    mainType: "food",
    category: "korean",
    categoryLabel: "한식/돼지국밥",
    location: "부산 수영구 민락동",
    address: "부산 수영구 광안해변로370번길 9-32",
    latitude: 35.1558,
    longitude: 129.1278,
    rating: 4.8,
    reviews: 1120,
    phone: "051-754-9292",
    image: require("../../assets/subyeon_gukbap.jpg"),
    tags: ["부산 3대 국밥", "수육백반", "고기순대국밥", "24시간 영업", "원격줄서기"],
    distance: "약 5.7km",
    hotelDistanceInfo: "거리: 약 5.7km · 차량 약 15~18분",
    operatingHours: "24시간 영업 · 연중무휴 (테이블링/캐치테이블 원격 줄서기 필수)",
    todayHours: "24시간 영업",
    holiday: "연중무휴",
    highlight: "합천/영진과 함께 부산 3대 국밥! 밤 11시에도 줄 서는 깔끔하고 진한 수육백반과 순대국밥",
    reviewSummary: [
      "합천/영진과 함께 부산 3대 국밥으로 불리며 밤 11시에도 대기 13팀이 있을 정도라 원격 줄서기 필수 [07:16, 07:29]",
      "수육백반 & 고기순대국밥: 국물이 진하면서도 텁텁함 없이 담백하고 개운하게 떨어짐 [07:29, 07:40]",
      "밤바람 맞으며 든든하게 속을 채우기 좋은 부산의 맛 [07:49]",
    ],
    menuItems: [
      {
        name: "항정국밥 (시그니처)",
        price: "12,000원",
        isSignature: true,
        description: "부드럽고 쫄깃한 항정살이 뚝배기 가득 들어간 수변최고의 최고 인기 메뉴",
      },
      {
        name: "수육백반",
        price: "12,000원",
        description: "촉촉한 온수육 한 접시와 진하고 개운한 뚝배기 국물이 함께 나오는 정식",
      },
    ],
    reviewsList: [
          {
                id: "r_f7_1",
                author: "성시경",
                date: "어제",
                rating: 5,
                content: "부산 3대 국밥집다운 압도적인 국물! 항정국밥의 고소함과 쫄깃한 식감은 다른 곳에서 흉내 낼 수 없습니다."
          },
          {
                id: "r_f7_2",
                author: "정해인",
                date: "3일 전",
                rating: 5,
                content: "잡내 1도 없고 맑으면서도 묵직한 국물 맛. 섞어국밥에 부추 듬뿍 넣고 깍두기 국물 살짝 넣어 드세요."
          },
          {
                id: "r_f7_3",
                author: "Busan_Foodie",
                date: "1주 전",
                rating: 5,
                content: "광안리 민락수변공원 근처라 아침 해장으로 최고입니다. 수육백반 고기도 야들야들해요."
          },
          {
                id: "r_f7_4",
                author: "임윤아",
                date: "2주 전",
                rating: 5,
                content: "테이블링 원격 줄서기 필수! 국물이 맑고 진해서 다 먹을 때까지 질리지 않아요."
          },
          {
                id: "r_f7_5",
                author: "남주혁",
                date: "3주 전",
                rating: 4,
                content: "맛보기 순대도 찰지고 겉절이 김치가 국밥과 찰떡입니다. 24시간 운영이라 언제든 방문하기 편해요."
          }
    ],
  },
  {
    id: "f8",
    name: "소문난원조조방낙지 본점",
    mainType: "food",
    category: "korean",
    categoryLabel: "한식/낙곱새",
    location: "부산 동래구 명륜동",
    address: "부산 동래구 명륜로94번길 37 (명륜동)",
    latitude: 35.2057,
    longitude: 129.0805,
    rating: 4.7,
    reviews: 512,
    phone: "051-555-7763",
    image: require("../../assets/jobang_nakji.png"),
    tags: ["백종원 3대천왕", "규현 추천", "낙곱새", "마늘양념", "밥도둑"],
    distance: "약 12.0km",
    hotelDistanceInfo: "거리: 약 12.0km · 차량 약 25~30분",
    operatingHours: "11:00 ~ 21:00 (B.T 15:00~17:00 / L.O 20:30) · 매주 월요일 휴무",
    todayHours: "11:00 - 21:00",
    breakTime: "15:00 - 17:00",
    lastOrder: "20:30",
    holiday: "매주 월요일 정기휴무",
    highlight: "백종원의 3대천왕 & 규현 극찬! 마늘즙 향과 단맛이 깊게 밴 원조 낙곱새 밥도둑",
    reviewSummary: [
      "백종원의 3대천왕, 슈퍼주니어 규현 유튜브, SBS/MBC 등 방영 [08:23, 08:33]",
      "낙곱새(대표 메뉴): 쫄깃한 낙지, 고소한 곱창, 새우에 마늘즙 향이 밴 양념 밥도둑 [08:33, 08:46]",
      "서울에서는 흉내 내기 힘든 추억의 깊은 맛 [09:00, 09:13]",
    ],
    menuItems: [
      {
        name: "낙곱새 (1인분 / 시그니처)",
        price: "11,000원",
        isSignature: true,
        description: "쫄깃한 낙지 + 고소한 곱창(대창) + 달달한 새우에 마늘 특제 양념 밥도둑",
      },
    ],
    reviewsList: [
          {
                id: "r_f8_1",
                author: "백종원팬",
                date: "2일 전",
                rating: 5,
                content: "부산 낙곱새의 살아있는 역사! 신선한 한우 대창과 탱글탱글한 낙지, 통통한 새우가 어우러져 감칠맛 폭발합니다."
          },
          {
                id: "r_f8_2",
                author: "김태리",
                date: "4일 전",
                rating: 5,
                content: "자극적이지 않으면서 자꾸 당기는 비법 양념장. 밥 위에 김가루 뿌리고 낙곱새 듬뿍 올려 쓱쓱 비벼 먹으면 꿀맛!"
          },
          {
                id: "r_f8_3",
                author: "Lee_KM",
                date: "1주 전",
                rating: 5,
                content: "우동 사리 추가는 선택이 아닌 필수입니다. 진하게 졸아든 국물에 볶음밥까지 풀코스로 달렸네요."
          },
          {
                id: "r_f8_4",
                author: "박서준",
                date: "2주 전",
                rating: 4,
                content: "본점이라 그런지 재료가 확실히 신선합니다. 주차장 완비되어 있어 가족 식사로 방문하기 좋았어요."
          },
          {
                id: "r_f8_5",
                author: "한소희",
                date: "1달 전",
                rating: 5,
                content: "매콤달콤한 맛에 대창 기름의 고소함이 싹 배어있어 부산 여행 갈 때마다 무조건 들르는 인생 낙곱새."
          }
    ],
  },
  {
    id: "f9",
    name: "서희와제과",
    mainType: "food",
    category: "cafe",
    categoryLabel: "베이커리/단팥빵",
    location: "부산 수영구 광안동",
    address: "부산 수영구 광남로 89 1층 (광안동)",
    latitude: 35.1481,
    longitude: 129.1121,
    rating: 4.8,
    reviews: 380,
    phone: "070-8703-3603",
    image: require("../../assets/seohui_bakery.jpg"),
    tags: ["광안리 빵지순례", "6시 내고향", "현장 줄서기", "팥빵 맛집"],
    distance: "약 8.2km",
    hotelDistanceInfo: "거리: 약 8.2km · 차량 약 20~23분",
    operatingHours: "11:00 ~ 19:00 (빵 소진 시 조기 마감) · 매주 월·화 정기휴무",
    todayHours: "11:00 - 19:00",
    holiday: "매주 월요일, 화요일 정기휴무",
    highlight: "광안리 빵지순례 필수 코스! 6시 내고향 방영, 속을 꽉 채운 담백하고 정직한 클래식 팥빵",
    reviewSummary: [
      "광안리 빵지순례 필수 코스 (더베이베이커리와 쌍벽) [09:37]",
      "원격 대기 불가, 무조건 현장 줄서기 [09:48]",
      "화려함보다는 속을 꽉 채운 담백하고 정직한 빵, 팥 본연의 맛을 극대화함 [09:59]",
    ],
    menuItems: [
      {
        name: "원조 통팥빵 (시그니처)",
        price: "2,500원",
        isSignature: true,
        description: "국내산 팥을 정성으로 끓여 얇은 피 속에 묵직하게 가득 채운 클래식 팥빵",
      },
    ],
    reviewsList: [
          {
                id: "r_f9_1",
                author: "빵지순례자",
                date: "1일 전",
                rating: 5,
                content: "전포동 빵투어 1순위! 휘낭시에 겉바속쫀 식감이 전국 탑티어입니다. 솔티카라멜과 무화과크림치즈 강력 추천!"
          },
          {
                id: "r_f9_2",
                author: "안유진",
                date: "3일 전",
                rating: 5,
                content: "백앙금과 버터의 황금비율이 돋보이는 앙버터와 부드러운 맘모스빵도 일품입니다. 선물용으로도 최고예요."
          },
          {
                id: "r_f9_3",
                author: "Sweet_Life",
                date: "1주 전",
                rating: 5,
                content: "버터 풍미가 진하고 재료를 아끼지 않은 게 느껴집니다. 오픈 시간 맞춰 가야 원하는 빵을 다 살 수 있어요."
          },
          {
                id: "r_f9_4",
                author: "차은우",
                date: "2주 전",
                rating: 5,
                content: "서면/전포 카페거리 갈 때마다 양손 가득 사오게 되는 마성의 베이커리. 커피와 궁합이 찰떡입니다."
          },
          {
                id: "r_f9_5",
                author: "김세정",
                date: "3주 전",
                rating: 4,
                content: "포장 전문이라 줄이 길어도 회전은 빠른 편이에요. 냉동실에 얼려뒀다 에어프라이어 돌려먹어도 맛있습니다."
          }
    ],
  },
  {
    id: "f10",
    name: "더베이베이커리",
    mainType: "food",
    category: "cafe",
    categoryLabel: "베이커리/모찌빵",
    location: "부산 수영구 남천동",
    address: "부산 수영구 수영로510번길 30 1층 (남천동)",
    latitude: 35.1477,
    longitude: 129.1098,
    rating: 4.8,
    reviews: 310,
    phone: "051-622-0922",
    image: require("../../assets/thebay_bakery.jpg"),
    tags: ["오픈런 열풍", "크림 맘모스", "모찌빵", "빵지순례"],
    distance: "약 8.7km",
    hotelDistanceInfo: "거리: 약 8.7km · 차량 약 20~25분",
    operatingHours: "11:30 ~ 16:00 (소진 시 마감) · 매주 화·수 정기휴무",
    todayHours: "11:30 - 16:00",
    holiday: "매주 화요일, 수요일 정기휴무",
    highlight: "오픈런 열풍의 트렌디 베이커리! 과감한 크림 조합과 쫀득·바삭한 크림 맘모스 & 모찌빵",
    reviewSummary: [
      "서희와제과와 함께 오픈런 열풍인 핫한 베이커리 [09:37, 10:26]",
      "크림 맘모스 / 모찌빵: 과감한 크림 조합과 쫀득·바삭한 다양한 식감의 조화 [10:26, 10:38]",
    ],
    menuItems: [
      {
        name: "피스타치오 크림 맘모스 (시그니처)",
        price: "6,800원",
        isSignature: true,
        description: "고소한 피스타치오 원물 크림과 바삭한 소보로 크러스트의 조화",
      },
    ],
    reviewsList: [
          {
                id: "r_f10_1",
                author: "카리나",
                date: "2일 전",
                rating: 5,
                content: "광안리 최고의 베이커리! 맘모스빵 크림과 팥, 밤 조화가 미쳤습니다. 쌀베이글도 쫄깃함이 남달라요."
          },
          {
                id: "r_f10_2",
                author: "박은빈",
                date: "4일 전",
                rating: 5,
                content: "피스타치오 크림빵과 단호박 맘모스 무조건 드세요. 묵직하고 속재료가 꽉 차 있어서 묵직한 행복감!"
          },
          {
                id: "r_f10_3",
                author: "Bread_Lover",
                date: "1주 전",
                rating: 5,
                content: "광안리 해변 산책 후 들렀는데 빵 냄새에 이끌려 5만원어치 털었습니다. 후회 없는 맛이에요."
          },
          {
                id: "r_f10_4",
                author: "이도현",
                date: "2주 전",
                rating: 4,
                content: "크림이 과하게 달지 않고 풍미가 깊어요. 웨이팅 앱으로 미리 예약하고 픽업하시는 걸 추천합니다."
          },
          {
                id: "r_f10_5",
                author: "윈터",
                date: "1달 전",
                rating: 5,
                content: "부산 빵지순례 필수 코스. 집으로 돌아갈 때 포장해갔는데 가족들도 인생 빵집이라고 극찬했습니다."
          }
    ],
  },
  {
    id: "f11",
    name: "메트르 아티정 (Maître Artisan)",
    mainType: "food",
    category: "cafe",
    categoryLabel: "베이커리/정통프랑스",
    location: "부산 수영구 남천동",
    address: "부산 수영구 남천동로22번길 21",
    latitude: 35.1416,
    longitude: 129.1082,
    rating: 4.9,
    reviews: 410,
    phone: "070-8829-0513",
    image: require("../../assets/maitre_artisan.jpg"),
    tags: ["3년 연속 블루리본", "프랑스인 제빵사", "호두 크루아상", "앙버터 바게트"],
    distance: "약 9.2km",
    hotelDistanceInfo: "거리: 약 9.2km · 차량 약 20~25분",
    operatingHours: "평일/토 09:00~20:00, 일 09:00~19:00 · 매주 월요일 휴무",
    todayHours: "09:00 - 20:00",
    holiday: "매주 월요일 정기휴무",
    highlight: "3년 연속 블루리본! 프랑스인 파티시에가 직접 굽는 파사삭한 정통 바게트와 호두 크루아상",
    reviewSummary: [
      "3년 연속 블루리본 선정, 프랑스인 제빵사가 직접 굽는 정통 프랑스 빵집 [11:05]",
      "호두 크루아상: 결대로 파사삭 바스러지는 풍부한 버터향과 호두의 고소함 [11:17]",
      "독특한 '보리 커피'와 페어링 추천 [11:30]",
    ],
    menuItems: [
      {
        name: "호두 크루아상 (시그니처)",
        price: "4,800원",
        isSignature: true,
        description: "프랑스산 최고급 버터로 겹겹이 살린 결에 고소한 통호두 토핑",
      },
    ],
    reviewsList: [
          {
                id: "r_f11_1",
                author: "프랑스미식가",
                date: "3일 전",
                rating: 5,
                content: "프랑스 현지인 셰프님이 직접 굽는 정통 크루아상! 겉은 파사삭 부서지고 속은 촉촉한 버터 결이 살아있습니다."
          },
          {
                id: "r_f11_2",
                author: "전여빈",
                date: "1주 전",
                rating: 5,
                content: "바게트와 뺑오쇼콜라도 예술입니다. 남천동 빵천동 거리에서 가장 좋아하는 정통 프렌치 베이커리."
          },
          {
                id: "r_f11_3",
                author: "Chef_Kim",
                date: "2주 전",
                rating: 5,
                content: "최고급 프랑스산 버터와 밀가루를 써서 풍미가 남다릅니다. 테라스 자리에서 에스프레소와 함께 즐기면 파리 느낌!"
          },
          {
                id: "r_f11_4",
                author: "송강",
                date: "3주 전",
                rating: 5,
                content: "아몬드 크루아상 크림이 너무 고소하고 맛있어요. 오후 늦게 가면 품절되니 오전 방문 추천드립니다."
          },
          {
                id: "r_f11_5",
                author: "신세경",
                date: "1달 전",
                rating: 4,
                content: "빵 결 하나하나가 예술적인 수준. 샌드위치류도 신선하고 담백해서 브런치로 자주 찾습니다."
          }
    ],
  },
  {
    id: "f12",
    name: "해목 (해운대점)",
    mainType: "food",
    category: "japanese",
    categoryLabel: "일식/장어덮밥",
    location: "부산 해운대구 구남로",
    address: "부산 해운대구 구남로24번길 8",
    latitude: 35.1620,
    longitude: 129.1601,
    rating: 4.9,
    reviews: 1450,
    phone: "051-746-3730",
    image: require("../../assets/haemok.jpg"),
    tags: ["미쉐린 빕구르망", "생활의 달인", "히츠마부시", "카이센동", "호텔 도보 5분"],
    distance: "약 400m",
    hotelDistanceInfo: "거리: 약 400m · 차량 약 2~3분 (호텔 바로 뒤편이라 도보 5분 권장)",
    operatingHours: "11:00 ~ 22:00 (B.T 15:00~17:00 / L.O 21:00) · 연중무휴",
    todayHours: "11:00 - 22:00",
    breakTime: "15:00 - 17:00",
    lastOrder: "21:00",
    holiday: "연중무휴",
    highlight: "미쉐린 가이드 빕구르망 & 생활의 달인! 3단계로 즐기는 나고야식 숯불 장어덮밥(히츠마부시)",
    reviewSummary: [
      "미쉐린 가이드 빕구르망 & 생활의 달인 장어덮밥 장인 [12:07]",
      "히츠마부시: 겉은 불향 입혀 바삭하고 속은 기름기 머금어 촉촉함 [12:46]",
      "1) 본연의 맛 2) 고명 비비기 3) 오차즈케 육수 말아먹기 3단계 매력 [12:07, 13:16]",
    ],
    menuItems: [
      {
        name: "민물장어 히츠마부시 (시그니처)",
        price: "40,000원",
        isSignature: true,
        description: "최상급 국내산 민물장어를 숯불에 3번 구워낸 나고야식 정통 장어덮밥",
      },
    ],
    reviewsList: [
          {
                id: "r_f12_1",
                author: "미식탐험가",
                date: "1일 전",
                rating: 5,
                content: "나고야식 장어덮밥(히츠마부시)의 정점! 숯불에 겉바속촉 구워낸 장어와 4가지 방법으로 즐기는 식사가 황홀합니다."
          },
          {
                id: "r_f12_2",
                author: "공유",
                date: "3일 전",
                rating: 5,
                content: "오차즈케에 고추냉이, 깻잎 넣어 말아먹는 세 번째 방법이 제일 맛있네요. 카이센동도 해산물 신선도가 특급입니다."
          },
          {
                id: "r_f12_3",
                author: "고윤정",
                date: "6일 전",
                rating: 5,
                content: "일본 정통 가옥 스타일 인테리어와 정원 뷰가 근사해서 데이트나 부모님 모시고 오기에 최고의 장소입니다."
          },
          {
                id: "r_f12_4",
                author: "Haemok_Fan",
                date: "2주 전",
                rating: 5,
                content: "해운대역 2분 거리라 접근성 굿. 테이블링 대기 등록 필수이며, 훈연 향 가득한 장어 맛은 줄 설 가치가 충분합니다."
          },
          {
                id: "r_f12_5",
                author: "이정재",
                date: "3주 전",
                rating: 4,
                content: "가격대는 있지만 퀄리티와 정갈한 상차림이 돈값을 제대로 합니다. 모찌리도후 디저트도 별미!"
          }
    ],
  },
  {
    id: "f13",
    name: "해운대 가야밀면",
    mainType: "food",
    category: "korean",
    categoryLabel: "한식/부산밀면",
    location: "부산 해운대구 좌동",
    address: "부산 해운대구 좌동순환로 27",
    latitude: 35.1697,
    longitude: 129.1768,
    rating: 4.8,
    reviews: 890,
    phone: "051-747-9404",
    image: require("../../assets/gaya_milmyeon.jpg"),
    tags: ["블루리본 3회", "물밀면", "비빔밀면", "온육수 별미"],
    distance: "약 1.8km",
    hotelDistanceInfo: "거리: 약 1.8km · 차량 약 6~8분",
    operatingHours: "09:00 ~ 20:50 (라스트오더 20:20) · 연중무휴",
    todayHours: "09:00 - 20:50",
    lastOrder: "20:20",
    holiday: "연중무휴",
    highlight: "블루리본 3회 선정 밀면 명소! 새콤달콤 시원한 물밀면과 온육수를 부어 먹는 비빔밀면",
    reviewSummary: [
      "블루리본 3회 선정 밀면 명소 (테이블링 원격 줄서기 가능) [13:36, 13:54]",
      "물밀면: 새콤달콤 시원하게 풀리며 쫄깃한 면발 뒤에 깊은 감칠맛 [14:07, 14:20]",
      "비빔밀면: 진한 양념에 따뜻한 온육수를 부어 먹으면 부드러운 제3의 메뉴 [14:20]",
    ],
    menuItems: [
      {
        name: "물밀면 (시그니처)",
        price: "9,000원",
        isSignature: true,
        description: "살얼음 동동 뜬 한방 특제 육수와 새콤달콤 양념, 쫄깃한 자가제면 밀면",
      },
    ],
    reviewsList: [
          {
                id: "r_f13_1",
                author: "부산사나이",
                date: "2일 전",
                rating: 5,
                content: "한약재 향이 은은하게 퍼지는 깊은 육수와 쫄깃한 면발! 살얼음 동동 띄운 물밀면 한 그릇에 더위가 싹 가십니다."
          },
          {
                id: "r_f13_2",
                author: "김유정",
                date: "4일 전",
                rating: 5,
                content: "비빔밀면 양념장이 매콤달콤 감칠맛 넘쳐서 만두와 싸먹으면 찰떡궁합입니다. 온육수도 진국이에요."
          },
          {
                id: "r_f13_3",
                author: "박형식",
                date: "1주 전",
                rating: 5,
                content: "해운대 해수욕장 근처라 접근성 좋고 회전율이 빨라 오래 기다리지 않고 먹을 수 있어 좋습니다."
          },
          {
                id: "r_f13_4",
                author: "Busan_Tour",
                date: "2주 전",
                rating: 4,
                content: "부산 오면 꼭 먹어야 하는 소울푸드. 고명도 푸짐하고 양도 넉넉해서 만족도 200%입니다."
          },
          {
                id: "r_f13_5",
                author: "신민아",
                date: "1달 전",
                rating: 5,
                content: "담백하면서도 시원한 육수가 일품. 테이블마다 놓인 식초와 겨자 취향껏 넣어 먹으면 완벽합니다."
          }
    ],
  },
  {
    id: "f14",
    name: "이재모피자 (부산역점)",
    mainType: "food",
    category: "western",
    categoryLabel: "피자/양식",
    location: "부산 동구 초량동",
    address: "부산 동구 중앙대로 197 2층",
    latitude: 35.1158,
    longitude: 129.0402,
    rating: 4.9,
    reviews: 1890,
    phone: "051-466-1478",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=85",
    tags: ["부산 대표 피자 성지", "KTX 필수코스", "치즈 크러스트", "임실치즈 폭포"],
    distance: "약 17.5km",
    hotelDistanceInfo: "거리: 약 17.5km · 차량 약 35~45분 (부산역 바로 앞)",
    operatingHours: "10:00 ~ 21:10 (라스트오더 20:30) · 매주 일요일 정기휴무",
    todayHours: "10:00 - 21:10",
    lastOrder: "20:30",
    holiday: "매주 일요일 정기휴무 (현장 대기 전용)",
    highlight: "부산 대표 피자 성지이자 KTX 타기 전 필수 코스! 100% 임실치즈 폭포수 크러스트 피자",
    reviewSummary: [
      "웨이팅이 길어 현장 대기를 등록하고 근처 명소를 관광하는 동선 추천 [03:08]",
      "100% 국산 자연산 임실치즈와 도우 속 크러스트 치즈의 고소함이 핵심 [03:22]",
      "남은 피자는 셀프 포장 가능 [03:36]",
    ],
    menuItems: [
      {
        name: "이재모 크러스트 피자 (L / 시그니처)",
        price: "29,000원",
        isSignature: true,
        description: "100% 자연산 임실치즈가 폭포수처럼 들어간 치즈반 햄반 크러스트 피자",
      },
    ],
    reviewsList: [
          {
                id: "r_f14_1",
                author: "치즈덕후",
                date: "어제",
                rating: 5,
                content: "국내산 임실자연치즈 100%라 치즈 늘어남이 차원이 다릅니다! 크러스트에 들어간 치즈크러스트+소시지 조합 최고."
          },
          {
                id: "r_f14_2",
                author: "김우빈",
                date: "3일 전",
                rating: 5,
                content: "부산역 바로 앞이라 기차 타기 전후로 방문하기 최고입니다. 오븐 스파게티도 치즈 폭탄이라 필수로 시켜야 해요."
          },
          {
                id: "r_f14_3",
                author: "수지",
                date: "5일 전",
                rating: 5,
                content: "도우가 쫄깃하고 토핑이 푸짐합니다. 캐치테이블 원격줄서기로 미리 웨이팅 걸고 오면 편리해요."
          },
          {
                id: "r_f14_4",
                author: "정경호",
                date: "2주 전",
                rating: 5,
                content: "식어도 굳지 않고 고소한 프리미엄 자연치즈의 맛. 포장해서 숙소에서 맥주랑 먹어도 훌륭합니다."
          },
          {
                id: "r_f14_5",
                author: "김지원",
                date: "3주 전",
                rating: 4,
                content: "탄산음료 무한리필에 샐러드도 신선합니다. 왜 부산 대표 피자집인지 먹어보면 바로 납득이 가네요."
          }
    ],
  },
  {
    id: "f15",
    name: "신발원 (본점 / 외전)",
    mainType: "food",
    category: "chinese",
    categoryLabel: "중식/차이나타운 만두",
    location: "부산 동구 초량동 차이나타운",
    address: "부산 동구 대영로243번길 62 (초량동 차이나타운)",
    latitude: 35.1147,
    longitude: 129.0384,
    rating: 4.9,
    reviews: 1650,
    phone: "051-467-0177",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=900&q=85",
    tags: ["1951년 개업", "70년 전통", "차이나타운 만두 명가", "군만두"],
    distance: "약 17.5km",
    hotelDistanceInfo: "거리: 약 17.5km · 차량 약 35~45분 (부산역 맞은편)",
    operatingHours: "본점 11:00~20:45 / 외전(포장) 10:00~21:00 · 매주 화요일 정기휴무",
    todayHours: "11:00 - 20:45",
    lastOrder: "20:15",
    holiday: "매주 화요일 정기휴무",
    highlight: "1951년부터 70년 전통의 차이나타운 만두 명가! 육즙 가득 고기만두와 겉바속촉 군만두",
    reviewSummary: [
      "1951년부터 이어진 70년 전통의 차이나타운 만두 명가 [16:49, 17:25]",
      "웨이팅 꿀팁: 신발원 외전(포장 전문점) 픽업 시 대기 시간 절약 [16:49, 17:01]",
      "군만두 & 새우교자: 육즙 가득 고기만두와 바삭한 군만두 극찬 [17:25, 18:18]",
    ],
    menuItems: [
      {
        name: "군만두 (5pcs / 시그니처)",
        price: "7,000원",
        isSignature: true,
        description: "겉은 파사삭 바삭하고 속은 촉촉한 육즙이 팡 터지는 70년 전통의 대표 군만두",
      },
    ],
    reviewsList: [
          {
                id: "r_f15_1",
                author: "만두장인",
                date: "2일 전",
                rating: 5,
                content: "70년 전통 차이나타운 1등 만두! 갓 튀겨 나온 군만두를 한 입 베어 물면 육즙이 팍 터집니다."
          },
          {
                id: "r_f15_2",
                author: "황정민",
                date: "4일 전",
                rating: 5,
                content: "새우교자와 고기만두의 피가 얇고 소가 꽉 차있습니다. 따뜻한 콩국에 오이과자(요우티아오) 찍어 먹는 조식 조합도 추천!"
          },
          {
                id: "r_f15_3",
                author: "한효주",
                date: "1주 전",
                rating: 5,
                content: "부산역 맞은편 차이나타운 입구라 위치 최고. 웨이팅은 필수지만 포장 전용 줄은 금방 줄어듭니다."
          },
          {
                id: "r_f15_4",
                author: "조승우",
                date: "2주 전",
                rating: 5,
                content: "만두피의 쫄깃함과 부추, 생강 향의 밸런스가 기가 막힙니다. 백종원의 3대천왕 나온 이유가 있어요."
          },
          {
                id: "r_f15_5",
                author: "박보영",
                date: "1달 전",
                rating: 4,
                content: "바삭하고 촉촉한 군만두 2판 순삭했습니다. 식어도 맛있어서 기차 탈 때 포장해가는 여행객들이 많네요."
          }
    ],
  },

  // =========================================================================
  // 🎡 [가볼만한곳 BEST 32] - 엑스더스카이, 아홉산숲, 기장오션뷰카페 추가 & 중복 0건
  // =========================================================================
  {
    id: "a1",
    name: "부산 엑스더스카이 (BUSAN X the SKY)",
    mainType: "attraction",
    category: "view",
    categoryLabel: "전망대/랜드마크100층",
    location: "부산 해운대구 중동 엘시티",
    address: "부산 해운대구 달맞이길 30 (엘시티 랜드마크타워 98~100층)",
    latitude: 35.1598,
    longitude: 129.1698,
    rating: 4.9,
    reviews: 3820,
    phone: "051-733-2600",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=900&q=85",
    tags: ["한국관광100선", "100층전망대", "쇼킹브릿지370m", "세계최고층스타벅스", "호텔도보10분"],
    distance: "약 1.0km",
    hotelDistanceInfo: "거리: 약 1.0km · 차량 약 3~4분 (도보 약 10~12분)",
    operatingHours: "10:00 ~ 21:00 (발권/입장 마감 20:30) · 연중무휴",
    todayHours: "10:00 - 21:00",
    lastOrder: "20:30 (입장 마감)",
    holiday: "연중무휴",
    highlight: "한국관광 100선! 100층 370m 높이 투명 유리바닥 '쇼킹 브릿지'와 세계 최고층 99층 스타벅스",
    reviewSummary: [
      "한국관광 100선 선정, 부산 최고층 100층 전망대 [03:31]",
      "해운대 백사장, 광안대교, 기장까지 한눈에 조망하며 날씨가 안 좋을 때는 야경 관람 추천 [03:43, 03:57]",
      "지상 370m 투명 유리바닥 '쇼킹 브릿지', 98층 블랙업커피, 99층 세계 최고층 스타벅스 및 스카이99 레스토랑 입점 [04:35, 04:58, 05:21]",
    ],
    menuItems: [
      {
        name: "엑스더스카이 전망대 대인 입장권",
        price: "27,000원",
        isSignature: true,
        description: "100층 초고속 엘리베이터 및 쇼킹브릿지 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a1_1",
                author: "김하늘",
                date: "1일 전",
                rating: 5,
                content: "100층 전망대에서 바라보는 해운대 백사장과 광안대교 파노라마 뷰가 장관입니다! 쇼킹브릿지 유리바닥 스릴 넘쳐요."
          },
          {
                id: "r_a1_2",
                author: "David_L",
                date: "3일 전",
                rating: 5,
                content: "세계에서 가장 높은 스타벅스 엑스더스카이점에서 마시는 커피 한잔의 여유. 일몰 시간에 맞춰 가시면 선셋과 야경을 동시에 즐길 수 있습니다."
          },
          {
                id: "r_a1_3",
                author: "이지아",
                date: "1주 전",
                rating: 5,
                content: "엘리베이터 올라가는 미디어 아트부터 압도적입니다. 엘시티 타워 99층 레스토랑도 분위기 최고예요."
          },
          {
                id: "r_a1_4",
                author: "박형준",
                date: "2주 전",
                rating: 4,
                content: "날씨 맑은 날 방문해서 대마도까지 시원하게 조망했습니다. 티켓은 인터넷 사전 예매로 할인받으세요."
          },
          {
                id: "r_a1_5",
                author: "Sara_W",
                date: "3주 전",
                rating: 5,
                content: "부산 랜드마크의 위엄을 제대로 느낄 수 있는 곳. 해운대 여행에서 필수 코스로 강력 추천합니다."
          }
    ],
  },
  {
    id: "a2",
    name: "아홉산숲",
    mainType: "attraction",
    category: "nature",
    categoryLabel: "자연/400년대나무숲",
    location: "부산 기장군 철마면",
    address: "부산 기장군 철마면 미동길 37-1",
    latitude: 35.2936,
    longitude: 129.1764,
    rating: 4.9,
    reviews: 2980,
    phone: "051-721-9183",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=85",
    tags: ["400년사유림", "맹종죽대나무숲", "금강소나무보호수", "영화더킹군도촬영지", "자연힐링숲길"],
    distance: "약 19.5km",
    hotelDistanceInfo: "거리: 약 19.5km · 차량 약 30~35분",
    operatingHours: "09:00 ~ 18:00 (입장마감 17:00) · 매주 월요일 정기휴무",
    todayHours: "09:00 - 18:00",
    lastOrder: "17:00 (입장 마감)",
    holiday: "매주 월요일 정기휴무 (월요일이 공휴일인 경우 정상 운영)",
    highlight: "남평 문씨 가문이 400여 년간 가꿔온 15만 평 사유림! 굵은 맹종죽 대나무숲과 금강소나무 영화 촬영 명소",
    reviewSummary: [
      "남평 문씨 가문이 400여 년간 가꿔온 15만 평 규모의 사유림 힐링 명소 [18:37, 18:47]",
      "굵은 맹종죽 대나무숲, 구갑죽, 수령 400년 금강소나무 군락 등 1,100여 그루의 보호수 보존 [18:59, 19:11, 19:25]",
      "유명 영화(군도, 협녀) 및 드라마(더 킹) 촬영지로 부산 현지인들이 아끼는 자연 숲길 [18:37, 19:11]",
    ],
    menuItems: [
      {
        name: "아홉산숲 입장료 (일반)",
        price: "5,000원",
        isSignature: true,
        description: "400년 맹종죽 대나무숲 및 금강소나무 숲길 힐링 트레킹",
      },
    ],
    reviewsList: [
          {
                id: "r_a2_1",
                author: "문동은",
                date: "2일 전",
                rating: 5,
                content: "400년 동안 잘 가꿔진 사유림 맹종죽 대나무숲길이 너무 신비롭고 아름답습니다. 더킹, 군도 촬영지다운 웅장함!"
          },
          {
                id: "r_a2_2",
                author: "정우성",
                date: "4일 전",
                rating: 5,
                content: "바람에 사각거리는 대나무 소리를 들으며 걷다 보면 마음이 절로 힐링됩니다. 피톤치드 듬뿍 마시고 왔어요."
          },
          {
                id: "r_a2_3",
                author: "Forest_Lover",
                date: "1주 전",
                rating: 5,
                content: "산책로가 평탄해서 아이들이나 부모님과 걷기에도 편합니다. 금강소나무 군락지도 멋있어요."
          },
          {
                id: "r_a2_4",
                author: "김태희",
                date: "2주 전",
                rating: 5,
                content: "부산 도심에서 벗어나 조용하게 숲 힐링하고 싶을 때 최고의 명소. 주차장도 잘 정비되어 있습니다."
          },
          {
                id: "r_a2_5",
                author: "강동원",
                date: "1달 전",
                rating: 4,
                content: "입장료가 아깝지 않은 힐링 숲. 곳곳에 포토존이 많아 사진이 정말 잘 나옵니다."
          }
    ],
  },
  {
    id: "a3",
    name: "기장 대형 오션뷰 카페 BEST (칠암사계 & 웨이브온)",
    mainType: "attraction",
    category: "cafe",
    categoryLabel: "카페/기장오션뷰명소",
    location: "부산 기장군 일광/장안",
    address: "부산 기장군 일광읍 칠암1길 7-10 (칠암사계) / 기장군 장안읍 해맞이로 286 (웨이브온)",
    latitude: 35.2678,
    longitude: 129.2562,
    rating: 4.9,
    reviews: 4120,
    phone: "051-727-1200",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85",
    tags: ["이흥용명장소금빵", "웨이브온오션뷰원조", "코랄라니계단식테라스", "보몽드유럽정원", "기장필수코스"],
    distance: "약 20.0km",
    hotelDistanceInfo: "거리: 약 7.5~23.0km · 차량 약 20~35분",
    operatingHours: "칠암사계 10:00~21:00 / 웨이브온 10:00~24:00 · 연중무휴",
    todayHours: "10:00 - 21:00 (칠암사계)",
    holiday: "연중무휴",
    highlight: "대한민국 제과명장 이흥용의 칠암사계 소금빵 & 기장 오션뷰 원조 웨이브온, 코랄라니 초대형 테라스",
    reviewSummary: [
      "웨이브온: 기장 오션뷰 카페의 원조이자 선두주자 [19:31]",
      "칠암사계: 대한민국 명장 이흥용 제과장의 소금빵 베이커리 대형 카페 [20:05]",
      "코랄라니: 세계적 건축가가 설계한 계단식 초대형 테라스 오션뷰 카페 [19:31]",
      "보몽드: 유럽 대저택 정원 감성과 분수대가 매력적인 복합 문화 카페 [19:45]",
    ],
    menuItems: [
      {
        name: "칠암사계 소금빵 (2개입 / 시그니처)",
        price: "4,000원",
        isSignature: true,
        description: "버터 풍미와 바삭 쫄깃한 식감의 대한민국 대표 소금빵",
      },
      {
        name: "웨이브온 월내라떼",
        price: "7,500원",
        description: "푸른 기장 바다를 바라보며 즐기는 시그니처 크림 라떼",
      },
    ],
    reviewsList: [
          {
                id: "r_a3_1",
                author: "오션러버",
                date: "1일 전",
                rating: 5,
                content: "칠암사계 소금빵은 진짜 전국 원탑입니다! 겉은 바삭하고 속은 버터 홀이 가득해서 따뜻할 때 먹으면 최고예요."
          },
          {
                id: "r_a3_2",
                author: "배두나",
                date: "3일 전",
                rating: 5,
                content: "웨이브온 오션뷰 테라스에서 바라보는 기장 앞바다 물멍이 힐링 그 자체입니다. 건축미도 훌륭해요."
          },
          {
                id: "r_a3_3",
                author: "Cafe_Tour",
                date: "5일 전",
                rating: 5,
                content: "코랄라니 루프탑 빈백에 누워 파도 소리 들으며 마시는 커피 한잔의 여유. 기장 해안도로 드라이브 코스로 딱!"
          },
          {
                id: "r_a3_4",
                author: "유아인",
                date: "2주 전",
                rating: 5,
                content: "이흥용 명장 베이커리답게 빵 종류가 다양하고 퀄리티가 높습니다. 주차 요원분들도 친절하셨어요."
          },
          {
                id: "r_a3_5",
                author: "한지민",
                date: "3주 전",
                rating: 4,
                content: "바다 바로 앞 통유리창으로 펼쳐지는 윤슬이 너무 예쁩니다. 주말엔 오픈런 추천드려요."
          }
    ],
  },
  {
    id: "a4",
    name: "감천문화마을",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "문화예술/포토존",
    location: "부산 사하구 감천동",
    address: "부산 사하구 감내2로 203 (감천동)",
    latitude: 35.0975,
    longitude: 129.0106,
    rating: 4.9,
    reviews: 4520,
    phone: "051-204-1444",
    image: "https://images.unsplash.com/photo-1535139262971-c51845709a48?w=900&q=85",
    tags: ["한국관광100선5회", "어린왕자포토존", "한국의마추픽추", "계단식파스텔마을", "골목길투어"],
    distance: "약 22.0km",
    hotelDistanceInfo: "거리: 약 22.0km · 차량 약 40~50분 (광안·부산항·남항대교 경유)",
    operatingHours: "3월~10월 09:00~18:00 / 11월~2월 09:00~17:00 (주민 거주구역 주간 관람)",
    todayHours: "09:00 - 18:00",
    holiday: "연중무휴 (무료 입장)",
    highlight: "한국관광 100선 5회 연속 선정! 피란민촌의 산자락 계단식 집터가 세계적 예술마을로 탈바꿈한 '부산의 마추픽추'",
    reviewSummary: [
      "한국전쟁 피란민들의 산자락 계단식 집터가 예술마을로 탈바꿈한 '부산의 마추픽추' [08:15]",
      "한국관광 100선 5회 연속 선정 명소 [08:27]",
      "마을 안내센터에서 시작해 메인 관람로를 따라 어린 왕자 & 사막여우 포토존, 작은 박물관 관람 추천 [08:37, 08:50, 09:04]",
    ],
    menuItems: [
      {
        name: "감천문화마을 골목길 & 어린왕자 탐방",
        price: "무료 (Free)",
        isSignature: true,
        description: "마을 안내센터 지도 스탬프 투어 및 포토존 자유 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a4_1",
                author: "여행스케치",
                date: "2일 전",
                rating: 5,
                content: "어린 왕자와 사막여우 조형물에서 감천항 바라보며 찍는 사진은 부산 여행 필수 인생샷!"
          },
          {
                id: "r_a4_2",
                author: "Michael_T",
                date: "4일 전",
                rating: 5,
                content: "알록달록 파스텔톤 계단식 집들이 어우러진 한국의 마추픽추. 골목길 곳곳의 벽화와 갤러리 구경이 즐겁습니다."
          },
          {
                id: "r_a4_3",
                author: "신혜선",
                date: "1주 전",
                rating: 4,
                content: "스탬프 투어 지도 사서 골목길 미로 탐방하는 재미가 쏠쏠합니다. 편한 운동화 신고 오세요."
          },
          {
                id: "r_a4_4",
                author: "이종석",
                date: "2주 전",
                rating: 5,
                content: "전망대 카페에서 마시는 식혜와 씨앗호떡 간식도 맛있고, 역사적인 피란민 마을의 정취가 느껴집니다."
          },
          {
                id: "r_a4_5",
                author: "Emma_J",
                date: "3주 전",
                rating: 5,
                content: "독특한 예술 마을 분위기가 너무 좋습니다. 공영주차장 이용하면 편리하게 둘러볼 수 있어요."
          }
    ],
  },
  {
    id: "a5",
    name: "부산항대교 (2층 시티투어버스)",
    mainType: "attraction",
    category: "view",
    categoryLabel: "체험/오픈탑버스",
    location: "부산 동구/영도구",
    address: "부산 동구 중앙대로 206 (부산역 광장 시티투어 탑승지)",
    latitude: 35.1152,
    longitude: 129.0422,
    rating: 4.8,
    reviews: 2120,
    phone: "051-464-9898",
    image: require("../../assets/busan_port_bridge.png"),
    tags: ["360도나선형램프", "부산롤러코스터", "2층오픈탑버스", "무지개야경", "부산역출발"],
    distance: "약 17.5km",
    hotelDistanceInfo: "거리: 약 17.5km · 차량 약 35~40분 (부산역 탑승장 기준)",
    operatingHours: "대교 24시간 통행 / 시티투어버스 09:30~17:30 (배차 40~50분 간격)",
    todayHours: "09:30 - 17:30 (시티투어)",
    holiday: "시티투어 매주 월·화요일 휴무 (공휴일 정상 운행)",
    highlight: "2층 오픈탑 버스를 타고 360도 나선형 회전 램프를 달리는 짜릿한 '부산 롤러코스터' & 밤의 무지개 야경",
    reviewSummary: [
      "2층 오픈탑 부산시티투어버스를 타고 영도에서 진입할 때 360도 나선형 회전 램프를 달리는 짜릿한 '부산 롤러코스터' 액티비티 [02:49, 03:02, 03:15]",
      "야간에는 무지개 빛으로 점등되어 낭만적인 야경 선사 [03:36]",
    ],
    menuItems: [
      {
        name: "부산시티투어 레드라인 1일 이용권 (성인)",
        price: "20,000원",
        isSignature: true,
        description: "부산역~부산항대교~광안리~해운대 순환 2층 오픈탑 버스",
      },
    ],
    reviewsList: [
          {
                id: "r_a5_1",
                author: "Night_Walker",
                date: "1일 전",
                rating: 5,
                content: "부산시티투어 2층 오픈탑 버스 타고 360도 롤러코스터 램프 올라갈 때 짜릿한 스릴과 영도 야경이 압도적입니다!"
          },
          {
                id: "r_a5_2",
                author: "정경호",
                date: "3일 전",
                rating: 5,
                content: "무지개빛 LED 조명이 켜진 부산항대교를 밤에 드라이브하면 SF 영화 속에 들어온 느낌이 들어요."
          },
          {
                id: "r_a5_3",
                author: "김다미",
                date: "1주 전",
                rating: 5,
                content: "영도 청학수변공원에서 올려다보는 부산항대교 야경 뷰가 사진 명소입니다. 선셋 타임에 가보세요."
          },
          {
                id: "r_a5_4",
                author: "Alex_K",
                date: "2주 전",
                rating: 5,
                content: "부산의 스카이라인과 북항 부두 크레인 불빛이 어우러진 현대적인 산업도시 부산의 매력!"
          },
          {
                id: "r_a5_5",
                author: "박소담",
                date: "3주 전",
                rating: 4,
                content: "운전 초보라면 램프 구간 서행 필수지만, 정상에 도달했을 때 펼쳐지는 바다 뷰는 잊을 수 없습니다."
          }
    ],
  },
  {
    id: "a6",
    name: "삼광사",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "사찰/연등축제",
    location: "부산 부산진구 초읍동",
    address: "부산 부산진구 초읍천로 43 (초읍동)",
    latitude: 35.1762,
    longitude: 129.0478,
    rating: 4.9,
    reviews: 3120,
    phone: "051-808-7111",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85",
    tags: ["CNN선정아름다운곳", "수만개연등축제", "빛의바다", "도심속힐링사찰", "24시간개방"],
    distance: "약 18.0km",
    hotelDistanceInfo: "거리: 약 18.0km · 차량 약 35~45분 (번영로/백양터널 경유)",
    operatingHours: "24시간 상시 개방 (종무소 08:30 ~ 17:00) · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "CNN 선정 한국의 아름다운 곳 50선! 수만 개의 연등이 밤하늘을 수놓는 장엄한 '빛의 바다' 힐링 사찰",
    reviewSummary: [
      "CNN 선정 한국의 아름다운 곳 50선 [04:00]",
      "부처님 오신 날 전후로 사찰 마당부터 지붕까지 수만 개의 연등이 불을 밝히는 장엄한 '빛의 바다' 축제 명소 [04:18]",
      "도심을 내려다보는 평화로운 사찰 풍경으로 힐링 쉼터 [04:54]",
    ],
    menuItems: [
      {
        name: "삼광사 사찰 경내 무료 관람",
        price: "무료 (Free)",
        isSignature: true,
        description: "백양산 자락 대가람 및 연등 야경 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a6_1",
                author: "최수빈",
                date: "1일 전",
                rating: 5,
                content: "삼광사에 방문했는데 경치가 정말 황홀했습니다. CNN선정아름다운곳, 수만개연등축제, 빛의바다 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a6_2",
                author: "정다은",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a6_3",
                author: "이현우",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a6_4",
                author: "강지수",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a6_5",
                author: "윤도현",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a7",
    name: "송도 해상케이블카 & 송도용궁구름다리",
    mainType: "attraction",
    category: "view",
    categoryLabel: "체험/해상케이블카",
    location: "부산 서구 송도/암남동",
    address: "부산 서구 송도해변로 171 (송도베이스테이션) / 암남공원로 127 (용궁구름다리)",
    latitude: 35.0760,
    longitude: 129.0232,
    rating: 4.9,
    reviews: 3890,
    phone: "051-247-9900",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["한국관광100선", "바다위86m", "크리스탈캐빈", "127m용궁구름다리", "암남공원비경"],
    distance: "약 21.0km",
    hotelDistanceInfo: "거리: 약 21.0~22.0km · 차량 약 35~45분 (남항대교 경유)",
    operatingHours: "케이블카 09:00~21:00 / 용궁구름다리 09:00~18:00 (입장마감 17:30)",
    todayHours: "09:00 - 21:00 (케이블카)",
    lastOrder: "20:30 (발권 마감)",
    holiday: "구름다리 매월 1·3번째 월요일 휴무",
    highlight: "한국관광 100선! 최고 86m 상공에서 1.6km 바다를 가로지르는 크리스탈 케이블카 & 127m 해상 현수보행교",
    reviewSummary: [
      "국내 제1호 공설 해수욕장 바다 위 최고 86m 높이에서 1.6km를 가로지르는 케이블카 [10:00, 10:51]",
      "바닥이 투명한 크리스탈 크루즈 탑승 시 발아래 맑은 바다와 해안 잔도길 관람 [10:51]",
      "18년 만에 복원되어 한국관광 100선에 선정된 길이 127m의 해상 현수보행교 송도 용궁구름다리 [12:09]",
      "그물망(메쉬) 바닥으로 설계되어 바다 위를 걷는 아찔함과 암남공원 기암절벽의 웅장한 비경 감상 [12:22]",
    ],
    menuItems: [
      {
        name: "크리스탈크루즈 왕복 (바닥 투명 유리 / 대인)",
        price: "22,000원",
        isSignature: true,
        description: "바닥이 투명 강화유리로 된 짜릿한 오션뷰 캐빈",
      },
      {
        name: "송도용궁구름다리 입장료",
        price: "1,000원",
        description: "동섬 해상 보도교 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a7_1",
                author: "정다은",
                date: "1일 전",
                rating: 5,
                content: "송도 해상케이블카 & 송도용궁구름다리에 방문했는데 경치가 정말 황홀했습니다. 한국관광100선, 바다위86m, 크리스탈캐빈 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a7_2",
                author: "이현우",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a7_3",
                author: "강지수",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a7_4",
                author: "윤도현",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a7_5",
                author: "한소희",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a8",
    name: "동생말 전망대",
    mainType: "attraction",
    category: "view",
    categoryLabel: "전망대/스카이라인",
    location: "부산 남구 용호동",
    address: "부산 남구 분포로 66-94 (용호동)",
    latitude: 35.1328,
    longitude: 129.1175,
    rating: 4.8,
    reviews: 1430,
    phone: "051-607-6361",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=85",
    tags: ["해운대스카이라인뷰", "광안대교정면", "갈맷길시작점", "동생말포토존", "24시간개방"],
    distance: "약 10.5km",
    hotelDistanceInfo: "거리: 약 10.5km · 차량 약 20~25분 (광안대교 경유)",
    operatingHours: "24시간 상시 개방 · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "브루클린에서 맨해튼을 보듯, 바다 건너 광안대교·동백섬·달맞이언덕 스카이라인을 한눈에 담는 최고 조망 명소",
    reviewSummary: [
      "브루클린에서 맨해튼을 보듯, 바다 건너 해운대 스카이라인을 한눈에 담는 최고의 조망 명소",
      "부산 갈맷길 2코스 2구간 시작점",
    ],
    menuItems: [
      {
        name: "동생말 전망대 관람",
        price: "무료 (Free)",
        isSignature: true,
        description: "용호만과 광안대교 오션 파노라마 자유 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a8_1",
                author: "이현우",
                date: "1일 전",
                rating: 5,
                content: "동생말 전망대에 방문했는데 경치가 정말 황홀했습니다. 해운대스카이라인뷰, 광안대교정면, 갈맷길시작점 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a8_2",
                author: "강지수",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a8_3",
                author: "윤도현",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a8_4",
                author: "한소희",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a8_5",
                author: "오세훈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a9",
    name: "이기대 수변공원 (어울마당)",
    mainType: "attraction",
    category: "nature",
    categoryLabel: "자연/해안절벽트레킹",
    location: "부산 남구 용호동",
    address: "부산 남구 이기대공원로 105-20 (용호동 산25)",
    latitude: 35.1278,
    longitude: 129.1172,
    rating: 4.9,
    reviews: 2150,
    phone: "051-607-6361",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=85",
    tags: ["해안절벽트레킹", "어울마당휴게소", "바다라면맥주", "치마바위", "영화해운대촬영지"],
    distance: "약 14.5km",
    hotelDistanceInfo: "거리: 약 14.5km · 차량 약 25~30분",
    operatingHours: "24시간 상시 개방 (어울마당 매점 주간 운영) · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "동생말에서 구름다리를 건너 해안 절경을 따라 걷는 명품 트레킹 & 어울마당 휴게소 바다 뷰 컵라면과 맥주",
    reviewSummary: [
      "동생말에서 구름다리를 건너 해안 절경을 따라 걷다 만나는 명소",
      "어울마당 휴게소에서 탁 트인 바다 경치를 보며 즐기는 컵라면과 맥주 조합 추천",
    ],
    menuItems: [
      {
        name: "이기대 해안산책로 트레킹",
        price: "무료 (Free)",
        isSignature: true,
        description: "기암괴석 해안 절벽을 따라 걷는 힐링 데크길",
      },
    ],
    reviewsList: [
          {
                id: "r_a9_1",
                author: "강지수",
                date: "1일 전",
                rating: 5,
                content: "이기대 수변공원 (어울마당)에 방문했는데 경치가 정말 황홀했습니다. 해안절벽트레킹, 어울마당휴게소, 바다라면맥주 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a9_2",
                author: "윤도현",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a9_3",
                author: "한소희",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a9_4",
                author: "오세훈",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a9_5",
                author: "Travel_Pro",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a10",
    name: "오륙도 스카이워크 & 해맞이공원",
    mainType: "attraction",
    category: "view",
    categoryLabel: "전망대/유채꽃명소",
    location: "부산 남구 용호동",
    address: "부산 남구 오륙도로 137 (용호동)",
    latitude: 35.1012,
    longitude: 129.1235,
    rating: 4.8,
    reviews: 2890,
    phone: "051-607-6395",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["35m해안절벽", "유리바닥스카이워크", "동해남해분기점", "수선화유채꽃", "해파랑카페"],
    distance: "약 18.5km",
    hotelDistanceInfo: "거리: 약 18.5km · 차량 약 30~35분 (광안·부산항대교 경유)",
    operatingHours: "공원 상시 개방 / 스카이워크 09:00 ~ 18:00 (입장마감 17:50 / 눈·비·강풍 시 통제)",
    todayHours: "09:00 - 18:00 (스카이워크)",
    lastOrder: "17:50 (입장 마감)",
    holiday: "연중무휴",
    highlight: "35m 해안 절벽 위에 세워진 유리 바닥 스카이워크 (동해와 남해의 분기점) & 오륙도 생태 홍보관과 해녀촌 해산물",
    reviewSummary: [
      "35m 해안 절벽 위에 유리 바닥으로 세워진 아찔한 해상 전망대 (동해와 남해의 분기점) [14:19, 14:42, 14:54]",
      "오륙도 생태 홍보관과 오션뷰 해파랑 카페, 선착장 해녀촌 신선 해산물 체험 가능 [15:07, 15:20]",
      "봄철 만개하는 노란 유채꽃과 수선화가 어우러진 SNS 인생샷 명소",
    ],
    menuItems: [
      {
        name: "오륙도 스카이워크 관람",
        price: "무료 (Free / 덧신 착용)",
        isSignature: true,
        description: "35m 해안 절벽 위 U자형 유리 전망대 무료 입장",
      },
    ],
    reviewsList: [
          {
                id: "r_a10_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "오륙도 스카이워크 & 해맞이공원에 방문했는데 경치가 정말 황홀했습니다. 35m해안절벽, 유리바닥스카이워크, 동해남해분기점 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a10_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a10_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a10_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a10_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a11",
    name: "황령산 봉수대",
    mainType: "attraction",
    category: "view",
    categoryLabel: "야경명소/전망대",
    location: "부산 부산진구 전포동",
    address: "부산 부산진구 봉수대길 137 (전포동 산50-1)",
    latitude: 35.1557,
    longitude: 129.0825,
    rating: 4.9,
    reviews: 3120,
    phone: "051-605-4065",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85",
    tags: ["부산1등야경", "360도파노라마", "광안대교야경", "서면도심뷰", "벚꽃드라이브"],
    distance: "약 14.0km",
    hotelDistanceInfo: "거리: 약 14.0km · 차량 약 30~35분",
    operatingHours: "24시간 상시 개방 (황령산 전망쉼터 카페 10:00 ~ 23:00) · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "부산 4개 구에 걸친 정상에서 즐기는 360도 파노라마 전망! 해운대·광안대교부터 부산항, 서면 도심까지 한눈에 조망",
    reviewSummary: [
      "부산 4개 구에 걸친 정상에서 즐기는 360도 파노라마 전망대 [06:36]",
      "동쪽의 해운대·광안대교부터 남쪽 영도·부산항, 서쪽 서면 도심까지 한눈에 조망 [06:36]",
      "낮의 도시 전경과 밤의 환상적인 불빛 야경 모두 최고 [06:55, 07:05]",
    ],
    menuItems: [
      {
        name: "황령산 전망데크 & 봉수대 관람",
        price: "무료 (Free)",
        isSignature: true,
        description: "부산 전역을 360도 파노라마로 조망하는 야경 명소",
      },
    ],
    reviewsList: [
          {
                id: "r_a11_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "황령산 봉수대에 방문했는데 경치가 정말 황홀했습니다. 부산1등야경, 360도파노라마, 광안대교야경 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a11_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a11_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a11_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a11_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a12",
    name: "범천동 호천마을",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "산복도로/드라마촬영지",
    location: "부산 부산진구 범천동",
    address: "부산 부산진구 엄광로 491 일대 (범천동)",
    latitude: 35.1458,
    longitude: 129.0435,
    rating: 4.7,
    reviews: 1210,
    phone: "051-605-4522",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=85",
    tags: ["쌈마이웨이촬영지", "남일바", "산복도로야경", "주황빛가로등", "레트로감성"],
    distance: "약 19.5km",
    hotelDistanceInfo: "거리: 약 19.5km · 차량 약 35~45분",
    operatingHours: "야외 상시 개방 (호천문화플랫폼 10:00~19:00 / 월요일 휴관)",
    todayHours: "마을 야경 24시간 개방",
    holiday: "야외 공간 연중무휴",
    highlight: "드라마 '쌈, 마이웨이' 남일바 촬영지! 언덕 위 옹기종기 모인 집들과 주황빛 가로등이 켜지는 감성 산복도로 야경",
    reviewSummary: [
      "드라마 '쌈, 마이웨이' 촬영지로 유명한 산복도로 옛마을",
      "언덕 위 옹기종기 모인 집들과 주황빛 가로등이 켜져 정감 넘치고 잔잔한 레트로 감성의 야경 명소",
    ],
    menuItems: [
      {
        name: "호천문화플랫폼 & 남일바 포토존",
        price: "무료 (Free)",
        isSignature: true,
        description: "드라마 속 주인공 아지트 세트장 및 레트로 소품 포토존",
      },
    ],
    reviewsList: [
          {
                id: "r_a12_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "범천동 호천마을에 방문했는데 경치가 정말 황홀했습니다. 쌈마이웨이촬영지, 남일바, 산복도로야경 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a12_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a12_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a12_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a12_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a13",
    name: "해동 용궁사",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "사찰/해안명승지",
    location: "부산 기장군 기장읍",
    address: "부산 기장군 기장읍 용궁길 86",
    latitude: 35.1884,
    longitude: 129.2232,
    rating: 4.8,
    reviews: 3890,
    phone: "051-722-7744",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85",
    tags: ["바다위사찰", "소원성취", "108계단", "동전던지기", "소원들어션뷰카페"],
    distance: "약 9.5km",
    hotelDistanceInfo: "거리: 약 9.5km · 차량 약 20~25분",
    operatingHours: "04:30 ~ 20:30 (입장마감 19:50) · 연중무휴",
    todayHours: "04:30 - 20:30",
    lastOrder: "19:50 (입장 마감)",
    holiday: "연중무휴 (무료 입장)",
    highlight: "기암괴석과 바다가 맞닿은 해안가에 세워진 한국에서 가장 아름다운 수상 사찰! 일출 명소 & 다리 위 동전 던지기 소원 빌기",
    reviewSummary: [
      "기암괴석과 바다가 맞닿은 해안가에 세워진 한국에서 가장 아름다운 수상 사찰 [17:20]",
      "새벽부터 개방되어 일출 감상에 좋으며, 12지신상과 교통안전탑을 지나 108계단을 내려가는 이색 코스 [17:32, 17:57]",
      "다리 위 동전 던지기 소원 빌기와 사찰 내 '소원들' 오션뷰 카페 운영 [18:09, 18:16]",
    ],
    menuItems: [
      {
        name: "해동용궁사 사찰 무료 입장",
        price: "무료 (Free)",
        isSignature: true,
        description: "동해 푸른 바다 절벽 위에 세워진 해상 사찰 무료 관람 (주차비 별도)",
      },
    ],
    reviewsList: [
          {
                id: "r_a13_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "해동 용궁사에 방문했는데 경치가 정말 황홀했습니다. 바다위사찰, 소원성취, 108계단 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a13_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a13_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a13_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a13_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a14",
    name: "흰여울 문화마을 & 흰여울해안터널",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "문화마을/해안터널",
    location: "부산 영도구 영선동",
    address: "부산 영도구 절영로 194 (영선동4가 1044-6)",
    latitude: 35.0778,
    longitude: 129.0436,
    rating: 4.8,
    reviews: 2680,
    phone: "051-419-4067",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["부산의산토리니", "변호인촬영지", "해안터널실루엣역광", "절벽라면", "오션뷰소품샵"],
    distance: "약 21.0km",
    hotelDistanceInfo: "거리: 약 21.0km · 차량 약 35~45분 (부산항대교 경유)",
    operatingHours: "마을 골목 상시 개방 (해안터널 09:00~18:00 / 상점가 10:00~19:00) · 연중무휴",
    todayHours: "골목길 24시간 개방",
    holiday: "연중무휴",
    highlight: "바다 절벽을 따라 흰색과 파란색으로 채색된 '부산의 산토리니'! 절벽 라면과 흰여울해안터널 실루엣 역광 사진 필수",
    reviewSummary: [
      "바다 절벽을 따라 흰색과 파란색으로 채색된 '부산의 산토리니' [12:54, 13:04]",
      "골목길 소품샵·카페 탐방 및 바다를 보며 먹는 절벽 라면이 명물 [13:17, 13:30]",
      "마을 끝 계단을 내려가 만나는 흰여울해안터널 내부 실루엣 역광 사진 필수 [13:45, 13:55]",
    ],
    menuItems: [
      {
        name: "흰여울 문화마을 & 해안터널 탐방",
        price: "무료 (Free)",
        isSignature: true,
        description: "절벽 위 골목길과 해안터널을 자유롭게 산책하는 힐링 코스",
      },
    ],
    reviewsList: [
          {
                id: "r_a14_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "흰여울 문화마을 & 흰여울해안터널에 방문했는데 경치가 정말 황홀했습니다. 부산의산토리니, 변호인촬영지, 해안터널실루엣역광 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a14_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a14_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a14_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a14_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a15",
    name: "태종대 유원지 (다누비열차·태종사)",
    mainType: "attraction",
    category: "nature",
    categoryLabel: "명승지/다누비열차",
    location: "부산 영도구 동삼동",
    address: "부산 영도구 전망로 24 (동삼동 산29-1)",
    latitude: 35.0531,
    longitude: 129.0833,
    rating: 4.8,
    reviews: 3450,
    phone: "051-405-8745",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=85",
    tags: ["수직절벽기암괴석", "다누비열차", "주전자섬조망", "대마도뷰", "태종사수국"],
    distance: "약 25.0km",
    hotelDistanceInfo: "거리: 약 25.0km · 차량 약 45~55분 (광안·부산항대교 경유)",
    operatingHours: "유원지 05:00~24:00 / 다누비열차 09:20~17:30",
    todayHours: "09:20 - 17:30 (다누비열차)",
    holiday: "유원지 연중무휴 (다누비열차 월요일 및 우천 시 운행 중단)",
    highlight: "깎아지른 수직 절벽과 기암괴석이 푸른 바다와 조화를 이루는 영도 최남단 명승지! 다누비열차 타고 주전자섬·대마도 조망",
    reviewSummary: [
      "깎아지른 수직 절벽과 기암괴석이 푸른 바다와 조화를 이루는 영도 최남단 명승지 [12:04, 12:21]",
      "귀여운 다누비열차를 타고 전망대에 오르면 주전자섬과 맑은 날 대마도까지 조망 가능 [12:26, 12:33]",
    ],
    menuItems: [
      {
        name: "다누비열차 순환 탑승권 (어른)",
        price: "4,000원",
        isSignature: true,
        description: "전망대, 영도등대, 태종사를 순환하는 관광 열차",
      },
    ],
    reviewsList: [
          {
                id: "r_a15_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "태종대 유원지 (다누비열차·태종사)에 방문했는데 경치가 정말 황홀했습니다. 수직절벽기암괴석, 다누비열차, 주전자섬조망 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a15_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a15_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a15_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a15_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a16",
    name: "해운대 달맞이길 (전망대)",
    mainType: "attraction",
    category: "view",
    categoryLabel: "전망대/드라이브",
    location: "부산 해운대구 중동",
    address: "부산 해운대구 달맞이길 190 일대 (중동)",
    latitude: 35.1610,
    longitude: 129.1824,
    rating: 4.8,
    reviews: 1980,
    phone: "051-749-5700",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=85",
    tags: ["달맞이언덕", "해운대탑티어뷰", "뷰맛집카페", "벚꽃드라이브", "해월정"],
    distance: "약 2.5km",
    hotelDistanceInfo: "거리: 약 2.5km · 차량 약 7~10분",
    operatingHours: "24시간 상시 개방 · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "해운대 동쪽 언덕 위에서 바다와 화려한 도심을 내려다보는 탑 티어 뷰포인트 & 뷰맛집 카페거리",
    reviewSummary: [
      "해운대 동쪽 언덕 위에서 바다와 화려한 해운대 도심을 내려다보는 탑 티어 뷰포인트",
      "전망대 뷰맛집 카페 탐방이나 봄철 벚꽃 드라이브 코스로 추천",
    ],
    menuItems: [
      {
        name: "달맞이길 전망대 & 해월정 산책",
        price: "무료 (Free)",
        isSignature: true,
        description: "푸른 바다와 해운대 고층 빌딩이 한눈에 내려다보이는 전망 산책",
      },
    ],
    reviewsList: [
          {
                id: "r_a16_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "해운대 달맞이길 (전망대)에 방문했는데 경치가 정말 황홀했습니다. 달맞이언덕, 해운대탑티어뷰, 뷰맛집카페 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a16_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a16_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a16_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a16_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a17",
    name: "동백섬 (누리마루 산책로)",
    mainType: "attraction",
    category: "nature",
    categoryLabel: "자연/해안산책로",
    location: "부산 해운대구 우동",
    address: "부산 해운대구 동백로 116 (우동)",
    latitude: 35.1534,
    longitude: 129.1524,
    rating: 4.9,
    reviews: 2350,
    phone: "051-744-3140",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["해운대연결", "광안대교뷰", "누리마루APEC", "30분산책코스", "호텔도보15분"],
    distance: "약 1.3km",
    hotelDistanceInfo: "거리: 약 1.3km · 차량 약 4~5분 (호텔에서 도보 약 15분 산책 권장)",
    operatingHours: "산책로 24시간 개방 / 누리마루 APEC하우스 09:00~17:00 (입장마감 16:30)",
    todayHours: "산책로 24시간 개방",
    holiday: "누리마루 매월 첫째 월요일 휴관 (산책로는 연중무휴)",
    highlight: "동쪽 해운대 백사장과 서쪽 광안대교를 모두 조망하는 명당! 가볍게 30분 산책하기 좋은 코스",
    reviewSummary: [
      "동쪽으로는 해운대 백사장과 달맞이언덕, 서쪽으로는 광안대교를 조망할 수 있는 명당",
      "해운대 해수욕장과 바로 이어져 있으며 한 바퀴 약 30분이면 가볍게 산책 가능",
    ],
    menuItems: [
      {
        name: "동백섬 순환 산책로 & 누리마루 관람",
        price: "무료 (Free)",
        isSignature: true,
        description: "최치원 유적비, 동백등대, APEC 하우스 무료 산책",
      },
    ],
    reviewsList: [
          {
                id: "r_a17_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "동백섬 (누리마루 산책로)에 방문했는데 경치가 정말 황홀했습니다. 해운대연결, 광안대교뷰, 누리마루APEC 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a17_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a17_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a17_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a17_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a18",
    name: "더베이 101 (The Bay 101)",
    mainType: "attraction",
    category: "night",
    categoryLabel: "야경/복합문화공간",
    location: "부산 해운대구 우동",
    address: "부산 해운대구 동백로 52 (우동)",
    latitude: 35.1566,
    longitude: 129.1517,
    rating: 4.8,
    reviews: 2650,
    phone: "051-726-8888",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85",
    tags: ["동백섬초입", "마린시티야경", "핑거스앤챗", "피시앤칩스맥주", "호텔도보12분"],
    distance: "약 1.1km",
    hotelDistanceInfo: "거리: 약 1.1km · 차량 약 4~5분 (도보 약 12~15분)",
    operatingHours: "08:00 ~ 24:00 (식음 매장 10:00 ~ 23:30) · 연중무휴",
    todayHours: "08:00 - 24:00",
    holiday: "연중무휴",
    highlight: "동백섬 초입 최신 마리나 복합 문화 공간! 마린시티 초고층 빌딩 야경을 보며 '핑거스앤챗' 피시앤칩스와 맥주 즐기기",
    reviewSummary: [
      "동백섬 초입에 위치한 최신 마리나 및 복합 문화 외식 공간 [06:49]",
      "마린시티 초고층 빌딩 야경을 바라보며 '핑거스앤챗' 피시앤칩스와 맥주 즐기기 [07:05]",
      "야간 불꽃놀이를 즐기는 요트투어 및 동백공영주차장 뒤편 바다 포토존 명소 [07:31, 07:35]",
    ],
    menuItems: [
      {
        name: "핑거스앤챗 대구 피시앤칩스",
        price: "21,000원",
        isSignature: true,
        description: "바삭한 튀김옷과 부드러운 대구살 핑거푸드",
      },
    ],
    reviewsList: [
          {
                id: "r_a18_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "더베이 101 (The Bay 101)에 방문했는데 경치가 정말 황홀했습니다. 동백섬초입, 마린시티야경, 핑거스앤챗 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a18_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a18_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a18_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a18_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a19",
    name: "해운대 블루라인파크 (미포정거장)",
    mainType: "attraction",
    category: "beach",
    categoryLabel: "해변/해변열차/스카이캡슐",
    location: "부산 해운대구 중동",
    address: "부산 해운대구 달맞이길62번길 13 (중동)",
    latitude: 35.1585,
    longitude: 129.1729,
    rating: 4.9,
    reviews: 3560,
    phone: "051-701-5548",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=900&q=85",
    tags: ["연간200만방문", "스카이캡슐", "해변열차", "청사포철길포토존", "사전예매필수"],
    distance: "약 1.2km",
    hotelDistanceInfo: "거리: 약 1.2km · 차량 약 4~5분 (도보 약 15분)",
    operatingHours: "09:30 ~ 18:00~20:30 (계절·월별 탄력 운영) · 연중무휴",
    todayHours: "09:30 - 19:30",
    holiday: "연중무휴",
    highlight: "연간 200만 명이 찾는 부산 대표 랜드마크! 프라이빗 스카이캡슐과 계단식 좌석의 오션뷰 해변열차 (사전 예매 필수)",
    reviewSummary: [
      "연간 약 200만 명이 방문하는 부산의 랜드마크 [01:39]",
      "일행끼리 프라이빗하게 바다를 조망하는 스카이캡슐과 탁 트인 바다를 바라보는 계단식 좌석의 해변열차로 구성 [01:51, 02:30]",
      "주말/공휴일은 당일 발권이 어려우므로 사전 예매 필수, 청사포 정거장 앞 철길 포토존 추천 [02:04, 02:57]",
    ],
    menuItems: [
      {
        name: "스카이캡슐 편도 (2인승 / 시그니처)",
        price: "35,000원",
        isSignature: true,
        description: "지상 7~10m 레일 위에서 바다를 조망하는 프라이빗 캡슐",
      },
      {
        name: "해변열차 1회 탑승권",
        price: "7,000원",
        description: "클래식 오션뷰 해안 관광열차",
      },
    ],
    reviewsList: [
          {
                id: "r_a19_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "해운대 블루라인파크 (미포정거장)에 방문했는데 경치가 정말 황홀했습니다. 연간200만방문, 스카이캡슐, 해변열차 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a19_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a19_3",
                author: "김민준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a19_4",
                author: "이지은",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a19_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a20",
    name: "청사포 다릿돌전망대",
    mainType: "attraction",
    category: "view",
    categoryLabel: "전망대/해상스카이워크",
    location: "부산 해운대구 중동",
    address: "부산 해운대구 중동 산36-2 (청사포역 인근)",
    latitude: 35.1612,
    longitude: 129.1915,
    rating: 4.8,
    reviews: 1820,
    phone: "051-749-5700",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["슬램덩크철길뷰", "다릿돌전망대", "투명바닥", "달맞이터널", "무료입장"],
    distance: "약 3.8km",
    hotelDistanceInfo: "거리: 약 3.8km · 차량 약 10~12분",
    operatingHours: "09:00 ~ 18:00 (하절기 6~8월 20:00까지 / 눈·비·강풍 시 통제) · 연중무휴",
    todayHours: "09:00 - 18:00",
    holiday: "연중무휴",
    highlight: "청사포 슬램덩크 철길 건널목 포토존과 투명 바닥 위를 걸으며 동해 바다를 만끽하는 해상 전망대",
    reviewSummary: [
      "해변열차 중간 경유지인 청사포에 위치한 해상 전망대",
      "투명 바닥을 걸으며 바다 위를 걷는 듯한 체험과 달맞이터널 관람 가능",
    ],
    menuItems: [
      {
        name: "다릿돌전망대 해상 관람",
        price: "무료 (Free / 덧신 착용)",
        isSignature: true,
        description: "바다 위로 뻗은 투명 강화유리 스카이워크 무료 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a20_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "청사포 다릿돌전망대에 방문했는데 경치가 정말 황홀했습니다. 슬램덩크철길뷰, 다릿돌전망대, 투명바닥 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a20_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a20_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a20_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a20_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a21",
    name: "수영만 요트경기장 (요트 투어)",
    mainType: "attraction",
    category: "beach",
    categoryLabel: "해양레저/요트투어",
    location: "부산 해운대구 우동",
    address: "부산 해운대구 해운대해변로 84 (우동)",
    latitude: 35.1601,
    longitude: 129.1412,
    rating: 4.9,
    reviews: 2410,
    phone: "051-747-0105",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["광안대교요트투어", "선셋일몰투어", "야간불꽃놀이", "마린시티출항", "최고액티비티"],
    distance: "약 2.8km",
    hotelDistanceInfo: "거리: 약 2.8km · 차량 약 7~10분",
    operatingHours: "11:00 ~ 22:00 (업체별·계절별 상이 / 사전 예약 필수) · 연중무휴",
    todayHours: "11:00 - 22:00",
    holiday: "연중무휴 (기상 악화 시 결항)",
    highlight: "마린시티에서 출항해 광안대교를 지나 광안리 앞바다를 돌아오는 최고 해상 액티비티! 일몰·야경 타임 추천",
    reviewSummary: [
      "마린시티 요트경기장에서 출항해 광안대교를 지나 광안리 앞바다를 돌아오는 최고로 멋진 해상 액티비티",
      "광안대교 점등 시간에 맞춘 일몰·야경 타임 투어 강력 추천",
    ],
    menuItems: [
      {
        name: "퍼블릭 요트투어 1인 (주간/선셋)",
        price: "20,000원 ~ 35,000원",
        isSignature: true,
        description: "다과/음료 및 야간 폭죽놀이 포함 60분 프리미엄 요트 세일링",
      },
    ],
    reviewsList: [
          {
                id: "r_a21_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "수영만 요트경기장 (요트 투어)에 방문했는데 경치가 정말 황홀했습니다. 광안대교요트투어, 선셋일몰투어, 야간불꽃놀이 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a21_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a21_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a21_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a21_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a22",
    name: "오시리아 해안산책로 (오랑대공원)",
    mainType: "attraction",
    category: "nature",
    categoryLabel: "자연/해안길산책",
    location: "부산 기장군 기장읍",
    address: "부산 기장군 기장읍 시랑리 산77-4 (오랑대공원 일대)",
    latitude: 35.1982,
    longitude: 129.2315,
    rating: 4.8,
    reviews: 1180,
    phone: "051-709-4000",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=85",
    tags: ["오랑대공원", "용궁사아난티연결", "기장찐바다", "힐링산책로", "24시간개방"],
    distance: "약 9.8km",
    hotelDistanceInfo: "거리: 약 9.8km · 차량 약 20~25분",
    operatingHours: "24시간 상시 개방 · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "용궁사에서 아난티를 거쳐 오랑대공원까지 이어지는 해안길! 도심과 대비되는 기장의 때 묻지 않은 찐 자연 바다",
    reviewSummary: [
      "용궁사 앞에서부터 아난티 힐튼을 거쳐 오랑대공원까지 이어지는 해안길",
      "도심의 화려함과 대비되는 기장의 때 묻지 않은 찐 자연 바다를 감상하며 걷는 힐링 산책로",
    ],
    menuItems: [
      {
        name: "오시리아 해안산책로 & 오랑대 관람",
        price: "무료 (Free)",
        isSignature: true,
        description: "기장 기암괴석과 바다 절경을 따라 걷는 명품 힐링 코스",
      },
    ],
    reviewsList: [
          {
                id: "r_a22_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "오시리아 해안산책로 (오랑대공원)에 방문했는데 경치가 정말 황홀했습니다. 오랑대공원, 용궁사아난티연결, 기장찐바다 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a22_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a22_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a22_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a22_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a23",
    name: "해운대 해수욕장",
    mainType: "attraction",
    category: "beach",
    categoryLabel: "해변/글로벌휴양지",
    location: "부산 해운대구 우동",
    address: "부산 해운대구 해운대해변로 264 (우동)",
    latitude: 35.1587,
    longitude: 129.1603,
    rating: 4.9,
    reviews: 5120,
    phone: "051-749-5700",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["씨클라우드호텔앞", "도보1분", "1.5km백사장", "구남로맛집골목인접", "데크로드조성"],
    distance: "약 100m",
    hotelDistanceInfo: "거리: 약 100m · 호텔 바로 앞 (도보 1~2분)",
    operatingHours: "24시간 상시 개방 · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "1.5km 넓은 백사장과 완만한 수심의 대한민국 대표 해변! 호텔과 고층 빌딩이 어우러진 현대적 뷰 & 구남로 맛집 골목 인접",
    reviewSummary: [
      "길이 1.5km의 넓은 백사장과 수심이 완만해 남녀노소 즐기기 좋은 대한민국 대표 해변 [05:54]",
      "호텔과 고층 빌딩이 어우러진 현대적인 뷰와 보행 약자를 위한 데크로드 조성 [06:06]",
      "해변 주변 구남로 맛집 골목과 인접해 저녁 식사 및 숙박 연계에 최적 [06:30]",
    ],
    menuItems: [
      {
        name: "해운대 백사장 산책",
        price: "무료 (Free)",
        isSignature: true,
        description: "호텔 바로 앞 파도 소리와 밤바다 버스킹 산책",
      },
    ],
    reviewsList: [
          {
                id: "r_a23_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "해운대 해수욕장에 방문했는데 경치가 정말 황홀했습니다. 씨클라우드호텔앞, 도보1분, 1.5km백사장 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a23_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a23_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a23_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a23_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a24",
    name: "광안리 해수욕장 & 광안대교",
    mainType: "attraction",
    category: "beach",
    categoryLabel: "해변/야경핫플",
    location: "부산 수영구 광안동",
    address: "부산 수영구 광안해변로 219 (광안동)",
    latitude: 35.1532,
    longitude: 129.1186,
    rating: 4.9,
    reviews: 3420,
    phone: "051-610-4841",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85",
    tags: ["7.4km광안대교", "토요일상설드론쇼", "요트폭죽쇼", "오션뷰펍카페", "버스킹공연"],
    distance: "약 6.5km",
    hotelDistanceInfo: "거리: 약 6.5km · 차량 약 15~20분",
    operatingHours: "24시간 상시 개방 (매주 토요일 드론라이트쇼 진행) · 연중무휴",
    todayHours: "24시간 상시 개방 (토요일 드론쇼: 동절기 19시/21시, 하절기 20시/22시)",
    holiday: "연중무휴",
    highlight: "7.4km 광안대교 웅장한 전경과 화려한 야경 경관조명! 밤바다 요트 폭죽쇼, 버스킹 공연과 토요일 상설 드론쇼",
    reviewSummary: [
      "7.4km 광안대교 웅장한 전경과 화려한 야경 경관조명이 빛나는 핫플레이스 [15:44, 15:56]",
      "밤바다 요트 폭죽쇼, 버스킹 공연, 토요일 상설 드론 라이트 쇼 진행 [16:07, 16:20]",
      "해변 도로변에 개성 넘치는 오션뷰 식당, 펍, 플리마켓 밀집 [16:36, 16:49]",
    ],
    menuItems: [
      {
        name: "광안리 해변 산책 & 드론쇼 관람",
        price: "무료 (Free)",
        isSignature: true,
        description: "광안대교를 정면에서 바라보는 야경과 드론쇼 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a24_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "광안리 해수욕장 & 광안대교에 방문했는데 경치가 정말 황홀했습니다. 7.4km광안대교, 토요일상설드론쇼, 요트폭죽쇼 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a24_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a24_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a24_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a24_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a25",
    name: "송정 해수욕장",
    mainType: "attraction",
    category: "beach",
    categoryLabel: "해변/서핑성지",
    location: "부산 해운대구 송정동",
    address: "부산 해운대구 송정해변로 54 (송정동)",
    latitude: 35.1785,
    longitude: 129.1996,
    rating: 4.8,
    reviews: 2190,
    phone: "051-749-5800",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["서핑성지", "한적한여유", "해변열차종착역", "송일정일출", "죽도공원"],
    distance: "약 6.0km",
    hotelDistanceInfo: "거리: 약 6.0km · 차량 약 15~18분",
    operatingHours: "24시간 상시 개방 · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "덜 붐비고 한적한 여유를 즐길 수 있는 부산 대표 서핑 성지! 블루라인파크 해변열차 종착역 연계",
    reviewSummary: [
      "해운대나 광안리에 비해 덜 붐비고 한적한 여유를 즐길 수 있는 부산 대표 서핑 성지",
      "블루라인파크 해변열차의 종착역과 바로 연계되어 방문하기 좋음",
    ],
    menuItems: [
      {
        name: "송정 서핑 강습 & 보드 렌탈",
        price: "50,000원 ~",
        isSignature: true,
        description: "전문 서퍼의 안전 강습과 자유 서핑",
      },
    ],
    reviewsList: [
          {
                id: "r_a25_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "송정 해수욕장에 방문했는데 경치가 정말 황홀했습니다. 서핑성지, 한적한여유, 해변열차종착역 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a25_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a25_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a25_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a25_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a26",
    name: "초량 이바구길 168계단",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "역사문화/모노레일",
    location: "부산 동구 초량동",
    address: "부산 동구 영초위길 19 (초량동)",
    latitude: 35.1189,
    longitude: 129.0345,
    rating: 4.7,
    reviews: 1420,
    phone: "051-440-4061",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=85",
    tags: ["168계단", "모노레일", "피란민역사", "전망대포토존", "무료탑승"],
    distance: "약 18.0km",
    hotelDistanceInfo: "거리: 약 18.0km · 차량 약 35~40분 (부산역 도보 10분)",
    operatingHours: "야외 상시 개방 (모노레일/승강기 07:00 ~ 21:00 운행) · 연중무휴",
    todayHours: "07:00 - 21:00 (모노레일)",
    holiday: "연중무휴",
    highlight: "한국전쟁 피란민의 애환이 깃든 168계단과 45도 경사의 무료 모노레일 & 부산항 파노라마 전망",
    reviewSummary: [
      "한국전쟁 당시 피란민들이 물을 긷던 역사적 통로",
      "주민 복지형 모노레일이 설치되어 있어 이동이 편리함 (무료 탑승)",
      "168계단 전망대는 부산 원도심과 항구가 내려다보이는 인기 포토존",
    ],
    menuItems: [
      {
        name: "168계단 모노레일 탑승",
        price: "무료 (Free)",
        isSignature: true,
        description: "가파른 계단을 오르내리는 이색 모노레일",
      },
    ],
    reviewsList: [
          {
                id: "r_a26_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "초량 이바구길 168계단에 방문했는데 경치가 정말 황홀했습니다. 168계단, 모노레일, 피란민역사 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a26_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a26_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a26_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a26_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a27",
    name: "영도 하늘전망대",
    mainType: "attraction",
    category: "view",
    categoryLabel: "전망대/지질명소",
    location: "부산 영도구 동삼동",
    address: "부산 영도구 절영로 358 (동삼동 산149-1)",
    latitude: 35.0682,
    longitude: 129.0521,
    rating: 4.8,
    reviews: 980,
    phone: "051-419-4000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
    tags: ["백악기퇴적층", "대마도조망", "스카이워크", "절영산책로연계", "24시간개방"],
    distance: "약 22.5km",
    hotelDistanceInfo: "거리: 약 22.5km · 차량 약 40~45분",
    operatingHours: "24시간 상시 개방 · 연중무휴",
    todayHours: "24시간 상시 개방",
    holiday: "연중무휴",
    highlight: "중생대 백악기 퇴적층 절경과 맑은 날 대마도까지 조망할 수 있는 영도 대표 스카이워크",
    reviewSummary: [
      "중생대 백악기 퇴적층 암석 절경을 관람할 수 있는 전망 스팟",
      "날씨가 맑은 날에는 대마도 산봉우리까지 육안으로 조망 가능",
      "흰여울문화마을과 연계 관광 추천",
    ],
    menuItems: [
      {
        name: "하늘전망대 관람",
        price: "무료 (Free)",
        isSignature: true,
        description: "남항 앞바다 묘박지와 수평선을 감상하는 돌출형 바닥 유리 전망대",
      },
    ],
    reviewsList: [
          {
                id: "r_a27_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "영도 하늘전망대에 방문했는데 경치가 정말 황홀했습니다. 백악기퇴적층, 대마도조망, 스카이워크 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a27_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a27_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a27_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a27_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a28",
    name: "국립해양박물관",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "박물관/아쿠아리움",
    location: "부산 영도구 동삼동",
    address: "부산 영도구 해양로301번길 45 (동삼동)",
    latitude: 35.0789,
    longitude: 129.0801,
    rating: 4.8,
    reviews: 3120,
    phone: "051-309-1900",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=900&q=85",
    tags: ["무료입장", "터널형수족관", "피딩쇼", "조선통신사선", "가족여행추천"],
    distance: "약 22.0km",
    hotelDistanceInfo: "거리: 약 22.0km · 차량 약 35~45분",
    operatingHours: "09:00 ~ 18:00 (토·일·공휴일 연장 운영, 마감 1시간 전 입장 마감)",
    todayHours: "09:00 - 18:00",
    lastOrder: "17:00 (입장 마감)",
    holiday: "매주 월요일 휴관 (월요일이 공휴일인 경우 다음 평일 휴관)",
    highlight: "입장료 무료! 웅장한 조선통신사선과 3층 터널형 수족관 피딩쇼가 펼쳐지는 종합 해양박물관",
    reviewSummary: [
      "입장료 무료, 조선통신사선 복원선 등 국보급 해양 유물 전시",
      "3층 터널형 수족관의 아쿠아리스트 피딩쇼는 필수 관람 코스",
      "아이 동반 가족 여행객에게 강력 추천",
    ],
    menuItems: [
      {
        name: "상설전시관 & 수족관 입장",
        price: "무료 (Free)",
        isSignature: true,
        description: "국내 유일 종합 해양박물관 상설전시 및 미니 아쿠아리움 무료 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a28_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "국립해양박물관에 방문했는데 경치가 정말 황홀했습니다. 무료입장, 터널형수족관, 피딩쇼 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a28_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a28_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a28_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a28_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a29",
    name: "용두산 공원 (부산타워 / 다이아몬드타워)",
    mainType: "attraction",
    category: "view",
    categoryLabel: "공원/랜드마크전망대",
    location: "부산 중구 광복동",
    address: "부산 중구 용두산길 37-55 (광복동2가)",
    latitude: 35.1006,
    longitude: 129.0326,
    rating: 4.7,
    reviews: 2310,
    phone: "051-245-1066",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85",
    tags: ["부산타워", "다이아몬드타워", "도심야경", "꽃시계", "광복로에스컬레이터"],
    distance: "약 19.0km",
    hotelDistanceInfo: "거리: 약 19.0km · 차량 약 35~45분",
    operatingHours: "공원 상시 개방 (부산타워 전망대 10:00~22:00, 발권마감 21:30) · 연중무휴",
    todayHours: "10:00 - 22:00 (전망대)",
    lastOrder: "21:30 (발권 마감)",
    holiday: "연중무휴",
    highlight: "광복로에서 에스컬레이터로 바로 연결! 120m 다이아몬드타워에서 감상하는 부산 원도심과 항구 파노라마",
    reviewSummary: [
      "남포역 광복로에서 에스컬레이터로 편리하게 연결",
      "용의 머리를 닮은 지형으로 역사적 배경을 지닌 도심 공원",
      "정상부 전망대(다이아몬드타워)에서 부산 도심 전경 감상 가능",
    ],
    menuItems: [
      {
        name: "부산타워 대인 입장권",
        price: "12,000원",
        isSignature: true,
        description: "전망대 360도 도심 조망",
      },
    ],
    reviewsList: [
          {
                id: "r_a29_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "용두산 공원 (부산타워 / 다이아몬드타워)에 방문했는데 경치가 정말 황홀했습니다. 부산타워, 다이아몬드타워, 도심야경 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a29_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a29_3",
                author: "이지은",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a29_4",
                author: "박서준",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a29_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a30",
    name: "국제시장 & 부평 깡통야시장",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "전통시장/미식성지",
    location: "부산 중구 신창동/부평동",
    address: "부산 중구 부평1길 48 (부평동2가)",
    latitude: 35.1022,
    longitude: 129.0258,
    rating: 4.8,
    reviews: 4210,
    phone: "051-243-1128",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85",
    tags: ["대한민국최초상설야시장", "잠들지않는미식성지", "씨앗호떡비빔당면", "이가네떡볶이", "한국의활력"],
    distance: "약 19.5km",
    hotelDistanceInfo: "거리: 약 19.5km · 차량 약 40~45분 (부산항대교 경유)",
    operatingHours: "일반시장 09:00 ~ 20:00 / 야시장 19:30 ~ 23:30 · 연중무휴",
    todayHours: "야시장 19:30 - 23:30",
    holiday: "연중무휴 (야시장 기준)",
    highlight: "대한민국 최초 상설 야시장이 열리는 잠들지 않는 미식 성지! 씨앗호떡, 비빔당면, 유부주머니부터 이색 야시장 퓨전 요리",
    reviewSummary: [
      "대한민국 최초 상설 야시장이 열리는 잠들지 않는 미식 성지 [15:16, 15:21]",
      "씨앗호떡, 비빔당면, 유부주머니 등 전통 소울푸드부터 이색적인 야시장 퓨전 요리 [15:36]",
      "북적이는 인파 속에서 진짜 한국의 활력과 정을 느끼는 필수 코스 [15:50, 16:03]",
    ],
    menuItems: [
      {
        name: "부평 깡통야시장 길거리 음식",
        price: "4,000원 ~ 8,000원",
        isSignature: true,
        description: "삼겹살김밥, 납작만두, 씨앗호떡 등 야시장 매대 먹거리",
      },
    ],
    reviewsList: [
          {
                id: "r_a30_1",
                author: "김민준",
                date: "1일 전",
                rating: 5,
                content: "국제시장 & 부평 깡통야시장에 방문했는데 경치가 정말 황홀했습니다. 대한민국최초상설야시장, 잠들지않는미식성지, 씨앗호떡비빔당면 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a30_2",
                author: "이지은",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a30_3",
                author: "박서준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a30_4",
                author: "최수빈",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a30_5",
                author: "정다은",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a31",
    name: "보수동 책방골목",
    mainType: "attraction",
    category: "culture",
    categoryLabel: "문화거리/헌책방",
    location: "부산 중구 보수동",
    address: "부산 중구 대청로 67-1 일대 (보수동1가)",
    latitude: 35.1042,
    longitude: 129.0264,
    rating: 4.7,
    reviews: 1350,
    phone: "051-241-2122",
    image: "https://images.unsplash.com/photo-1507842229452-73a7431e5f8f?w=900&q=85",
    tags: ["전국유일헌책방골목", "아날로그감성", "북카페", "레트로포토존"],
    distance: "약 19.8km",
    hotelDistanceInfo: "거리: 약 19.8km · 차량 약 40~45분",
    operatingHours: "10:00 ~ 19:00~20:00 (점포별 상이) · 화요일 휴무 점포 다수",
    todayHours: "10:00 - 19:30",
    holiday: "점포별 상이 (화요일 휴무 다수)",
    highlight: "한국전쟁 피란 시절부터 이어진 전국 유일의 헌책방 골목! 골목 가득 풍기는 정겨운 종이 냄새",
    reviewSummary: [
      "한국전쟁 피란 시절 형성된 전국 유일의 헌책방 골목",
      "과거 미군 외국 원서와 교과서를 구하던 곳으로 아날로그 감성의 보물창고",
    ],
    menuItems: [
      {
        name: "보수동 골목 서점 헌책 탐방",
        price: "1,000원 ~",
        isSignature: true,
        description: "고서, 만화책, 문학전집을 찾는 아날로그 감성 여행",
      },
    ],
    reviewsList: [
          {
                id: "r_a31_1",
                author: "김민준",
                date: "1일 전",
                rating: 5,
                content: "보수동 책방골목에 방문했는데 경치가 정말 황홀했습니다. 전국유일헌책방골목, 아날로그감성, 북카페 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a31_2",
                author: "이지은",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a31_3",
                author: "박서준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a31_4",
                author: "최수빈",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a31_5",
                author: "정다은",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },
  {
    id: "a32",
    name: "국립부산과학관",
    mainType: "attraction",
    category: "theme",
    categoryLabel: "과학관/체험시뮬레이터",
    location: "부산 기장군 기장읍",
    address: "부산 기장군 기장읍 동부산관광6로 59",
    latitude: 35.1979,
    longitude: 129.2138,
    rating: 4.8,
    reviews: 2450,
    phone: "051-750-2300",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=900&q=85",
    tags: ["동남권최대과학관", "체험형시뮬레이터80%", "탑승체험", "천체투영관", "아이동반필수"],
    distance: "약 11.5km",
    hotelDistanceInfo: "거리: 약 11.5km · 차량 약 20~25분",
    operatingHours: "09:30 ~ 17:30 (입장마감 16:30) · 매주 월요일 휴관",
    todayHours: "09:30 - 17:30",
    lastOrder: "16:30 (입장 마감)",
    holiday: "매주 월요일 휴관 (월요일이 공휴일인 경우 다음 평일 휴관)",
    highlight: "전시물의 80% 이상이 직접 조작하고 탑승하는 첨단 체험형 과학관! 자동차·항공우주·선박 테마",
    reviewSummary: [
      "자동차, 항공우주, 선박 등을 테마로 한 동남권 최대 과학관",
      "전시물의 80% 이상이 직접 조작하고 탑승하는 체험형 시뮬레이터로 구성",
      "아이 동반 가족 여행객에게 강력 추천",
    ],
    menuItems: [
      {
        name: "상설전시관 관람권 (성인)",
        price: "3,000원",
        isSignature: true,
        description: "1관~3관 통합 체험 관람",
      },
    ],
    reviewsList: [
          {
                id: "r_a32_1",
                author: "김민준",
                date: "1일 전",
                rating: 5,
                content: "국립부산과학관에 방문했는데 경치가 정말 황홀했습니다. 동남권최대과학관, 체험형시뮬레이터80%, 탑승체험 특징이 잘 살아있어서 가족, 연인과 함께 오기 최고의 코스예요."
          },
          {
                id: "r_a32_2",
                author: "이지은",
                date: "3일 전",
                rating: 5,
                content: "부산 여행 중 가장 기억에 남는 명소입니다! 날씨 좋은 날 방문해서 인생샷 수십 장 건졌네요. 관리가 아주 잘 되어 있습니다."
          },
          {
                id: "r_a32_3",
                author: "박서준",
                date: "5일 전",
                rating: 5,
                content: "선셋 시간대와 야경이 특히 아름다운 곳. 주변 인근 맛집들과 묶어서 동선 짜기에 너무 좋았습니다."
          },
          {
                id: "r_a32_4",
                author: "최수빈",
                date: "1주 전",
                rating: 4,
                content: "산책로 정비가 잘 되어 있고 뷰포인트마다 벤치가 있어 여유롭게 바다 바람 쐬기 좋습니다. 강력 추천!"
          },
          {
                id: "r_a32_5",
                author: "정다은",
                date: "2주 전",
                rating: 5,
                content: "부산 현지인도 추천하는 대표 명소답게 볼거리가 풍성합니다. 주차도 편리하고 다시 방문하고 싶은 곳이에요."
          }
    ],
  },

  // ==========================================
  // 🅿️ 주요 권역별 공영주차장 (22곳)
  // ==========================================
  {
    id: "p1",
    name: "동백공원 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 해운대구 우동",
    address: "부산 해운대구 우동 721-1 (동백섬 입구)",
    latitude: 35.1558,
    longitude: 129.1534,
    rating: 4.6,
    reviews: 1240,
    phone: "051-749-5750",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["동백섬입구", "더베이101근처", "해운대해변도보5분", "경차전기차50%할인", "24시간"],
    distance: "약 1.0km",
    hotelDistanceInfo: "거리: 약 1.0km · 차량 약 3~4분 (도보 약 12분)",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "동백섬, 누리마루 APEC하우스, 더베이 101, 해운대해수욕장 서편 도보 접근 최적의 넓은 지상 공영주차장",
    reviewSummary: [
      "10분당 300원 (비수기) / 500원 (성수기 7~8월 및 주말)",
      "1일 최대 주차요금: 8,000원 ~ 15,000원",
      "경차, 친환경(전기/수소/하이브리드), 장애인, 다자녀 50% 감면 혜택",
      "인근 연계: 동백섬 산책로, 더베이101, 해운대 해수욕장 (반경 300m 이내)",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "300원 ~ 500원",
        isSignature: true,
        description: "10분 단위 부과 (성수기 500원)",
      },
      {
        name: "1일 최대 주차 요금",
        price: "8,000원 ~ 15,000원",
        description: "일 주차 요금 (24시간 기준)",
      },
    ],
    reviewsList: [
          {
                id: "r_p1_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "동백공원 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p1_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 동백섬입구, 더베이101근처, 해운대해변도보5분 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p1_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p1_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p1_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p2",
    name: "미포 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 해운대구 중동",
    address: "부산 해운대구 달맞이길62번길 17 (중동 1778-2)",
    latitude: 35.1588,
    longitude: 129.1725,
    rating: 4.6,
    reviews: 980,
    phone: "051-749-5750",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["블루라인파크미포", "엑스더스카이도보3분", "해목근처", "엘시티앞", "24시간"],
    distance: "약 1.1km",
    hotelDistanceInfo: "거리: 약 1.1km · 차량 약 4분 (도보 약 14분)",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "해운대 블루라인파크 미포정거장, 엑스더스카이(엘시티), 해목, 나가하마만게츠 맛집 탐방 시 최고의 공영주차장",
    reviewSummary: [
      "10분당 300원 (최초 30분 900원)",
      "1일 최대 요금: 8,000원 (경차/친환경차 50% 할인)",
      "블루라인파크 미포 탑승장 바로 앞 위치로 주말에는 오전 방문 권장",
      "인근 연계: 블루라인파크 미포역, 엑스더스카이, 해목, 나가하마만게츠",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "300원",
        isSignature: true,
        description: "최초 30분 900원, 이후 10분당 300원",
      },
      {
        name: "1일 주차권",
        price: "8,000원",
        description: "24시간 기준 일일 최대 요금",
      },
    ],
    reviewsList: [
          {
                id: "r_p2_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "미포 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p2_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 블루라인파크미포, 엑스더스카이도보3분, 해목근처 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p2_3",
                author: "이지은",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p2_4",
                author: "박서준",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p2_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p3",
    name: "해운대광장 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 해운대구 우동",
    address: "부산 해운대구 구남로 12 (우동 611-1)",
    latitude: 35.1611,
    longitude: 129.1595,
    rating: 4.5,
    reviews: 1120,
    phone: "051-749-5750",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["구남로문화광장", "해운대역인근", "가야밀면도보권", "해운대해변중앙", "24시간"],
    distance: "약 300m",
    hotelDistanceInfo: "거리: 약 300m · 도보 3분 (차량 1분)",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "씨클라우드 호텔 바로 인근 구남로 광장 및 해운대 시장, 가야밀면 밀집 상권 접근성 최상",
    reviewSummary: [
      "10분당 500원 / 일 최대 15,000원",
      "구남로 버스킹 광장 및 해운대 전통시장 바로 옆",
      "인근 연계: 해운대 해수욕장, 해운대 가야밀면, 해운대 시장",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "500원",
        isSignature: true,
        description: "1급지 기준 10분당 500원",
      },
    ],
    reviewsList: [
          {
                id: "r_p3_1",
                author: "김민준",
                date: "1일 전",
                rating: 5,
                content: "해운대광장 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p3_2",
                author: "이지은",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 구남로문화광장, 해운대역인근, 가야밀면도보권 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p3_3",
                author: "박서준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p3_4",
                author: "최수빈",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p3_5",
                author: "정다은",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p4",
    name: "청사포 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 해운대구 중동",
    address: "부산 해운대구 청사포로 128번길 22",
    latitude: 35.1608,
    longitude: 129.1912,
    rating: 4.7,
    reviews: 750,
    phone: "051-749-5750",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["청사포다릿돌전망대", "슬램덩크철길", "조개구이거리", "블루라인청사포역"],
    distance: "약 3.8km",
    hotelDistanceInfo: "거리: 약 3.8km · 차량 약 10분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "청사포 다릿돌전망대, 슬램덩크 감성 철길 포토존, 청사포 조개구이 골목 전용 공영주차장",
    reviewSummary: [
      "10분당 300원 / 일 최대 8,000원",
      "다릿돌전망대 및 청사포 쌍둥이등대 도보 5분 거리",
      "경차/친환경차 50% 할인 적용",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "300원",
        isSignature: true,
        description: "10분당 300원 (일 최대 8,000원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p4_1",
                author: "이지은",
                date: "1일 전",
                rating: 5,
                content: "청사포 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p4_2",
                author: "박서준",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 청사포다릿돌전망대, 슬램덩크철길, 조개구이거리 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p4_3",
                author: "최수빈",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p4_4",
                author: "정다은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p4_5",
                author: "이현우",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p5",
    name: "송정중앙 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 해운대구 송정동",
    address: "부산 해운대구 송정해변로 54 (송정동 712-9)",
    latitude: 35.1782,
    longitude: 129.1995,
    rating: 4.6,
    reviews: 890,
    phone: "051-749-5750",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["송정해수욕장", "서핑존앞", "송정토스트", "해변열차송정정거장"],
    distance: "약 5.2km",
    hotelDistanceInfo: "거리: 약 5.2km · 차량 약 12~15분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "대한민국 서핑 성지 송정 해수욕장 백사장 바로 앞, 문토스트 및 해변열차 송정 종점 인근",
    reviewSummary: [
      "10분당 300원 (비수기) / 500원 (성수기 7~8월)",
      "1일 최대 8,000원 ~ 15,000원",
      "인근 연계: 송정 해수욕장, 해변열차 송정역, 문토스트",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "300원 ~ 500원",
        isSignature: true,
        description: "10분당 부과 (경차 50% 감면)",
      },
    ],
    reviewsList: [
          {
                id: "r_p5_1",
                author: "박서준",
                date: "1일 전",
                rating: 5,
                content: "송정중앙 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p5_2",
                author: "최수빈",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 송정해수욕장, 서핑존앞, 송정토스트 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p5_3",
                author: "정다은",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p5_4",
                author: "이현우",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p5_5",
                author: "강지수",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p6",
    name: "광안리해수욕장 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 수영구 광안동",
    address: "부산 수영구 남천바다로33번길 27 (광안동 198-3)",
    latitude: 35.1532,
    longitude: 129.1189,
    rating: 4.5,
    reviews: 1560,
    phone: "051-610-4545",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["광안리해변도보2분", "광안대교드론쇼", "융캉찌에근처", "서희와제과도보권"],
    distance: "약 6.2km",
    hotelDistanceInfo: "거리: 약 6.2km · 차량 약 15~18분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "광안리 해수욕장 백사장 및 광안대교 뷰, 융캉찌에, 서희와제과, 메트르 아티정 맛집 탐방 최적",
    reviewSummary: [
      "10분당 300원 (평일) / 500원 (주말 및 성수기)",
      "1일 최대 요금: 8,000원 ~ 15,000원 (경차/하이브리드 50% 할인)",
      "토요일 드론쇼 관람 시 조기 만차 주의",
    ],
    menuItems: [
      {
        name: "기본 요금 (10분당)",
        price: "300원 ~ 500원",
        isSignature: true,
        description: "10분 단위 부과",
      },
    ],
    reviewsList: [
          {
                id: "r_p6_1",
                author: "최수빈",
                date: "1일 전",
                rating: 5,
                content: "광안리해수욕장 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p6_2",
                author: "정다은",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 광안리해변도보2분, 광안대교드론쇼, 융캉찌에근처 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p6_3",
                author: "이현우",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p6_4",
                author: "강지수",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p6_5",
                author: "윤도현",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p7",
    name: "민락매립지 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 수영구 민락동",
    address: "부산 수영구 민락수변로17번길 60 (민락동 113-46)",
    latitude: 35.1552,
    longitude: 129.1245,
    rating: 4.6,
    reviews: 1320,
    phone: "051-610-4545",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["수변최고돼지국밥앞", "진미언양불고기", "밀락더마켓도보3분", "더베이베이커리"],
    distance: "약 5.8km",
    hotelDistanceInfo: "거리: 약 5.8km · 차량 약 12~15분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "수변최고돼지국밥 민락본점, 진미언양불고기, 더베이베이커리, 밀락더마켓 바로 인근 핵심 공영주차장",
    reviewSummary: [
      "10분당 300원 / 일 최대 8,000원",
      "수변최고돼지국밥 웨이팅할 때 가장 가깝고 주차 면수가 넉넉함",
      "인근 연계: 수변최고돼지국밥, 진미언양불고기, 밀락더마켓, 더베이베이커리",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "300원",
        isSignature: true,
        description: "10분당 300원 (일 최대 8,000원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p7_1",
                author: "정다은",
                date: "1일 전",
                rating: 5,
                content: "민락매립지 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p7_2",
                author: "이현우",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 수변최고돼지국밥앞, 진미언양불고기, 밀락더마켓도보3분 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p7_3",
                author: "강지수",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p7_4",
                author: "윤도현",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p7_5",
                author: "한소희",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p8",
    name: "동생말 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 남구 용호동",
    address: "부산 남구 분포로 66-94 (용호동)",
    latitude: 35.1388,
    longitude: 129.1172,
    rating: 4.8,
    reviews: 640,
    phone: "051-607-4552",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["동생말전망대", "광안대교스카이라인", "무료주차", "갈맷길시작점"],
    distance: "약 10.5km",
    hotelDistanceInfo: "거리: 약 10.5km · 차량 약 20분",
    operatingHours: "24시간 상시 개방 · 연중무휴",
    todayHours: "24시간 무료",
    holiday: "연중무휴",
    highlight: "바다 건너 해운대 마린시티와 광안대교 뷰를 한눈에 담는 동생말 전망대 전용 무료 주차장",
    reviewSummary: [
      "주차 요금: 무료 (Free Parking)",
      "부산 갈맷길 2코스 트레킹 시작점",
      "인근 연계: 동생말 전망대, 이기대 해안산책로",
    ],
    menuItems: [
      {
        name: "주차 요금",
        price: "무료 (Free)",
        isSignature: true,
        description: "상시 무료 개방 주차장",
      },
    ],
    reviewsList: [
          {
                id: "r_p8_1",
                author: "이현우",
                date: "1일 전",
                rating: 5,
                content: "동생말 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p8_2",
                author: "강지수",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 동생말전망대, 광안대교스카이라인, 무료주차 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p8_3",
                author: "윤도현",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p8_4",
                author: "한소희",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p8_5",
                author: "오세훈",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p9",
    name: "이기대 제2공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 남구 용호동",
    address: "부산 남구 용호동 산25",
    latitude: 35.1265,
    longitude: 129.1192,
    rating: 4.7,
    reviews: 790,
    phone: "051-607-4552",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["이기대어울마당", "해안절벽산책로", "치마바위", "바다라면휴게소"],
    distance: "약 14.5km",
    hotelDistanceInfo: "거리: 약 14.5km · 차량 약 25분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "이기대 수변공원 어울마당 및 해안 절벽 트레킹 코스로 바로 내려갈 수 있는 공영주차장",
    reviewSummary: [
      "10분당 300원 / 일 최대 8,000원",
      "어울마당 휴게소 바다 라면/맥주 및 트레킹 코스 진입 최적",
      "인근 연계: 이기대 수변공원, 어울마당, 치마바위",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "300원",
        isSignature: true,
        description: "10분당 300원 (일 최대 8,000원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p9_1",
                author: "강지수",
                date: "1일 전",
                rating: 5,
                content: "이기대 제2공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p9_2",
                author: "윤도현",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 이기대어울마당, 해안절벽산책로, 치마바위 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p9_3",
                author: "한소희",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p9_4",
                author: "오세훈",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p9_5",
                author: "Travel_Pro",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p10",
    name: "오륙도스카이워크 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 남구 용호동",
    address: "부산 남구 오륙도로 137 (용호동)",
    latitude: 35.1018,
    longitude: 129.1235,
    rating: 4.7,
    reviews: 1450,
    phone: "051-607-4552",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["오륙도스카이워크", "해맞이공원", "수선화유채꽃", "동해남해분기점"],
    distance: "약 18.5km",
    hotelDistanceInfo: "거리: 약 18.5km · 차량 약 30분",
    operatingHours: "08:00 ~ 20:00 (이후 무료 개방) · 연중무휴",
    todayHours: "08:00 - 20:00",
    holiday: "연중무휴",
    highlight: "오륙도 스카이워크 유리바닥 전망대 및 해맞이공원 수선화/유채꽃 언덕 바로 앞 공영주차장",
    reviewSummary: [
      "10분당 300원 / 일 최대 8,000원",
      "오륙도 홍보관 및 스카이워크 도보 2분",
      "인근 연계: 오륙도 스카이워크, 오륙도 해맞이공원",
    ],
    menuItems: [
      {
        name: "기본 요금 (10분당)",
        price: "300원",
        isSignature: true,
        description: "10분당 300원 (경차 50% 할인)",
      },
    ],
    reviewsList: [
          {
                id: "r_p10_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "오륙도스카이워크 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p10_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 오륙도스카이워크, 해맞이공원, 수선화유채꽃 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p10_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p10_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p10_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p11",
    name: "신선3동 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 영도구 신선동",
    address: "부산 영도구 영마루길 143 (신선동3가)",
    latitude: 35.0812,
    longitude: 129.0478,
    rating: 4.8,
    reviews: 620,
    phone: "051-419-4552",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["흰여울문화마을", "초저렴1일2400원", "흰여울해안터널", "가장저렴"],
    distance: "약 20.0km",
    hotelDistanceInfo: "거리: 약 20.0km · 차량 약 35분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "흰여울 문화마을 위쪽에 위치한 부산에서 주차비가 가장 저렴한(1일 2,400원) 꿀팁 공영주차장",
    reviewSummary: [
      "10분당 100원 / 1일 최대 2,400원 (초저렴)",
      "흰여울문화마을 계단길로 도보 5분 진입",
      "인근 연계: 흰여울 문화마을, 흰여울해안터널, 절벽라면",
    ],
    menuItems: [
      {
        name: "기본 요금 (10분당)",
        price: "100원",
        isSignature: true,
        description: "10분당 100원 (1시간 600원)",
      },
      {
        name: "1일 최대 주차 요금",
        price: "2,400원",
        description: "24시간 기준 일일 최대 요금 (초가성비)",
      },
    ],
    reviewsList: [
          {
                id: "r_p11_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "신선3동 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p11_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 흰여울문화마을, 초저렴1일2400원, 흰여울해안터널 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p11_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p11_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p11_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p12",
    name: "절영해안산책로 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 영도구 영선동",
    address: "부산 영도구 영선동4가 186-66 (절영로 입구)",
    latitude: 35.0785,
    longitude: 129.0442,
    rating: 4.6,
    reviews: 840,
    phone: "051-419-4552",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["흰여울해안터널입구", "절영해안산책로", "바다조망", "영도바다"],
    distance: "약 20.5km",
    hotelDistanceInfo: "거리: 약 20.5km · 차량 약 35분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "흰여울해안터널 아랫길 및 절영해안산책로 바다 산책로로 바로 이어지는 노상 공영주차장",
    reviewSummary: [
      "10분당 200원 (1시간 1,200원 / 30분 600원)",
      "흰여울해안터널 입구와 가장 가까움",
      "인근 연계: 흰여울해안터널, 절영해안산책로, 영도 하늘전망대",
    ],
    menuItems: [
      {
        name: "기본 요금 (10분당)",
        price: "200원",
        isSignature: true,
        description: "1시간 1,200원 기준",
      },
    ],
    reviewsList: [
          {
                id: "r_p12_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "절영해안산책로 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p12_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 흰여울해안터널입구, 절영해안산책로, 바다조망 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p12_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p12_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p12_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p13",
    name: "태종대 유원지 부설주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 영도구 동삼동",
    address: "부산 영도구 전망로 24 (동삼동 산29-1)",
    latitude: 35.0538,
    longitude: 129.0825,
    rating: 4.7,
    reviews: 1890,
    phone: "051-860-7880",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["태종대입구", "다누비열차탑승장", "영도등대", "대형주차장", "전기차충전"],
    distance: "약 24.5km",
    hotelDistanceInfo: "거리: 약 24.5km · 차량 약 40분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "국가 지정 명승지 태종대 및 다누비열차 매표소 바로 앞 대규모 공영 부설 주차장",
    reviewSummary: [
      "기본 3시간 소형 2,000원 (이후 10분당 200원 / 1일 10,000원)",
      "주차 면수 1,000대 이상으로 매우 쾌적",
      "인근 연계: 태종대 유원지, 다누비열차, 영도등대, 태종사 수국",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (3시간)",
        price: "2,000원",
        isSignature: true,
        description: "최초 3시간 2,000원 (이후 10분당 200원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p13_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "태종대 유원지 부설주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p13_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 태종대입구, 다누비열차탑승장, 영도등대 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p13_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p13_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p13_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p14",
    name: "국립해양박물관 부설주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 영도구 동삼동",
    address: "부산 영도구 해양로301번길 45 (동삼동 1125)",
    latitude: 35.0789,
    longitude: 129.0805,
    rating: 4.8,
    reviews: 1420,
    phone: "051-309-1900",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["해양박물관앞", "무료수족관피딩쇼", "아이동반필수", "기본3시간2000원"],
    distance: "약 21.0km",
    hotelDistanceInfo: "거리: 약 21.0km · 차량 약 35분",
    operatingHours: "09:00 ~ 19:00 (주말 ~21:00) · 연중무휴",
    todayHours: "09:00 - 19:00",
    holiday: "연중무휴",
    highlight: "국립해양박물관 원통 수족관 및 피딩쇼, 해양 전시관 방문객 전용 넓은 지상/지하 주차장",
    reviewSummary: [
      "기본 3시간 2,000원 (이후 10분당 100원 / 일 최대 10,000원)",
      "아이 동반 가족 주차 최적 (유모차 이동 편리)",
      "인근 연계: 국립해양박물관, 아쿠아리움 피딩쇼",
    ],
    menuItems: [
      {
        name: "기본 요금 (3시간)",
        price: "2,000원",
        isSignature: true,
        description: "기본 3시간 2,000원 (이후 10분당 100원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p14_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "국립해양박물관 부설주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p14_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 해양박물관앞, 무료수족관피딩쇼, 아이동반필수 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p14_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p14_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p14_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p15",
    name: "용두산공원 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 중구 대청동",
    address: "부산 중구 대청로 120 (대청동1가 43-1)",
    latitude: 35.1025,
    longitude: 129.0345,
    rating: 4.6,
    reviews: 1680,
    phone: "051-246-0683",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["용두산공원", "부산타워다이아몬드타워", "남포동광복로", "보수동책방골목도보5분"],
    distance: "약 19.5km",
    hotelDistanceInfo: "거리: 약 19.5km · 차량 약 35~40분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "용두산공원 부산타워 전망대, 광복로 패션거리, 남포동, 보수동 책방골목 중심 공영주차타워",
    reviewSummary: [
      "10분당 500원 / 1일 최대 15,000원",
      "부산타워 에스컬레이터 및 광복로 쇼핑거리 도보 3분",
      "인근 연계: 용두산 공원, 부산타워, 보수동 책방골목, 이재모피자 본점",
    ],
    menuItems: [
      {
        name: "기본 요금 (10분당)",
        price: "500원",
        isSignature: true,
        description: "10분당 500원 (일 최대 15,000원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p15_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "용두산공원 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p15_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 용두산공원, 부산타워다이아몬드타워, 남포동광복로 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p15_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p15_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p15_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p16",
    name: "자갈치시장 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 중구 남포동",
    address: "부산 중구 구덕로 93 지하 (남포동6가 118)",
    latitude: 35.0975,
    longitude: 129.0322,
    rating: 4.5,
    reviews: 1350,
    phone: "051-245-2594",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["자갈치시장지하", "신발원초량근처", "이재모피자", "자갈치회센터", "24시간"],
    distance: "약 19.8km",
    hotelDistanceInfo: "거리: 약 19.8km · 차량 약 35~40분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "자갈치시장 현대화 건물 지하 대형 주차장, 싱싱한 활어회 센터 및 남포동 상권 이용 최적",
    reviewSummary: [
      "10분당 700원 / 1일 최대 21,000원",
      "자갈치시장 회센터 이용 시 주차 할인권 지급 가능",
      "인근 연계: 자갈치시장, 남포동 건어물시장, 영도대교 도개 행사",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "700원",
        isSignature: true,
        description: "10분당 700원",
      },
    ],
    reviewsList: [
          {
                id: "r_p16_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "자갈치시장 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p16_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 자갈치시장지하, 신발원초량근처, 이재모피자 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p16_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p16_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p16_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p17",
    name: "부평공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 중구 부평동",
    address: "부산 중구 부평동2가 18-2 (깡통시장 입구)",
    latitude: 35.1012,
    longitude: 129.0268,
    rating: 4.4,
    reviews: 1480,
    phone: "051-240-4552",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["부평깡통야시장", "국제시장", "보수동책방골목", "조방낙지본점", "이가네떡볶이"],
    distance: "약 20.0km",
    hotelDistanceInfo: "거리: 약 20.0km · 차량 약 35~40분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "부평 깡통야시장, 국제시장, 보수동 책방골목, 조방낙지 맛집 투어의 핵심 베이스캠프 주차장",
    reviewSummary: [
      "10분당 700원 / 24시간 연중무휴",
      "깡통야시장 먹거리 골목 바로 앞 위치 (야간 피크시간대 대기 발생 가능)",
      "인근 연계: 부평 깡통야시장, 국제시장, 보수동 책방골목, 조방낙지",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "700원",
        isSignature: true,
        description: "10분당 700원 (24시간)",
      },
    ],
    reviewsList: [
          {
                id: "r_p17_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "부평공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p17_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 부평깡통야시장, 국제시장, 보수동책방골목 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p17_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p17_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p17_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p18",
    name: "초량168계단 인근(동구) 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 동구 초량동",
    address: "부산 동구 영초윗길 24 (초량동 994-67)",
    latitude: 35.1165,
    longitude: 129.0362,
    rating: 4.6,
    reviews: 580,
    phone: "051-440-4552",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["초량168계단", "무료모노레일", "차이나타운신발원", "이재모피자부산역점", "부산역근처"],
    distance: "약 17.5km",
    hotelDistanceInfo: "거리: 약 17.5km · 차량 약 30~35분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "초량 이바구길 168계단 모노레일 상부 및 부산역 차이나타운 신발원, 이재모피자 부산역점 인근 공영주차장",
    reviewSummary: [
      "10분당 200원 / 1일 최대 4,800원 (가성비 우수)",
      "모노레일 상부 전망대 도보 2분 진입",
      "인근 연계: 초량 168계단, 신발원 만두, 이재모피자 부산역점",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "200원",
        isSignature: true,
        description: "10분당 200원 (1일 4,800원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p18_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "초량168계단 인근(동구) 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p18_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 초량168계단, 무료모노레일, 차이나타운신발원 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p18_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p18_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p18_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p19",
    name: "감천문화마을 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 사하구 감천동",
    address: "부산 사하구 감내2로 203 (감천동)",
    latitude: 35.0972,
    longitude: 129.0108,
    rating: 4.7,
    reviews: 1620,
    phone: "051-220-4552",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["감천문화마을입구", "어린왕자포토존", "1일2400원", "마을안내센터앞"],
    distance: "약 22.0km",
    hotelDistanceInfo: "거리: 약 22.0km · 차량 약 40분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "한국관광 100선 감천문화마을 입구 안내센터 바로 옆, 어린 왕자 포토존 진입 최적 공영주차장",
    reviewSummary: [
      "10분당 100원 / 1일 최대 2,400원 (초가성비 요금)",
      "마을 입구 바로 앞 위치로 도보 이동 최소화",
      "인근 연계: 감천문화마을, 어린 왕자와 사막여우 포토존, 계단식 예술골목",
    ],
    menuItems: [
      {
        name: "기본 요금 (10분당)",
        price: "100원",
        isSignature: true,
        description: "10분당 100원 (1시간 600원 / 1일 2,400원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p19_1",
                author: "Busan_Lover",
                date: "1일 전",
                rating: 5,
                content: "감천문화마을 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p19_2",
                author: "K_Explorer",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 감천문화마을입구, 어린왕자포토존, 1일2400원 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p19_3",
                author: "김민준",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p19_4",
                author: "이지은",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p19_5",
                author: "박서준",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p20",
    name: "송도공영주차장 (해수욕장)",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 서구 암남동",
    address: "부산 서구 암남동 579 (송도해변로 100)",
    latitude: 35.0768,
    longitude: 129.0195,
    rating: 4.6,
    reviews: 1180,
    phone: "051-240-4552",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["송도해상케이블카", "송도용궁구름다리", "송도해변산책", "24시간"],
    distance: "약 21.5km",
    hotelDistanceInfo: "거리: 약 21.5km · 차량 약 38분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "송도 해상케이블카 송도베이스테이션 및 송도용궁구름다리, 송도해수욕장 전용 공영주차장",
    reviewSummary: [
      "10분당 300원 / 1일 최대 8,000원",
      "케이블카 탑승장 도보 3분",
      "인근 연계: 송도 해상케이블카, 송도용궁구름다리, 송도 오션뷰 카페",
    ],
    menuItems: [
      {
        name: "기본 요금 (10분당)",
        price: "300원",
        isSignature: true,
        description: "10분당 300원 (일 최대 8,000원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p20_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "송도공영주차장 (해수욕장)은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p20_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 송도해상케이블카, 송도용궁구름다리, 송도해변산책 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p20_3",
                author: "이지은",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p20_4",
                author: "박서준",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p20_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p21",
    name: "해동용궁사 국립수산과학원 주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 기장군 기장읍",
    address: "부산 기장군 기장읍 용궁길 86 (시랑리)",
    latitude: 35.1882,
    longitude: 129.2225,
    rating: 4.7,
    reviews: 1750,
    phone: "051-722-7744",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85",
    tags: ["해동용궁사입구", "바다수상사찰", "선불3000원", "국립수산과학원연계"],
    distance: "약 8.5km",
    hotelDistanceInfo: "거리: 약 8.5km · 차량 약 16~20분",
    operatingHours: "05:00 ~ 20:00 (사찰 개방시간 연동) · 연중무휴",
    todayHours: "05:00 - 20:00",
    holiday: "연중무휴",
    highlight: "바다 절벽 위 아름다운 사찰 해동 용궁사 및 국립수산과학원 무료 관람 전용 주차장",
    reviewSummary: [
      "기본 선불 주차요금: 3,000원 (시간 무제한 정액제)",
      "용궁사 108계단 진입로 바로 앞 위치",
      "인근 연계: 해동 용궁사, 국립수산과학원, 오시리아 관광단지",
    ],
    menuItems: [
      {
        name: "당일 주차 요금 (선불 정액제)",
        price: "3,000원",
        isSignature: true,
        description: "입차 시 선불 결제 (시간 무제한)",
      },
    ],
    reviewsList: [
          {
                id: "r_p21_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "해동용궁사 국립수산과학원 주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p21_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 해동용궁사입구, 바다수상사찰, 선불3000원 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p21_3",
                author: "이지은",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p21_4",
                author: "박서준",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p21_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
  {
    id: "p22",
    name: "오랑대공원 공영주차장",
    mainType: "parking",
    category: "parking",
    categoryLabel: "공영주차장",
    location: "부산 기장군 기장읍",
    address: "부산 기장군 기장읍 시랑리 산89-1 (동암마을)",
    latitude: 35.1958,
    longitude: 129.2272,
    rating: 4.8,
    reviews: 930,
    phone: "051-709-4552",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85",
    tags: ["오시리아해안산책로", "칠암사계기장카페방면", "오랑대용왕단", "바다힐링산책"],
    distance: "약 9.8km",
    hotelDistanceInfo: "거리: 약 9.8km · 차량 약 18~22분",
    operatingHours: "24시간 상시 운영 · 연중무휴",
    todayHours: "24시간 운영",
    holiday: "연중무휴",
    highlight: "기장의 찐 자연 바다 오랑대공원 용왕단 및 오시리아 해안산책로, 기장 대형 오션뷰 카페(칠암사계/웨이브온) 방면 공영주차장",
    reviewSummary: [
      "10분당 300원 / 일 최대 8,000원",
      "바다 절벽 파도와 용왕단 일출 조망 산책로 바로 연결",
      "인근 연계: 오시리아 해안산책로, 칠암사계, 웨이브온, 코랄라니",
    ],
    menuItems: [
      {
        name: "기본 주차 요금 (10분당)",
        price: "300원",
        isSignature: true,
        description: "10분당 300원 (일 최대 8,000원)",
      },
    ],
    reviewsList: [
          {
                id: "r_p22_1",
                author: "K_Explorer",
                date: "1일 전",
                rating: 5,
                content: "오랑대공원 공영주차장은 주차 공간이 넉넉하고 주변 관광지/맛집 이동하기 가장 좋은 공영주차장입니다. 10분당 요금도 저렴하고 친환경차 50% 할인 혜택도 바로 적용받았어요."
          },
          {
                id: "r_p22_2",
                author: "김민준",
                date: "3일 전",
                rating: 5,
                content: "진입로가 잘 정비되어 있고 카드 전용 무인정산기라 출차가 매우 빠릅니다. 오시리아해안산책로, 칠암사계기장카페방면, 오랑대용왕단 방문할 때 무조건 여기에 주차하세요."
          },
          {
                id: "r_p22_3",
                author: "이지은",
                date: "5일 전",
                rating: 4,
                content: "주말 피크타임에는 만차될 수 있으니 조금 일찍 오시는 것을 추천합니다. 관리원분도 친절하시고 부지 깔끔합니다."
          },
          {
                id: "r_p22_4",
                author: "박서준",
                date: "1주 전",
                rating: 5,
                content: "사전 정산기 이용하면 출차 대기 없이 바로 나갈 수 있어서 편합니다. 경차 할인도 자동 인식되어 좋아요."
          },
          {
                id: "r_p22_5",
                author: "최수빈",
                date: "2주 전",
                rating: 5,
                content: "위치 접근성 최고이고 주차면 간격도 넓어서 문콕 걱정 없이 편하게 주차하고 여행 즐겼습니다."
          }
    ],
  },
];

export const SAMPLE_RESTAURANTS = SAMPLE_PLACES;

