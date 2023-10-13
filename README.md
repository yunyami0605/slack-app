### 1. 프로젝트 개발 이유

- nextjs 13 버전 + app directory 연구 및 공부 + 서버 컴포넌트 + 클라이언트 컴포넌트
- react native webview 연동
- 웹소켓을 활용한 nestjs 서버 공부

### 2. 프로젝트 스택

- nextjs
- react native
- react native webview
- nestjs
- postgresql
- tailwind

### 3. 프로젝트 관련 공부한 사항

- nextjs 13
- webview
- tailwind
- 그 밖에 서버 복습

### 4. 코드 컨벤션

1. 변수 선언

- var 미사용
- 미사용의 변수 제거하기 (warn)
- 변수는 카멜케이스 사용
- 첫 글자 변수명 언더스코어 사용 가능
-

2. 함수 선언

- 컴포넌트는 파스칼 케이스 사용
- 컴포넌트 내부 함수 및 일반 함수 카멜 케이스

3. 타입

- 암묵적인 타입 강제 변환 x
- any 타입 최대한 미사용
- type, interface는 파스칼 케이스 사용
- 일반적인 변수 타입은 type 사용, 객체는 최대한 interface 사용

4. 브랜치 전략

- develop(개발) 브랜치
- stage(테스트용), production(배포) 브랜치
