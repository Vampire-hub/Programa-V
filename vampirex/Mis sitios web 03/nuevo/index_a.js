/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	if(IE) e1.style.filter='revealtrans(transition=9,duration=1.00)';
	if(IE) window.setTimeout('DoTrans(e1,999,-1,-1)',1000);
	else { if(V5) document.getElementById('e1').style.visibility='visible'; else document.e1.visibility='visible'; }
}


/*--- EndOfFile ---*/
