'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const storyMilestones = [
  {
    year: '2021.11',
    title: '멀티캠퍼스',
    desc: '인공지능 \n자연어처리(NLP기반) \n기업데이터분석 과정 수료',
    lane: 'top',
    left: '21.7%',
    badge: false,
  },
  {
    year: '2022.11',
    title: '한국폴리텍대학교',
    desc: 'Azure cloud \n전문가 양성 과정 수료',
    lane: 'top',
    left: '43.3%',
    badge: false,
  },
  {
    year: '2022.06',
    title: '메타넷디지털',
    desc: '클라우드 SA 엔지니어 \n퇴직(업직종전환)',
    lane: 'top',
    left: '65%',
    badge: true,
  },
  {
    year: '2024.07',
    title: '한국취업센터',
    desc: '미래내일 일경험 \n프로젝트 과정 수료',
    lane: 'middle',
    left: '26.7%',
    badge: false,
  },
  {
    year: '2024.02',
    title: 'KIT코리아아카데미',
    desc: 'Spring기반 개발자 \n교육 과정 수료',
    lane: 'middle',
    left: '56.7%',
    badge: false,
  },
  {
    year: '2026.01',
    title: '리턴플러스',
    desc: '기업부설연구소 백엔드 개발자 \n퇴직(회사 경영 악화)',
    lane: 'bottom',
    left: '27.5%',
    badge: true,
  },
  {
    year: '2026.02',
    title: 'GYOU',
    desc: '구독관리서비스 \n일독(ILDOK) 외주 개발',
    lane: 'bottom',
    left: '50.8%',
    badge: true,
  },
  {
    year: '2026.03',
    title: '개인 프로젝트',
    desc: 'AI Agent기반 \n아이쿤 서비스 개발',
    lane: 'bottom',
    left: '74.1%',
    badge: false,
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
  { x: 260, y: 130, icon: '/icons/story/start.png' },
  { x: 520, y: 130, icon: '/icons/story/school.png' },
  { x: 780, y: 130, icon: '/icons/story/company.png' },
  { x: 320, y: 470, icon: '/icons/story/project.png' },
  { x: 680, y: 470, icon: '/icons/story/school.png' },
  { x: 330, y: 860, icon: '/icons/story/company.png' },
  { x: 610, y: 860, icon: '/icons/story/handshake.png' },
  { x: 890, y: 860, icon: '/icons/story/personal_project.png' },
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
  // 열마다 다른 순열을 사용해 중복 체감을 줄입니다.
  const setSize = total;
  const cycle = Math.floor(row / setSize);
  const pos = row % setSize;
  const step = 5; // total(34)와 서로소
  const colOffset = 7; // 열별 위상 이동
  const cycleShift = 11; // 다음 루프 세트는 다른 시작점
  return (pos * step + col * colOffset + cycle * cycleShift) % total;
}

const projects = [
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
    stack: 'Next.js, Spring Boot, JPA, SSE, Node.js, TypeScript, Redis, Skils.sh, OpenClaw, ClaudeCode',
    flow:
      '사용자가 에이전트를 선택하고 작업을 실행하면, 각 단계 상태가 화면에서 순차적으로 바뀌고 결과가 즉시 피드백되도록 전체 흐름을 설계했습니다. 기획-실행-검증이 한 화면에서 이어지게 구성해 의사결정 속도를 높였습니다.',
    reason:
      'AI 협업 도구는 “무엇이 진행 중인지”가 보이지 않으면 신뢰가 떨어진다고 판단했습니다. 그래서 백엔드 이벤트 흐름을 UI 상태 전이에 직접 연결하는 구조로 가져가, 내부 동작이 외부에서도 이해되도록 설계했습니다.',
    features:
      '주요 기능은 에이전트 실행 상태 추적, 단계별 로그 확인, 실패 지점 재시도, 실행 결과 비교입니다. 특히 한 번의 실행에서 여러 작업이 섞일 때도 추적이 가능하도록 식별 키와 타임라인 기준을 분리해 구현했습니다.',
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
    aicoon: { top: '#4f79ea', bar: '#5f87ee', frame: '#dce6ff' },
    ildoc: { top: '#ed78be', bar: '#dc55a9', frame: '#ffe1f4' },
    hanjogak: { top: '#f2cb6d', bar: '#f0b22d', frame: '#fff1cc' },
    prime: { top: '#22b86f', bar: '#08a75f', frame: '#d4ffe8' },
    semsem: { top: '#6a66ef', bar: '#5f5ce0', frame: '#e3e4ff' },
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
              <svg viewBox="0 0 1200 760" className="journey-track-line" aria-hidden="true">
                <path
                  className="timeline-main-path"
                  d="M80 130 H920 C1010 130 1060 210 1060 300 C1060 390 1010 470 920 470 H280 C190 470 140 560 140 665 C140 770 190 860 280 860 H1106"
                  fill="none"
                  stroke="#3d63b8"
                  strokeLinecap="round"
                />
              </svg>

              <svg viewBox="0 0 1200 760" className="journey-track-points" aria-hidden="true">
                <path
                  className="timeline-arrow-path"
                  d="M1094 850 L1118 860 L1094 870 Z"
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

              {storyMilestones.map((m) => (
                <article
                  key={m.year + m.title}
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
