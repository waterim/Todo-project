$("ul").on("click","li", function(){
    $(this).toggleClass("completed")
 });

 $("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
 });

 $("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        let text = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ text+"</li>");
        
    }
 });

 $("#toggle_button").on("click", function(){
    $("input[type='text']").fadeToggle(400);
 });