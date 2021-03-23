$(document).ready(function(){
  $('.opn-sub-detail').click(function(){
    $('.direct-client-details-contain').addClass('hide');
    $('.sub-details-contain , .s-agent').removeClass('hide');
  });

  $('.opn-direct-client-contain').click(function(){
    $('.direct-client-details-contain').removeClass('hide');
    $('.sub-details-contain , .s-agent').addClass('hide');
  });

  $('.opn-direct-agent-detil').click(function(){
    $('.sub-details-contain').addClass('hide');
    $('.agent-details-contain , .d-agent').removeClass('hide');
  });

  $('.opn-sub-details-contain').click(function(){
    $('.sub-details-contain').removeClass('hide');
    $('.agent-details-contain , .d-agent').addClass('hide');
  });

  $('.opn-agent-sub-detl').click(function(){
    $('.agent-details-contain').addClass('hide');
    $('.agent-sub-details-contain , .a-agent').removeClass('hide');
  });

  $('.opn-agent-detailss-contain').click(function(){
    $('.agent-details-contain').removeClass('hide');
    $('.agent-sub-details-contain , .a-agent').addClass('hide');
  });

  $('.opn-inner-agent-detl').click(function(){
    $('.agent-sub-details-contain').addClass('hide');
    $('.inner-agent-details-contain , .d-agent-d').removeClass('hide');
  });

  $('.opn-agent-sub-detl').click(function(){
    $('.inner-agent-details-contain  , .d-agent-d').addClass('hide');
    $('.agent-sub-details-contain').removeClass('hide');
  });

  $('.opn-cient-dtl').click(function(){
    $('.direct-client-details-contain').addClass('hide');
    $('.client-sub-detl-contain').removeClass('hide');
  });
});


$(document).ready(function(){
  $('.opn-cient-dtl').click(function(){
    $('.direct-client-details-contain').addClass('hide');
    $('.client-sub-detl-contain').removeClass('hide');
  });

  $('.direct-client').click(function(){
    $('.direct-client-details-contain').removeClass('hide');
    $('.client-sub-detl-contain').addClass('hide');
  });
});
