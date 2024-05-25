function capitalizeFirst(string){
  var firstCha = string.charAt(0).toUpperCase();  
  var lowered = string.toLowerCase();
  var sub = lowered.substr(1);
    
  return firstCha + sub;  
    
}

function capitalizeEveryFirst(InString){
  
  new_str = InString.toLowerCase().replace(/\b[a-z]/g, function(string) {
    return string.toUpperCase();
  });
    
  return new_str;  
    
}

function dobFix(string){
    
    var data = string.split('-');
    var y = data[0];
    var m = data[1];
    var d = data[2];
    
    return d + "-" + m + "-"+ y;
}