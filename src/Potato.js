/*
    component를 작성할 때마다 
    import React from "react" 를 써줘야함

    :: 이것을 하지 않으면 react는 여기에
    jsx가 있는 component를 사용하는 것을 이해하지 못함.
*/

import React from "react";

//유의 :: 대문자로 시작하는 함수임 Potato(o), potato(x)
function Potato(){
    return(
        <h3>I love Potato</h3>
    )
}

//Potato가 선언되었지만 아무도 사용하지 않는 상태.
//그러므로 Potato를 export 해줘야함

export default Potato;

// 참고 : 수업진행에 혼동올까봐 니코쌤은 Potato 파일 삭제하시고 진행 ㅜㅜ