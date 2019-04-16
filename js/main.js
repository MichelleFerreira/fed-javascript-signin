var elClose = document.getElementById('close');
var elModal = document.getElementById('modal');
var elSignIn = document.getElementById('signin');
var elSubmit = document.getElementById('submit');
var 

elModal.addEventListener('click',function(){
  elModal.style.display = 'block';
})

elClose.addEventListener('click',function(){
  elModal.style.display = 'none';
})
