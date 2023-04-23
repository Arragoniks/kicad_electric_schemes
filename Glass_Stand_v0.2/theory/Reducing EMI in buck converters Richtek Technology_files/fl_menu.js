//config
$float_speed=1500; //milliseconds
$float_easing="easeOutQuint";
$menu_fade_speed=500; //milliseconds
$closed_menu_opacity=0.75;
 
//cache vars
$fl_menu=$("#fl_menu");
$fl_menu_menu=$("#fl_menu .menu");
$fl_menu_label=$("#fl_menu .label");
 
$(window).load(function() {

    menuLeft=$('#post_body').position().left+500;
    menuPosition=$('#article_title_btm').position().top-10;

    $fl_menu.css("left",menuLeft);
    FloatMenu();
    $fl_menu.hover(
        function(){ //mouse over
            $fl_menu_label.fadeTo($menu_fade_speed, 1);
            $fl_menu_menu.fadeIn($menu_fade_speed);
        },
        function(){ //mouse out
            $fl_menu_label.fadeTo($menu_fade_speed, $closed_menu_opacity);
            $fl_menu_menu.fadeOut($menu_fade_speed);
        }
    );
});
 
$(window).scroll(function () {
    FloatMenu();
});

$(window).resize(function () {
    FloatMenu();
});

 
function FloatMenu(){
    var scrollAmount = $(document).scrollTop();
    try {
        if (menuPosition == null || menuPosition == undefined)
            menuPosition = $('#article_title_btm').position().top - 10;
    } catch (e) {
        menuPosition = $('#article_title_btm').position().top - 10;
    }
    var newPosition=menuPosition+scrollAmount;
    menuLeft = $('#post_body').position().right + 100;
    menuLeft = $(window).width()-160;
    $fl_menu.css("left",menuLeft);

    if($(window).height()<$fl_menu.height()+$fl_menu_menu.height()){
        if(scrollAmount>254){
            $fl_menu.css("top",0);
        }else{
            $fl_menu.css("top",menuPosition);
        }
    	
        

    } else {
        if(scrollAmount>254){
            $fl_menu.stop().animate({top: scrollAmount+5}, $float_speed, $float_easing);    	}
        else{
            $fl_menu.stop().animate({top: newPosition}, $float_speed, $float_easing);
        }
        
    }
}
