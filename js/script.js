
list_obj = document.querySelectorAll('p');

for (let a of list_obj) {
   a.addEventListener('click', show_name);
}

function show_name() {

   let a = 'nextElementSibling';


   check_property(this.nextElementSibling, "Нет следующего брата");

}



function check_property(obj_tmp, msg_error) {
   let rez;

   if (obj_tmp) rez = obj_tmp.nodeName + " " + obj_tmp.id;
   else rez = msg_error;
   console.log(rez);

}
