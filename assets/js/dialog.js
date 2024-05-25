$(document).ready(function(){
                  
   $('.dialog_ok_btn').click(function(){
       
       if(done){
           
           $('#alert_dialog_container').fadeOut(500, function(){
               
               location.reload();
               
           });
           
       } else {
           
         $('#alert_dialog_container').fadeOut(500, function(){
           
           $('#dialog_info_para').text("");
           $('#dialog_ok_btn_div').show();
           $('#info_logo_div').removeClass('warning');
           $('#info_logo_div').removeClass('error');
           $('#info_logo_div').removeClass('success');
           $('#info_logo_div').removeClass('uploading');
           
       });
           
       }
       
       
       
   });   
    
});