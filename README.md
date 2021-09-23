# The news
## 에러를 해결하며 느낀 점
- api 를 통해서 상태 관리 할 때 응답 이전에도 상태에 접근하는지 체크.
- api 의 응답이 없을 때의 예외 사항을 고려할 것. 
- [자세한 에러 해결 내역 확인](https://mountain-axolotl-824.notion.site/news-viewer-c07875a47ed049e7b8490a91d1c553dd)
## 목표
- react 기반의 웹 어플리케이션에서 비동기 요청 및 응답 해결의 이해.
- [News api](https://newsapi.org/)와 이를 활용한 [react 프로젝트](https://github.com/gilbutITbook/080203/tree/master/14/news-viewer)를 클론 코딩

## 구현 기능
- [x] **카테고리 선택 기능**
	react-router-dom으로 사용자의 선택에 따라 카테고리 변경 구현.
- [x] **카테고리 별 뉴스 요청 기능**
	선택한 카테고리를 props로 전송 및 useEffect로 요청 전송.
- [x] **응답 결과 처리 기능**
	요청의 결과를 처리하여 화면에 렌더링.
    
