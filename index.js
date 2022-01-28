'use strict';

$(function() {

  let $stacks = $('[data-row]');
  let gameOver = false;
  let $stone = null;

  $stacks.click(movePiece);


  function movePiece() {
    if (gameOver === false) {
      if ($.isEmptyObject($stone)) {
        if (!($(this).children().length === 0)) {
          $stone = $(this).children().last().detach();
        } else{}
      } else{
        if (dropStone($(this), $stone)) {
          $stone = null;
        }
      } checkForWin();
    } else {}
  }

  function dropStone($stack, $stone) {
    if (isLegal($stack, $stone)) {
      $stack.append($stone);
      return true;
    }
    else {
      return false;
    }
  }

  function isLegal($stacks, $stone) {
    let $topStone = $stacks.children().last();
    if ( parseInt($stone.attr("data-size"))<parseInt($topStone.attr("data-size")) || $stacks.children().length === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  function checkForWin() {
    if($('[data-row="middle"]').children().length === 4) {
      $('#win').html("You Won!");
      gameOver = true;

    }
  }

});
>>>>>>> checkpoint-1
