/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	if(IE) e5.style.filter='revealtrans(transition=9,duration=1.00)';
	if(IE) window.setTimeout('DoTrans(e5,999,-1,-1)',1000);
	else { if(V5) document.getElementById('e5').style.visibility='visible'; else document.e5.visibility='visible'; }
}


/*--- EndOfFile ---*/
