let str = document.querySelector('#str_temp');
let expr = document.querySelector('#expression');
let flag = document.querySelector('#flag');
let zam = document.querySelector('#zamen');
let res = document.querySelector('#res');
let p = document.querySelector('p');

expr.addEventListener('input', repl);
zam.addEventListener('input', repl);
flag.addEventListener('input', repl);
str.addEventListener('input', repl);


function repl() {
   let reg = new RegExp(expr.value, flag.value);
   res.value = str.value.replace(reg, zam.value);
   //   console.log(reg);
   p.innerText = "str.replace(/" + expr.value + "/" + flag.value + ", \"" + zam.value + "\")";
}
