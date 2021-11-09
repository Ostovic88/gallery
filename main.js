var current=document.getElementById('current');
current.style.height='400px';
var pictures=document.getElementsByClassName('thumb');
for(var i=0; i<pictures.length;i++) {
    pictures[i].addEventListener('click', display);
}
function display(){
    var image=this.getAttribute('src');
    current.setAttribute('src', image);   
}