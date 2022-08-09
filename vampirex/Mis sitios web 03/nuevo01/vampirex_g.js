/*--- Avanquest WebEasy Document Script ---*/

IE=(navigator.appName.indexOf('Microsoft') >= 0);
NS=(navigator.appName.indexOf('Netscape') >= 0);
SF=(navigator.appName.indexOf('Safari') >= 0);
FF=(navigator.userAgent.indexOf('Firefox') >= 0);
OP=(navigator.userAgent.indexOf('Opera') >= 0);
GK=(navigator.userAgent.indexOf('Gecko') >= 0);
V4=(parseInt(navigator.appVersion) >= 4);
if((V5=navigator.appVersion.indexOf('MSIE '))<0) V5=-5;
V5=(parseInt(navigator.appVersion.charAt(V5+5))>=5);
MAC=(navigator.userAgent.indexOf('Mac')!=-1);


IDP={}; IDP[0]=0;
isOvr=0;

function DoRoute( obj,tpt,pos,ids,loop,delay)
{	var dx,dy,dd,tm;
	if((pos+2) > IDP[tpt].x.length )
	{	if(!loop)
		{	IDP[obj].left= IDP[tpt].x[pos];
			IDP[obj].top  = IDP[tpt].y[pos];
			if((IDP[tpt].x[pos]==IDP.bw)||(IDP[tpt].y[pos]==IDP.bd))
			{	IDP[obj].visibility='hidden';
				IDP[obj].left=0;
				IDP[obj].top =0;
			}
			return;
		}
		pos=0;
	}
	tm=delay;
	dx=IDP[tpt].x[pos+1]-IDP[tpt].x[pos];
	dy=IDP[tpt].y[pos+1]-IDP[tpt].y[pos];
	dd=Math.abs((Math.abs(dx) > Math.abs(dy))?dx:dy);
	if(dd)
	{	if(ids < dd)
		{	if((dd-ids) < (IDP[tpt].s/2))
			{	IDP[obj].left= IDP[tpt].x[pos+1];
				IDP[obj].top = IDP[tpt].y[pos+1];
				ids=dd;
			}else
			{	IDP[obj].left=(0.5+IDP[tpt].x[pos]+ids*(dx/dd) );
				IDP[obj].top =(0.5+IDP[tpt].y[pos]+ids*(dy/dd) );
			}
			ids+=IDP[tpt].s;
		}else
		{	ids-=dd;  pos++;  tm=0;
		}
	}else
	{	pos++;	tm=0;
	}
	window.setTimeout('DoRoute('+obj+','+tpt+','+pos+','+ids+','+loop+','+delay+')',tm);
	return;
}

function OnWeOver(snd,txc,txv,img,imv,ref,flag)
{	if(!isOvr) return;
	if(!V4) return;
	if(typeof(IDP.my.location.href)!='string') return;
	if(img && imv)
	{	if(flag)
		{	if(ref)
			{	imv.pos=1;
				if(IDP.my.location.href.lastIndexOf(ref) >= 0) imv.pos=imv.max;
				--imv.pos;
			}
			if(++imv.pos > imv.max) imv.pos=(imv.max)?1:0;
			eval(img+'="'+imv[imv.pos].src+'"');
		}else
		{	eval( img+'="'+imv[0].src+'"' );
		}
	}
	if(txc)
	{	img=txv;
		if(flag)
		{	img=document.vlinkColor;
			if(ref && (IDP.my.location.href.lastIndexOf(ref) < 0)) img=document.linkColor;
		}
		eval(txc+'="'+img+'"');
	}
}

function DoAlpha(obj,val,max,step,sunk,rise,hold,fall,loop)
{	var tm;
	if(val >= max)
	{	eval(obj+'='+max);
		if(fall < 0) return;
		tm=(sunk)?loop:hold;
		if(tm < 0) return;
		val=max;
		step=-step;
	}else
	if(val <= 0)
	{	eval(obj+'=0');
		if(rise < 0) return;
		tm=(sunk)?hold:loop;
		if(tm < 0) return;
		val=0;
		step=-step;
	}else
	{	tm=(step > 0)?rise:fall;
		if(tm <= 0 ) val=(step > 0)?max:0;
		eval(obj+'='+val);
	}
	window.setTimeout('DoAlpha("'+obj+'",'+(val+step)+','+max+','+step+','+sunk+','+rise+','+hold+','+fall+','+loop+')',tm);
}


/*--- EndOfFile ---*/
