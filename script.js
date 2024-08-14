var element = $(".loader");
var wid = 1;
var color = ['#FF9933','#000080','#128807'];
function f() {
          widpercent = wid+"%";
   element.width(widpercent);
   colortext = wid%3;
  $(".LoadText>span").html(widpercent).css("color",color[colortext]);
    wid++;
    if( wid <= 100 ){
        setTimeout( f, 100 );
    }
   else{  
      $(".loader").hide(600);
      $(".LoadText>span").html("Happy Independence day");  $(".LoadText").width($(".LoadText>span").width());
$(".LoadText").css("margin-top","300px");
  $(".LoadText>span").css("color","#FFF");   
  $("body").css("background","url('http://www.hdwallpapersnews.com/wp-content/uploads/2015/02/indian_flag_wallpaper-cricket_world_cup.jpg')").delay(1000);
      
$("body").css("background","url('http://webneel.com/wallpaper/sites/default/files/images/08-2013/18-india-independence-day-wallpaper.preview.jpg')").delay(1000);
$("body").css("background-size","cover");
   }

}
f();