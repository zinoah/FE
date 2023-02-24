const input1 = document.getElementById("num1"); // 요소 추적 O, 값, 속성 추적 x
const input2 = document.getElementById("num2");
const rs = document.getElementById("result")

function calc(btn){
   //op 에는 +,-,*,/,% 중 하나가 전달됨 

   console.log(btn);
   const n1 = Number(num1.value);
   const n2 = Number(num2.value);
   
   const op = btn.innerText; // 클릭된 버튼에 작성된 내용을 얻어옴
                            // + * - / % 

   switch(op){
    case '+' : rs.innerText = n1 + n2; break;
    case '-' : rs.innerText = n1 - n2; break;
    case '*' : rs.innerText = n1 * n2; break;
    case '/' : rs.innerText = n1 / n2; break;
    case '%' : rs.innerText = n1 % n2; break;
    }
}