/*
    리액트 앱에서 localhost를 계속 유지하고
    새로고침했을때도 실시간 변화를 계속 보고싶다면

    터미널에 npm start 를 실행하고 종료하지 않아야함.

    ::npm start 후 종료를 하게되면
    리액트 앱에는 page not found 가 뜸. (서버가 없기 때문)

    ***그러므로 항상 npm start를 실행하고 그대로 둘 필요가 있음
*/

/*
    index.js 파일의 <App /> 은 무엇인가??

    :: 기본적으로 <App /> 이것을 component라 부름.

    - react는 component와 함께 동작함.
    - component를 보기좋게 만들 거고
    - component가 data를 보여주게 할거임.

    ------ component는 무엇인가?? --------
    ::HTML을 반환하는 함수이다.

    App.js

    function App(){
        return(
            <div>Hello</div>
        )
    }

    :: 우리는 function App(){}을 가지고 있고
    - 이것은 HTML을 반환할 것임


    --------- <App/> 과 JSX -----------

    ***** <App/> 이 우리가 component 를 사용하고자 할 때, component의 형태임

    **** react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요함.

    그리고 이러한 javascript와 HTML사이의 이러한 조합을 
    jsx라고 부른다!!!

    jsx :: react에 특화된 개념 중 하나임. (react가 유일하게 가진 개념)


    ---------- component를 만드는 방법 ------------

    Potato.js에서 계속....

*/