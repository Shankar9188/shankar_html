
	// *****split js start ******
	$(document).ready(function(){
	$('.split-row').mousemove(function(event){
      var _divLength = $('.split__right').width();
        // console.log(_divLength);
        if(_divLength <= 1100){
          $('.table-container').addClass('table-content');
        } else if(_divLength > 1100){
          $('.table-container').removeClass('table-content');
        }
      });
	});



	$(document).ready(function(){
	$('.split-row').mousemove(function(event){
      var _divLength = $('.split__right').width();
        // console.log(_divLength);
        if(_divLength <= 700){
          $('.main-table').addClass('table-block');
           $('.table-container').removeClass('table-content');
          $('.cols-3 td').removeClass('w-33');
        } else if(_divLength > 700){
          $('.main-table').removeClass('table-block');
          $('.cols-3 td').addClass('w-33');
        }
      });
	});



	$(document).ready(function(){
	Split(['.split__left', '.split__right'], {
          sizes: [100, 0],
      });
	});

	 $(document).ready(function() {
	     var adjust_size = function() {
	       $('.split__left').width($(window).width());
	     };
	     adjust_size();
	     $('.split__left').resize(adjust_size);
	 });



// *****split js end ******

	$(document).ready(function(){
	$('.nav-menu').on('click', function () {
	     $(this).find('.active-content').toggleClass('hide');
	 })
	});


   $(document).ready(function(){
	$('.gutter').mousemove(function(event){
	    var _divLength = $('.split__left').width();
	      console.log(_divLength);
	      if(_divLength < 750){
	      	 $('.show-data-head').removeClass('hide');
	        $('.r-head , .r-data').addClass('hide');
	      } else if(_divLength >= 750){
	      	$('.show-data-head').addClass('hide');
	        $('.r-head , .r-data').removeClass('hide');

	      }
	    });
	});

	 $(document).ready(function(){
	  $('.close_agent_detl').click(function(){
	    $('.r-head , .r-data').removeClass('hide');
	    $('.show-data-head').addClass('hide');
	    $('.show-data-head').removeClass('block-modal')
	  })
	});

	$(document).ready(function(){
	  $('.close_user_detl').click(function(){
	    $('.r-head , .r-data').removeClass('hide');
	    $('.show-data-head').addClass('hide');
	    $('.show-data-head').removeClass('block-modal')
	  })
	});


	 $(document).ready(function(){
	    $('.show-data i').on('click', function(){
	        $('.show-data').removeClass('block-modal');
	        $(this).parent().addClass('block-modal');
	    });
	    });

	  $(document).ready(function(){
	    $( ".show-data i" ).dblclick(function() {
	      $(this).parent().removeClass('block-modal');
	    });
	  });

		// $(document).ready(function(){
		//  $( ".show-data i" ).click(function() {
		// 	 if ($('.show-data').hasClass('block-modal')){
		// 		 $('.show-data').removeClass('block-modal');
		// 	 } else {
 		// 	 	$(this).parent().addClass('block-modal');
		// 	 }
		//  });
	 // });


// =========open details js start========

  $(document).ready(function(){
    $('.parnt-class').click( function(){
        if ( $('.d-right').hasClass('hide') ) {
            $('.parnt-class').removeClass('hidden');
        } else {
           $('.d-right').hasClass('')
            $('.parnt-class').addClass('hidden');
        }
    });

    $('.close_agent_detl , .cancel_sec').click(function(){
      $('.parnt-class').removeClass('hidden')
    });

    $('.close_user_detl , .cancel_sec').click(function(){
      $('.parnt-class').removeClass('hidden')
    })
  });

// =========open details js end========



	$(document).ready(function(){
	  $('.open-edit-sec').click(function(){
	  	$('.stake-limit-container').addClass('hide');
	    $('.edit-sec').removeClass('hide');

	  })
	});

	$(document).ready(function(){
	  $('.swich-button').click(function(){
	  	$('.stake-limit-container').removeClass('hide');
	    $('.edit-sec').addClass('hide');
	  })
	});



	$(document).ready(function(){
	  $('.open-edit-sec').click(function(){
	  	$('.inner-details-sec').addClass('hide');
	    $('.edit-sec').removeClass('hide');
	  })
	});

	$(document).ready(function(){
	  $('.swich-button').click(function(){
	  	$('.inner-details-sec').removeClass('hide');
	    $('.edit-sec').addClass('hide');
	  })
	});

// =============open edit sec js start===========
	  $(document).ready(function(){
	    $('.opn-edit-sec').click(function(){
	      $('.edit-box').removeClass('hide');
	      $('.details-container, .parnt-class').addClass('hidden');
	    });
	  });

	   $(document).ready(function(){
        $('.edit-cancel').click(function(){
          $('.split__left').css('width', '100%');
          $('.split__left').css('max-width', 'inherit')
          $('.split__right , .split__bar').addClass('hide');
          $('.agent-company').addClass('hide');
          $('.gutter').css('display', 'none');
          $('.edit-box').addClass('hide');
		      $('.details-container, .parnt-class').removeClass('hidden');
				});
      });
// =============open edit sec js end===========  themesetting theme_btn



$(document).ready(function(){
	$('.opn-create-sec').click(function(){
		$('.split__left').css('width', '50%');
		$('.split__left').css('max-width', '70%');
		$('.split__right , .split__bar').removeClass('hide');
		$('.gutter').css('display', 'block');
		$('.create-new-container').removeClass('hide');
		$('.details-container').addClass('hide');
	});
});

 $(document).ready(function(){
		$('.cancel_sec').click(function(){
			$('.split__left').css('width', '100%');
			$('.split__left').css('max-width', 'inherit')
			$('.split__right , .split__bar').addClass('hide');
			$('.agent-company').addClass('hide');
			$('.gutter').css('display', 'none');
			$('.create-new-container').addClass('hide');
			$('.details-container').removeClass('hide');
		});
	});
