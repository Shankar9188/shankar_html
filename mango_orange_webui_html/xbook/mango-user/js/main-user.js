// jQuery Ready Start
// $(document).ready(function(){
//  $('.grp-chat-box').scrollTop($('.grp-chat-box')[0].scrollHeight);
//  $('.group-enter').keypress(
//     function(e){
//       if (e.keyCode == 13) {
//           e.preventDefault();
//           var msg = $(this).val();
//          $(this).val('');
//          if(msg!='')

//          var username = 'John Snow';
//          var time = '3:00 PM';
//          var _htmlMsg = '<div class="chat-a-user chat-user">You | <small>' + time + '</small></div><div class="chat-msg chat-a">'+ msg +'</div>';

//          $(_htmlMsg).insertBefore('.grp_msg_push');
//          $('.grp-chat-box').scrollTop($('.grp-chat-box')[0].scrollHeight);
//         }
//     });

//  $('.tiproom-enter').keypress(
//     function(e){
//       if (e.keyCode == 13) {
//           e.preventDefault();
//           var msg = $(this).val();
//          $(this).val('');
//          if(msg!='')

//          var username = 'John Snow';
//          var time = '3:00 PM';
//          var _htmlMsg = '<div class="chat-a-user chat-user">You | <small>' + time + '</small></div><div class="chat-msg chat-a">'+ msg +'</div>';

//          $(_htmlMsg).insertBefore('.tiproom_msg_push');
//          $('.tip-chat-box').scrollTop($('.tip-chat-box')[0].scrollHeight);
//         }
//     });

// });
// jQuery Ready End




$(document).ready(function(){
  $('.heading-row').click(function(){
    $(this).parent('.inner-holder').toggleClass('markets-show').toggleClass('market-hide');
    $(this).parent('.inner-holder').find('.data-row').slideToggle(300);
    $(this).parent('.inner-holder').find('.match-winner-header').slideToggle(300);
    $(this).parent('.inner-holder').find('.box-background').slideToggle(300);
  });
});


// var iScrollPos = 158;

$(window).scroll(function () {
  var window_width = $(document).width();
  if(window_width > 768){
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > 148) {
    $('.betting-box').addClass('r-fixed');

      if( $(".empty-bet").is(":visible") ){
        $('.fill-div').addClass('fill-empty');
        $('.fill-div').removeClass('fill-placed');
      }else{
        $('.fill-div').addClass('fill-placed');
        $('.fill-div').removeClass('fill-empty');
      }
    }
    else if(iCurScrollPos < iScrollPos)  {
      $('.betting-box').removeClass('r-fixed');
      if( $(".empty-bet").is(":visible") ){
        $('.fill-div').removeClass('fill-empty');
      }else{
        $('.fill-div').removeClass('fill-placed');
      }
    }
    iScrollPos = iCurScrollPos;
  }
});

// Progress Bar Initialize
$(function() {
  $(".meter > span").each(function() {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate({
        width: $(this).data("origWidth")
      }, 1200);
  });
});

// Bet value
var fixedBets = [100, 500, 1000, 2000, 5000, 10000, 25000, 50000, 75000, 100000];
function addValue(num) {
  var _temp = parseInt(document.getElementById("bet-hidden").value);
  _temp = _temp + num;
  if (_temp >= 0 && _temp < fixedBets.length) {
    document.getElementById("bet-hidden").value = _temp;
    returnValue(fixedBets[_temp]);
  }
}

// Clear Bet
function clearBet() {
  $('#return-value').text('0.00');
  document.getElementById("bet-hidden").value = -1;
  document.getElementById("coin_countity_bet").value = 0;

  $('#even-return-value').text('0.00');
  document.getElementById("coin_countity_even_odd").value = 0;

  $('#session-return-value').text('0.00');
  document.getElementById("coin_countity_session").value = 0;
}

// Close Bet
function closeBet() {
  $('#return-value').text('0.00');
  document.getElementById("bet-hidden").value = -1;
  document.getElementById("coin_countity_bet").value = 0;

  $('#even-return-value').text('0.00');
  document.getElementById("coin_countity_even_odd").value = 0;

  $('#session-return-value').text('0.00');
  document.getElementById("coin_countity_even_odd").value = 0;
  var window_width = $(document).width();
  if(window_width > 768){
    $('.placed-bet').slideUp(300);
    $('.empty-bet').slideDown(300);
  }
  else if(window_width <= 768){
    // $('.right-panel').removeClass('right-panel-show');
    // $('.middle-panel').removeClass('overlay');
    $('.placed-bet').slideUp(300);
    $('.empty-bet').slideDown(300);
  }
}

function closeModel() {
  $('#modal-1').removeClass('md-show');
}

// Show Bet
function showBet() {
  var window_width = $(document).width();
  if(window_width > 768){
      $('.placed-bet').slideDown(300);
      $('.empty-bet').slideUp(300);
  }
  else if(window_width <= 768){
    $('.right-panel').addClass('right-panel-show');
    $('.middle-panel').addClass('overlay');
    $('.placed-bet').show();
    $('.empty-bet').hide();
  }
}

// Show mobile side navbar
function showMobMenu() {
  $('body').addClass('overlay');
  $('.mob-nav').addClass('show-mob-menu');
}
function hideMobMenu() {
  $('body').removeClass('overlay');
  $('.mob-nav').removeClass('show-mob-menu');
}


// Show Chat box
// function showChat() {
//  var window_width = $(document).width();
//  if(window_width > 768){
//    $('.group-chat-input').focus();
//  }
//  if(window_width < 768){
//    $('body').addClass('no-scroll');
//  }
//  $('.grp-chat-box').scrollTop($('.grp-chat-box')[0].scrollHeight);
//  $('.chat-subscribe-main-div').addClass('show-chat');

// }
// function hideChat() {
//  $('.chat-subscribe-main-div').removeClass('show-chat');
//  $('body').removeClass('no-scroll');
//  hideMobMenu();
// }

// Send Message on click send button in mobile view
// function sendMsg() {
//  var msg = $('.group-enter').val();
//  $('.group-enter').val('');
//  if(msg!=''){
//      var username = 'John Snow';
//      var time = '3:00 PM';
//      var _htmlMsg = '<div class="chat-a-user chat-user">You | <small>' + time + '</small></div><div class="chat-msg chat-a">'+ msg +'</div>';

//      $(_htmlMsg).insertBefore('.grp_msg_push');
//      $('.grp-chat-box').scrollTop($('.grp-chat-box')[0].scrollHeight);
//  }
// }
// function sendTipMsg() {
//  var msg = $('.tiproom-enter').val();
//  $('.tiproom-enter').val('');
//  if(msg!=''){
//      var username = 'John Snow';
//      var time = '3:00 PM';
//      var _htmlMsg = '<div class="chat-a-user chat-user">You | <small>' + time + '</small></div><div class="chat-msg chat-a">'+ msg +'</div>';

//      $(_htmlMsg).insertBefore('.tiproom_msg_push');
//      $('.tip-chat-box').scrollTop($('.tip-chat-box')[0].scrollHeight);
//  }
// }


// Swich Chat Categories
// function chatCategory(chat_type) {

//  if(chat_type == 'bc_chat'){
//    $('.bc-chat').addClass('active');
//    $('.tiproom-chat').removeClass('active');
//    $('.tiproom-chat-panel').addClass('hide');
//    $('.bc-chat-panel').removeClass('hide');
//    $('.tiproom-chat-list').addClass('hide');
//  }
//  else if(chat_type == 'tiproom_chat'){
//    $('.tiproom-chat').addClass('active');
//    $('.bc-chat').removeClass('active');
//    $('.tiproom-chat-panel').addClass('hide');
//    $('.tiproom-chat-list').removeClass('hide');
//    $('.bc-chat-panel').addClass('hide');
//  }

// }


// Open Tiproom Userchat Panel
// function showTipRoomChat() {
//  $('.tiproom-chat-panel').removeClass('hide');
//  $('.tiproom-chat-list').addClass('hide');
//  $('.bc-chat-panel').addClass('hide');
//  $('.tip-chat-box').scrollTop($('.tip-chat-box')[0].scrollHeight);
// }



// Sign UP and Sign IN
// function signUp(){
//  $('.sign-up').removeClass('hide-form');
//  $('.sign-in').addClass('hide-form');
//  $(this).addClass('b-active');
//  $('.l-btn').addClass('b-active');
//  $('.r-btn').removeClass('b-active');
// }
// function signIn(){
//  $('.sign-in').removeClass('hide-form');
//  $('.sign-up').addClass('hide-form');
//  $(this).addClass('b-active');
//  $('.r-btn').addClass('b-active');
//  $('.l-btn').removeClass('b-active');
// }


// Toggle Winner
// function toggleWinner() {
//  // $('.win-outer').slideToggle(300);
//  $('.win-outer').toggleClass('win-anim');
// }
// function showWinners() {
//  $('.win-outer').addClass('show-win');
// }
// // Hide Mobile Winner
// function hideMobWinner() {
//  var win_width = $(document).width();
//  if(win_width < 769){
//    $('.win-outer').removeClass('show-win');
//    hideMobMenu();
//  }
// }

// Winner View change
// function viewChange(){
//  if( $('.winner-view').hasClass('grid-view') ){
//    $('.winner-view').removeClass('grid-view');
//    // $('.view-text').text("Grid View");
//    $('.view').attr('src', 'img/page/grid.svg');
//  } else {
//    $('.winner-view').addClass('grid-view');
//    // $('.view-text').text("List View");
//    $('.view').attr('src', 'img/page/list.svg');
//  }
// }

// Add loader
function addLoader() {
  $('.load-more').addClass('load-spin');
  setTimeout(
    function(){
      $('.load-more').removeClass('load-spin');
    }, 3000);
}

// Preview Image
// $(document).ready(function(){
//  $("#image-upload").change(function() {
//    readURL(this);
//  });
//  $('.user-profile').click(function(){
//    $(this).toggleClass('ar-d').toggleClass('ar-u');
//    $('.dropdown-inner').toggleClass('hideDropdown');
//  });
// });

// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       $('#image-preview').attr('src', e.target.result);
//     }
//     reader.readAsDataURL(input.files[0]);
//   }
// }

function addSuperValue(_superValue){
  returnValue(_superValue);
}

function slNumBtn(_numValue){
  var odd_value = parseFloat($( "#odds" ).text());
  var odd_value_type = $( "#odds_desc" ).text();
  var market_type = $( "#market-nm" ).text();
  var session_type = document.getElementById("session_heroic_market_type").value;
  var session_rate = document.getElementById("session_rate").value -1;
  var even_odd_market_type = document.getElementById("even_odd_heroic_market_type").value;
  var even_odd_rate  = parseFloat(document.getElementById("even_odd_odds_val").value);
  var bet_amount = 0;
  
  if(market_type == "match_winner" || market_type == "custom_market")
  {  
    var _temp = document.getElementById("coin_countity_bet").value;
    _temp = _temp + _numValue;
    document.getElementById("coin_countity_bet").value =  _temp;
    bet_amount = document.getElementById("coin_countity_bet").value; 
    if(isNaN(bet_amount) || bet_amount == ""){
      bet_amount = 0;
    } 
    if(bet_amount >= 0){ 
      if(odd_value_type == "LAGAI")
      { 
        bet_amount = parseFloat(bet_amount);
        bet_amount = bet_amount * odd_value ;
        bet_amount = bet_amount.toFixed(2);
      }
      $('#return-value').text(bet_amount);  
    } 
  }

  if(even_odd_market_type == "even_odd" || even_odd_market_type == "ending_digit")
  {
    var _temp = document.getElementById("coin_countity_even_odd").value;
    _temp = _temp + _numValue;
    document.getElementById("coin_countity_even_odd").value =  _temp;
    bet_amount = document.getElementById("coin_countity_even_odd").value; 
    if(isNaN(bet_amount)|| bet_amount == ""){
      bet_amount = 0;
    } 
    bet_amount = parseFloat(bet_amount); 
    if(bet_amount >= 0){ 
      document.getElementById("coin_countity_even_odd").value = bet_amount;
      bet_amount = parseFloat(bet_amount);      
      bet_amount = bet_amount * even_odd_rate ;
      bet_amount = bet_amount.toFixed(2);
      $('#even-return-value').text(bet_amount); 
    }  
  }
  
  if(session_type == "session")
  {
    var _temp = document.getElementById("coin_countity_session").value;
    _temp = _temp + _numValue;
    document.getElementById("coin_countity_session").value =  _temp;
    bet_amount = parseFloat(document.getElementById("coin_countity_session").value);
    if(isNaN(bet_amount)|| bet_amount == ""){
      bet_amount = 0;
    } 
    if(bet_amount >= 0){ 
      document.getElementById("coin_countity_session").value = bet_amount; 
      bet_amount = parseFloat(bet_amount);      
      bet_amount = bet_amount * session_rate;
      bet_amount = bet_amount.toFixed(2);
      $('#session-return-value').text(bet_amount);  
    }  
  }
}

function num_backspace(){
  var odd_value = parseFloat($( "#odds" ).text());
  var odd_value_type = $( "#odds_desc" ).text();
  var market_type = $( "#market-nm" ).text();
  var session_type = document.getElementById("session_heroic_market_type").value;
  var session_rate = document.getElementById("session_rate").value -1;
  var even_odd_market_type = document.getElementById("even_odd_heroic_market_type").value;
  var even_odd_rate  = parseFloat(document.getElementById("even_odd_odds_val").value);
  var bet_amount = 0;
  
  if(market_type == "match_winner" || market_type == "custom_market")
  {  
    var _num = document.getElementById("coin_countity_bet").value;
    _num = _num.slice(0, -1);
    document.getElementById("coin_countity_bet").value = _num;
    bet_amount = document.getElementById("coin_countity_bet").value; 
    if(isNaN(bet_amount) || bet_amount == ""){
      bet_amount = 0;
    } 
    if(bet_amount >= 0){ 
      if(odd_value_type == "LAGAI")
      { 
        bet_amount = parseFloat(bet_amount);
        bet_amount = bet_amount * odd_value ;
        bet_amount = bet_amount.toFixed(2);
      }
      $('#return-value').text(bet_amount);  
    } 
  }

  if(even_odd_market_type == "even_odd" || even_odd_market_type == "ending_digit")
  {
    var _num = document.getElementById("coin_countity_even_odd").value;
    _num = _num.slice(0, -1);
    document.getElementById("coin_countity_even_odd").value =  _num;
    bet_amount = document.getElementById("coin_countity_even_odd").value; 
    if(isNaN(bet_amount)|| bet_amount == ""){
      bet_amount = 0;
    } 
    bet_amount = parseFloat(bet_amount); 
    if(bet_amount >= 0){ 
      document.getElementById("coin_countity_even_odd").value = bet_amount;
      bet_amount = parseFloat(bet_amount);      
      bet_amount = bet_amount * even_odd_rate ;
      bet_amount = bet_amount.toFixed(2);
      $('#even-return-value').text(bet_amount); 
    }  
  }
  
  if(session_type == "session")
  {
     var _num = document.getElementById("coin_countity_session").value;
    _num = _num.slice(0, -1);
    document.getElementById("coin_countity_session").value =  _num;
    bet_amount = parseFloat(document.getElementById("coin_countity_session").value);
    if(isNaN(bet_amount)|| bet_amount == ""){
      bet_amount = 0;
    } 
    if(bet_amount >= 0){ 
      document.getElementById("coin_countity_session").value = bet_amount; 
      bet_amount = parseFloat(bet_amount);      
      bet_amount = bet_amount * session_rate;
      bet_amount = bet_amount.toFixed(2);
      $('#session-return-value').text(bet_amount);  
    }  
  }
}

function returnValue(value){
  var odd_value = parseFloat($( "#odds" ).text());
  var odd_value_type = $( "#odds_desc" ).text();
  var market_type = $( "#market-nm" ).text();
  var session_type = document.getElementById("session_heroic_market_type").value;
  var session_rate = document.getElementById("session_rate").value -1;
  var even_odd_market_type = document.getElementById("even_odd_heroic_market_type").value;
  var even_odd_rate  = parseFloat(document.getElementById("even_odd_odds_val").value);
  var bet_amount = 0;
  
  if(market_type == "match_winner" || market_type == "custom_market")
  {  
    document.getElementById("coin_countity_bet").value = value;
    bet_amount = document.getElementById("coin_countity_bet").value; 
    if(isNaN(bet_amount) || bet_amount == ""){
      bet_amount = 0;
    } 
    if(bet_amount >= 0){ 
      if(odd_value_type == "LAGAI")
      { 
        bet_amount = parseFloat(bet_amount);
        bet_amount = bet_amount * odd_value ;
        bet_amount = bet_amount.toFixed(2);
      }
      $('#return-value').text(bet_amount);  
    } 
  }

  if(even_odd_market_type == "even_odd" || even_odd_market_type == "ending_digit")
  {
    document.getElementById("coin_countity_even_odd").value = value;
    bet_amount = document.getElementById("coin_countity_even_odd").value; 
    if(isNaN(bet_amount)|| bet_amount == ""){
      bet_amount = 0;
    } 
    bet_amount = parseFloat(bet_amount); 
    if(bet_amount >= 0){ 
      document.getElementById("coin_countity_even_odd").value = bet_amount;
      bet_amount = parseFloat(bet_amount);      
      bet_amount = bet_amount * even_odd_rate ;
      bet_amount = bet_amount.toFixed(2);
      $('#even-return-value').text(bet_amount); 
    }  
  }
  
  if(session_type == "session")
  {
    document.getElementById("coin_countity_session").value = value;
    bet_amount = parseFloat(document.getElementById("coin_countity_session").value);
    if(isNaN(bet_amount)|| bet_amount == ""){
      bet_amount = 0;
    } 
    if(bet_amount >= 0){ 
      document.getElementById("coin_countity_session").value = bet_amount; 
      bet_amount = parseFloat(bet_amount);      
      bet_amount = bet_amount * session_rate;
      bet_amount = bet_amount.toFixed(2);
      $('#session-return-value').text(bet_amount);  
    }  
  }
}


function showMobBets(){
  $('.bets-container').addClass('showBetsContainer');
  hideMobMenu();
}

function hideMobBets(){
  $('.bets-container').removeClass('showBetsContainer');
}