import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Potato from './Potato';

/*--- ./ 의 의미?----
:: 같은 디랙토리에 있다는 말.*/


/*------ 컴포넌트 랜더링하기!! -----------

ReactDOM.render(<App /><Potato />, document.getElementById('potato'));

:: 위와 같이 <App /><Potato /> 이렇게 사용하면 오류 발생!!

- 리액트 앱은 하나의 컴포넌트만을 랜더링 해야하기 때문! ***중요
- 그리고 그 하나의 컴포넌트가 App 임.
- App.js 내에서는 많은 컴포넌트를 넣을 수 있음. 
- 또 그 컴포넌트 안에 더 많은 컴포넌트를 import 할 수 있음.

***** 그럼 Potato는 어떻게 랜더링 해야하나???
::: App.js 에 import Potato from './Potato'; 입력해주기
- App을 index.js 에서 랜더링한 방식과 동일

App.js 파일에서 원하는 곳에 <Potato /> 삽입하기!


*/

ReactDOM.render(<App />, document.getElementById('potato'));