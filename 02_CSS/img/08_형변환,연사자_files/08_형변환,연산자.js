// 형변환 확인하기
const btn1 = document.getElementsByClassName("btn1")[0];
//const btn1 = document.querySelector(".btn");

btn1.addEventListener("click", function () {
  console.log("parseInt('123') : " + parseInt("123"));
  console.log(typeof parseInt("123"));
  console.log("parseInt('3.14') : " + parseInt("3.14"));
  console.log("===========================================");
  console.log("parseFloat('123)': " + parseFloat("123"));
  console.log("parseFloat('3.14') : " + parseFloat("3.14"));
  console.log("===========================================");
  console.log("Number('123)': " + Number("123"));
  console.log("Number('3.14') : " + Number("3.14"));
});
