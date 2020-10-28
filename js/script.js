$('.list-item').click(function(){
  var $answer = $(this).find('.answer-text');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
  } else {
    $answer.addClass('open');
    $answer.slideDown();
  }
})