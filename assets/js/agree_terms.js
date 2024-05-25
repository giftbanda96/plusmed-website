$(document).ready(function(){
    
    $('#reg_btn').click(function(){
        
        
        $('.col_agreement').fadeOut(500, function(){
            
            $('.col_main_form').show();
               
        });
        
    });
    
    $('#terms_and_condi_check').on('change', function(){
         
         if(this.checked == true){
             
             $('#reg_btn').attr("disabled", false);
            
             
         } else {
             
             $('#reg_btn').attr("disabled", true);
         }
         
  });
    
});