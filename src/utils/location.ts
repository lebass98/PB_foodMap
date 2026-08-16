/**
 * 두 좌표 간의 거리를 계산 (Haversine 공식)
 * @returns '150m' 또는 '2.4km' 형태의 문자열
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): { text: string; meters: number } {
  const R = 6371e3; // 지구 반경 (미터)
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const meters = Math.round(R * c);

  if (meters < 1000) {
    return { text: `${meters}m`, meters };
  } else {
    return { text: `${(meters / 1000).toFixed(1)}km`, meters };
  }
}
