var tempo=new Number();tempo=60*17;var qtdestoque=164;function startCountdown(){if((tempo-1)>=0){var min=parseInt(tempo/60);var seg=tempo%60;if(min<10){min="0"+min;min=min.substr(0,2);}
if(seg<10){seg="0"+seg;}
$('.minutoscontador').html(min);$('.segundocontador').html(seg);tempo--;setTimeout('startCountdown()',1000);}else{}}
function removeestoque(){if(qtdestoque>0){$('.quantidadeestoque').html(qtdestoque);qtdestoque--;}else{qtdestoque=165;}
setTimeout('removeestoque()',32050);}