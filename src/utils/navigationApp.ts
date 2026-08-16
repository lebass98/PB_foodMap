import { Linking, Platform, Alert } from "react-native";

interface NavDestination {
  name: string;
  latitude: number;
  longitude: number;
}

/**
 * 네이버 지도 앱으로 차량 길안내 딥링크 실행 (미설치 시 웹으로 이동)
 */
export async function openNaverMapNavigation(dest: NavDestination) {
  const encodedName = encodeURIComponent(dest.name);
  const appScheme = `nmap://route/car?dlat=${dest.latitude}&dlng=${dest.longitude}&dname=${encodedName}&appname=com.foodmap.app`;
  const webUrl = `https://map.naver.com/v5/directions/-/-/${dest.longitude},${dest.latitude},${encodedName}/-/car`;

  try {
    const supported = await Linking.canOpenURL(appScheme);
    if (supported) {
      await Linking.openURL(appScheme);
    } else {
      await Linking.openURL(webUrl);
    }
  } catch (error) {
    try {
      await Linking.openURL(webUrl);
    } catch (e) {
      Alert.alert("길안내 오류", "네이버 지도 열기에 실패했습니다.");
    }
  }
}

/**
 * 카카오맵 또는 기본 지도 앱 열기
 */
export async function openKakaoMapNavigation(dest: NavDestination) {
  const encodedName = encodeURIComponent(dest.name);
  const appScheme = `kakaomap://route?ep=${dest.latitude},${dest.longitude}&by=CAR`;
  const webUrl = `https://map.kakao.com/link/to/${encodedName},${dest.latitude},${dest.longitude}`;

  try {
    const supported = await Linking.canOpenURL(appScheme);
    if (supported) {
      await Linking.openURL(appScheme);
    } else {
      await Linking.openURL(webUrl);
    }
  } catch (error) {
    await Linking.openURL(webUrl);
  }
}
