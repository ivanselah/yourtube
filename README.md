### Project Name : YourTube

### Youtube clone

![removebg-preview](https://user-images.githubusercontent.com/78192018/134353583-c29e3dec-41a6-44ed-a42c-8dd29576e081.png)

---

##### 토이프로젝트 ReactJS, PostCss

https://ivanselah.github.io/yourtube/

: Youtube의 주요 기능인 인기동영상, 동영상 검색 및 재생 스크롤을 이용한 페이지로드

- 본 프로젝트 제작 이유
  => React에 대한 깊은 이해

1. Hook, 함수형컴포넌트 이해  
2. React 상태관리 한계확인  
3. PostCss 사용  
   앞서 logflix 프로젝트에서 Styled component는 사용해 봤으며 기존 Css or Sass로 해도 괜찮았지만 클래스명을 매번 다르게 해야 하는 불편한 점 때문에 모듈화가 가능한 PostCss 적용했습니다.

---

- 제작기간  
  09.16 ~ 09.22  
  반응형 웹으로 디자인  
  목록에서 각 영상의 썸네일, 제목, 채널 이름 외에 조회수, 업로드된 날짜, 댓글이 표시됩니다.

---

- 기능

1. 인기동영상
2. 동영상 검색
3. 선택 동영상 재생
4. 영상정보 확인
5. Infinite scroll

---

- 어려웠던 점
=>  
IntersectionObserver API(기준이 되는 아이템과 viewport가 교차되는 부분을 비동기적으로 관찰)  
처음에 Infinite scroll을 scroll event를 이용하여 구현했지만 scroll event로 무한 스크롤을 구현하게 되면 매 스크롤마다 이벤트를 감지하게되어 함수가 계속해서 호출되어 별도의 로직이 필요했으며 이외에도 화면 가장 끝이아니라 중간 쯤에서 아이템들을 불러오도록 하고 싶었는데 구현하기가 어려워서 검색 후 해당 API를 사용하였습니다. 적용시키기 위한 시간이 오래 걸렸지만 성능을 개선할 수 있었습니다.

- 느낀점
=>  
컴포넌트가 세분화되면서 데이터관리의 불편함을 느꼈습니다. 필요한 데이터가 있을 시 넘겨줘야 하는 번거로움과 매일매일 수정을 반복하며 프로젝트를 작성해가면서 나중에 유지 보수가 힘들겠다고 생각하였습니다. 이후 상태 관리 라이브러리인 Redux 또는 MobX 학습이 필요할 것으로 생각되며 우선 ContextAPI로 토이 프로젝트 하나 더 진행하면서 익혀볼 예정입니다.
