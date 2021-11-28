

let f = document.querySelector('#tab1');

//f.addEventListener('mouseover', ddd);
f.addEventListener("click", ddd);
f.addEventListener("wheel", ddd);


let d = document.querySelector('#h_1');
d.addEventListener('mouseover', ddd);

console.log(f);

// The function is incomprehensible for what
function ddd() {
   console.log(this.nodeName);
}
