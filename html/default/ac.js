function fE(e){
	if(e.preventDefault)e.preventDefault();e.returnValue=false;e.cancelBubble=true;
	if(e.stopPropagation)e.stopPropagation();return false;
}
function iWN(e,i,c,t,obj){answer=false;te=e;while(te && !answer){if((te.id &&(te.id==i))||(te.className &&(te.className==i+"Class"))||(!t && c && te.className &&(te.className==c))||(!t && c && te.className &&(te.className.indexOf(c)!=-1))||(t && te.tagName &&(te.tagName.toLowerCase()==t))||(obj &&(te==obj))){answer=te;} else {te=te.parentNode;}}return te;}
function gE(event){return(event ? event : window.event);}
function gEE(e){return(e.srcElement ? e.srcElement:(e.target ? e.target : e.currentTarget));}
function fEPosX(obj){curleft=0;if(obj.offsetParent){while(obj.offsetParent){curleft +=obj.offsetLeft;obj=obj.offsetParent;}}else if(obj.x)curleft +=obj.x;return curleft;}
function fEPosY(obj){curtop=0;if(obj.offsetParent){while(obj.offsetParent){curtop +=obj.offsetTop;obj=obj.offsetParent;}}else if(obj.y)curtop +=obj.y;return curtop;}
function handleKeyPress(event){e=gE(event);eL=gEE(e);upEl=iWN(eL,null,"ACtype",null,null);kc=e["keyCode"];if(siw &&((kc==13)||(kc==9))){siw.selected=true;if(siw.isSafari)siw.inputBox.blur();siw.inputBox.focus();siw.inputBox.value=siw.inputBox.value.replace(/[ \r\n\t\f\s]+$/gi,' ');hideSIF();} else if(upEl &&(kc !=38)&&(kc !=40)&&(kc !=37)&&(kc !=39)&&(kc !=13)&&(kc !=27)){if(!siw ||(siw && !siw.selected)){procSI(upEl);}} else if(siw && siw.inputBox){siw.inputBox.focus();}}
function handleKeyDown(event){e=gE(event);eL=gEE(e);if(siw &&(kc=e["keyCode"])){if(kc==40){siw.selected=true;fE(e);if(siw.isGecko)siw.inputBox.blur();sNSIMI();} else if(kc==38){siw.selected=true;fE(e);if(siw.isGecko)siw.inputBox.blur();sPSIMI();} else if((kc==13)||(kc==9)){siw.selected=true;atcurSIM();fE(e);} else if(kc==27){hideSIF();fE(e);} else {siw.selected=false;}}}
function handleFocus(event){e=gE(event);eL=gEE(e);if(focEl=iWN(eL,null,"ACtype",null,null)){if(!siw ||(siw && !siw.selected))procSI(focEl);}}
function handleBlur(event){e=gE(event);eL=gEE(e);if(blurEl=iWN(eL,null,"ACtype",null,null)){if(siw && !siw.selected)hideSIF();}}
function handleClick(event){e2=gE(event);eL2=gEE(e2);if(siw && siw.selected){selectFromMouseClick();}}
function handleMouseOver(event){e=gE(event);eL=gEE(e);if(siw &&(mEl=iWN(eL,null,"mcit",null,null))){siw.selected=true;selectFromMouseOver(mEl);} else if(iWN(eL,null,"siwCredit",null,null)){siw.selected=true;}else if(siw){siw.selected=false;}}
function showSIF(){if(!siw.floater.style.display ||(siw.floater.style.display=="none")){if(!siw.customFloater){x=fEPosX(siw.inputBox);y=fEPosY(siw.inputBox)+ siw.inputBox.offsetHeight;if(!siw.isGecko && !siw.isWinIE)x +=8;if(!siw.isGecko && !siw.isWinIE)y +=10;siw.floater.style.left=x;siw.floater.style.top=y;} else { }siw.floater.style.display="block";siw.floater.style.visibility="visible";}}
function hideSIF(){if(siw){siw.floater.style.display="none";siw.floater.style.visibility="hidden";siw=null;}}
function procSI(inputBox){if(!siw)siw=new smartInputWindow();siw.inputBox=inputBox;classData=inputBox.className.split(" ");siwDirectives=null;for(i=0;(!siwDirectives && classData[i]);i++){if(classData[i].indexOf("ACtype")!=-1)siwDirectives=classData[i];}if(siwDirectives &&(siwDirectives.indexOf(":")!=-1)){siw.customFloater=true;newFloaterId=siwDirectives.split(":")[1];siw.floater=document.getElementById(newFloaterId);siw.floaterContent=siw.floater.getElementsByTagName("div")[0];}sSID();if(siw.mCl &&(siw.mCl.length > 0))sSIMI(0);content=gSIBC();if(content){mdSIBC(content);showSIF();} else hideSIF();}
function sIM(cleanValue, value){this.cleanValue=cleanValue;this.value=value;this.isSelected=false;}
function simplify(s){return s.toLowerCase().replace(/^[ \s\f\t\n\r]+/,'').replace(/[ \s\f\t\n\r]+$/,'');}
function getUITM(s){a=s;fields=s.split(",");if(fields.length > 0)a=fields[fields.length - 1];return a;}
function getUIB(){s=siw.inputBox.value;a=s;if((lastComma=s.lastIndexOf(","))!=-1){a=a.replace(/^(.*\,[ \r\n\t\f\s]*).*$/i,'$1');}else a="";return a;}
function runMatch(uI, standalone){uI=simplify(uI);uifc=uI.charAt(0).toLowerCase();showAll=(uifc==' '?1:0);if(uifc=='"')uifc=(n=uI.charAt(1))? n.toLowerCase(): "z";if(standalone)uI=uifc;if(siw)siw.mCl=new Array();ptr=collection;if(siw && siw.rvCl &&(siw.rvCl.length > 0)&& siw.lastUserInput &&(uI.indexOf(siw.lastUserInput)==0)){ptr=siw.rvCl;} else if(cIndex[uI] &&(cIndex[uI].length > 0)){ptr=cIndex[uI];} else if(cIndex[uifc] &&(cIndex[uifc].length > 0)){ptr=cIndex[uifc];} else if(siw &&(uI.length==1)&&(!cIndex[uifc])){siw.buildIndex=true;} else if(siw){siw.buildIndex=false;}tmpcl=new Array();re1m=new RegExp("^([ \"\>\<\-]*)("+uI.replace(/\./,'\\.')+")","i");re2m=new RegExp("([ \"\>\<\-]+)("+uI.replace(/\./,'\\.')+")","i");re1=new RegExp("^([ \"\}\{\-]*)("+uI.replace(/\./,'\\.')+")","gi");re2=new RegExp("([ \"\}\{\-]+)("+uI.replace(/\./,'\\.')+")","gi");for(i=0,j=0;(i<ptr.length);i++){displayMatches=((!standalone)&&(j < siw.MAX_MATCHES));entry=ptr[i];mEntry=simplify(entry);if(showAll){tmpcl[j]=entry;j++;}else if(!standalone &&(mEntry.indexOf(uI)==0)){uI=uI.replace(/\>/gi,'\\}').replace(/\< ?/gi,'\\{');re=new RegExp("(" + uI + ")","i");if(displayMatches){siw.mCl[j]=new sIM(entry, mEntry.replace(/\>/gi,'}').replace(/\< ?/gi,'{').replace(re,"<b>$1</b>"));}tmpcl[j]=entry;j++;} else if(mEntry.match(re1m)|| mEntry.match(re2m)){if(!standalone && displayMatches){siw.mCl[j]=new sIM(entry, mEntry.replace(/\>/gi,'}').replace(/\</gi,'{').replace(re1,"$1<b>$2</b>").replace(re2,"$1<b>$2</b>"));}tmpcl[j]=entry;j++;}}if(siw){siw.lastUserInput=uI;siw.rvCl=tmpcl.join(",").split(",");cIndex[uI]=tmpcl.join(",").split(",");}if(standalone || siw.buildIndex){cIndex[uifc]=tmpcl.join(",").split(",");if(siw)siw.buildIndex=false;}}
function sSID(){if(siw){ouI=siw.inputBox.value;ouI=getUITM(ouI);uI=ouI.toLowerCase().replace(/[\r\n\t\f\s]+/gi,' ').replace(/ +/gi,' ').replace(/\\/gi,'').replace(/\[/gi,'').replace(/\(/gi,'').replace(/\./gi,'\.').replace(/\?/gi,'');if(uI &&(uI !="")&&(uI !='"')){runMatch(uI);}else {siw.mCl=null;}}}
function gSIBC(){a=null;if(siw && siw.mCl &&(siw.mCl.length > 0)){a='';for(i=0;i < siw.mCl.length;i++){selectedString=siw.mCl[i].isSelected ? ' slipit' : '';a +='<p class="mcit' + selectedString + '">' + siw.mCl[i].value.replace(/\{ */gi,"&lt;").replace(/\} */gi,"&gt;")+ '</p>';}}return a;}
function mdSIBC(content){siw.floaterContent.innerHTML='<div id="sinRs">' + content + '</div>';siw.matchListDisplay=document.getElementById("sinRs");}
function selectFromMouseOver(o){currentIndex=gCurSSIT();if(currentIndex !=null)dSSIMI(currentIndex);newIndex=gIfE(o);sSIMI(newIndex);mdSIBC(gSIBC());}function selectFromMouseClick(){atcurSIM();siw.inputBox.focus();hideSIF();}function gIfE(o){index=0;while(o=o.previousSibling){index++;}return index;}function gCurSSIT(){answer=null;for(i=0;((i < siw.mCl.length)&& !answer);i++){if(siw.mCl[i].isSelected)answer=i;}return answer;}function sSIMI(index){siw.mCl[index].isSelected=true;}function dSSIMI(index){siw.mCl[index].isSelected=false;}function sNSIMI(){currentIndex=gCurSSIT();if(currentIndex !=null){dSSIMI(currentIndex);if((currentIndex + 1)< siw.mCl.length)sSIMI(currentIndex + 1);else sSIMI(0);} else {sSIMI(0);}mdSIBC(gSIBC());}function sPSIMI(){currentIndex=gCurSSIT();if(currentIndex !=null){dSSIMI(currentIndex);if((currentIndex - 1)>=0)sSIMI(currentIndex - 1);else sSIMI(siw.mCl.length - 1);} else {sSIMI(siw.mCl.length - 1);}mdSIBC(gSIBC());}function atcurSIM(){baseValue=getUIB();if((selIndex=gCurSSIT())!=null){addedValue=siw.mCl[selIndex].cleanValue;theString=(baseValue ? baseValue : "")+ addedValue + ",";siw.inputBox.value=theString;runMatch(addedValue, true);}}function smartInputWindow(){this.customFloater=false;this.floater=document.getElementById("sipF");this.floaterContent=document.getElementById("sipFC");this.slipit=null;this.MAX_MATCHES=15;this.isGecko=(navigator.userAgent.indexOf("Gecko/200")!=-1);this.isSafari=(navigator.userAgent.indexOf("Safari")!=-1);this.isWinIE=((navigator.userAgent.indexOf("Win")!=-1)&&(navigator.userAgent.indexOf("MSIE")!=-1));}
function regSIL(){
	inputs=document.getElementsByTagName("input");
	texts=document.getElementsByTagName("textarea");
	allinputs=new Array();z=0;y=0;
	while(inputs[z]){allinputs[z]=inputs[z];z++;}
	while(texts[y]){allinputs[z]=texts[y];z++;y++;}
	for(i=0;i < allinputs.length;i++){
		if((c=allinputs[i].className)&&(c=="ACtype")){
			allinputs[i].setAttribute("autocomplete","OFF");
			allinputs[i].onfocus=handleFocus;
			allinputs[i].onblur=handleBlur;
			allinputs[i].onkeydown=handleKeyDown;allinputs[i].onkeyup=handleKeyPress;
		}
	}
}
siw=null;
if(document.addEventListener){
	document.addEventListener("keydown", handleKeyDown, false);
	document.addEventListener("keyup", handleKeyPress, false);
	document.addEventListener("mouseup", handleClick, false);
	document.addEventListener("mouseover", handleMouseOver, false);
} else {
	document.onkeydown=handleKeyDown;
	document.onkeyup=handleKeyPress;
	document.onmouseup=handleClick;
	document.onmouseover=handleMouseOver;
}
regSIL();
document.write('<table id="sipF" class="floater" cellpadding="0" cellspacing="0"><tr><td id="sipFC" nowrap="nowrap">'+'<\/td><\/tr><\/table>');
for(x=0;x<collection.length;x++){collection[x]=collection[x].replace(/\,/gi,'');}
cIndex=new Array();
