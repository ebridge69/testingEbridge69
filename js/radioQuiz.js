$("#open-modal").click(function(){

   var q1 = document.getElementById('f-option');
  var q2 = document.getElementById('s-option');
  var q3 = document.getElementById('t-option');
  var correctAnswer = document.getElementById('j-option');

  if (q1.checked == true) {
    $('.modal-wrong').toggleClass('show-modal');

  }else if(q2.checked==true){
    $('.modal-wrong').toggleClass('show-modal');
  }else if(q3.checked==true){
    $('.modal-wrong').toggleClass('show-modal');
  }else if(correctAnswer.checked==true){
    $('.modal__container').toggleClass('show-modal');
    // openModal();
    // swal ("Nayswannn 👏", "You're such a cool person", "success")
    // window.location.href = "1.2.3.html";
  }else {
    swal ("Oooops!", "It looks like you didn't select any options yet 🤔", "warning")
  }
});




const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))


function closeModalWrong(){
    const modalContainer = document.getElementById('modal-wrong')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModalWrong))