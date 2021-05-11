import React from "react";
//import Potato from "./Potato";
import PropTypes from "prop-types";

/*
const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg", 
    rating:5
  },
  {
    id:2, 
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg", 
    rating:4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb", 
    rating:4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg", 
    rating:5.5
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating:4.7
  }
];*/

/*
  food를 이름과 함께 렌더링 하기!
  :: javacript 함수를 사용할 것임 (map!!)

  map : array로 부터 너에게 array를 줌.
  - 어떤 array의 각 item에서 function을 실행하는 array를 가지는 함수
  - 그 function의 result를 갖는 array를 나에게 줌.

  ---------------- 콘솔로그 실험 -----------

  const friends = ["dal", "mark", "lynn", "japan guy"];

  friends 
  ====>  (4) ["dal", "mark", "lynn", "japan guy"]

  friends.map(current => {
    console.log(current);
    return 0;
  });
  ====>  dal, mark , lynn, japan guy  / (4) [0,0,0,0]
  

  ※ map 은 function을 취해서 그 function을 array의 각 item에 적용한다.
  ※ map 은 array의 각 item에 function을 적용하고 array를 줌.
  ※ map 은 array를 취하고 우리가 정확히 원하는 array를 반환함.
*/

/*
function renderFood(dish){
  console.log(dish); // foodILike의 오브젝트 array들 출력됨.
  return <Food name={dish.name} picture={dish.image}/>
}
*/

function Food({name, picture, rating}){

  /*
  console.log(props);   //fav="kimchi" 출력됨
  console.log(props.fav);   //kimchi 출력됨 
  */

  /*
    props.fav 와 {fav}는 같은 것.
    둘다 kimchi 출력됨.
  */

  return <div>
    <h2>I Like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name}/>
  </div>;
}

Food.propTypes ={
  //내가 얻고 싶은 props에 대한 설명을 적을거임
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
  /*
    isRequired 는 필수라는 의미.
    위와 같이 isRequired를 빼면, rating을 빼먹어도 오류가 나지 않음.
    다만, rating이 number가 아닐때는 오류발생함.
  */
}


/*
function App() {
  return (
    <div>
     {foodILike.map(dish => (
        <Food 
          key = {dish.id}
          name={dish.name}
          picture={dish.image}
          rating = {dish.rating}
          />
     ))}
     
    </div>
  );
  
}*/

/*※ 위의 dish는 object 임.*/

/* 
  ::: key props는 <Food/>로 전달되지 않음! <Food/>가 사용하고 있지 않기 때문 
  - 기본적으로 react 내부에서 사용하기 위한 것...!!
*/
/* ------------------
  ※※※ 에러발생!!  : 각각 list내의 child는 unique한 key prop를 가져야함.

  - 즉, 모든 react 의 element들은 유일해야함
  - 이것들을 list안으로 집어넣을때, 이것들은 유일성을 잃어버리게 됨.

------------------*/

/*{foodILike.map(renderFood)}*/
     


/* ---------- prop-types 설치
- prop-types 
 :: 내가 전달받은 props가 내가 원하는 props인지 확인해줌
 - 왜냐면...우리는 종종 실수를 하기 때문.....

*/



/* ----- jsx + Props 총정리 ---------
    0. jsx는 HTML + Javascript 임. 
    1. 컴포넌트는 대문자로 시작해야함.
    2. father(App) 가 children(Food)에게 data 보내려면? Props 사용!
    3. Props 란? 뭐든 컴포넌트에 넣게되는 것들.
    4. Props는 children의 첫번째 인자(argument)로 감. 
    5. 인자에 props, props.fav , {fav} 와 같은 방식으로 불러올 수 있음.
  */


  /*---- 첫 리액트 개념! */
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


  /*-------------------JSX and PROPS 강의 ---------------------*/

   /*
    :: 우리는 function App(){}을 가지고 있고
    - 이것은 HTML을 반환할 것임
  */

  /*----------JSX에서 두번째로 이해해야하는 것.

  :: 컴포넌트에 정보를 보낼 수 있다는 점!
    
  * 리액트에서는 재사용 가능한 컴포넌트를 만들 수 있음.
  - 즉, 컴포넌트를 계속해서 반복해서 사용할 수 있다는 것.
  
  */

  /*================================================================================================================================================================================================= */
  /*------------------ State ----------------- */

/*
    state는 보통 우리가 동적 데이터와 함께 작업할 때 만들어짐.
    변하는 데이터, 존재하지 않는 데이터임
*/

class App extends React.Component{
  state = {
    count : 0
  };

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };

  render(){
      return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
      );
  }
}

/*-------  클래스형 함수 --------
  - react Component 는 많은 것을 가지고 있음.
  그 중 하나가 state 임.
  -  매번 우리가 component 를 만들 때마다 모든 것을 다
  구현하고 싶지 않음. 그래서 extends 를 한 것.

--------------------------------------------
클래스형 함수는 class임. 
:: react component로 부터 확장되고 screen에 표시됨.
- react는 자동적으로 모든 클래스형 함수의 render method를 실행하고자 함...!!! 자동적으로!
  
*/

/* --------------- State --------------
  state 는 object 이다.
  - component의 data를 넣을 공간이 있고. 이 데이터는 변함.
*/




export default App;



