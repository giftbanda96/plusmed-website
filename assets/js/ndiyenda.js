var done = false;
$(document).ready(function(){
    
    $('.submit-button-ndiyenda').click(function(){
   
        var name_input_field = capitalizeEveryFirst($('#name-input-field').val().trim());
        var age_input_field = $('#age-input-field').val().trim();
        var gender_input_field = $('#dropdown-gender-input-field').val().trim();
        var school_input_field = $('#school-input-field').val().trim();
        var grade_input_field = $('#grade-input-field').val().trim();
        var parent_input_field = capitalizeEveryFirst($('#parent-input-field').val().trim());
        var email_input_field = $('#email-input-field').val().trim().toLowerCase();
        var phone_input_field = $('#phone-input-field').val().trim().toLowerCase();
        var message = $('#message-input-field').val().trim();
        var application_date = $('#date-input-field').val().trim();

        if (name_input_field == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Enter Child's Name!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (age_input_field == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Enter Child's Age!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (gender_input_field == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Select Child's Gender!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (school_input_field == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Enter Child's School Name!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (grade_input_field == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Enter Child's Grade/Class!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (parent_input_field == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Enter Parent/Guardian Name!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (phone_input_field == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Enter Parent/Guardian Phone Number!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (message == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Describe the Condition of the Child!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (application_date == ""){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Enter Application Date!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else if (application_date.length < 10){
            $('#info_logo_div').addClass('warning');
            $('#dialog_info_para').text("Enter a valid Application Date!");
            $('#alert_dialog_container').fadeIn(500);
                
        } else {
            $('#dialog_ok_btn_div').hide();
            $('#info_logo_div').addClass('uploading');
            $('#dialog_info_para').text("Submitting...");
            $('#alert_dialog_container').fadeIn(500);
        
            $.ajax({
                url:"outreach.php",
                type:"POST",
                data:{
                    "name": name_input_field,
                    "age": age_input_field,
                    "gender": gender_input_field,
                    "school": school_input_field,
                    "grade": grade_input_field,
                    "parent": parent_input_field,
                    "email": email_input_field,
                    "phone": phone_input_field,
                    "message": message,
                    "date": application_date
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
                        $('#dialog_info_para').text("Internal Error, try again later!");
                        $('#dialog_ok_btn_div').fadeIn();
                        console.log(data);
                    }
                }
            });
        }
    });
});

function capitalizeEveryFirst(str) {
    return str.replace(/\b\w/g, function(l){ return l.toUpperCase() });
}
