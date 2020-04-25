$(function(){
  $('.dropdown-btn').hover(
    function() {
      console.log('ok')
      //カーソルが重なった時
      $(this).children('.dropdown').slideDown();
    }, function() {
      //カーソルが離れた時
      $(this).children('.dropdown').slideUp();
    }
  );
});