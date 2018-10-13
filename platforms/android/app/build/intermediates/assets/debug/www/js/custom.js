$(document).ready(function(){

    var token = localStorage.getItem("token");
    if(!token){
        $("#include").load('include/header-without-login.html', function(){
            $('.sidenav').sidenav();
            $('.dropdown-trigger').dropdown({constrainWidth: false });
            $('select').formSelect();
            $('.tabs').tabs();
        });
    } else {
        $("#include").load('include/header.html', function(){
            $('.sidenav').sidenav();
            $('.dropdown-trigger').dropdown({constrainWidth: false });
            $('select').formSelect();
            $('.tabs').tabs();
        });
    }

    $('#feed_filter').hide();


    $(".switch").find("input[type=checkbox]").on("change",function() {
        var status = $(this).prop('checked');
        if(status == true){
            $('#feed_filter').show(200);
        } else {
            $('#feed_filter').hide(200);
        }

    });







});


function insertView(blogId) {
    var token = localStorage.getItem("token");
    var status = 1;
    if(!token) {
        token = localStorage.getItem("withoutLoginTokem");
        status = 0;
    }

    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "http://192.168.0.101:5000/blogVisit",
        data: JSON.stringify({token: token, status: status, blogId: blogId}),
        type: "POST",
    });

}










