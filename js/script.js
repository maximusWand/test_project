
let str = document.querySelector('#str_temp');
let expr = document.querySelector('#expression');
let flag = document.querySelector('#flag');
let zam = document.querySelector('#zamen');
let res = document.querySelector('#res');
let p = document.querySelectorAll('p');

expr.addEventListener('keyup', repl);
zam.addEventListener('keyup', repl);
flag.addEventListener('keyup', repl);
str.addEventListener('keyup', repl);

function repl() {
   let reg = new RegExp(expr.value, flag.value);
   res.value = str.value.replace(reg, zam.value);
   //   console.log(reg);
   p[0].innerHTML = "<i>Замена совпавшего:</i><br/>str.<b>replace</b>(/" + expr.value + "/" + flag.value + ", \"" + zam.value + "\")";

   p[1].innerHTML = '<hr><i>Поиск совпадений:</i><br>let reg = new RegExp("' + expr.value + '", "' + flag.value + '"); <br />\
   let arr = reg.<b>exec</b>("' + str.value + '");';
   let arr = reg.exec(str.value);
   if (arr != null) {
      let num = 0;
      for (let a of arr) {
         p[1].innerHTML += '<br>arr[' + num + ']= "' + arr[num] + '"';
         num++;
      }
   }
   else p[1].innerHTML += '<br>Вернёт null';

   p[2].innerHTML = '<hr><i>Проверка соответствия:</i><br>let reg = new RegExp("' + expr.value + '", "' + flag.value + '"); <br />\
   <b>' + reg.test(str.value) + '</b> = reg.<b>test</b>("' + str.value + '");';

   let rez = str.value.search(reg);
   p[3].innerHTML = '<hr><i>Поиск первого совпадения:</i><br>let reg = new RegExp("' + expr.value + '", "' + flag.value + '"); <br />\
   <b>' + rez + '</b> = str.value.<b>search</b>(reg);';
   if (rez == -1) p[3].innerHTML += '<br/>не найдено';

   p[4].innerHTML = '<hr><i>Поиск совпадений:</i><br>let reg = new RegExp("' + expr.value + '", "' + flag.value + '"); <br />\
   let arr = str.value.<b>match</b>(reg);';
   arr = str.value.match(reg);
   if (arr) {
      let num = 0;
      for (let a of arr) {
         p[4].innerHTML += '<br>arr[' + num + ']= "' + arr[num] + '"';
         num++;
      }
      if (arr.length == 1) p[4].innerHTML += '<br/>Индекс: ' + arr.index;
   }
   else p[4].innerHTML += '<br>Вернёт null';

   p[5].innerHTML = '<hr><i>Разбить строку:</i><br>let reg = new RegExp("' + expr.value + '", "' + flag.value + '"); <br />\
   let arr = str.value.<b>split</b>(reg);';
   arr = str.value.split(reg);
   if (arr) {
      let num = 0;
      for (let a of arr) {
         p[5].innerHTML += '<br>arr[' + num + ']= "' + arr[num] + '"';
         num++;
      }
   }
   else p[5].innerHTML += '<br>Вернёт null';

}
