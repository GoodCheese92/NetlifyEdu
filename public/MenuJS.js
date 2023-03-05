let display_date = true;
$(function (){
    // upperMenu 동작 감지
    $(".date").click(function (){
        alert("btn1 클릭됨");
        if(display_date){
            $(".subMenu").css("display", "block");
        } else {
            $(".subMenu").css("display", "none");
        }
        display_date = !display_date;
    });

let display_subMenu = true;
    $(".subMenu").click(function (){
        alert("서브 메뉴 클릭됨")
        if(display_subMenu){
            $(this).children(".contents").css("display", "block");
        } else {
            $(this).children(".contents").css("display", "none");
        }
        display_subMenu = !display_subMenu;
    });

});
