(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{275:function(t,e,s){"use strict";s.r(e);var a=s(13),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"fetch와-axios의-차이"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch와-axios의-차이"}},[t._v("#")]),t._v(" Fetch와 Axios의 차이")]),t._v(" "),e("p",[t._v("아래 내용은 "),e("strong",[t._v("Difference between Fetch and Axios.js for making http requests")]),t._v("(\n"),e("a",{attrs:{href:"https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/"),e("OutboundLink")],1),t._v(" )를 읽어보면서 우리말로 옮겨본 것입니다.")]),t._v(" "),e("h2",{attrs:{id:"fetch-vs-axios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch-vs-axios"}},[t._v("#")]),t._v(" Fetch vs Axios")]),t._v(" "),e("p",[t._v("모든 웹 애플리케이션의 기본 과제는 서버와 HTTP 프로토콜로 통신하는 것이다. "),e("code",[t._v("Fetch")]),t._v("와 "),e("code",[t._v("Axios")]),t._v("를 이용하여 이 과제를 손쉽게 달성할 수 있다. 어떤 개발자는 사용이 편한"),e("code",[t._v("Axios")]),t._v("를 빌트인 API인 "),e("code",[t._v("Fetch")]),t._v("보다 선호하기도 하는데, Fetch API는 Axios의 주요 기능을 완벽하게 만들어 낼 수 있다.")]),t._v(" "),e("h2",{attrs:{id:"fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" Fetch")]),t._v(" "),e("p",[t._v("Fetch API는 window object에 정의된 "),e("code",[t._v("fetch()")]),t._v(" 메서드를 제공한다. 또한 HTTP 파이프라인(request, resoponse)에 접근하고 조작하기 위한 Javascript Interface를 제공한다. fetch 메서드는 fetch되어야 할 리소스의 URL을 인자로 가지고 있어야 한다. 이 메서드는 Promise를 반환하는데, Promise를 통해서 요청에 대한 응답을 찾아낼 수 있다.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 응답 핸들링")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 에러 핸들링")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"axios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" Axios")]),t._v(" "),e("p",[t._v("Axios는 node.js나 브라우저의 XMLHttpRequests에서 HTTP 요청을 만드는데 사용하는 Javscript 라이브러리이다. Axios는 자바스크립트 ES6의 기본이 되는 Promise API를 지원한다. intercept HTTP요청과 XSRF에 대응하는 클라이언트 사이드 보호가 가능하다. 또한 요청 취소도 가능하다.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("axios\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 응답 핸들링")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 에러 핸들링")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Axios")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Fetch")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Axios는 request object에 url이 있다.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fetch는 request object에 url이 없다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Axios는 stand-alone 써드파티 패키지이다.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("설치 없이 대부분의 모던브라우저에서 사용 가능하다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Axios는 built-in XSRF 보호가 가능하다.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fetch는 그렇지 않다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("data 속성을 사용한다.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("body 속성을 사용한다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("data는 object 형태")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fetch의 body는 문자열 형식")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v('status가 200이거나 status Text가 "OK"일 때 Axios request status는 ok이다.')]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("response object가 ok 속성을 가지고 있으면 Fetch request는 ok이다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Axios는 자동으로 JSON data로 변환")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fetch는 JSON데이터를 다룰 때 2단계를 거친다(응답에 대해 "),e("code",[t._v(".json()")]),t._v("메서드를 호출한다.)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Axios는 요청 취소나 request timeout을 허용한다.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fetch는 그렇지 않다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Axios는 intercept HTTP요청이 가능하다.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fetch는 기본적으로 intercept request를 지원하지 않는다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Axios는 built-in으로 다운로드 progress를 제공한다.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fetch는 업로드 progress를 지원하지 않는다.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Axios는 브라우저 지원범위가 넓다.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Fetch는 Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ 만 지원한다(하위호환)")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);