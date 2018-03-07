$(document).ready(function() {
 
    function addIcon (desc) {
                 var src= "images\\weather-icons\\"+desc+".png";
                 $("#wheather-icon").attr("src",src);
             } 
    
    function iconGen(desc) {
        var desc = desc.toLowerCase();
        switch (desc) {
            case 'drizzle':
                addIcon(desc)
                break;
            case 'clouds':
                addIcon(desc)
                break;
            case 'rain':
                addIcon(desc)
                break;
            case 'snow':
                addIcon(desc)
                break;
            case 'clear':
                addIcon(desc)
                break;
            case 'thunderstom':
                addIcon(desc)
                break;
              case 'light intensity drizzle rain':
                desc="drizzle";
                addIcon(desc)
                break;
            default:
                desc = "clouds";
                addIcon(desc);
        }
    }
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var now = new Date();
    var date = format(now.getDate());
    var day = days[now.getDay()];
    var month = format((now.getMonth()+1));
    var year = now.getFullYear();
    
    var hours = now.getHours();
    var minutes = format(now.getMinutes());
    
  
        $("#dater").html("Today is "+day+", "+date+"."+month+"."+year);  
        $("#timer").html(hours + ":"+minutes);
   
    function format (dateToFormat){
        if (dateToFormat<10){
            dateToFormat = "0"+dateToFormat;}
        
         return dateToFormat; 
        }
   
    
    
    
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                 $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude+"", function(json) {
                     
          
            console.log(json);         
                     
            $(".location").html(json.name);
            var temp = json.main.temp; 
            $(".temp").html(temp+" &#186 C");
            $(".wheather-description").html(json.weather[0].description);
            $("#wheather-icon").attr("src",json.weather[0].icon);
            iconGen(json.weather[0].description);
                     
                     $("#unitButton").html("To Fahrenheit"); 
                        $("#unitButton").click(changeUnit);
                            
                        function changeUnit(){
                            var temp = json.main.temp;
                            var unitClass=$("#unitButton").attr("class");
                                if (unitClass=="celsius"){
                                    temp = json.main.temp * 9/5 + 32;
                                    $(".temp").html(temp+" &#186 F");
                                    $("#unitButton").toggleClass("celsius");
                                    $("#unitButton").html("To Celsius"); 
                                }
                                else{
                                    $(".temp").html(json.main.temp+" &#186 C");
                                    $("#unitButton").toggleClass("celsius");
                                    $("#unitButton").html("To Fahrenheit"); 
                                }      
        
                            }
            
                
            
            
                 });
       });
    }   
    
   
});
