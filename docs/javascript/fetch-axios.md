---
meta:
  - name: og:title
    content: Fetch와 Axios의 차이
tags: ["axios", "fetch"]
---

# Fetch와 Axios의 차이

아래 내용은 **Difference between Fetch and Axios.js for making http requests**(
<https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/> )를 읽어보면서 우리말로 옮겨본 것입니다.

## Fetch vs Axios

모든 웹 애플리케이션의 기본 과제는 서버와 HTTP 프로토콜로 통신하는 것이다. `Fetch`와 `Axios`를 이용하여 이 과제를 손쉽게 달성할 수 있다. 어떤 개발자는 사용이 편한`Axios`를 빌트인 API인 `Fetch`보다 선호하기도 하는데, Fetch API는 Axios의 주요 기능을 완벽하게 만들어 낼 수 있다.

## Fetch

Fetch API는 window object에 정의된 `fetch()` 메서드를 제공한다. 또한 HTTP 파이프라인(request, resoponse)에 접근하고 조작하기 위한 Javascript Interface를 제공한다. fetch 메서드는 fetch되어야 할 리소스의 URL을 인자로 가지고 있어야 한다. 이 메서드는 Promise를 반환하는데, Promise를 통해서 요청에 대한 응답을 찾아낼 수 있다.

```javascript
fetch(URL)
  .then((response) => {
    // 응답 핸들링
  })
  .catch((error) => {
    // 에러 핸들링
  });
```

## Axios

Axios는 node.js나 브라우저의 XMLHttpRequests에서 HTTP 요청을 만드는데 사용하는 Javscript 라이브러리이다. Axios는 자바스크립트 ES6의 기본이 되는 Promise API를 지원한다. intercept HTTP요청과 XSRF에 대응하는 클라이언트 사이드 보호가 가능하다. 또한 요청 취소도 가능하다.

```javascript
axios
  .get(URL)
  .then((response) => {
    // 응답 핸들링
  })
  .catch((error) => {
    // 에러 핸들링
  });
```

|                                 **Axios**                                 |                                      **Fetch**                                       |
| :-----------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
|                   Axios는 request object에 url이 있다.                    |                         Fetch는 request object에 url이 없다.                         |
|                 Axios는 stand-alone 써드파티 패키지이다.                  |                  설치 없이 대부분의 모던브라우저에서 사용 가능하다.                  |
|                  Axios는 built-in XSRF 보호가 가능하다.                   |                                 Fetch는 그렇지 않다.                                 |
|                           data 속성을 사용한다.                           |                                body 속성을 사용한다.                                 |
|                            data는 object 형태                             |                              Fetch의 body는 문자열 형식                              |
| status가 200이거나 status Text가 "OK"일 때 Axios request status는 ok이다. |          response object가 ok 속성을 가지고 있으면 Fetch request는 ok이다.           |
|                     Axios는 자동으로 JSON data로 변환                     | Fetch는 JSON데이터를 다룰 때 2단계를 거친다(응답에 대해 `.json()`메서드를 호출한다.) |
|              Axios는 요청 취소나 request timeout을 허용한다.              |                                 Fetch는 그렇지 않다.                                 |
|                  Axios는 intercept HTTP요청이 가능하다.                   |               Fetch는 기본적으로 intercept request를 지원하지 않는다.                |
|            Axios는 built-in으로 다운로드 progress를 제공한다.             |                      Fetch는 업로드 progress를 지원하지 않는다.                      |
|                     Axios는 브라우저 지원범위가 넓다.                     |  Fetch는 Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ 만 지원한다(하위호환)   |
