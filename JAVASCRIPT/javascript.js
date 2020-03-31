$(document).ready(function(){
    $('.photography').siblings().hide()

    $('.selector').click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    selectedClass = $(this).attr("data-rel");
    $('.' + selectedClass).show(300).siblings().hide(300)
    })
})