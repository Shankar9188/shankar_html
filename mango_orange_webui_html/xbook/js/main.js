
   $(document).ready(function(){
    $('.f-stat-head').click(function(){
      $('.f-stat-head').addClass('active-tab');
      $('.f-head-to-head,.f-head-content,.f-standings-head,.f-timeline-head').removeClass('active-tab');
      $('.stat-content').css('display', 'block');
      $('.f-standings-content').css('display', 'none');
       $('.f-timeline-content').css('display', 'none');
       $('.f-head-content').css('display', 'none');
    });

    $('.f-head-to-head').click(function(){
      $('.f-head-to-head').addClass('active-tab');
      $('.f-stat-head,.f-head-content,.f-standings-head,.f-timeline-head').removeClass('active-tab');
      $('.f-head-content').css('display', 'block');
      $('.stat-content').css('display', 'none');
       $('.f-standings-content').css('display', 'none');
       $('.f-timeline-content').css('display', 'none');
    });

    $('.f-standings-head').click(function(){
      $('.f-standings-head').addClass('active-tab');
      $('.f-stat-head,.f-head-content,.f-head-to-head,.f-timeline-head').removeClass('active-tab');
      $('.f-standings-content').css('display', 'block');
      $('.stat-content').css('display', 'none');
      $('.f-head-content').css('display', 'none');
      $('.f-timeline-content').css('display', 'none');
    });

    $('.f-timeline-head').click(function(){
      $('.f-timeline-head').addClass('active-tab');
      $('.f-stat-head,.f-head-content,.f-head-to-head,.f-standings-head').removeClass('active-tab');
      $('.f-timeline-content').css('display', 'block');
      $('.stat-content').css('display', 'none');
      $('.f-head-content').css('display', 'none');
      $('.f-standings-content').css('display', 'none');
    });
  });

    $(document).ready(function(){
      $('.c-inner-holder .open-keyboard').click(function(){
        $('.c-show-market-bet-desk').css('display', 'block');
        $('.c-show-session-bet-desk').css('display', 'none');
      });

      $('.f-inner-holder .open-keyboard').click(function(){
        $('.f-show-market-bet-desk').css('display', 'block');
        $('.f-show-session-bet-desk').css('display', 'none');
      });

      $('.t-inner-holder .open-keyboard').click(function(){
        $('.t-show-market-bet-desk').css('display', 'block');
        $('.t-show-session-bet-desk').css('display', 'none');
      });
   });

    $(document).ready(function(){
      $('.c-inner-holder .open-keyboard-session').click(function(){
        $('.c-show-session-bet-desk').css('display', 'block');
        $('.c-show-market-bet-desk').css('display', 'none');
      });

      $('.f-inner-holder .open-keyboard-session').click(function(){
        $('.f-show-session-bet-desk').css('display', 'block');
        $('.f-show-market-bet-desk').css('display', 'none');
      });

      $('.t-inner-holder .open-keyboard-session').click(function(){
        $('.t-show-session-bet-desk').css('display', 'block');
        $('.t-show-market-bet-desk').css('display', 'none');
      });
   })


