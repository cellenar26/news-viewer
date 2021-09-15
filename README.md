# The news
## 목표
- react 기반의 웹 어플리케이션에서 비동기 요청 및 응답 해결의 이해.
- [News api](https://newsapi.org/)와 이를 활용한 [react 프로젝트](https://github.com/gilbutITbook/080203/tree/master/14/news-viewer)를 클론 코딩

## 구현 기능
- **[x] 카테고리 선택 기능**
	react-router-dom으로 사용자의 선택에 따라 카테고리 변경 구현.
- **[x] 카테고리 별 뉴스 요청 기능**
	선택한 카테고리를 props로 전송 및 useEffect로 요청 전송.
- **[x] 응답 결과 처리 기능**
	요청의 결과를 처리하여 화면에 렌더링.
    
## 발생한 문제점
### 1.Cannot read property 'data' of null
**원인** 
최초 렌더링 할 때 api 응답의 결과가 null이므로 "Cannot read property 'data' of null" 에러 발생.
~~~
const {articles} = response.data
// NewsList.js
~~~
**해결**
1.articles 가 null 이면 빈 배열을 초기값으로 준다.
~~~
const {articles} = response.data || []
// NewsList.js
~~~
2.response === null 이면 return null이 되게 한다.
기존에 아래처럼 작성된 구문이 있었다.
~~~
if(response === false) {
return null 
}
// NewsList.js
~~~
위 비교문을 아래로 수정한다.
~~~
if(response === null) {
      return null
  }
// NewsList.js
~~~

## 생각해볼 만한 것
- 추가 해볼만한 기능은 무엇이 있을까.
- response가 아예 null이 되지 않게 할 방법은 무엇이 있을까.
