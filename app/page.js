'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const storyMilestones = [
  {
    year: '2021.11',
    title: '멀티캠퍼스',
    desc: '인공지능\n NLP 자연어처리\n기업데이터분석 과정 수료',
    lane: 'top',
    left: '20%',
    badge: false,
  },
  {
    year: '2022.11',
    title: '한국폴리텍대학교',
    desc: 'Azure cloud \n전문가 양성 과정 수료',
    lane: 'top',
    left: '45%',
    badge: false,
  },
  {
    year: '2023.08',
    title: '메타넷디지털',
    desc: '클라우드 SA 엔지니어 \n퇴직(업직종전환)',
    lane: 'top',
    left: '70%',
    badge: true,
  },
  {
    year: '2024.07',
    title: '한국취업센터',
    desc: '미래내일 일경험 \n프로젝트 과정 수료',
    lane: 'middle',
    left: '32.5%',
    badge: false,
  },
  {
    year: '2024.02',
    title: 'KIT코리아아카데미',
    desc: 'Spring기반 개발자 \n교육 과정 수료',
    lane: 'middle',
    left: '57.5%',
    badge: false,
  },
  {
    year: '2026.01',
    title: '리턴플러스',
    desc: '백엔드 개발자 \n퇴직(회사 경영 악화)',
    lane: 'third',
    left: '25%',
    badge: true,
  },
  {
    year: '2026.02',
    title: 'GYOU',
    desc: '구독관리서비스 \n일독(ILDOK) 외주 개발',
    lane: 'third',
    left: '47.5%',
    badge: true,
  },
  {
    year: '2026.03',
    title: '개인 프로젝트',
    desc: 'AI Agent기반 \n아이쿤 서비스 개발',
    lane: 'third',
    left: '70%',
    badge: false,
  },
  {
    year: '2026.04',
    title: '개인 프로젝트',
    desc: '감정 기록기반\n유튜브 플레이리스트 추천\n무드 어플 개발',
    lane: 'bottom',
    left: '74.1%',
    badge: false,
  },
  {
    year: '2026.05',
    title: '개인 프로젝트',
    desc: 'IOS 잠금화면 캘린더\n위캘 어플 개발',
    lane: 'bottom',
    left: '50.8%',
    badge: false,
  },
  {
    year: '2026.06',
    title: '개인 프로젝트',
    desc: 'AI기반 갈등 해결\n너굴재판 어플 개발',
    lane: 'bottom',
    left: '27.5%',
    badge: true,
  },
];

const recordCards = [
  {
    variant: 'geo',
    tag: 'PRIME 성능 개선',
    value: 'GeoJSON 조회 병목 구조 개선',
    desc: 'JSONStream + RBush로 조회 범위를 줄여 속도를 단축했습니다.',
    highlight: 'R-tree',
    image: '/icons/write/card1.png',
  },
  {
    variant: 'speed',
    tag: '렌더링 최적화',
    value: '지도 렌더링 약 20% 개선',
    desc: '대량 Marker 병목을 이미지 기반 렌더링으로 전환했습니다.',
    highlight: '+20%',
    image: '/icons/write/card2.png',
  },
  {
    variant: 'cloud',
    tag: '클라우드 이전 구축',
    value: '공공기관 이전 + 10만 부하 테스트',
    desc: 'VM·VPC·LB·NAS·Backup 구성과 JMeter 검증을 수행했습니다.',
    highlight: '100K',
    image: '/icons/write/card3.png',
  },
  {
    variant: 'automation',
    tag: '운영 자동화',
    value: 'Cron + FCM 이벤트 자동화',
    desc: '공모 상태 전환과 시작/종료 알림을 자동화했습니다.',
    highlight: 'Auto',
    image: '/icons/write/card4.png',
  },
  {
    variant: 'security',
    tag: '인증/보안 설계',
    value: 'JWT + RTR 통합 인증 체계',
    desc: 'Guard/Middleware/FilterChain 기반으로 보안성과 UX를 강화했습니다.',
    highlight: 'RTR',
    image: '/icons/write/card5.png',
  }
];

const timelinePoints = [
  { x: 240, y: 130, icon: '/icons/story/start.png' },
  { x: 540, y: 130, icon: '/icons/story/school.png' },
  { x: 840, y: 130, icon: '/icons/story/company.png' },
  { x: 390, y: 430, icon: '/icons/story/project.png' },
  { x: 690, y: 430, icon: '/icons/story/school.png' },
  { x: 300, y: 730, icon: '/icons/story/company.png' },
  { x: 570, y: 730, icon: '/icons/story/ildok_icon.png' },
  { x: 840, y: 730, icon: '/icons/story/personal_project.png' },
  { x: 330, y: 1030, icon: '/icons/story/nuguljaepan_icon.png' },
  { x: 610, y: 1030, icon: '/icons/story/wecal_icon.png' },
  { x: 890, y: 1030, icon: '/icons/story/mood_icon.png' },
];

const landingIcons = [
  '/icons/landing/aws.png',
  '/icons/landing/azure.png',
  '/icons/landing/chatgpt.png',
  '/icons/landing/claude.png',
  '/icons/landing/css.png',
  '/icons/landing/docker.png',
  '/icons/landing/drizzle.png',
  '/icons/landing/fastapi.png',
  '/icons/landing/flutter.png',
  '/icons/landing/gemini.png',
  '/icons/landing/github.png',
  '/icons/landing/github_actions.png',
  '/icons/landing/html.png',
  '/icons/landing/java.png',
  '/icons/landing/jenkins.png',
  '/icons/landing/javascript.png',
  '/icons/landing/jpa.png',
  '/icons/landing/kubernetes.png',
  '/icons/landing/mybatis.png',
  '/icons/landing/mysql.png',
  '/icons/landing/nestJS.png',
  '/icons/landing/nodeJS.png',
  '/icons/landing/nextJS.png',
  '/icons/landing/openclaw.png',
  '/icons/landing/oracle_cloud.png',
  '/icons/landing/oracle_virtualbox.png',
  '/icons/landing/postgresql.png',
  '/icons/landing/python.png',
  '/icons/landing/querydsl.png',
  '/icons/landing/react.png',
  '/icons/landing/redux.png',
  '/icons/landing/sass.png',
  '/icons/landing/zustand.png',
  '/icons/landing/spring.png',
  '/icons/landing/typescript.png',
];

function getLandingIconIndex(col, row, total) {
  // 열별 고정 순열을 사용하고, 동일 순서를 반복해 루프 경계에서도 이미지가 바뀌지 않게 유지합니다.
  const posInSet = row % total;
  const step = 6; // total(35)와 서로소라 한 사이클에서 중복 없이 순회
  const colOffset = 7; // 열마다 시작 위상을 달리해 같은 행에서 중복을 줄임
  return (posInSet * step + col * colOffset) % total;
}

const projects = [
  {
    id: 'nuguljaepan',
    category: '개인 프로젝트',
    title: '너굴재판',
    image: '/img/nuguljaepan/nuguljaepan_main.png',
    insightImage: '/img/nuguljaepan/nuguljaepan_insight.png',
    iconImage: '/img/nuguljaepan/nuguljaepan_icon.png',
    device: 'desktop',
    summary: 'AI 기반 재판 어플',
    role:
      'Flutter 앱과 Spring Boot 백엔드 전반을 직접 설계하고 개발했습니다.\n\nFlutter 앱에서는 전체 앱 구조 설계, 소셜 로그인, 토큰 저장 및 자동 갱신, 커플 연결, 사건 등록, 진술 작성, 투표, 댓글, 판결, 항소 화면과 기능을 구현했습니다. 또한 WebSocket 기반 실시간 사건 목록 동기화, Firebase 알림, 로컬 알림 처리, 공통 네트워크 계층과 환경 설정을 담당했습니다.\n\n백엔드에서는 Spring Boot 기반 서버 구조 설계, JWT 인증/인가, 소셜 로그인 연동, 커플 초대코드/매칭 플로우, 사건/입장/투표/판결/항소 API, WebSocket 실시간 이벤트, OpenAI 기반 판결 생성 로직, S3 이미지 업로드, FCM 알림 API, 약관/문의/신고 기능, PostgreSQL/Flyway 기반 DB 마이그레이션을 구현했습니다.\n\n프론트엔드와 백엔드를 함께 개발하면서 커플 연결 → 사건 생성 → 입장 제출 → 투표 → AI 판결 → 항소 → 최종 판결까지 이어지는 전체 재판 흐름을 하나의 서비스 구조로 설계했습니다.',
    stack:
      'Frontend\nFlutter, Dart, REST API, WebSocket, Firebase Cloud Messaging, flutter_local_notifications, flutter_secure_storage, shared_preferences, Kakao Login, Google Sign-In, Sign in with Apple, Lottie\n\nBackend\nJava, Spring Boot, Spring Security, JWT, JPA/Hibernate, PostgreSQL, Flyway, WebSocket/STOMP, AWS S3, Firebase FCM, OpenAI API, REST API',
    flow:
      '사용자는 Kakao, Google, Apple 소셜 로그인으로 가입하고, 닉네임/성별 등 기본 프로필을 설정한 뒤 커플 초대코드로 상대방과 연결됩니다. 이후 커플 중 한 명이 갈등 상황을 사건으로 등록하면 상대방이 진술을 추가하고, 사건을 공개해 다른 사용자들의 투표와 댓글을 받을 수 있도록 구성했습니다.\n\n재판이 시작되면 설정된 투표 시간 동안 배심원 투표가 진행되고, 투표 종료 후 AI가 양측 입장과 투표 결과를 바탕으로 판결, 책임 비율, 배상 제안, 조언, 약속, 추천 선물을 생성합니다. 사건 상태 변화는 REST API와 WebSocket을 함께 사용해 홈 화면과 사건 상세 화면에 실시간으로 반영되도록 구현했습니다.\n\n또한 Firebase Cloud Messaging과 로컬 알림을 적용해 사건 진행, 댓글, 판결 등 주요 알림을 앱 사용 중이거나 백그라운드 상태일 때도 확인할 수 있도록 구성했습니다.',
    reason:
      '이 서비스에서 가장 중요하게 본 부분은 커플 연결 상태, 사건 상태, 투표/판결 흐름이 꼬이지 않는 것이었습니다.\n\n백엔드에서는 커플, 사건, 입장, 투표, 판결, 댓글, 알림 기능을 도메인별로 분리했습니다. 사건 상태는 WAITING_STATEMENTS, READY_FOR_VOTE, VOTING, JUDGED, APPEALED, FINAL_JUDGED처럼 명확하게 관리해 각 단계별 전환 조건과 예외 처리를 분리했습니다.\n\nFlutter 앱에서는 인증, 커플, 사건, 판결, 항소, 알림 기능을 도메인 단위로 나누고, 공통 네트워크 계층에서 토큰 첨부와 만료 토큰 갱신을 처리했습니다. 사건 목록과 상세 정보는 REST API로 기본 데이터를 조회하고, 이후 변경 사항은 WebSocket 이벤트로 반영해 불필요한 전체 새로고침을 줄였습니다.\n\nAI 판결은 모델 응답을 그대로 사용하지 않고, 서버에서 책임 비율, 추천 선물, 응답 포맷을 보정해 프론트엔드가 안정적으로 사용할 수 있도록 설계했습니다.',
    features:
      '- Kakao/Google/Apple 소셜 로그인\n- JWT 기반 인증/인가 및 refresh token 처리\n- 사용자별 초대코드 자동 생성\n- 커플 초대코드 생성/참여/연결 해제\n- 커플 사건 생성/수정/삭제\n- A/B 입장 제출/수정/삭제\n- 재판 시작 및 투표 시간 설정\n- 배심원 투표 및 투표 요약 조회\n- AI 판결 생성 및 조회\n- 책임 비율, 배상 제안, 조언, 약속, 추천 선물 생성\n- 항소 등록 및 항소 목록 조회\n- 사건별 댓글 작성/삭제\n- 신고, 1:1 문의, 약관 조회/동의내역 조회\n- 프로필 이미지 S3 업로드\n- Firebase FCM 알림 처리\n- flutter_local_notifications 기반 포그라운드 알림 처리\n- WebSocket/STOMP 기반 사건 목록/상세/커플 상태 실시간 갱신\n- /cases/my, /cases/hot, /cases/{caseId} 응답에 상태값, 투표 수, 판결, 추천 선물, 심급별 입장 정보 포함',
    retrospect:
      '이 프로젝트를 통해 단순 CRUD보다 상태 흐름 설계가 훨씬 중요하다는 것을 배웠습니다. 커플 연결, 입장 제출, 투표 시작, 판결 생성, 항소, 최종 판결처럼 여러 단계가 이어지는 서비스에서는 API 하나하나보다 상태 전환 조건과 예외 처리가 사용자 경험을 크게 좌우했습니다.\n\n또한 여러 사용자의 행동이 동시에 반영되는 사건 목록에서는 REST API만으로는 부족했고, WebSocket 기반 실시간 이벤트와 재연결 로직이 필요하다는 점을 체감했습니다. AI 판결 기능을 구현하면서도 모델 응답을 그대로 사용하는 것이 아니라, 서버에서 구조화하고 보정하는 과정이 실제 서비스 품질에 중요하다는 것을 배웠습니다.\n\n결과적으로 Flutter 앱, Spring Boot 백엔드, 실시간 통신, AI 판결, 알림, 이미지 업로드, 인증/인가까지 서비스 전반을 직접 설계하고 구현하는 경험을 쌓을 수 있었습니다.',
  },
  {
    id: 'wecal',
    category: '개인 프로젝트',
    title: '위캘',
    image: '/img/wecal/wecal_main.png',
    insightImage: '/img/wecal/wecal_insight.png',
    iconImage: '/img/wecal/wecal_icon.png',
    device: 'desktop',
    summary: 'IOS 잠금화면 캘린더 위젯 어플',
    role:
      'Flutter 앱 구조 설계 및 개발, 캘린더 화면 UI 구현, 일정 조회/추가/수정/삭제 기능 구현, MethodChannel 기반 IOS 네이티브 연동, Swift EventKit 캘린더 연동, 로컬 설정 저장, 이미지 생성 및 저장 흐름 구현, IOS 단축어 설치/실행 연동을 담당했습니다.',
    stack:
      'Flutter, Dart, Swift, IOS EventKit, MethodChannel, SharedPreferences, path_provider, url_launcher, Lottie, IOS 단축어, Firebase Analytics',
    flow:
      '사용자가 앱에서 캘린더 권한을 허용하면 IOS 캘린더 데이터를 불러와 Flutter 화면에서 월별 일정과 상세 일정을 확인할 수 있도록 구성했습니다. 일정 추가, 수정, 삭제는 Flutter 앱에서 입력한 값을 IOS 네이티브 캘린더와 연동해 처리되며, 변경된 일정은 앱 화면에 다시 반영되도록 만들었습니다.\n\n또한 사용자가 원하는 배경과 캘린더 화면을 바탕화면 이미지로 생성하고, IOS 단축어를 실행해 잠금화면에 적용할 수 있는 흐름으로 설계했습니다. 앱 내부에서는 설정값과 생성된 이미지 경로를 로컬에 저장해 다음 실행 시에도 이전 상태가 유지되도록 구성했습니다.',
    reason:
      '이 프로젝트는 별도 백엔드 없이 IOS 기기 안에서 완결되는 앱이기 때문에, Flutter 화면과 IOS 네이티브 기능을 안정적으로 연결하는 것이 중요하다고 생각했습니다. 그래서 Flutter에서는 화면과 상태 흐름을 관리하고, 캘린더 접근, 사진 저장, 단축어 실행 같은 플랫폼 기능은 Swift와 MethodChannel을 통해 처리하도록 분리했습니다.\n\n특히 잠금화면 적용은 Flutter만으로 직접 처리하기 어렵기 때문에 IOS 단축어와 연동하는 방식으로 해결했습니다. 사용자는 앱에서 이미지를 생성한 뒤 단축어를 실행해 자연스럽게 잠금화면을 적용할 수 있도록 했습니다.',
    features:
      '핵심 기능은 Flutter 기반 캘린더 UI, Dart 기반 화면 상태 관리, IOS EventKit 캘린더 연동, MethodChannel 기반 네이티브 기능 호출, SharedPreferences를 활용한 로컬 설정 저장, path_provider를 활용한 이미지 파일 저장, url_launcher를 활용한 단축어 설치 및 실행 연결입니다.\n\n또한 Lottie 애니메이션을 활용해 권한 요청, 단축어 안내, 완료 상태 같은 주요 흐름을 시각적으로 표현했고, Swift 네이티브 코드에서는 캘린더 권한 확인, 일정 조회/생성/수정/삭제, 사진 저장, 단축어 실행, Firebase Analytics 이벤트 기록을 처리했습니다.',
    retrospect:
      '이 프로젝트를 진행하면서 Flutter 앱에서도 플랫폼 특화 기능을 잘 연결하면 백엔드 없이도 완성도 있는 사용자 경험을 만들 수 있다는 점을 배웠습니다. 특히 캘린더, 사진, 단축어처럼 IOS 네이티브 기능이 필요한 부분은 MethodChannel로 분리하면서 Flutter와 Swift의 역할을 명확히 나누는 경험을 할 수 있었습니다.\n\n또한 단순히 캘린더를 보여주는 것에서 끝나는 것이 아니라, 사용자가 직접 만든 캘린더 이미지를 잠금화면에 적용하는 흐름까지 연결하면서 앱 기능과 IOS 자동화 기능을 함께 설계하는 방법을 익혔습니다.',
  },
  {
    id: 'mood',
    category: '개인 프로젝트',
    title: '무드',
    image: '/img/mood/mood_main.png',
    insightImage: '/img/mood/mood_insight.png',
    iconImage: '/img/mood/mood_icon.png',
    device: 'desktop',
    summary: '감정 기록 기반 플레이리스트 추천 어플',
    role:
      'Flutter 앱과 Spring Boot 백엔드 전반을 직접 설계하고 개발했습니다.\n앱에서는 화면 구조, Riverpod 상태 관리, 감정 기록/추천/캘린더/구독 화면, 소셜 로그인, API 통신, 인증 인터셉터, Analytics 로깅을 구현했습니다.\n\n백엔드에서는 JWT 인증, 감정 분석 및 플레이리스트 추천 파이프라인, YouTube 검증 로직, PayApp 및 인앱결제 검증, 무료 이용권 관리, 스케줄러, PostgreSQL/Flyway 기반 데이터 모델링을 담당했습니다.',
    stack:
      'Frontend\nFlutter, Dart, Riverpod, Dio, GoRouter, Flutter Secure Storage, Firebase Analytics, Kakao Login, Google Sign-In, Apple Sign-In, In-App Purchase, TableCalendar, Lottie\n\nBackend\nJava 17, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, Flyway, JWT, OpenAI Responses API, YouTube Data API, PayApp, Apple StoreKit API, Google Android Publisher API, Docker',
    flow:
      '사용자가 Kakao, Google, Apple 소셜 로그인으로 앱에 진입하면 Flutter 앱에서 Riverpod 상태를 기준으로 홈, 감정 기록, 캘린더, 구독 화면이 동기화되도록 구성했습니다.\n사용자가 감정을 입력하면 Spring Boot API에서 감정 분석, 위로 응답, YouTube 플레이리스트 추천을 처리하고, 결과는 감정 기록과 함께 저장되어 홈과 캘린더 화면에서 다시 확인할 수 있도록 구현했습니다.\n\n구독 기능은 무료 사용량 확인, PayApp 정기결제, Apple/Google 인앱결제 검증과 연결해 기록 → 추천 → 조회 → 결제 흐름이 자연스럽게 이어지도록 설계했습니다.',
    reason:
      '이 서비스에서 중요한 부분은 감정 기록과 추천 결과가 화면마다 일관되게 보이는 것과 로그인/구독 상태에 따라 사용 흐름이 끊기지 않는 것이라고 판단했습니다.\n\n프론트엔드는 auth, home, calendar, subscription 단위로 기능을 분리하고 Riverpod ViewModel로 추천 결과, 무료 잔여 횟수, 구독 상태를 관리했습니다.\n백엔드는 인증, 추천, 구독, 이용권 영역을 분리하고, AI 추천 결과를 DB에 저장해 캘린더와 분석 화면에서 재사용할 수 있도록 구성했습니다.\n\n또한 Dio 인터셉터로 토큰 자동 첨부와 refresh 재요청을 처리하고, AI 응답은 JSON Schema 기반으로 형식을 강제했으며 YouTube API로 실제 플레이리스트를 검증했습니다.',
    features:
      '- Kakao/Google/Apple 소셜 로그인\n- JWT 인증 및 refresh token 관리\n- Riverpod 기반 상태 관리\n- 감정 텍스트 기반 AI 분석/위로 응답/플레이리스트 추천\n- YouTube 플레이리스트 검증\n- 감정 기록 저장 및 캘린더 조회\n- 월간 감정 분석\n- 무료 추천권 및 일일 사용량 관리\n- PayApp 정기결제 등록/취소/웹훅 처리\n- Apple/Google 인앱결제 검증\n- Dio AuthInterceptor 기반 인증 처리\n- Firebase Analytics 이벤트 로깅',
    retrospect:
      '이 프로젝트를 통해 모바일 앱에서는 화면 구현보다 상태 흐름과 예외 처리가 중요하다는 것을 배웠습니다.\n또한 AI 기능은 모델 호출만으로 끝나는 것이 아니라 응답 형식 검증, 추천 품질 관리, 사용량 제한, 구독 상태 반영, 데이터 저장 구조까지 함께 설계해야 실제 서비스로 안정적으로 운영될 수 있다는 점을 체감했습니다.',
  },
  {
    id: 'aicoon',
    category: '개인 프로젝트',
    title: '아이쿤',
    image: '/img/aicoon/aicoon_main.png',
    insightImage: '/img/aicoon/aicoon_insight.png',
    iconImage: '/img/aicoon/aicoon_icon.png',
    device: 'desktop',
    summary: 'AI 에이전트 협업 시각화 플랫폼',
    role: '서비스 전체 인프라/코드 구조 설계 및 개발, AI 에이전트 작업 흐름 설계 및 개발, 실시간 로그 스트리밍 설계 및 개발',
    stack: 'Next.js, Spring Boot, JPA, SSE, Node.js, TypeScript, Redis, Phaser, Skils.sh, OpenClaw, ClaudeCode',
    flow:
      '사용자가 에이전트를 선택하고 작업을 실행하면, 각 단계 상태가 화면에서 순차적으로 바뀌고 결과가 즉시 피드백되도록 전체 흐름을 설계했습니다. 기획-실행-검증이 한 화면에서 이어지게 구성해 의사결정 속도를 높였습니다.',
    reason:
      'AI 협업 도구는 “무엇이 진행 중인지”가 보이지 않으면 신뢰가 떨어진다고 판단했습니다. 그래서 백엔드 이벤트 흐름을 UI 상태 전이에 직접 연결하는 구조로 가져가, 내부 동작이 외부에서도 이해되도록 설계했습니다.',
    features:
      '주요 기능은 에이전트 실행 상태 추적, 단계별 로그 확인, 실패 지점 재시도, 실행 결과 비교입니다. 또한 Phaser를 활용해 협업 흐름을 직관적으로 보여주는 게임맵 UI를 구현했고, 한 번의 실행에서 여러 작업이 섞일 때도 추적이 가능하도록 식별 키와 타임라인 기준을 분리해 구현했습니다.',
    retrospect:
      '이 프로젝트를 하며 AI 기능 자체보다 실행 흐름을 명확히 보여주는 설계가 더 중요하다는 걸 배웠습니다. 이후에는 모델 성능과 UX를 동시에 다루는 관점으로 구조를 먼저 잡고 구현해야겠다고 느꼈습니다.',
  },
  {
    id: 'ildoc',
    category: '외주 프로젝트',
    title: '일독',
    image: '/img/ildoc/ildoc_main.png',
    insightImage: '/img/ildoc/ildoc_insight.png',
    iconImage: '/img/ildoc/ildoc_icon.png',
    device: 'mobile',
    summary: '구독 서비스 관리 어플',
    role: 'Flutter Riverpod 상태 구조 설계/개발, NestJS 백엔드 구조 설계/개발, Redis(BullMQ) 결제 스케줄링, RAG기반 AI 추천 파이프라인 구현',
    stack: 'Flutter, Riverpod, NestJS, BullMQ, Redis, Drizzle ORM, FastAPI, RAG',
    flow:
      '사용자가 구독 서비스를 등록하면 Flutter 앱에서 Riverpod 상태를 기준으로 목록/요약/알림 화면이 즉시 동기화되고, 백엔드에서는 결제 주기 기반 작업을 Redis(BullMQ) 큐에 지연 작업으로 등록해 자동 처리하도록 구성했습니다. AI 채팅에서는 사용자 입력과 기존 구독/캘린더 데이터를 합쳐 의도 분석(NLU) 후 추천 응답으로 이어지게 설계해 등록-관리-추천 흐름이 끊기지 않게 만들었습니다.',
    reason:
      '실서비스에서 가장 큰 리스크는 “결제/정산 시점 누락”과 “추천 품질 불안정”이라고 봤습니다. 그래서 NestJS 모듈 구조를 결제/구독/채팅으로 분리하고, 결제는 큐 기반 비동기 처리와 재시도(backoff)로 안정성을 확보했습니다. RAG 기반 AI 추천 방식을 통해 모델 단독보다 의도 파악과 응답 신뢰도를 높이는 방향으로 설계했습니다.',
    features:
      '핵심 기능은 Riverpod 기반 앱 상태 동기화, 정기결제 스케줄링/재처리(BullMQ, Redis), 구독 상태 변경 시 배치성 정합성 보정(Cron), 결제 작업의 중복 방지(jobId), Drizzle 트랜잭션 기반 결제 상태 업데이트, 그리고 AI 추천 시 후보군 검색과 RAG 기반 벡터 검증 후 모델 응답을 결합하는 파이프라인입니다.',
    retrospect:
      '이 프로젝트로 “모바일 앱은 화면, 품질은 백엔드에서 결정된다”는 걸 강하게 배웠습니다. 특히 Riverpod 상태관리로 화면 반응성을 유지하면서, Redis 큐 기반 처리와 NestJS 서비스 분리, AI 추천의 RAG 기반 AI 튜닝을 운영 흐름에 녹여보면서 기능 구현보다 운영 안정성과 응답 신뢰도를 먼저 설계하는 습관이 생겼습니다.',
  },
  {
    id: 'hanjogak',
    category: '리턴플러스',
    title: '한조각',
    image: '/img/hanjogak/hanjogak_main.png',
    insightImage: '/img/hanjogak/hanjogak_insight.png',
    iconImage: '/img/hanjogak/hanjogak_icon.png',
    device: 'desktop',
    summary: 'STO 토큰증권 플랫폼',
    role: '인증/인가 구조 설계 및 개발, 공모 상태 전환 자동화, 관리자 API 개발, 투자/거래 API 설계 및 개발',
    stack: 'NestJS, Drizzle ORM, MySQL, FireBase Cloud Messaging, Cron',
    flow:
      '공모 등록부터 오픈, 마감, 결과 노출까지의 전체 사이클을 사용자 화면과 관리자 운영 화면 기준으로 분리해 설계했습니다. 운영자가 실시간으로 상태를 확인하고 제어할 수 있도록 API 흐름을 명확히 구성했습니다.',
    reason:
      '초기에는 수동 운영 비중이 높아 이벤트 타이밍 누락 가능성이 컸습니다. 그래서 상태 전환 규칙을 코드에 명시하고 운영 작업을 자동화하는 구조로 전환해, 사람 의존도를 줄이고 안정성을 높이고자 했습니다.',
    features:
      'Cron 기반 공모 상태 자동 전환, FCM 알림 연동, 사용자/관리자 API 분리, 예외 상황 로그 수집이 핵심입니다. 특히 운영자가 즉시 대응할 수 있게 이벤트 로그와 모니터링 포인트를 함께 설계했습니다.',
    retrospect:
      '실서비스에서는 기능 구현보다 운영 가능한 구조가 더 중요하다는 걸 배웠습니다. 이후에는 기능을 만들 때부터 자동화와 장애 대응 포인트를 함께 넣는 방식으로 개발하고 있습니다.',
  },
  {
    id: 'prime',
    category: '리턴플러스',
    title: '프라임',
    image: '/img/prime/prime_main.png',
    insightImage: '/img/prime/prime_insight.png',
    iconImage: '/img/prime/prime_icon.png',
    device: 'mobile',
    summary: '부동산 거래 서비스',
    role: '데이터 크롤링, 공간 데이터 최적화 구조 설계 및 개발, 지도 렌더링 최적화, 대용량 데이터베이스 구조 개선, 조회 API 설계 및 개발',
    stack: 'React, NestJS, FastAPI, MySQL, RBush, JSONStream, ST_Contains Query',
    flow:
      '대용량 공간 데이터를 수집하고 가공한 뒤, 조회 API를 통해 지도 화면에 필요한 범위만 전달하도록 구성했습니다. 검색-필터-지도 렌더링까지가 한 흐름으로 이어지게 설계했습니다.',
    reason:
      '초기 방식은 GeoJSON을 통째로 읽어와 조회가 느려지는 병목이 분명했습니다. 그래서 원인 분석 후 JSONStream 기반 스트리밍 파싱과 RBush 공간 인덱스를 적용해 구조 자체를 바꾸는 방향을 선택했습니다.',
    features:
      '공간 범위 기반 조회 최적화, 지도 마커 렌더링 개선, 검색 응답 시간 단축이 핵심 기능입니다. 특히 공간 범위 기반 조회는 공간인덱싱 기반 쿼리로 약 20% 성능을 개선했습니다.',
    retrospect:
      '이 프로젝트에서 기능을 더하는 것보다 병목을 먼저 정의하고 구조를 바꾸는 일이 훨씬 큰 성과를 만든다는 걸 확인했습니다. 이후 성능 이슈는 항상 측정-분석-구조개선 순서로 접근하고 있습니다.',
  },
  {
    id: 'semsem',
    category: '리턴플러스',
    title: '셈셈',
    image: '/img/semsem/semsem_main.png',
    insightImage: '/img/semsem/semsem_insight.png',
    iconImage: '/img/semsem/semsem_icon.png',
    device: 'mobile',
    summary: '부동산 세금 계산기 서비스',
    role: '부동산 계산 로직 설계, Restful API 설계, 크롤링/배치 연계 기능 설계 및 안정화',
    stack: 'NestJS, TypeScript, MySQL, Batch Scheduler',
    flow:
      '외부 소스 데이터를 주기적으로 수집하고, 가공 후 계산 엔진을 통해 세금 결과를 산출해 사용자에게 전달하는 흐름으로 구성했습니다. 수집-계산-결과 제공 단계가 독립적으로 실패 복구되도록 설계했습니다.',
    reason:
      '세법 로직은 해마다 바뀌기 때문에 if/else 누적 구조로는 유지보수가 어렵다고 판단했습니다. 그래서 Rule-based 구조와 Strategy 패턴을 적용해 연도별 규칙을 교체 가능한 형태로 분리했습니다.',
    features:
      '양도세/보유세/취득세 계산 엔진, 연도별 규칙 객체 관리, 배치 처리 상태 모니터링이 핵심입니다. 변경이 많은 도메인 특성을 반영해 코드 변경 범위를 최소화하는 데 집중했습니다.',
    retrospect:
      '도메인 변화가 잦은 서비스는 빠른 구현보다 변경에 강한 구조가 장기적으로 더 큰 품질을 만든다는 걸 배웠습니다. 이후에도 규칙 기반 설계를 우선으로 두고 확장 가능한 형태를 먼저 설계하고 있습니다.',
  },
  {
    id: 'kubernetes',
    category: '팀 프로젝트',
    title: 'Kubernetes 프로젝트',
    image: '/img/kubernetes/kubernetes_main.png',
    insightImage: '/img/kubernetes/kubernetes_insight.png',
    iconImage: '/img/kubernetes/kubernets_icon.png',
    device: 'desktop',
    summary: 'AKS 기반 컨테이너 배포 및 운영 구조 구축',
    role: '이미지 관리 체계 설계, AKS 배포, 서비스 노출 및 상태 검증',
    stack: 'Azure Container Registry, AKS, Docker, Kubernetes, JMeter',
    flow:
      'Docker로 빌드한 애플리케이션 이미지를 ACR에 저장하고, 해당 이미지를 AKS Cluster에 배포해 서비스가 외부에서 접근 가능한 형태까지 이어지도록 전체 흐름을 구성했습니다. 빌드-저장-배포-노출-검증의 사이클을 한 번에 연결해 운영 흐름을 정리했습니다.',
    reason:
      '배포 과정에서 가장 중요하게 본 부분은 “일관성과 복구 가능성”이었습니다. 그래서 이미지 태그 기반 버전 관리를 기본으로 두고, 문제 발생 시 이전 버전으로 빠르게 롤백할 수 있는 구조를 먼저 만들었습니다.',
    features:
      'ACR 이미지 버전 관리, AKS Deployment 기반 Pod 자동 관리, 장애 발생 시 자동 복구, Kubernetes Service를 통한 외부 노출, Deployment/Pod 상태 모니터링이 핵심입니다. 운영 중 확인 가능한 포인트를 명확히 두어 배포 안정성을 높였습니다.',
    retrospect:
      '이 프로젝트를 통해 단순 배포가 아니라 운영 가능한 Kubernetes 구조를 직접 끝까지 구성해본 경험을 얻었습니다. 특히 이미지 빌드부터 서비스 노출, 상태 검증까지 전 과정을 연결해 보면서 컨테이너 기반 운영 관점을 확실히 정리할 수 있었습니다.',
  },
];

function ProjectCard({ project, onOpen }) {
  const palettes = {
    nuguljaepan: { top: '#2f8f68', bar: '#177653', frame: '#dff8ec' },
    wecal: { top: '#f477ad', bar: '#e75b9b', frame: '#ffe3f0' },
    mood: { top: '#8f68df', bar: '#7a4fd1', frame: '#eee6ff' },
    aicoon: { top: '#4f79ea', bar: '#5f87ee', frame: '#dce6ff' },
    ildoc: { top: '#8a8a8a', bar: '#555555', frame: '#f0f0f0' },
    hanjogak: { top: '#72bdff', bar: '#1a90ff', frame: '#dff0ff' },
    prime: { top: '#ffa66e', bar: '#fd6c11', frame: '#ffe7d8' },
    semsem: { top: '#9dc0df', bar: '#538ec0', frame: '#e2f0fb' },
    kubernetes: { top: '#47a6db', bar: '#2f88c7', frame: '#dff3ff' },
  };
  const tone = palettes[project.id] ?? palettes.aicoon;

  return (
    <button
      type="button"
      className={`project-card project-card--${project.id}`}
      onClick={() => onOpen(project)}
      aria-label={`${project.title} 상세 열기`}
      style={{
        '--project-top': tone.top,
        '--project-bar': tone.bar,
        '--project-frame': tone.frame,
      }}
    >
      <div className={`project-visual project-visual--${project.device}`}>
        <Image
          src={project.image}
          alt={`${project.title} 메인 화면`}
          width={1200}
          height={760}
          className="project-image"
        />
      </div>
      <div className="project-body">
        <p className="project-kicker">{project.category}</p>
        <div className="project-row">
          <h3>{project.title}</h3>
          <span className="project-arrow" aria-hidden="true">
            →
          </span>
        </div>
        <p className="project-brief">{project.summary}</p>
      </div>
    </button>
  );
}

export default function Page() {
  const [tabPinned, setTabPinned] = useState(false);
  const [activeSection, setActiveSection] = useState('story');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalCollapsed, setIsModalCollapsed] = useState(false);
  const [modalScrollProgress, setModalScrollProgress] = useState(0);
  const [modalScrollThumbSize, setModalScrollThumbSize] = useState(24);
  const [modalHasScrollableContent, setModalHasScrollableContent] = useState(false);
  const heroLoopCount = landingIcons.length;
  const heroCardCols = 5;
  const navLockRef = useRef(null);
  const mobileLockScrollYRef = useRef(0);
  const modalScrollRef = useRef(null);
  const tabBarHeight = 45;
  const sectionTopGap = 18;

  const scrollToStoryIntro = (event) => {
    if (event) {
      event.preventDefault();
    }
    const intro = document.getElementById('story-intro') ?? document.getElementById('story');
    if (!intro) {
      return;
    }
    const targetY = Math.max(0, intro.offsetTop - tabBarHeight - sectionTopGap);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    navLockRef.current = { id: 'story', targetY };
    setActiveSection('story');
  };

  const scrollToSectionWithGap = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }
    const targetY = Math.max(0, section.offsetTop - tabBarHeight - sectionTopGap);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    navLockRef.current = { id: sectionId, targetY };
    setActiveSection(sectionId);
  };

  const handleTabClick = (sectionId) => (event) => {
    event.preventDefault();
    if (sectionId === 'story') {
      scrollToStoryIntro();
      return;
    }
    scrollToSectionWithGap(sectionId);
  };

  useEffect(() => {
    const sectionIds = ['story', 'records', 'projects'];

    const onScroll = () => {
      setTabPinned(window.scrollY > window.innerHeight - 78);

      if (navLockRef.current) {
        const { id, targetY } = navLockRef.current;
        const reached = Math.abs(window.scrollY - targetY) <= 16;
        setActiveSection(id);
        if (!reached) {
          return;
        }
        navLockRef.current = null;
      }

      const viewportH = window.innerHeight;
      let bestId = sectionIds[0];
      let bestVisible = -1;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }
        const rect = section.getBoundingClientRect();
        const visible = Math.max(0, Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0));
        if (visible > bestVisible) {
          bestVisible = visible;
          bestId = id;
        }
      });

      // 경계 구간에서 깜빡임이 나지 않도록, 가시 영역이 매우 작으면 오프셋 기준으로 보정
      if (bestVisible < viewportH * 0.14) {
        const probeY = window.scrollY + viewportH * 0.44;
        let offsetPick = sectionIds[0];
        sectionIds.forEach((id) => {
          const section = document.getElementById(id);
          if (section && probeY >= section.offsetTop - 8) {
            offsetPick = id;
          }
        });
        bestId = offsetPick;
      }

      setActiveSection(bestId);
    };
    const onResize = () => {
      onScroll();
    };
    onScroll();
    onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) {
      setIsModalCollapsed(false);
      setModalScrollProgress(0);
      setModalScrollThumbSize(24);
      setModalHasScrollableContent(false);
      return;
    }
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');

    const isMobile = window.matchMedia('(max-width: 860px)').matches;
    if (isMobile) {
      mobileLockScrollYRef.current = window.scrollY;
      document.documentElement.classList.add('modal-open-mobile');
      document.body.classList.add('modal-open-mobile');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${mobileLockScrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    }

    const onKeydown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      document.documentElement.classList.remove('modal-open-mobile');
      document.body.classList.remove('modal-open-mobile');
      const lockedTop = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      if (isMobile) {
        const restoreY =
          Number.isFinite(mobileLockScrollYRef.current) && mobileLockScrollYRef.current > 0
            ? mobileLockScrollYRef.current
            : Math.abs(parseInt(lockedTop || '0', 10)) || 0;
        const prevScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, restoreY);
        document.documentElement.style.scrollBehavior = prevScrollBehavior;
      }
    };
  }, [selectedProject]);

  const updateModalScrollMetrics = (el) => {
    if (!el) {
      return;
    }
    const scrollTop = Math.max(0, el.scrollTop);
    const { scrollHeight, clientHeight } = el;
    const maxScroll = Math.max(0, scrollHeight - clientHeight);
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
    const ratio = scrollHeight > 0 ? clientHeight / scrollHeight : 1;
    const thumbSize = Math.min(88, Math.max(12, ratio * 100));
    setModalScrollProgress(progress);
    setModalScrollThumbSize(thumbSize);
    setModalHasScrollableContent(maxScroll > 0.5);
  };

  useEffect(() => {
    if (!selectedProject) {
      return;
    }
    const tick = () => updateModalScrollMetrics(modalScrollRef.current);
    tick();
    const timer = window.setTimeout(tick, 40);
    window.addEventListener('resize', tick);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', tick);
    };
  }, [selectedProject, isModalCollapsed]);

  const handleProjectModalScroll = (event) => {
    if (!selectedProject || typeof window === 'undefined') {
      return;
    }
    const scrollTop = Math.max(0, event.currentTarget.scrollTop);
    updateModalScrollMetrics(event.currentTarget);

    if (!window.matchMedia('(max-width: 860px)').matches) {
      if (isModalCollapsed) {
        setIsModalCollapsed(false);
      }
      return;
    }

    const AT_TOP_EPSILON = 4;
    setIsModalCollapsed(scrollTop > AT_TOP_EPSILON);
  };

  const modalScrollThumbTop = modalScrollProgress * (100 - modalScrollThumbSize);

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-card-bg" aria-hidden="true" style={{ '--hero-loop-count': heroLoopCount }}>
          {Array.from({ length: heroCardCols }).map((_, col) => (
            <div className="hero-card-col" key={`col-${col + 1}`}>
              <div className={`hero-card-track ${col % 2 === 0 ? 'down' : 'up'}`}>
                {Array.from({ length: heroLoopCount * 2 }).map((__, row) => (
                  <div className="hero-bg-card" key={`col-${col}-card-${row}`}>
                    <div className="hero-bg-slot">
                      <Image
                        src={landingIcons[getLandingIconIndex(col, row, landingIcons.length)]}
                        alt=""
                        width={180}
                        height={180}
                        className="hero-bg-icon"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hero-center">
          <div className="hero-copy-box">
            <p className="hero-badge">
              <Image
                src="/img/employ/profile.jpg"
                alt="심판교 프로필"
                width={44}
                height={44}
                className="hero-badge-avatar"
              />
              <span>심판교 포트폴리오</span>
            </p>
            <p className="hero-line1"># BACKEND</p>
            <p className="hero-line2"># AI</p>
            <p className="hero-line1"># CLOUD</p>
          </div>
        </div>
        <a
          href="#story-intro"
          className="hero-down hero-down--bottom"
          aria-label="아래로 이동"
          onClick={scrollToStoryIntro}
        />
      </section>

      <section className={`tab-strip ${tabPinned ? 'is-pinned' : ''}`}>
        <div className="tab-strip-inner">
          <div className="tab-strip-brand" aria-hidden={!tabPinned}>
            <Image
              src="/img/employ/profile.jpg"
              alt="심판교 프로필"
              width={30}
              height={30}
              className="tab-strip-brand-avatar"
            />
            <span>심판교 포트폴리오</span>
          </div>
          <a
            href="#story"
            className={activeSection === 'story' ? 'is-active' : ''}
            onClick={handleTabClick('story')}
          >
            내 이야기
          </a>
          <a
            href="#records"
            className={activeSection === 'records' ? 'is-active' : ''}
            onClick={handleTabClick('records')}
          >
            돋보이는 기록
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'is-active' : ''}
            onClick={handleTabClick('projects')}
          >
            내 프로젝트
          </a>
        </div>
        <div className="tab-strip-brand tab-strip-brand--outside" aria-hidden={!tabPinned}>
          <Image
            src="/img/employ/profile.jpg"
            alt="심판교 프로필"
            width={30}
            height={30}
            className="tab-strip-brand-avatar"
          />
          <span>심판교 포트폴리오</span>
        </div>
      </section>

      <div className={`mobile-floating-brand ${tabPinned ? 'is-visible' : ''}`} aria-hidden={!tabPinned}>
        <Image
          src="/img/employ/profile.jpg"
          alt="심판교 프로필"
          width={30}
          height={30}
          className="tab-strip-brand-avatar"
        />
        <span>심판교 포트폴리오</span>
      </div>

      <section className="message-block" id="story-intro">
        <p>AI 트렌드를 리서치하며,</p>
        <p>튜닝하여 업무에 적용해보고</p>
        <p>효율을 높이려 노력합니다.</p>
      </section>

      <section className="section" id="story">
        <div className="inner story-inner">
          <p className="story-kicker">
            문제를 분석하고
          </p>
          <p className="story-kicker">
            <span>AI</span> 와 함께 해결하는
          </p>
          <h2 className="story-title">심판교의 발걸음</h2>
          <div className="journey-map-stage">
            <div className="journey-map">
              <svg viewBox="0 0 1200 1120" className="journey-track-line" aria-hidden="true">
                <path
                  className="timeline-main-path"
                  d="M80 130 H920 C1010 130 1060 195 1060 280 C1060 365 1010 430 920 430 H280 C190 430 140 495 140 580 C140 665 190 730 280 730 H920 C1010 730 1060 795 1060 880 C1060 965 1010 1030 920 1030 H94"
                  fill="none"
                  stroke="#3d63b8"
                  strokeLinecap="round"
                />
              </svg>

              <svg viewBox="0 0 1200 1120" className="journey-track-points" aria-hidden="true">
                <path
                  className="timeline-arrow-path"
                  d="M106 1020 L82 1030 L106 1040 Z"
                  fill="#3d63b8"
                  stroke="#3d63b8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {timelinePoints.map((point) => (
                  <circle
                    className="timeline-point"
                    key={`${point.x}-${point.y}`}
                    cx={point.x}
                    cy={point.y}
                    r="5.5"
                    fill="#3d63b8"
                  />
                ))}
              </svg>

              {timelinePoints.map((point, idx) => (
                <Image
                  key={`point-icon-${idx}`}
                  src={point.icon}
                  alt=""
                  width={92}
                  height={92}
                  className={`timeline-point-icon ${point.icon.includes('school') ? 'timeline-point-icon--school' : ''}`}
                  style={{ left: `${point.x}px`, top: `${point.y}px` }}
                  aria-hidden="true"
                />
              ))}

              {storyMilestones.map((m, milestoneIdx) => (
                <article
                  key={`${m.year}-${m.title}-${milestoneIdx}`}
                  className={`journey-item lane-${m.lane}`}
                  style={{ left: m.left }}
                >
                  <strong className={m.badge ? 'year-badge' : 'year-plain'}>{m.year}</strong>
                  <h3>{m.title}</h3>
                  <p>
                    {m.desc
                      .replace(/\\n/g, '\n')
                      .split('\n')
                      .map((line, idx, arr) => (
                        <span key={`${m.year}-desc-${idx}`}>
                          {line}
                          {idx < arr.length - 1 ? <br /> : null}
                        </span>
                      ))}
                  </p>
                </article>
              ))}

              <aside className="journey-callout">
                <p>지금</p>
                <p>이 순간에도</p>
                <p>개발 진행 중!</p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="records">
        <div className="section-head section-head--center">
          <p className="section-subtitle">실무에서 증명한 핵심 성과</p>
          <h2>돋보이는 기록</h2>
        </div>
        <div className="record-viewport" style={{ '--record-count': recordCards.length }}>
          <div className="record-marquee">
            <div className="record-track">
              {recordCards.map((card, idx) => (
                <article className={`record-card record-card--${card.variant}`} key={`set-a-${card.tag}-${idx}`}>
                  <div className="record-bg-media" aria-hidden="true">
                    <Image src={card.image} alt="" fill sizes="320px" className="record-bg-image" />
                  </div>
                </article>
              ))}
            </div>
            <div className="record-track" aria-hidden="true">
              {recordCards.map((card, idx) => (
                <article className={`record-card record-card--${card.variant}`} key={`set-b-${card.tag}-${idx}`}>
                  <div className="record-bg-media" aria-hidden="true">
                    <Image src={card.image} alt="" fill sizes="320px" className="record-bg-image" />
                  </div>
                </article>
              ))}
            </div>
            <div className="record-track" aria-hidden="true">
              {recordCards.map((card, idx) => (
                <article className={`record-card record-card--${card.variant}`} key={`set-c-${card.tag}-${idx}`}>
                  <div className="record-bg-media" aria-hidden="true">
                    <Image src={card.image} alt="" fill sizes="320px" className="record-bg-image" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="inner">
          <div className="section-head section-head--center">
            <p className="section-subtitle">진행 중인 작업과 실무 프로젝트</p>
            <h2>내 프로젝트</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} onOpen={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)} role="presentation">
          <article
            className={`project-modal ${isModalCollapsed ? 'project-modal--collapsed-mobile' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-topbar">
              <div className="project-modal-mobile-head" aria-hidden={!isModalCollapsed}>
                <div className="project-modal-mobile-avatar">
                  <Image
                    src={selectedProject.iconImage || selectedProject.image}
                    alt=""
                    width={38}
                    height={38}
                    className="project-modal-mobile-icon"
                  />
                </div>
                <div className="project-modal-mobile-copy">
                  <p className="project-modal-mobile-type">{selectedProject.category}</p>
                  <h4>{selectedProject.title}</h4>
                  <p className="project-modal-mobile-summary">{selectedProject.summary}</p>
                </div>
              </div>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="모달 닫기"
              >
                ×
              </button>
            </div>
            <div className="project-modal-media">
              <div className="project-modal-image-frame">
                <Image
                  src={selectedProject.insightImage || selectedProject.image}
                  alt={`${selectedProject.title} 상세 이미지`}
                  width={1200}
                  height={760}
                  className="project-modal-image"
                />
              </div>
            </div>
            <div className="project-modal-body">
              <div className="project-modal-head">
                <div className="project-modal-avatar">
                  <Image
                    src={selectedProject.iconImage || selectedProject.image}
                    alt={`${selectedProject.title} 아이콘`}
                    width={72}
                    height={72}
                    className="project-modal-icon"
                  />
                </div>
                <div className="project-modal-headcopy">
                  <p className="project-modal-type">{selectedProject.category}</p>
                  <h3>{selectedProject.title}</h3>
                  <p className="project-modal-summary">{selectedProject.summary}</p>
                </div>
              </div>
              <div className="project-modal-content-wrap">
                <div className="project-modal-scroll" onScroll={handleProjectModalScroll} ref={modalScrollRef}>
                  <div className="project-modal-section">
                    <h4>서비스 전체 흐름</h4>
                    <p>{selectedProject.flow}</p>
                  </div>
                  <div className="project-modal-section">
                    <h4>이런 구조/코드를 생각한 이유</h4>
                    <p>{selectedProject.reason}</p>
                  </div>
                  <div className="project-modal-section">
                    <h4>기능 별 특징</h4>
                    <p>{selectedProject.features}</p>
                  </div>
                  <div className="project-modal-section">
                    <h4>느낀점</h4>
                    <p>{selectedProject.retrospect}</p>
                  </div>
                  <div className="project-modal-section">
                    <h4>내 역할</h4>
                    <p>{selectedProject.role}</p>
                  </div>
                  <div className="project-modal-section">
                    <h4>스택</h4>
                    <p>{selectedProject.stack}</p>
                  </div>
                </div>
                <div
                  className={`project-modal-scroll-indicator ${modalHasScrollableContent ? '' : 'is-static'}`}
                  aria-hidden="true"
                >
                  <span className="project-modal-scroll-track">
                    <span
                      className="project-modal-scroll-thumb"
                      style={{ top: `${modalScrollThumbTop}%`, height: `${modalScrollThumbSize}%` }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
