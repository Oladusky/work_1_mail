$(document).ready(function(){
   

    $('.nav_parent').click( function(){
       $('.nav_parent').removeClass('active');
       $(this).addClass('active');
       return false;
   });
   
   $(document).on('click', '.title_line', function(){
       $(this).next('.modal_line').addClass('active');
       $('body').addClass('hidden');
    });
    
    
     $(document).on('click', '.acc_b', function(){
       $(this).toggleClass('active');
     });
     
      $(document).on('click', '.nmodalclick', function(){
       $('.modalverify').toggleClass('active');
       return false;
     });
   $(document).on('click', '.nmodalclickclose', function(){
       $('.modalverify').toggleClass('active');
       return false;
     });
    
     $(document).on('click', '.closebig', function(){
       $('.modal_line').removeClass('active');
       $('.footer.nones').removeClass('active');
       $('body').removeClass('hidden');
       return false;
    });
    $(document).on('click', '.folder', function(){
                  $('.modal_calend').addClass('active');
                  $('body').addClass('hidden');
       return false;
    });
    
    
     $(document).on('click', '.fst.f1', function(){
                  $('.f1bd').addClass('active');
                  $('body').addClass('hidden');
       return false;
    });
     $(document).on('click', '.fst.f2', function(){
                  $('.f2bd').addClass('active');
                  $('body').addClass('hidden');
       return false;
    });
   
    $('.line_param_input .calendar').click(function(){
                  $('.modal_calend').addClass('active');
                  $('body').addClass('hidden');
              });
              $('.close_clnd').click(function(){
                  $('.modal_calend').removeClass('active');
                  $('body').removeClass('hidden');
              });
    $('.nn1 a.more').click(function(){
                if ($(this).hasClass('active')) {
               $('.hidden_component.nn1').removeClass('active');    
                $(this).text('Раскрыть');
                $(this).removeClass('active');     
                $('.moreu').removeClass('active');
                } else {  
                $('.hidden_component.nn1').addClass('active');    
                $(this).text('Свернуть');
                $(this).addClass('active');
                $('.moreu').addClass('active');
              }
              });
              
              
  $('.nn2 a.more').click(function(){
                if ($(this).hasClass('active')) {
               $('.hidden_component.nn2').removeClass('active');    
                $(this).text('Раскрыть');
                $(this).removeClass('active');     
                $('.moreu').removeClass('active');
                } else {  
                $('.hidden_component.nn2').addClass('active');    
                $(this).text('Свернуть');
                $(this).addClass('active');
                $('.moreu').addClass('active');
              }
              });            
                      /* $('.fixtable').each(function() {

		new FixTable(this);

	}); */
      $('.table.hidd_section tr td, table.hidd_section tr th').click(function(){
             $(this).css('width','10%');
             $('.hidd_section tr th:nth-child(1) div').css('text-indent', '0');
             $('.hidd_section tr th:nth-child(1) div').css('background', 'none');
             $('.hidd_section tr td:nth-child(1) .lin_t_top').css('display', 'block');
             $('.hidd_section tr td:nth-child(1) .h_plus').css('display', 'none');
      });
      
       $('.r_arr').click(function(){
             if ($(this).hasClass('active')) {
               $(this).removeClass('active');
             $('.hidd_section_full tr th:nth-child(1) .r_text').css('display', 'block');
             $('.hidd_section_full tr th:nth-child(1)').css('width', '13%');
             
            
             $('.hidd_section_full tr td:nth-child(1) .lin_t_bot,.hidd_section_full tr td:nth-child(1) .lt5,.hidd_section_full tr td:nth-child(1) .lt1').css('display', 'block');
             $('.hidd_section_full tr td:nth-child(1)').css('width', '13%');
             $('.hidd_section_full tr td:nth-child(1) .h_plus').removeClass('active');
             $('.hidd_section_full tr td:nth-child(1) .lt3').removeClass('active');
             
             } else {
             $(this).addClass('active');
             $('.hidd_section_full tr th:nth-child(1) .r_text').css('display', 'none');
             $('.hidd_section_full tr th:nth-child(1)').css('width', '3%');
             
            
             $('.hidd_section_full tr td:nth-child(1) .lin_t_bot,.hidd_section_full tr td:nth-child(1) .lt5,.hidd_section_full tr td:nth-child(1) .lt1').css('display', 'none');
             $('.hidd_section_full tr td:nth-child(1)').css('width', '3%');
             $('.hidd_section_full tr td:nth-child(1) .h_plus').addClass('active');
             $('.hidd_section_full tr td:nth-child(1) .lt3').addClass('active');
         }
      });
             
    
     
});

  