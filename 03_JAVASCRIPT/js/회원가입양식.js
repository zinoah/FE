// 아이디 체크
const id = document.getElementById("id");
id.addEventListener("keyup", function () {
  const idcheck = document.getElementById("idcheck");
  const regEx = /[a-z0-9]{5,}/;

  if (regEx.test(id.value)) {
    idcheck.innerText = "사용가능한 아이디입니다.";
    idcheck.classList.add("right");
    idcheck.classList.remove("wrong");
  } else {
    idcheck.innerText = "사용불가능한 아이디입니다.";
    idcheck.classList.add("wrong");
    idcheck.classList.remove("right");
  }
});

// 비밀번호 체크
const pw = document.getElementById("pw");
pw.addEventListener("keyup", function () {
  const pwcheck = document.getElementById("pwcheck");
  const regEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  if (regEx.test(pw.value)) {
    pwcheck.innerText = "사용가능한 비밀번호입니다.";
    pwcheck.classList.add("right");
    pwcheck.classList.remove("wrong");
  } else {
    pwcheck.innerText = "사용불가능한 비밀번호입니다.";
    pwcheck.classList.add("wrong");
    pwcheck.classList.remove("right");
  }
});

// 비밀번호 더블 체크
const pw2 = document.getElementById("pw2");
pw2.addEventListener("keyup", function () {
  const pwcheck2 = document.getElementById("pwcheck2");
  const regEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  if (regEx.test(pw.value)) {
    pwcheck2.innerText = "사용가능한 비밀번호입니다.";
    pwcheck2.classList.add("right");
    pwcheck2.classList.remove("wrong");
    if (pw.value == pw2.value) {
      pwcheck2.innerText = "비밀번호가 일치합니다.";
      pwcheck2.classList.add("right");
      pwcheck2.classList.remove("wrong");
    } else {
      pwcheck2.innerText = "비밀번호가 일치하지않습니다.";
      pwcheck2.classList.add("wrong");
      pwcheck2.classList.remove("right");
    }
  } else {
    pwcheck2.innerText = "사용불가능한 비밀번호입니다.";
    pwcheck2.classList.add("wrong");
    pwcheck2.classList.remove("right");
  }
});

//이름체크

const uname = document.getElementById("uname");
uname.addEventListener("keyup", function () {
  const namecheck = document.getElementById("namecheck");
  const regEx = /[가-힣]{2,}/;

  if (regEx.test(uname.value)) {
    namecheck.innerText = "사용가능한 이름입니다.";
    namecheck.classList.add("right");
    namecheck.classList.remove("wrong");
  } else {
    namecheck.innerText = "사용불가능한 이름입니다.";
    namecheck.classList.add("wrong");
    namecheck.classList.remove("right");
  }
});

// 전화번호 체크

const phone = document.getElementById("phone");
phone.addEventListener("keyup", function () {
  const phonecheck = document.getElementById("phonecheck");
  const regEx = /^010[0-9]{8}/;

  if (regEx.test(phone.value)) {
    phonecheck.innerText = "사용가능한 번호입니다.";
    phonecheck.classList.add("right");
    phonecheck.classList.remove("wrong");
  } else {
    phonecheck.innerText = "사용불가능한 번호입니다.";
    phonecheck.classList.add("wrong");
    phonecheck.classList.remove("right");
  }
});

// 주민번호 체크
const idnum = document.getElementById("idnum");
const idnum2 = document.getElementById("idnum2");
idnum.addEventListener("keyup", function () {
  const idnumcheck = document.getElementById("idnumcheck");
  const regEx = /^[0-9]{1,6}$/;
  if (!regEx.test(idnum.value)) {
    idnumcheck.innerText = "잘못 입력하셨습니다.";
    idnumcheck.classList.add("wrong");
  } else {
    idnumcheck.innerText = "";
  }
});

// 이메일 체크
const email = document.getElementById("email");
email.addEventListener("keyup", function () {
  const emailcheck = document.getElementById("emailcheck");
  const regEx =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  if (regEx.test(email.value)) {
    emailcheck.innerText = "사용가능한 이메일입니다.";
    emailcheck.classList.add("right");
    emailcheck.classList.remove("wrong");
  } else {
    emailcheck.innerText = "사용불가능한 이메일입니다.";
    emailcheck.classList.add("wrong");
    emailcheck.classList.remove("right");
  }
});

// button submit
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {});
