# TOEIC AI Vocabulary Trainer

AI 기반 토익 어휘 학습 애플리케이션입니다. Google Gemini API를 활용하여 개인화된 토익 Part 5 명사 문제를 생성하고, 오답노트와 단어장 기능을 제공합니다.

## ✨ 주요 기능

- 🤖 **AI 퀴즈 생성**: Google Gemini API로 실시간 토익 Part 5 명사 문제 생성
- 📚 **오답노트**: 일반적인 실수 유형과 해설 제공
- 📖 **개인 단어장**: 퀴즈 중 클릭한 단어 저장 기능
- 🎨 **반응형 UI**: 모바일/데스크톱 친화적 디자인

## 🛠️ 기술 스택

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **AI**: Google Gemini API
- **Deployment**: Netlify

## 🚀 로컬 실행

### 필수 조건
- Node.js (버전 18 이상)
- Google Gemini API 키

### 설치 및 실행

1. 저장소 클론:
```bash
git clone https://github.com/your-username/toeic-ai-vocabulary-trainer.git
cd toeic-ai-vocabulary-trainer
```

2. 의존성 설치:
```bash
npm install
```

3. 환경변수 설정:
`.env.local` 파일을 생성하고 다음 내용을 추가:
```
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

4. 개발 서버 실행:
```bash
npm run dev
```

## 📦 빌드 및 배포

### 로컬 빌드
```bash
npm run build
npm run preview
```

### Netlify 배포
1. GitHub에 코드 푸시
2. Netlify에서 저장소 연결
3. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 환경변수 `GEMINI_API_KEY` 설정

## 🔑 환경변수

| 변수명 | 설명 | 필수 |
|--------|------|------|
| `GEMINI_API_KEY` | Google Gemini API 키 | ✅ |

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

This project is licensed under the MIT License.

## 🙏 Credits

- Google Gemini API for AI-powered quiz generation
- React & TypeScript for robust frontend development
- Tailwind CSS for beautiful styling
