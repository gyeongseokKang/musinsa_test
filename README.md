## 동작 방법 및 데모
```sh
// 깃 클론
git clone https://github.com/gyeongseokKang/musinsa_test.git

// 패키치 설치 후 시작
yarn

yarn dev

// 스토리북 실행
yarn storybook

```

또는

[Demo 보러가기 ( https://vercel.com/gyeongseokkang/musinsa-test )](https://musinsa-test.vercel.app/)

---

사이드 동작 Gif

![무신사테스트_low](https://user-images.githubusercontent.com/61446585/156888033-d69ed671-6eef-46b6-8a60-f9b3968822d0.gif)

스토리북 png

<img width="839" alt="image" src="https://user-images.githubusercontent.com/61446585/156888235-5c37e57a-d355-4f9d-a296-4f021f786615.png">

---

## 기술 스택, 기술 선정 이유

### Next.js

Next.js는 React 프레임워크로써, 무신사의 서비스 특징상, SEO, 빠른 응답이 필요하다고 생각했습니다. 따라서 SSR과 ISR이 가능한 Next.js를 도입했습니다.
각 아이템 별로 ISR를 적용하여 빌드시간을 줄이고 결제, 유저페이지등에는 CSR 을 적용한다면 좋은 서비스를 만들 수 있을 것이라 생각합니다.


### Tailwind

유틸리티 클래스네임 기반의 스타일 라이브러리로, 작은 변화를 위해서 별도의 컴포넌트를 만들어야하는 기존의 styled 계열의 디자인 라이브러리가 불편하여 평소에 사용하고 있습니다.
이번 프로젝트에서도 각각의 컴포넌트를 디자인하기 위해 적용하였습니다,

### recoil

상태관리를 위해 사용하였으며, 프로젝트에서는 필터 기능과 검색창의 목록 등을 위해 사용했습니다.. recoil에서 제공하는 기능중에 간단한 atom만을 사용해서 기능을 구현했습니다.


### immer

데이터의 불변성을 위해 도입하였습니다. 필터의 데이터를 조작하기 위해 도입하였습니다.

## 작업 시 고민 과정
### Next.js와 Recoil
핵심기술은 Next.js와 Recoil입니다. 위에서 설명했듯이 커머스서비스 내에서 제품노출을 위해 SEO는 필수적이라 생각하였습니다. 
그리고 recoil를 통한 직관적인 상태관리와 Redux, Mobx와 달리 React스러운 사용방법 등이 매우 유용하다고 판단했습니다.(또한 react와 같은 회사에서 만들었기에 기술의 통합성도 더 좋아질것이라 생각했습니다.)

### 프로젝트 디렉토리 구조
구조는 크게 Page, Widget, Component의 3단계로 구성하였습니다.

- component는 아토믹 디자인 패턴에서 atom에 해당하는 기본 리액트 컴포넌트로, 스토리북의 테스트 대상입니다. 기본적인 디자인시스템의 구성요소입니다.
- widget은 component들의 조합으로 이루어진 것으로, 홀로 독립적인 기능을 수행하는 단위입니다.
- Page는 widget 또는 component들의 조합으로, 실제 프로젝트에서 view에 해당하는 사이즈의 컴포넌트 조합입니다. 여기선 GoodPage라는 하나의 페이지만 있습니다. 또한 VAC 패턴을 도입하여 컴포넌트의 복잡성을 줄이려고 하였습니다.
[참고자료 | VAC 패턴](https://all-dev-kang.tistory.com/entry/%EB%A6%AC%EC%95%A1%ED%8A%B8-VAC-%ED%8C%A8%ED%84%B4-%EC%A0%81%EC%9A%A9-%ED%9B%84%EA%B8%B0-%EB%B0%8F-%EC%9E%A5%EB%8B%A8%EC%A0%90)


### 무한스크롤 및 데이터불러오기
무한스크롤의 경우 Intersection Observer API를 이용하여 hook를 만들어 사용했습니다.
그리고 InfiniteScroll 컴포넌트를 만들고 자식컴포넌트에 원하는 컴포넌트를 담고 그 아래 스크롤 트리거가 되는 컴포넌트를 만들었습니다.

상품데이터의 경우 웹이 랜더링될때 promise.all로 전부다 불러와서 사용하는 것으로 구현하였습니다. ( 검색창의 autocomplete를 위해 )


