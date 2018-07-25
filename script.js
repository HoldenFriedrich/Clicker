$("img").click(function(){
    var counter = parseInt($("span").html())
    counter++,
    $("span").html(counter)
})

$("button").click(function(){
    var myInput = $("input").val();
    $("ul").append(`<li> ${myInput}
    <button class ="remove">remove</button>
    <button class="edit"> edit </button>
    </li>`)
    $(".remove").click(function(){
        $(this).parent().remove();
    })
})
$("edit").click(function(){
    var revisedText = prompt("New Text:")
    $(this).parent().find(".text").html(revisedText)
})
