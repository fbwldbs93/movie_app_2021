import React from "react";
//import Potato from "./Potato";


function Food({fav}){

  /*
  console.log(props);
  //fav="kimchi" 출력됨
  console.log(props.fav);
  //kimchi 출력됨 
  */

  /*
    props.fav 와 {fav}는 같은 것.
    둘다 kimchi 출력됨.
  */

  return <h1>I like {fav}</h1>;
}


function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgiopsal"/>
      <Food fav="chukumi"/>
    </div>
  );

  /* ----- jsx + Props 총정리 ---------
    0. jsx는 HTML + Javascript 임. 
    1. 컴포넌트는 대문자로 시작해야함.
    2. father(App) 가 children(Food)에게 data 보내려면? Props 사용!
    3. Props 란? 뭐든 컴포넌트에 넣게되는 것들.
    4. Props는 children의 첫번째 인자(argument)로 감. 
    5. 인자에 props, props.fav , {fav} 와 같은 방식으로 불러올 수 있음.
  */


  //---- 첫 리액트 개념!
  /*
    1. food 컴포넌트에 "kimchi"라는 value를 가진 property(속성) "name"을 줌.
    2. food 컴포넌트에 "fav"라는 이름의 property 로 바꿔보기. 

    3. react magic을 이용해서 props(property)를 사용할거임
    - react magic 에서 리액트는 우리가 전달한 props를 가져가는 일을 할거임.

    4. 예시
    <Food 
      fav="kimchi"
      something={true}
      papapa={["hello", 1, 2]}
    />

    위와 같이 father 컴포넌트에서 children 컴포넌트로 원하는 많은
    props를 보낼 수 있음.

    5. 누군가 food 컴포넌트로 정보를 보내려고 할때, react는 이 모든
    속성을 가져올거임.
    -> 그리고 food function 컴포넌트의 인자(argument)로 그것들을 넣음.
  */





  /*
    react app 이 실행되고 있는 상태에서 (터미널에 npm start)
    :: function App(){} 안에
    :: return <div>Hi</div> 이런 식으로 작성하면 
    :: localhost:3000 (react app) 에서도 Hi 가 출력된다.
  */

  /* ------- 중요 --------
  :: react app(localhost:3000)에서 콘솔확인 시,
  <div>Hi</div> 가 추가되어있지만
  
  :: public 폴더의 index.html 에는 아무런 변화가 생기지 않는다.
  

  ---------- react는 어떻게 동작하는가? ----------
  - react는 당신이 거기에 쓰는 모든 요소를 생성한다는 것. 
  - 자바스크립트와 함께 그것들을 만들고 그것들을 HTML로 밀어 넣음
    ** 모든 react app 을 index.html의 <div id="root"></div> 사이로 넣음.

  ****** index.js 를 확인해보면 알수 있음
  - reactDOM.render 이라는 것이 있고 (이것은 application 을 랜더링함)
  - 그리고 id 가 root 인 것을 가져옴
  ( document.getElementById("root") )

  ****만약 index.html의 div id 와
  index.js 에서 랜더링하려는 div id 가 일치하지 않으면 에러발생!

  즉, react는 app.js component를 ElementById 내부에 넣으려고 함.
  하지만 존재하지는 않음!

  react는 소스코드에 처음부터 HTML을 넣지 않고, 
  HTML에서 HTML을 추가하거나 제거하는 법을 알고 있음.
  그래서 application이 이것을 로드할 때, 빈 HTML을 로드하게 되고
  그런 다음에 react가 component에 작성해둔 HTML 을 밀어넣게 됨.

  virtual DOM (virtual document object model)
  - 버츄얼, 존재하지 않는다는 말.
  - 소스코드에는 존재하지 않음

  위의 내용이 바로 react 의 일.
  react 가 빠른 이유 : virtual이고 존재하지 않음.
    
  */


  //-------------------JSX and PROPS 강의 ---------------------

   /*
    :: 우리는 function App(){}을 가지고 있고
    - 이것은 HTML을 반환할 것임
  */

  /*----------JSX에서 두번째로 이해해야하는 것.

  :: 컴포넌트에 정보를 보낼 수 있다는 점!
    
  * 리액트에서는 재사용 가능한 컴포넌트를 만들 수 있음.
  - 즉, 컴포넌트를 계속해서 반복해서 사용할 수 있다는 것.
  
  */


}

export default App;



