/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	if(IE) e6.style.filter='revealtrans(transition=9,duration=1.00)';
	if(IE) window.setTimeout('DoTrans(e6,999,-1,-1)',1000);
	else { if(V5) document.getElementById('e6').style.visibility='visible'; else document.e6.visibility='visible'; }
}


/*--- EndOfFile ---*/
