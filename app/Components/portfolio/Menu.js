
const Menu =[
  {
    id:1,
    image: "/img/devcvpage.png",
    title:"이력서 공유 및 판매 웹사이트",
    subtitle:"DevCV",
    subcontent:"자신에게 맞는 참고 이력서를 찾아주는",
    innercontent:"판매자의 스펙과 자료를 검증하여 판매자의 신뢰성을 높이고, 구매자에게 적합한 자료를 구매하도록 하여 구매자의 구직 활동에 도움을 줄 수 있는 서비스기획 하였습니다.",
    category: "PROJECT",
    content: " 🛠️  개발도구 \n 📎 JAVA17     📎 Springboot3.0.1\n 📎 JPA           📎 Jenkins, Docker \n 📎 NextJS     📎 SpringSecurity \n\n 🧑🏻‍💻  담당업무\n ✅ JPA를 이용한 회원 기능구현 \n ✅ SpringSecurity를 이용한 인증/인가 구현 \n ✅ Jenkins,Docker CI/CD 구축",
    url:"http://devcv.net",
    github: "https://github.com/DevCVTeam",
    iname: "fa-solid fa-magnifying-glass",
    buttontitle: " 더보기",
    main: {
      image: "/img/devcvmainpage.png",
      title: "취업 및 이직에 성공한 이력서를 판매할 수 있는 웹사이트",
      skills: "SpringSecurity 회원기능 Jenkins CI/CD"
    },
    features : [
      {
        image: "/img/springsecurity.jpeg",
        title: "🔍 Spring Security Authentication/Authorization",
        contents: ["1️⃣ Spring Security Filter중 OncePerRequestFilter로 JWT Token을 유효성검사(Expired,Signature) 구현.",
                   "2️⃣ JWT(JsonWebToken)으로 평문을 hex64 Secretkey로 암호화(BASE64,HS512)하여 통신.",
                   "3️⃣ RefreshToken JWT 토큰으로 AccessToken 재발급기능구현.",
                   "4️⃣ Security Authenticaiton에서 Authorizes로 관리자와 일반 권한을 분리."],
        skills: "SpringSecurity,JsonWebToken, OncePerRequestFilter,AuthenticationEntryPoint, AccessDeniedHandler"
      },
      {
        image: "/img/devcv_BE.drawio.png",
        title: "🔍 Jenkins CI/CD",
        contents: ["1️⃣ CI: GithubWebhook으로 변경사항을 확인하여 빌드.",
                   "2️⃣ CD: PublishOverSSH로 배포서버에 접근 및 Dockerfile,deploy.sh,docker-compose.yml로서버에 배포."],
        skills: "GithubWebhook,Jenkins,Docker,Docker-Compose,ScriptFile"
      },
      {
        image: "/img/devcvloginpage.png",
        title: "🔍 회원기능",
        contents: ["1️⃣ 회원가입: Security PasswordEncoder로 암호화하여 AWS RDS에 저장.",
                   "2️⃣ 소셜로그인: FE측으로부터 받은 회원정보 접근 AccessToken으로 소셜 서버에 RestTemplates 클래스로 Http 요청을 전송하게 구현."],
        skills: "JPA,RestTemplates,HttpServlet, JavaMailSender,AWS RDS"
      }],
  },
  {
    id:2,
    image: "/img/dwbb.png",
    title:"주변 은행 대기인원 현황 웹사이트",
    subtitle:"DWBB",
    subcontent:"근처에 있는 은행 대기인원, 주차장정보를 알려주는",
    innercontent:"은행업무 보러가기 전 내 위치 주변 은행API의 현 대기인원을 제공함으로써 대기인원이 적은 은행을 선택해 더 빠른 업무처리를 해결하기 위한 목적과 차로 이동하는 고객을 위해 주변 주차장의 위치도 참고할수 있게 기획하였습니다.",
    category: "PROJECT",
    content:" 🛠️  개발도구 \n 📎 JAVA11      📎 Springboot2.7.17\n 📎 JPA           📎 React \n\n 🧑🏻‍💻  담당업무\n ✅ JPA를 이용한 회원,공지사항,Q&A게시판기능 구현 \n ✅ NaverMapsAPI,GeolocationAPI,은행대기인원API,주차장정보API를 이용한 맵 기능구현\n\n ",
    url:"https://server.dwbb.kro.kr",
    iname: "fa-solid fa-magnifying-glass",
    buttontitle: " 더보기",
    github: "https://github.com/pangyosim/dwbb-bankend",
    main: {
      image: "/img/dwbbmainpage.png",
      title: "근처에 있는 은행 대기인원, 주차장정보를 알려주는 웹사이트",
      skills: "은행대기인원/주차장 확인 회원기능 공지사항/Q&A게시판기능"
    },
    features : [
      {
        image: "/img/dwbbbankpage.png",
        title: "🔍 은행대기인원/주차장 확인",
        contents: ["♻️ trans-bankdata 공공데이터 API → Naver Geolocation API → DB저장",
                   "1️⃣ 공공데이터 API 은행 대기인원 현황 은행 지점코드(brcd)로 DB데이터 SELECT.",
                   "2️⃣ Haversine 공식으로 내 근처 5km 이내 은행 데이터 준비.",
                   "3️⃣ Frontend(React)로 내 근처 5km 이내 은행 대기인원 현황 JSON형식으로 response.",
                   "🚨 API SERVER ERROR 발생시 : try/catch로 jsonparse exception 발생시켜 JSON데이터에 추가 후 응답."],
        skills: "NaverMapsAPI,GeolocationAPI, HavorsineFormula,공공데이터API(중소기업은행,서울주차장)"
      },
      {
        image: "/img/dwbbmemberpage.png",
        title: "🔍 회원기능",
        contents: ["1️⃣ JPA 회원가입, 로그인구현.",
                   "2️⃣ 아이디/비밀번호 찾기시 이메일인증번호 전송."],
        skills: "JPA,JavaMailSender"
      },
      {
        image: "/img/dwbbqnapage.png",
        title: "🔍 공지사항/Q&A 게시판기능",
        contents: ["1️⃣ 공지사항: 관리자(글작성),일반회원조회",
                   "2️⃣ Q&A: 관리자(삭제/댓글),일반회원(작성/본인글삭제)"],
        skills: "JPA"
      }],
  },
  {
    id:3,
    image: "/img/oyesmainimg.png",
    title:"OTT 서비스 아이디 공유 웹사이트",
    subcontent:"OTT서비스 아이디를 공유하는",
    subtitle:"OYES",
    innercontent:"빅데이터 플랫폼 기업인 아이지에이O스의 조사에 따르면, 최근 OTT서비스의 요금인상에 따라 사용하는 고객 이탈 수가 감소하는 경우가 있었습니다. 이러한 현상이 있음에도, OTT 서비스들은 재정적 문제로 요금인상을 멈추지 않고있습니다. 서비스의 요금부담을 줄일 수 있다면 사용자들이 많아질 것으로 기대하여 OTT서비스 아이디를 공유하는 프로젝트를 기획하였습니다.",
    category: "PROJECT",
    content: " 🛠️  개발도구 \n 📎 JAVA11       📎 Springboot2.7.17\n 📎 JSP,JSTL    📎 Mybatis \n\n 🧑🏻‍💻  담당업무\n ✅ MyBatis를 이용한 회원,파티모집 기능\n ✅ 메인페이지 인기TOP10 JSOUP 크롤링\n ✅ 포트원 API 테스트 결제 구현",
    github: "https://github.com/pangyosim/strawberr7",
    iname: "fa-solid fa-magnifying-glass",
    buttontitle: " 더보기",
    main: {
      image: "/img/oyesmainpage.png",
      title: "OTT서비스 아이디를 공유하는 웹사이트",
      skills: "인기TOP10크롤링기능 파티기능"
    },
    features : [
      {
        image: "/img/oyescrowlingpage.png",
        title: "🔍 인기TOP10크롤링기능",
        contents: ["1️⃣ JSOUP 라이브러리로 netflix, watcha Top10 안내페이지 크롤링 구현.",
                   "2️⃣ netflix, watcha data GET API요청 분리하여 구현.",
                   "3️⃣ DTO 생성후 JSOUP Elements 객체로 변환."],
        skills: "JSOUP,Elements"
      },
      {
        image: "/img/oyespartypage.png",
        title: "🔍 파티기능",
        contents: ["1️⃣ Interceptor로 로그인안된 사용자들 loginPage로 이동.",
                   "2️⃣ 계좌등록시 파티장권한등록.",
                   "3️⃣ 파티가입시 파티참가인원수정."],
        skills: "Mybatis,Interceptor"
      }]
  },
  {
    id:4,
    image: "/img/velogimg.png",
    title:"마주했던 에러들을 정리한 velog",
    category: "BLOG",
    content:"\n📍 기록하지 않고 기억하는것은 언젠가 사라질 데이터가 될 위험이 있기 때문에 더욱 성장하기 위해 공부한 내용을 정리해서 올릴 블로그를 운영하기 시작했습니다.",
    url:"https://velog.io/@spg9468/posts",
    iname: "fa-brands fa-vimeo",
    buttontitle: " velog"
  },
  {
    id:5,
    image: "/img/notionpage.png",
    title:"공부했던 내용들을 정리한 Notion",
    category: "BLOG",
    content:"\n📍 교육 내용, 알고리즘, 개발공부들을 하며 결과물들을 노션에 저장하고 있습니다.\n📍 매일 학습 내용을 적는 습관을 들어 공부를 지속하고 있습니다.",
    url:"https://pgportfolio.notion.site/SIMPANGYO-DB-096dfd3881ea47bb8c48a4b4913f42af?pvs=4",
    iname: "fa-regular fa-paper-plane",
    buttontitle: " Notion"
  },
  {
    id:6,
    image: "/img/githubimage.png",
    title:"프로젝트들을 업로드한 Github",
    category: "BLOG",
    content:"\n📍 프로젝트, 개발공부들을 하며 결과물들을 깃허브에 저장하고 있습니다.\n 📍 알고리즘을 공부할 때는 개념을 먼저 공부한 후 관련된 문제들을 푸는 것을 적어나가고 있습니다.",
    url:"https://github.com/pangyosim",
    iname: "fa-brands fa-github",
    buttontitle: "Github"
  },
]
export default Menu