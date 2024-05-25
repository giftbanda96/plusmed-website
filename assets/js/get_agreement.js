$(document).ready(function(){
  
    
     $.post('reg_agreement.html', function(data,status){
         $("#tems_info_container").html(data);
    
    });

    
});
