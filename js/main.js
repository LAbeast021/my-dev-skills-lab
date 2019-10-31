$("button").on("click",function(evt){
    let $input = $("input").val();
 let $newSkill = $(`<div class="skills"><button type="button" class="btn btn-info">X</button><h4>${$input}</h4></div>`)
$(".result").append($newSkill);
$("input").val("")
})
$("div").on("click","button",function(){
    console.log(this)
    $(this).closest("div.skills").fadeOut(500,function(){
        $(this).remove();
    })
})