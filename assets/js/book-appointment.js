var done = false;
$(document).ready(function(){
    
 $('.submit-button').click(function(){
   
     var name_input_field = capitalizeEveryFirst($('#name-input-field').val().trim());
     var email_input_field = $('#email-input-field').val().trim().toLowerCase();
     var phone_input_field = $('#phone-input-field').val().trim().toLowerCase();
     var service = $('#dropdown-service-input-field').val().trim();
     var proposed_date = $('#date-input-field').val().trim();
     var message = $('#message-input-field').val().trim();
     
    if (name_input_field == ""){
         
         $('#info_logo_div').addClass('warning');
         $('#dialog_info_para').text("Enter your Name!");
         $('#alert_dialog_container').fadeIn(500);
                
     } else if (phone_input_field == ""){
         
         $('#info_logo_div').addClass('warning');
         $('#dialog_info_para').text("Enter your Phone Number!");
         $('#alert_dialog_container').fadeIn(500);
                
     } else if (service == ""){
         
         $('#info_logo_div').addClass('warning');
         $('#dialog_info_para').text("Enter Service!");
         $('#alert_dialog_container').fadeIn(500);
                
     } else if (proposed_date == ""){
         
         $('#info_logo_div').addClass('warning');
         $('#dialog_info_para').text("Enter Proposed Date!");
         $('#alert_dialog_container').fadeIn(500);
                
     } else if (proposed_date.length < 10){
         
         $('#info_logo_div').addClass('warning');
         $('#dialog_info_para').text("Enter a valid Proposed Date!");
         $('#alert_dialog_container').fadeIn(500);
                
     } else {
         $('#dialog_ok_btn_div').hide();
         $('#info_logo_div').addClass('uploading');
         $('#dialog_info_para').text("Submitting...");
         $('#alert_dialog_container').fadeIn(500);
        
         $.ajax({
              url:"appointment.php",
              type:"POST",
              data:{
                    "name" : name_input_field,
                    "email" : email_input_field,
                    "phone" : phone_input_field,
                    "service" : service,
                    "date":proposed_date,
                    "message" : message
                   },
              success:function(data){
               
                if(data.trim() == "success"){
                    
                    done = true;
                    
                    $('#info_logo_div').removeClass('uploading');
                    $('#info_logo_div').addClass('success');
                    $('#dialog_info_para').text("Submission Successful");
                    $('#dialog_ok_btn_div').fadeIn();
                    
                } else {
                 
                    $('#info_logo_div').removeClass('uploading');
                    $('#info_logo_div').addClass('error');
                    $('#dialog_info_para').text("internal Error, try again later!");
                    $('#dialog_ok_btn_div').fadeIn();
                    console.log(data);
                    
                }
              }
          });
         
     }
    
     // End IF
     
 }); 
    
});