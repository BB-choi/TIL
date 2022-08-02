(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{290:function(t,e,r){"use strict";r.r(e);var s=r(13),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_22-08-01"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_22-08-01"}},[t._v("#")]),t._v(" 22-08-01")]),t._v(" "),e("h2",{attrs:{id:"docusaurus-배포하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docusaurus-배포하기"}},[t._v("#")]),t._v(" Docusaurus 배포하기")]),t._v(" "),e("h3",{attrs:{id:"docusaurus-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docusaurus-설치"}},[t._v("#")]),t._v(" Docusaurus 설치")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("npx create-docusaurus@latest my-website classic\n")])])]),e("p",[t._v("위 명령어로 현재 위치 하위에 my-website라는 이름의 디렉토리 아래에 설치된다.("),e("code",[t._v("classic")]),t._v("템플릿 으로 설치)")]),t._v(" "),e("h3",{attrs:{id:"배포-🚀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#배포-🚀"}},[t._v("#")]),t._v(" 배포 🚀")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docusaurus.io/ko/docs/deployment",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),e("OutboundLink")],1),t._v("를 통해 "),e("code",[t._v("Vercel")]),t._v(", "),e("code",[t._v("Netlify")]),t._v("로 배포 해 보기")]),t._v(" "),e("h3",{attrs:{id:"🚀-vercel로-배포하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🚀-vercel로-배포하기"}},[t._v("#")]),t._v(" 🚀 "),e("code",[t._v("Vercel")]),t._v("로 배포하기")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vercel"),e("OutboundLink")],1),t._v("에서 GitHub repository를 연결하여 배포할 수 있다.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("docusaurus.config.js")]),t._v("의 "),e("code",[t._v("url")]),t._v("을 배포할 Vercel 주소와 동일하게 설정하지 않아도 배포된다.")]),t._v(" "),e("li",[t._v("기본 주소는 "),e("code",[t._v("{레포지토리이름}.vercel.app")]),t._v("으로 지정된다.")])]),t._v(" "),e("h4",{attrs:{id:"branch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#branch"}},[t._v("#")]),t._v(" Branch")]),t._v(" "),e("ul",[e("li",[t._v("첫 배포시(등록시) GitHub에서 "),e("code",[t._v("Default branch")]),t._v("로 지정된 branch가 배포된다.")]),t._v(" "),e("li",[t._v("branch에 push되면, 자동으로 배포되도록 설정할 branch 변경\n"),e("ul",[e("li",[e("code",[t._v("Project Settings")]),t._v(" - "),e("code",[t._v("Git")]),t._v(" - "),e("code",[t._v("Production Branch")]),t._v("에서 변경\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/78826879/182386597-27cb735e-98d8-43f4-ba13-539c6b529d74.png",alt:"production branch 변경"}})])])])]),t._v(" "),e("h4",{attrs:{id:"routing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[t._v("#")]),t._v(" Routing")]),t._v(" "),e("ul",[e("li",[t._v("아무 설정 없이 "),e("code",[t._v("docusaurus.config.js")]),t._v("의 "),e("code",[t._v("baseUrl")]),t._v("만을 변경하여 테스트\n"),e("ul",[e("li",[t._v("baseUrl을 "),e("code",[t._v("/")]),t._v("외 "),e("code",[t._v("test/")]),t._v("와 같이 설정하는 경우, "),e("code",[t._v("/")]),t._v("로 접속시 오류 메시지 표시됨")]),t._v(" "),e("li",[t._v("Docusaurus는 기본적으로 "),e("a",{attrs:{href:"https://docusaurus.io/ko/docs/advanced/routing#file-paths-and-url-paths",target:"_blank",rel:"noopener noreferrer"}},[t._v("라우팅을 지원"),e("OutboundLink")],1),t._v("한다.")]),t._v(" "),e("li",[e("code",[t._v("blog")]),t._v(", "),e("code",[t._v("docs")]),t._v(", "),e("code",[t._v("pages")]),t._v("등 플러그인을 통하여 파일경로에 따라 URL 경로를 지정할 수 있다.")])])])]),t._v(" "),e("h3",{attrs:{id:"🚀-netlify로-배포하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🚀-netlify로-배포하기"}},[t._v("#")]),t._v(" 🚀 "),e("code",[t._v("Netlify")]),t._v("로 배포하기")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docusaurus.io/ko/docs/deployment#deploying-to-netlify",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),e("OutboundLink")],1),t._v("를 토대로 "),e("code",[t._v("docusaurus.config.js")]),t._v("의 url을 지정 후 Netlify에서 GitHub repository를 연결한다.")]),t._v(" "),e("ul",[e("li",[t._v("Vercel과 달리 첫 배포시에도 어떤 브랜치를 대상으로 deploy를 수행할지("),e("code",[t._v("Production branch")]),t._v(")를 선택할 수 있다.")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("주의사항")]),t._v(" "),e("p",[t._v("Post Processing > Asset Optimization > Pretty Urls 설정을 비활성화 체크해주는 것을 권장합니다.")])]),t._v(" "),e("p",[t._v("위 주의사항을 공식문서에서 확인할 수 있는데, 아래와 같이 기본적으로 "),e("code",[t._v("disabled")]),t._v(" 상태였다.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/78826879/182392920-f0aab899-6cae-4a52-868c-427fedb46693.png",alt:"설정 화면"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);