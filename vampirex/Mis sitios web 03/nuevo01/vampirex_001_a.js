/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img3={max:1,pos:0};
	Img3[0]=new Image();Img3[0].src='images/vampirex001001.jpg';
	Img3[1]=new Image();Img3[1].src='images/vampirex001002.jpg';
	Img5={max:1,pos:0};
	Img5[0]=new Image();Img5[0].src='images/vampirex001003.jpg';
	Img5[1]=new Image();Img5[1].src='images/vampirex001004.jpg';
	Img7={max:1,pos:0};
	Img7[0]=new Image();Img7[0].src='images/vampirex001005.jpg';
	Img7[1]=new Image();Img7[1].src='images/vampirex001006.jpg';
	Img9={max:1,pos:0};
	Img9[0]=new Image();Img9[0].src='images/vampirex001007.jpg';
	Img9[1]=new Image();Img9[1].src='images/vampirex001008.jpg';
	Img12={max:1,pos:0};
	Img12[0]=new Image();Img12[0].src='images/vampirex001010.jpg';
	Img12[1]=new Image();Img12[1].src='images/vampirex001011.jpg';
	Img14={max:1,pos:0};
	Img14[0]=new Image();Img14[0].src='images/vampirex001012.jpg';
	Img14[1]=new Image();Img14[1].src='images/vampirex001013.jpg';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'m3\').src':(IE)?'m3.src':'document.e3.document.m3.src';
	IDP[2]=(V5)?'document.getElementById(\'m5\').src':(IE)?'m5.src':'document.e5.document.m5.src';
	IDP[3]=(V5)?'document.getElementById(\'m7\').src':(IE)?'m7.src':'document.e7.document.m7.src';
	IDP[4]=(V5)?'document.getElementById(\'m9\').src':(IE)?'m9.src':'document.e9.document.m9.src';
	IDP[5]=(V5)?'document.getElementById(\'m12\').src':(IE)?'m12.src':'document.e12.document.m12.src';
	IDP[6]=(V5)?'document.getElementById(\'m14\').src':(IE)?'m14.src':'document.e14.document.m14.src';
	IDP[7]=(V5)?'document.getElementById(\'e2\').style.visibility':(IE)?'e2.style.visibility':'document.e2.visibility';
	IDP[8]=(V5)?'document.getElementById(\'e1\').style.visibility':(IE)?'e1.style.visibility':'document.e1.visibility';
	isOvr=1;
	if(IE) e2.style.filter='alpha(opacity=0) dropshadow(color=#008080,offx=3,offy=3)';
	if(IE||V5) window.setTimeout(IDP[7]+"='visible'",1000);else document.e2.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e2.filters.alpha.opacity",10,100,10,0,100,-1,-1,-1)',1000);
	if(IE) e1.style.filter='alpha(opacity=0) dropshadow(color=#ffffff,offx=1,offy=1)';
	if(IE||V5) window.setTimeout(IDP[8]+"='visible'",2000);else document.e1.visibility='visible';
	if(IE) window.setTimeout('DoAlpha("e1.filters.alpha.opacity",5,100,5,0,100,-1,-1,-1)',2000);
}


/*--- EndOfFile ---*/
