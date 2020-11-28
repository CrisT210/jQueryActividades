$(document).ready(function(){
    // .click()
    $(".btn1").click(function(){
        $('#case1').hide();
    });
    // .hide()
    $(".btn2").click(function(){
        $(this).hide();
    });
    // .show()
    $(".btn3").click(function(){
        $('#case3').show();
    });
    // .toggle()
    $(".btn4").click(function(){
        $('#case4').toggle();
    });
    // .slideUP() .slideDown
    $(".btn5").click(function(){
        $("#case5").slideUp();
    });
    $(".btn6").click(function(){
        $("#case5").slideDown();
    });
    // .slideToggle()
    $(".btn7").click(function(){
        $("#case6").slideToggle("slow");
    });
    // .fadeIn() .fadeOut()
    $(".btn8").click(function(){
        $(".div").fadeIn(2000);
    });
    $(".btn9").click(function(){
        $(".div").fadeOut("slow");
    });
    // .addClass()
    $(".btn10").click(function(){
        $(".h").addClass("border");
    });
    // .before() .after()
    $(".btn11").click(function(){
        $(".btn11").before("<div class='alert alert-success alert-dismissible col-6'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Success!</strong> Esta Alerta se inserto Antes .before()</div>");
    });
    $(".btn12").click(function(){
        $(".btn12").after("<div class='alert alert-success alert-dismissible col-sm-6'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Success!</strong> Esta Alerta se inserto despues .after()</div>");
    });
    // .append()
    $(".btn13").click(function(){
        $(".h").append("<div class='h2 color-a mt-2'></div>");
    });
    // .html()
    $(".btn14").click(function(){
        $(".p1").html("<b>Ya Cambio!!!</b>");
    });
    $(".p1").click(function(){
        alert($(".p1").html());
    });
    // .attr()
    $(".btn15").click(function(){
        $(".btn15").attr("value", "Submit");
    });
    $(".b").click(function(){
        alert("Value: "+$(".btn15").attr("value"));
    });
    // .val()
    $(".btn16").click(function(){
        $(".txt").val("Cristian Vásquez");
    });
    $(".b2").click(function(){
          alert($(".txt").val());
    });
    // .text
    $(".btn17").click(function(){
        $(".alert-txt").text("Cambie el texto con .text()");
    });
    $(".alert-txt").click(function(){
        alert($(".alert-txt").text());
    });      
});
