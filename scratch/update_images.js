const fs = require('fs');

const targetPath = '/Volumes/외장하드/App/foodMap/src/data/restaurants.ts';
let content = fs.readFileSync(targetPath, 'utf8');

const placeImages = {
  // --- 맛집 15곳 대표 사진 (실제 시그니처 메뉴 1:1 매칭) ---
  f1: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85", // 문경새재 약돌돼지 숯불 석쇠구이
  f2: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=900&q=85", // 경주 교리김밥 계란지단 김밥
  f3: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=900&q=85", // 청도/밀양 시골 보리밥 나물 한상
  f4: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&q=85", // 광안리 융캉찌에 대만식 우육탕면
  f5: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=85", // 광안리 진미언양불고기 숯불구이
  f6: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=900&q=85", // 해운대 나가하마만게츠 돈코츠 라멘
  f7: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=900&q=85", // 민락 수변최고돼지국밥 뚝배기 국밥
  f8: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&q=85", // 범천동 조방낙지 원조 낙곱새
  f9: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=85", // 전포동 서희와제과 구움과자 휘낭시에
  f10: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=85", // 광안리 더베이베이커리 맘모스빵
  f11: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=85", // 남천동 메트르 아티정 정통 크루아상
  f12: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=900&q=85", // 해운대 해목 히츠마부시 장어덮밥
  f13: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=900&q=85", // 해운대 가야밀면 물밀면
  f14: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=85", // 부산역 이재모피자 치즈 피자
  f15: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=900&q=85", // 차이나타운 신발원 군만두

  // --- 명소 32곳 대표 사진 (구글맵 대표 랜드마크 뷰 매칭) ---
  a1: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=900&q=85", // 부산 엑스더스카이 (엘시티 스카이라인)
  a2: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=85", // 아홉산숲 (맹종죽 대나무숲)
  a3: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85", // 기장 3대 오션뷰 카페 (칠암사계/웨이브온)
  a4: "https://images.unsplash.com/photo-1535139262971-c51845709a48?w=900&q=85", // 감천문화마을 파스텔톤 전경
  a5: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85", // 부산항대교 360도 램프 야경
  a6: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85", // 삼광사 연등축제 사찰
  a7: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 송도 해상케이블카 & 구름다리
  a8: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=85", // 동생말 전망대 광안대교 조망
  a9: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=85", // 이기대 수변공원 해안절벽 산책로
  a10: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 오륙도 스카이워크
  a11: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85", // 황령산 봉수대 파노라마 야경
  a12: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=85", // 범천동 호천마을 산복도로 야경
  a13: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85", // 해동 용궁사 해안 수상 사찰
  a14: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 흰여울 문화마을 & 해안터널
  a15: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=85", // 영도 태종대 유원지 등대 절벽
  a16: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=85", // 해운대 달맞이길 드라이브 코스
  a17: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 동백섬 누리마루 APEC하우스
  a18: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85", // 더베이 101 마린시티 반영 야경
  a19: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=900&q=85", // 해운대 블루라인파크 해변열차
  a20: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 청사포 다릿돌전망대
  a21: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 수영만 요트경기장 선셋 요트투어
  a22: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=85", // 오시리아 오랑대공원 해안산책로
  a23: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 해운대 해수욕장 백사장
  a24: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85", // 광안리 해수욕장 광안대교 뷰
  a25: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 송정 해수욕장 서핑 해변
  a26: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=85", // 초량 이바구길 168계단 모노레일
  a27: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85", // 영도 하늘전망대
  a28: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=900&q=85", // 국립해양박물관 원통형 수족관
  a29: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=85", // 용두산공원 부산타워
  a30: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85", // 국제시장 & 부평 깡통야시장
  a31: "https://images.unsplash.com/photo-1507842229452-73a7431e5f8f?w=900&q=85", // 보수동 책방골목
  a32: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=900&q=85", // 국립부산과학관

  // --- 공영주차장 22곳 대표 사진 (구글맵 스마트 공영주차장 뷰 매칭) ---
  p1: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 동백공원 공영주차장
  p2: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 미포 공영주차장
  p3: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 해운대광장 공영주차장
  p4: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 청사포 공영주차장
  p5: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 송정중앙 공영주차장
  p6: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 광안리해수욕장 공영주차장
  p7: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 민락매립지 공영주차장
  p8: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 동생말 공영주차장
  p9: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 이기대 어울마당 공영주차장
  p10: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 오륙도스카이워크 공영주차장
  p11: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 신선3동 공영주차장
  p12: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 절영해안산책로 공영주차장
  p13: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 태종대유원지 부설주차장
  p14: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 국립해양박물관 주차장
  p15: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 용두산공원 공영주차장
  p16: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 자갈치시장 공영주차장
  p17: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 부평공영주차장
  p18: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 초량168계단 동구공영주차장
  p19: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 감천문화마을 공영주차장
  p20: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 송도해수욕장 암남공원 주차장
  p21: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=85", // 해동용궁사 국립수산과학원 주차장
  p22: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=85", // 오랑대공원 공영주차장
};

let count = 0;
for (const [id, imageUrl] of Object.entries(placeImages)) {
  // id: "id" 이후의 image: "..." 찾아서 교체
  const regex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?image:\\s*)"[^"]+"`, 'g');
  if (regex.test(content)) {
    content = content.replace(regex, `$1"${imageUrl}"`);
    count++;
  }
}

fs.writeFileSync(targetPath, content, 'utf8');
console.log(`Updated images for ${count} places.`);
