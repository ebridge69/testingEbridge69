// const inputs = document.querySelectorAll('input');

// inputs.forEach(el => {
//   el.addEventListener('blur', e => {
//     if(e.target.value) {
//       e.target.classList.add('dirty');
//     } else {
//       e.target.classList.remove('dirty');
//     }
//   })
// })


var answer = document.getElementById('guess-input').name;

var hint = document.getElementById('guess-input').value;

function guessAnswer() {
  $("button.modal__button").click(function(event) {
    
    var guess = $('#guess-input').val();
    guess = guess.toLowerCase();

    if ( guess == answer) {
     $('.modal__container').toggleClass('show-modal');
    } else {
      $('.modal-wrong').toggleClass('show-modal');
      // $('#wrong').show().fadeOut(1000);
      // $('#guess-input').val(hint);
    }

  });

}

function enterSubmit() {
   $("#guess-input").keyup(function(event){
      if(event.keyCode == 13){
          $("#guess-submit").click();
      }
   });

  guessAnswer();
}

enterSubmit();

if ( $('#correct').css('display') == 'block') {
  alert('hi');
}

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