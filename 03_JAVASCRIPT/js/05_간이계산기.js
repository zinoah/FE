// 전역 변수 
const input1 = document.getElementById("firstInput"); // 요소 추적 O, 값, 속성 추적 x
const input2 = document.getElementById("secondInput");
const rs = document.getElementById("result")

function plus(){
    // 함수가 호출 되었을 때 내부 코드가 해석되면서 수행.
    const result = Number(input1.value) + Number(input2.value)
    rs.innerText = "계산결과: " + result;
}

function minus(){
    const result = Number(input1.value) - Number(input2.value)
    rs.innerText = "계산결과: " + result;
}

function multiply(){
    const result = Number(input1.value) * Number(input2.value)
    rs.innerText = "계산결과: " + result;
}
function divide(){
    const result = Number(input1.value) / Number(input2.value)
    rs.innerText = "계산결과: " + result;
}
function modulus(){
    const result = Number(input1.value) % Number(input2.value)
    rs.innerText = "계산결과: " + result;
}