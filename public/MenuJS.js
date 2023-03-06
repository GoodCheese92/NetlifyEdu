let upperCheck = false;
$(function (){
    // upperMenu 동작 감지
    $(".date").click(function (){
        let Check = $(this).parent().find(".subMenu").is(":visible");
        // if(Check){
        //     alert("참");
        // } else{
        //     alert("거짓");
        // }
        let dateHtml = $(this).html();
        // alert(dateHtml);
        if(Check){
            $("#"+dateHtml).find(".subMenu").css("display", "none");
        } else {
            $("#"+dateHtml).find(".subMenu").css("display", "block");
        }
        upperCheck = !upperCheck;
    });
let exCheck = false;
    $(".exMenu").click(function (){
        let Check = $(this).parent().find(".contents").is(":visible");
        // if(Check){
        //   alert("참");
        // } else{
        //   alert("거짓");
        // }
        if(Check){
            $(this).parent().find(".contents").css("display", "none");
        } else {
            $(this).parent().find(".contents").css("display", "block");
        }
        exCheck = false;
    });

});
