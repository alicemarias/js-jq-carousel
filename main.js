// cosa devo fare: cliccando su freccia destra, do la classe active all'immagine
//sucessiva e al tastino tondo sucessivo


$(document).ready(
  // non uso icona di font awesome come classe perchè potrebbe cambiare in futuro
  function(){
    $('.next').click(
      function() {
        immagineSucessiva();
      }
    );

    $('.prev').click(
      function(){
        immaginePrecedente();
      }
    );
  }
);
// la funzione si mette dopo il document ready
// funzione per cambiare immagine con tasto destro e colore tasto
function immagineSucessiva() {
  //variabile immagine
  var immagineCorrente = $('.images img.active');
  //variabile tasto
  var tastoCorrente = $('.nav i.active');

  immagineCorrente.removeClass('active');
  tastoCorrente.removeClass('active');

  if(immagineCorrente.hasClass('last')) {
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
  else{
    immagineCorrente.next('img').addClass('active');
    tastoCorrente.next('i').addClass('active');
  }
}

// funzione per far funzionare tutto anche con tasto sinistro
function immaginePrecedente() {
  var immagineCorrente = $('.images img.active');
  var tastoCorrente = $('.nav i.active');

  immagineCorrente.removeClass('active');
  tastoCorrente.removeClass('active');

  if(immagineCorrente.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  } else {
    immagineCorrente.prev('img').addClass('active');
    tastoCorrente.prev('i').addClass('active');
  }
}
