$('document').ready(function() {
  $("form").submit(function(e) {
    var str = $("form").serialize();
    e.preventDefault()
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".character").empty().append($("input.character").val());
    $(".adverb").empty().append($("input.adverb").val());
    $("#story").show();
    $(':input').val('');
    $("#questions").show();
  });

  $("#play-btn").click(function(e) {
  	e.preventDefault()
    $("#questions").show(); 	
  	$("#story").show();
  });
  $('#mlibs').on('click', function(e){
    e.preventDefault()
    $("#questions").show(); 	
  	$("#calculator").hide();
    $("#story").hide();
    $("#result").hide();
    $("#notresult").hide();
  })
  $('#calc').on('click', function(e){
    e.preventDefault()
    $("#questions").hide(); 	
  	$("#calculator").show();
    $("#story").hide();
    $("#result").hide();
    $("#notresult").hide();
  })

  $('#cook').on('click', function(e){
    e.preventDefault()
    let coook = $(".person").val();
    document.cookie = "user = " + coook + "; expires = Wed, 15 Jun 2022 00:00:00 GMT";
  })

  $('#ntheme').on('click', function(e){
    e.preventDefault()
    const themename = 'dark'
    let vt = localStorage.setItem('theme', themename);
    let gg = localStorage.getItem('theme')
    document.getElementById('gback').className = gg;
    document.getElementById('barcol').className = "navbar navbar-expand-lg bg-" + gg;
    document.getElementById('bbutton').className = "btn btn-" + gg;
  })

  $('#ltheme').on('click', function(e){
    e.preventDefault()
    const themename = 'light'
    let vt = localStorage.setItem('theme', themename);
    let gg = localStorage.getItem('theme')
    document.getElementById('gback').className = gg;
    document.getElementById('barcol').className = "navbar navbar-expand-lg bg-" + gg;
    document.getElementById('bbutton').className = "btn btn-" + gg;
  })

  $('#calcbutton').on('click', function(e){
    e.preventDefault()
    let kbsize = $(".h").val() * $(".w").val() * $(".num").val() / 8 / 1000;
    if(kbsize < 64){
      $(".num").empty().append(kbsize);
      $("#calculator").show();
      $(':input').val('');
      $("#result").show();
      $("#notresult").hide();
    }else{
      $(".num").empty().append(kbsize);
      $("#calculator").show();
      $(':input').val('');
      $("#notresult").show();
      $("#result").hide();
    }
  })


});
let the = localStorage.getItem('theme')

function setTheme(){
  console.log(the)
  document.getElementById('gback').className = the;
  document.getElementById('barcol').className = "navbar navbar-expand-lg bg-" + the;
  document.getElementById('bbutton').className = "btn btn-" + the;
}





