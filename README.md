# ~~서비스 이름 ~~

## 📱 서비스 소개

###  서비스명 :

### 서비스 한 줄소개 :

<br/>

## 🙋🏻‍♀️ 팀원 소개 & 역할 분담
<div align="center">
	<table>
<th>팀원</th>
  <th>이재훈  <a href="https://github.com/ljh0608"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=https://github.com/ljh0608"/></a>  </th>
	<th>권혜인 <a href="https://github.com/hae2ni"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=https://github.com/hae2ni"/></a>  </th>
  <th> 조연서 <a href="https://github.com/Yeonseo-Jo"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=https://github.com/Yeonseo-Jo"/></a>  </th>
	<tr>
	<td> 팀원 소개 </td>
		<td> 이미지 ~
		<td> 이미지 ~
		<td> 이미지 ~</td>
	</tr>
	<tr>
	<td> 맡은 뷰 </td>
	<td>
		<ul>
		<li> ~~~ 뷰 </li>
		</ul>
	</td>
	<td>
		<ul>
		<li> ~~~ 뷰 </li>
		</ul>
	</td>
	<td>
		<ul>
		<li> ~~~ 뷰 </li>
		</ul>
	</tr>
		<tr>
	<td> 담당 API </td>
	<td>
		<ul>
		<li> `~~ GET` </li>
		</ul>
	</td>
	<td>
		<ul>
		<li> `~~ GET` </li>
		</ul>
	</td>
	<td>
		<ul>
		<li> `~~ GET` </li>
		</ul>
	</tr>
	</table>
</div>

<br/>

## ⚙️ 기술 스택
<div align="center">

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| State Management     | ![State Management](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge&logo=Recoil)                                                                                                                   |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
</div>

<br/>

## ✍🏻 컨벤션

### ✨ Git 컨벤션
<details>
<summary> 1️⃣ Commit 컨벤션  </summary>

* 기본적인것 (feat, fix, chore, ..) 위주로만 지키기!

| 제목     | 내용                                        |
| -------- | ------------------------------------------- |
| init     | 브랜치 첫 커밋                              |
| feat     | 새로운 기능에 대한 커밋                     |
| fix      | 버그 수정에 대한 커밋                       |
| build    | 빌드 관련 파일 수정에 대한 커밋             |
| chore    | 그 외 자잘한 수정에 대한 커밋               |
| ci       | CI 관련 설정 수정에 대한 커밋               |
| docs     | 문서 수정에 대한 커밋                       |
| style    | style: 코드 스타일 혹은 포맷 등에 관한 커밋 |
| refactor | 코드 리팩토링에 대한 커밋                   |
</details>

<details>
<summary> 2️⃣ Branch 전략 </summary>
  
```  
1. 각자의 이름으로 브랜치를 파고 큰 기능 단위로 이름 생성 ex)이재훈/home

2. develop 브랜치 만들어서 모든 브랜치는 dev브랜치로 merge

3. develop 브랜치에 유의미한 기능이 완성되면 main을 merge

4. 개발단계에서 merge가 이루어지면 develop pull 받아오기 !
```
  
</details>

<br/>

### ✨ Project 컨벤션
<details>
<summary >1️⃣ 폴더 구조 </summary>

* 공통 컴포넌트를 분리
* 페이지 단위로 러프하게 분리
* 폴더명에는 s를 붙여서! (`ex. assets`)

```jsx
├── data.json 🗂 목 데이터 저장
├── apis 🗂 api 폴더
├── package.json 📦 설치된 패키지를 관리하는 파일
└── src
    ├── App.jsx ✡️ 앱의 라우팅과 글로벌 스타일 지정
    ├── index.js
    ├── component
    │   ├── common 🗂 공통으로 쓰일 컴포넌트 저장
    │   │   └── assets
    │   │       ├── icon
    │   │       └── images
    │   ├── landing 🗂 landing 페이지에 쓰일 컴포넌트 저장
    │   ├── main 🗂 main 페이지에 쓰일 컴포넌트 저장
    │   └── messageFeed 🗂 messageFeed 페이지에 쓰일 컴포넌트 저장
    ├── pages 🗂 라우팅 시 보여질 페이지 컴포넌트 저장
    │   ├── Landing
    │   ├── Main
    │   └── MessageFeed
    └── styles
        └── color.js
```
</details>

<details>
<summary >2️⃣ 기타 컨벤션 </summary>

#### (1)  🎨 Style 속성 

```
1.  레이아웃 속성 (display, position, float 등)

2.  박스 모델 속성 (width, height, margin, padding, border 등)

3.  시각 관련 속성 (background-color, background-image, box-shadow 등)

4.  글꼴 관련 속성 (font-size, font-family, color, text-align, text-transform 등)

5.  기타 속성 (opacity, cursor, overflow, z-index, transition, animation 등)
```
* CSS : Styled component 사용
* theme와 globalStyle 사용 (`theme` : colors, font ~ )
* rem을 무조건적으로 사용하는 것이 아니라 필요한 부분에 적용.
* ex) px로 사용할 것 : border-radius, border, box-shadow 등

<br/>

#### 🫡 기타 컨벤션

* ( ~~`function`~~ X ) 화살표 함수형태 (`const ~~~ () => { } )` ) 로 사용.
	* `rfac` & `rsc` 컴포넌트 단축키 사용
* event 함수는 `handle~~~`
* 변수명 : `카멜케이스` / 상수데이터 : `대문자` / Component명 :`파스칼`
* 절대경로 사용 (`src` 기준)
</details>
