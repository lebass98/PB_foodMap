# 개발 및 운영 규칙 (Developer Rules)

## 1. 커밋 및 Git 동기화 규칙
- 사용자의 작업 요청 또는 수정 명령이 완료될 때마다 반드시 **작업 내용을 명확한 한글 커밋 메시지로 작성**하여 커밋 및 GitHub 원격 저장소(`https://github.com/lebass98/PB_foodMap.git`)에 Push / Pull 동기화를 수행합니다.
- 매 작업 완료 시 `README.md`의 **[작업 이력 (Changelog)]** 섹션에 오늘 날짜별 작업 내용을 간략하고 명확하게 기록 및 업데이트합니다.

## 2. Expo 앱 오류 검증 필수 규칙
- 코드를 변경하거나 기능을 추가한 후에는 반드시 사전에 아래 명령어를 실행하여 Expo 및 TypeScript 오류가 없는지 100% 검증합니다:
  ```bash
  npx tsc --noEmit && npx expo-doctor
  ```
- Expo SDK 버전 호환성(SDK 54 / React 19 / React Native 0.81) 및 Expo Go 실행 환경에 이상이 없는지 항상 확인합니다.

## 3. macOS 임시 파일(`._*`) 자동 정리 규칙
- 작업 중 또는 커밋 전 macOS/외장하드에서 자동 생성되는 `._*` (AppleDouble 리소스 포크) 파일이 발견될 때마다 아래 명령어를 실행하여 즉시 일괄 삭제합니다:
  ```bash
  find . -name "._*" -delete
  ```
