/*--- Avanquest WebEasy External Script ---*/

/* -------------------------------------------- */
/* Embed Adobe Flash SWF File                   */
/* -------------------------------------------- */


function weAddFlash(url,dmx,dmy,ply,lop,qua,sca,mnu,bgc)
{
    document.write('<object type="application/x-shockwave-flash"');
    document.write(' data="'+url+'"');
    document.write(' width="'+dmx+'" height="'+dmy+'">');
    document.write('<param name="movie" value="'+url+'">');
    document.write('<param name="play" value="'+ply+'">');
    document.write('<param name="loop" value="'+lop+'">');
    document.write('<param name="quality" value="'+qua+'">');
    document.write('<param name="scale" value="'+sca+'">');
    document.write('<param name="menu" value="'+mnu+'">');
    document.write('<param name="bgcolor" value="'+bgc+'">');
    document.write('<embed pluginspage="http://www.macromedia.com/go/getflashplayer"');
    document.write(' type="application/x-shockwave-flash"');
    document.write(' src="'+url+'"');
    document.write(' width="'+dmx+'"');
    document.write(' height="'+dmy+'"');
    document.write(' play="'+ply+'"');
    document.write(' loop="'+lop+'"');	
    document.write(' quality="'+qua+'"');	
    document.write(' scale="'+sca+'"');	
    document.write(' menu="'+mnu+'"');	
    document.write(' bgcolor="'+bgc+'">');
    document.write('<a href="http://www.macromedia.com/downloads/" target="_blank">');
    document.write('Plugins not found,</a>&nbsp;<A href="'+url+'" target="_blank">try</a>');
    document.write('</embed>');
    document.writeln('</object>');
}




/*--- EndOfFile ---*/
