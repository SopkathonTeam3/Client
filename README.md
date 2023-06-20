# 표류병 (For You 병)

## 📱 서비스 소개

###  서비스명 : 표류병 (For You 병)

### 서비스 한 줄 소개 : 이미 있던 관계의 사람 중에서도 ‘별로 친하지 않은’ 상태의 사람들이  `보다 지속 가능한 관계`를 유지하도록 도움을 주는 서비스

<details>
<summary> 🧚‍♀️ Persona</summary>
	
- ‘별로 친하지 않다’ 의 예시
    - 지나가다 1, 2번 마주친 정도
    - 술자리 1번 같이했지만 막상 만나면 어색한 정도
- ‘보다 지속 가능한 관계 마련’의 의미
    - 일회성의 관계여도 만남 이후에
        - 당시의 만남을 상대방의 시선을 통해 회상할 수 있게 하고
        - 이를 통해 한 번쯤 다시 연락해볼 `핑계거리`를 제공함
</details>

<details>
<summary>📍 서비스 플로우</summary>
	
1. 유저 정보 기입하기
- 유저 이름 및 유저 프로필 입력
- 시작하기 버튼 클릭후 , ‘`대면 만남`을 가졌던 사람들에게 참여 링크 공유’
	
2. 지인이 링크를 공유받은 뒤, 서비스 내에서 ‘첫인상 및 질문에 대한 답변 작성’
- 병 버튼을 클릭후 , 유저에 대한 질문에 답변 작성
	
3. 특정기한이 지나면 , ‘지인 n명이 작성해준 답변의 절반 개수인 n/2개만 내용이 보임’
	
4. 링크 공유를 인스타를 통해 진행하면 → ‘지인들이 작성해준 답변 모두 표시됨’
</details>

<details>
<summary>🔥 바이럴 포인트</summary>

- `호기심` 자극
	- ex) 나와 ‘1회 이상 대면 만남’을 가졌던 상대방 8명이
        - [당시의 만남에 대해 나에게 어떠한 첫인상을 받았다] 라고 기록하면
        해당 기록을 n일간 입력을 완료한 상대방도, 나도 볼 수 없다가
        URL 링크 생성으로부터 n일이 지나면, `8명 중 4명의 기록만 보여짐`
        - 이 상태에서 나머지 4명의 기록을 보기 위해서는
        `나의 URL 링크를 복사`하여 1회 이상 타인에게 공유해야 함

</details>


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
		<td> <img width="230" alt="image" src="https://github.com/SopkathonTeam2/Client/assets/77691829/6e0a7fd2-cbf6-403a-b0b8-2ce6ece243dc">
 </td>
		<td> <img width="230" alt="image" src="https://github.com/SopkathonTeam2/Client/assets/77691829/d3a87ab2-ad16-47e8-a316-6dbdd6981406"><p align="center">울 언니 예쁘죠 ~</p></td>  
		<td><img width="230" height="270" alt="image" src="https://github.com/SopkathonTeam2/Client/assets/77691829/4828df0b-3fad-44bd-a243-7682687aff66"></td>
	</tr>
	<tr>
	<td> 맡은 뷰 </td>
	<td>
		<ul>
			<li> 온보딩 페이지, bottle 컴포넌트 </li> 
			<li> bottle list 컴포넌트 </li>
		</ul>
	</td>
	<td>
		<ul>
			<li> 모달 컴포넌트 </li>
			<li> 모달 폼 컴포넌트 </li>
			<li> 모달 info 컴포넌트 </li>
		</ul>
	</td>
	<td>
		<ul>
			<li> 유저 페이지 </li>
			<li> 커스텀 페이지 </li>
			<li> 로딩 페이지 </li>
			<li> background 컴포넌트(메인) </li>
		</ul>
	</tr>
		<tr>
	<td> 담당 API </td>
	<td>
		<ul>
		<li> bottle list 메모 조회 GET </li>
		</ul>
	</td>
	<td>
		<ul>
		<li> bottle 메시지 모달 폼 POST </li>
		</ul>
	</td>
	<td>
		<ul>
		<li> 유저 등록 POST </li>
		<li> background 컴포넌트 GET </li>
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

<a href="https://www.notion.so/git-8a86d89ed70e4c48b2e5281b9a3f82f3"><img src="https://img.shields.io/badge/Notion 링크-white?style=for-the-badge&logo=Notion&logoColor=000000"/></a>

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

<a href="https://www.notion.so/58613717803b455692f31682d3773ebc"><img src="https://img.shields.io/badge/Notion 링크-white?style=for-the-badge&logo=Notion&logoColor=000000"/></a>

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


## 🔥 배포 링크
[🍾표류병 : For you 병](https://oceanforyou.vercel.app/)
