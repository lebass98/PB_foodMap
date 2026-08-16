const fs = require("fs");
const path = require("path");

const roadAddressMap = {
  // --- 맛집 15곳 ---
  "f1": {
    address: "경북 문경시 문경읍 상초리 288-60",
    roadAddress: "경북 문경시 문경읍 새재로 922"
  },
  "f2": {
    address: "경북 경주시 탑동 48-2",
    roadAddress: "경북 경주시 탑리3길 2"
  },
  "f3": {
    address: "경북 청도군 금천면 동곡리 914-1",
    roadAddress: "경북 청도군 금천면 금천로 471"
  },
  "f4": {
    address: "부산 수영구 민락동 181-223 1층",
    roadAddress: "부산 수영구 광안해변로277번길 10 1층"
  },
  "f5": {
    address: "부산 수영구 광안동 204-6",
    roadAddress: "부산 수영구 남천바다로33번길 7"
  },
  "f6": {
    address: "부산 해운대구 우동 515-32 대영빌딩 1층",
    roadAddress: "부산 해운대구 우동1로 57 대영빌딩 1층"
  },
  "f7": {
    address: "부산 수영구 민락동 110-54",
    roadAddress: "부산 수영구 광안해변로370번길 9-32"
  },
  "f8": {
    address: "부산 동래구 명륜동 400-1",
    roadAddress: "부산 동래구 명륜로94번길 37"
  },
  "f9": {
    address: "부산 수영구 광안동 174-12 1층",
    roadAddress: "부산 수영구 광남로 89 1층"
  },
  "f10": {
    address: "부산 수영구 남천동 30-14 1층",
    roadAddress: "부산 수영구 수영로510번길 30 1층"
  },
  "f11": {
    address: "부산 수영구 남천동 27-2",
    roadAddress: "부산 수영구 남천동로22번길 21"
  },
  "f12": {
    address: "부산 해운대구 우동 542-30",
    roadAddress: "부산 해운대구 구남로24번길 8"
  },
  "f13": {
    address: "부산 해운대구 좌동 1352-1",
    roadAddress: "부산 해운대구 좌동순환로 27"
  },
  "f14": {
    address: "부산 동구 초량동 1200-13 2층",
    roadAddress: "부산 동구 중앙대로 197 2층"
  },
  "f15": {
    address: "부산 동구 초량동 561-1",
    roadAddress: "부산 동구 대영로243번길 62"
  },

  // --- 명소 32곳 ---
  "a1": {
    address: "부산 해운대구 중동 1058-2 엘시티 랜드마크타워",
    roadAddress: "부산 해운대구 달맞이길 30 엘시티 랜드마크타워 98~100층"
  },
  "a2": {
    address: "부산 기장군 철마면 웅천리 520-10",
    roadAddress: "부산 기장군 철마면 미동길 37-1"
  },
  "a3": {
    address: "부산 기장군 일광읍 칠암리 160-5 / 장안읍 월내리 553",
    roadAddress: "부산 기장군 일광읍 칠암1길 7-10 / 장안읍 해맞이로 286"
  },
  "a4": {
    address: "부산 사하구 감천동 10-13",
    roadAddress: "부산 사하구 감내2로 203"
  },
  "a5": {
    address: "부산 동구 초량동 1187-1 (부산역 광장)",
    roadAddress: "부산 동구 중앙대로 206 (부산역 광장 시티투어 탑승지)"
  },
  "a6": {
    address: "부산 부산진구 초읍동 산131",
    roadAddress: "부산 부산진구 초읍천로 43"
  },
  "a7": {
    address: "부산 서구 암남동 124-1 / 암남동 620-53",
    roadAddress: "부산 서구 송도해변로 171 / 암남공원로 127"
  },
  "a8": {
    address: "부산 남구 용호동 5-4",
    roadAddress: "부산 남구 분포로 66-94"
  },
  "a9": {
    address: "부산 남구 용호동 산25",
    roadAddress: "부산 남구 이기대공원로 105-20"
  },
  "a10": {
    address: "부산 남구 용호동 947-1",
    roadAddress: "부산 남구 오륙도로 137"
  },
  "a11": {
    address: "부산 부산진구 전포동 산50-1",
    roadAddress: "부산 부산진구 봉수대길 137"
  },
  "a12": {
    address: "부산 부산진구 범천동 1517-8",
    roadAddress: "부산 부산진구 엄광로 491"
  },
  "a13": {
    address: "부산 기장군 기장읍 시랑리 416-3",
    roadAddress: "부산 기장군 기장읍 용궁길 86"
  },
  "a14": {
    address: "부산 영도구 영선동4가 1044-6",
    roadAddress: "부산 영도구 절영로 194"
  },
  "a15": {
    address: "부산 영도구 동삼동 산29-1",
    roadAddress: "부산 영도구 전망로 24"
  },
  "a16": {
    address: "부산 해운대구 중동 1483",
    roadAddress: "부산 해운대구 달맞이길 190"
  },
  "a17": {
    address: "부산 해운대구 우동 710-1",
    roadAddress: "부산 해운대구 동백로 116"
  },
  "a18": {
    address: "부산 해운대구 우동 747-7",
    roadAddress: "부산 해운대구 동백로 52"
  },
  "a19": {
    address: "부산 해운대구 중동 948-1",
    roadAddress: "부산 해운대구 달맞이길62번길 13"
  },
  "a20": {
    address: "부산 해운대구 중동 산36-2",
    roadAddress: "부산 해운대구 청사포로 167"
  },
  "a21": {
    address: "부산 해운대구 우동 1393",
    roadAddress: "부산 해운대구 해운대해변로 84"
  },
  "a22": {
    address: "부산 기장군 기장읍 시랑리 산77-4",
    roadAddress: "부산 기장군 기장읍 기장해안로 340 일원"
  },
  "a23": {
    address: "부산 해운대구 우동 621-5",
    roadAddress: "부산 해운대구 해운대해변로 264"
  },
  "a24": {
    address: "부산 수영구 광안동 192-20",
    roadAddress: "부산 수영구 광안해변로 219"
  },
  "a25": {
    address: "부산 해운대구 송정동 712-2",
    roadAddress: "부산 해운대구 송정해변로 54"
  },
  "a26": {
    address: "부산 동구 초량동 994-80",
    roadAddress: "부산 동구 영초위길 19"
  },
  "a27": {
    address: "부산 영도구 동삼동 산149-1",
    roadAddress: "부산 영도구 절영로 358"
  },
  "a28": {
    address: "부산 영도구 동삼동 1125",
    roadAddress: "부산 영도구 해양로301번길 45"
  },
  "a29": {
    address: "부산 중구 광복동2가 1-2",
    roadAddress: "부산 중구 용두산길 37-55"
  },
  "a30": {
    address: "부산 중구 부평동2가 11-15",
    roadAddress: "부산 중구 부평1길 48"
  },
  "a31": {
    address: "부산 중구 보수동1가 119-1",
    roadAddress: "부산 중구 대청로 67-1"
  },
  "a32": {
    address: "부산 기장군 기장읍 석산리 1010",
    roadAddress: "부산 기장군 기장읍 동부산관광6로 59"
  },

  // --- 주차장 22곳 ---
  "p1": {
    address: "부산 해운대구 우동 721-1 (동백섬 입구)",
    roadAddress: "부산 해운대구 동백로 67"
  },
  "p2": {
    address: "부산 해운대구 중동 1778-2",
    roadAddress: "부산 해운대구 달맞이길62번길 17"
  },
  "p3": {
    address: "부산 해운대구 우동 611-1",
    roadAddress: "부산 해운대구 구남로 12"
  },
  "p4": {
    address: "부산 해운대구 중동 591-18",
    roadAddress: "부산 해운대구 청사포로128번길 22"
  },
  "p5": {
    address: "부산 해운대구 송정동 712-9",
    roadAddress: "부산 해운대구 송정해변로 54"
  },
  "p6": {
    address: "부산 수영구 광안동 198-3",
    roadAddress: "부산 수영구 남천바다로33번길 27"
  },
  "p7": {
    address: "부산 수영구 민락동 113-46",
    roadAddress: "부산 수영구 민락수변로17번길 60"
  },
  "p8": {
    address: "부산 남구 용호동 5-4",
    roadAddress: "부산 남구 분포로 66-94"
  },
  "p9": {
    address: "부산 남구 용호동 산25",
    roadAddress: "부산 남구 이기대공원로 105-20"
  },
  "p10": {
    address: "부산 남구 용호동 947-1",
    roadAddress: "부산 남구 오륙도로 137"
  },
  "p11": {
    address: "부산 영도구 신선동3가 50-24",
    roadAddress: "부산 영도구 영마루길 143"
  },
  "p12": {
    address: "부산 영도구 영선동4가 186-66",
    roadAddress: "부산 영도구 절영로 194 일원"
  },
  "p13": {
    address: "부산 영도구 동삼동 산29-1",
    roadAddress: "부산 영도구 전망로 24"
  },
  "p14": {
    address: "부산 영도구 동삼동 1125",
    roadAddress: "부산 영도구 해양로301번길 45"
  },
  "p15": {
    address: "부산 중구 대청동1가 43-1",
    roadAddress: "부산 중구 대청로 120"
  },
  "p16": {
    address: "부산 중구 남포동6가 118",
    roadAddress: "부산 중구 구덕로 93 지하"
  },
  "p17": {
    address: "부산 중구 부평동2가 18-2",
    roadAddress: "부산 중구 부평1길 48 일원"
  },
  "p18": {
    address: "부산 동구 초량동 994-67",
    roadAddress: "부산 동구 영초윗길 24"
  },
  "p19": {
    address: "부산 사하구 감천동 10-13",
    roadAddress: "부산 사하구 감내2로 203"
  },
  "p20": {
    address: "부산 서구 암남동 579",
    roadAddress: "부산 서구 송도해변로 100"
  },
  "p21": {
    address: "부산 기장군 기장읍 시랑리 408-1",
    roadAddress: "부산 기장군 기장읍 용궁길 86"
  },
  "p22": {
    address: "부산 기장군 기장읍 시랑리 산89-1",
    roadAddress: "부산 기장군 기장읍 기장해안로 340"
  }
};

const filePath = path.join(__dirname, "../src/data/restaurants.ts");
let code = fs.readFileSync(filePath, "utf8");

let count = 0;
for (const [id, addrInfo] of Object.entries(roadAddressMap)) {
  // Regex to match the place object by id and update address & insert roadAddress
  const placeRegex = new RegExp(
    `(id:\\s*"${id}",[\\s\\S]*?address:\\s*)"([^"]+)"`,
    "g"
  );

  code = code.replace(placeRegex, (match, prefix, oldAddress) => {
    count++;
    return `${prefix}"${addrInfo.address}",\n    roadAddress: "${addrInfo.roadAddress}"`;
  });
}

fs.writeFileSync(filePath, code, "utf8");
console.log(`Updated ${count} places with roadAddress successfully!`);
