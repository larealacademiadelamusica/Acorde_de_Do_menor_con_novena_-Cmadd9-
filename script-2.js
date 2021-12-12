var s3G = new Audio(src= '/audio/acorde_de_do_menor_con_novena_cmadd9_up_down.mp3');
var s4D = new Audio(src= '/audio/acorde_de_do_menor_con_novena_cmadd9_down.mp3');
var s5A = new Audio(src= '/audio/acorde_de_do_menor_con_novena_cmadd9_up.mp3');
var s6E = new Audio(src= '/audio/acorde_de_do_menor_con_novena_cmadd9_chord.mp3');

$(document).ready(function() { 
  $("#s3G").click(function() {s3G.play();});
  $("#s4D").click(function() {s4D.play();});
  $("#s5A").click(function() {s5A.play();});
  $("#s6E").click(function() {s6E.play();});

});

// Stop all
// Continuous (until new string chosen)
// Pick (play strings on hover)
// Change tuning