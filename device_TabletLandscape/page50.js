if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton51.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 74 74\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(37 37)\" style=\"\">\n	<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(19, 79, 92); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_50_1170\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"74\" height=\"74\" xlink:href=\"images/home.png\" preserveAspectRatio=\"none\" href=\"images/home.png\"></image>\n</pattern>\n<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_50_1170&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(37 37)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 904px; top: 22.000000000000007px; width: 74px; height: 74px; z-index: 2; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj51",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Plastproblemet",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page45.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[904,22.000000000000007,74,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":923,"y":22,"width":76,"height":76},"imgDataNormal":"images/desktop_shape32.png","imgDataOver":"images/desktop_shape32_over.png","imgDataDown":"images/desktop_shape32_down.png","imgDataDisabled":"images/desktop_shape32_disabled.png","svgDataNormal":"<g transform=\"translate(37 37)\" style=\"\">\n\t<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(19, 79, 92); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_50_1170\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"74\" height=\"74\" xlink:href=\"images/home.png\" preserveAspectRatio=\"none\" href=\"images/home.png\"></image>\n</pattern>\n<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_50_1170&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(37 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(37 37)\" style=\"\">\n\t<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(14, 100, 119); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_50_1172\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"74\" height=\"74\" xlink:href=\"images/home.png\" preserveAspectRatio=\"none\" href=\"images/home.png\"></image>\n</pattern>\n<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_50_1172&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(37 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(37 37)\" style=\"\">\n\t<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(21, 59, 67); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_50_1174\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"74\" height=\"74\" xlink:href=\"images/home.png\" preserveAspectRatio=\"none\" href=\"images/home.png\"></image>\n</pattern>\n<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_50_1174&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(37 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(37 37)\" style=\"\">\n\t<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(19, 79, 92); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_50_1176\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"74\" height=\"74\" xlink:href=\"images/home.png\" preserveAspectRatio=\"none\" href=\"images/home.png\"></image>\n</pattern>\n<path d=\"M 18.5 0 L 55.5 0 A 18.5 18.5 0 0 1 74 18.5 L 74 55.5 A 18.5 18.5 0 0 1 55.5 74 L 18.5 74 A 18.5 18.5 0 0 1 0 55.5 L 0 18.5 A 18.5 18.5 0 0 1 18.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_50_1176&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -37) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(37 37)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Plastproblemet","titleValue":"Plastproblemet","fallbackImg":"<img alt=\"Plastproblemet\" title=\"Plastproblemet\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text53.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; border: 1px solid rgb(0, 0, 0); width: 585px; height: 348px; background-color: rgb(19, 79, 92);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 577px; height: 348px;\"><p style=\"text-align: left;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">​</span></p>\n\n<ul style=\"padding-left: 12px; padding-inline-start: 12px;\">\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">Udir (2013). &nbsp;<a id=\"triv1376\" href=\"javascript:hyperlink1376()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Læreplan i naturfag (NAT1003​)</span></u></a>&nbsp;</span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><u><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">​</span></u><span style=\"color: rgb(255, 255, 255);\">FN-sambandet&nbsp;(2019). &nbsp;<a id=\"triv1378\" href=\"javascript:hyperlink1378()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Bærekraftig utvikling</span></u></a>&nbsp;</span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">​</span><span style=\"color: rgb(255, 255, 255);\">FN-sambandet&nbsp;(2019). &nbsp;<a id=\"triv1380\" href=\"javascript:hyperlink1380()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Klimaendringer</span></u></a>&nbsp;</span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">​</span><span style=\"color: rgb(255, 255, 255);\">Faktisk&nbsp;(2018). P<a id=\"triv1382\" href=\"javascript:hyperlink1382()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">apirposer er bedre for miljøet enn plastposer</span></u></a></span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><span style=\"color: rgb(0, 0, 255);\">​</span><span style=\"color: rgb(255, 255, 255);\">Science Advances (2017). <a id=\"triv1384\" href=\"javascript:hyperlink1384()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Production, use, and fate of all plastics ever made</span></u></a></span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">​</span><span style=\"color: rgb(255, 255, 255);\">Aftenposten (2014). <a id=\"triv1386\" href=\"javascript:hyperlink1386()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Plast dreper en million sjøfugl hvert år</span></u></a></span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">​</span><span style=\"color: rgb(255, 255, 255);\">Store Norske Leksikon (2019). <a id=\"triv1390\" href=\"javascript:hyperlink1390()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Plast</span></u></a></span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><u><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">​</span></u><span style=\"color: rgb(255, 255, 255);\">BA&nbsp;(2017). <a id=\"triv1388\" href=\"javascript:hyperlink1388()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Plasthvalen rørte en hel verden</span></u></a></span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><u><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">​</span></u><span style=\"color: rgb(255, 255, 255);\">NRK&nbsp;(2019). <a id=\"triv1392\" href=\"javascript:hyperlink1392()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Nytt forskningssenter skal finne løsningen på mikroplastproblemet</span></u></a></span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif;\"><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">​</span><span style=\"color: rgb(255, 255, 255);\">NRK&nbsp;(2019). <a id=\"triv1394\" href=\"javascript:hyperlink1394()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Vi får i oss minst 50 000 plastpartiklar i året berre gjennom maten</span></u></a></span></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; color: rgb(255, 255, 255); font-family: Arial, sans-serif;\">​NRK&nbsp;(2019). <a id=\"triv1396\" href=\"javascript:hyperlink1396()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Klærne våre fyller havet med mikroplast</span></u></a></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\">​Aftenposten&nbsp;(2019). <a id=\"triv1398\" href=\"javascript:hyperlink1398()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">80 prosent av alt plastavfall havner på fyllinger og i naturen</span></u></a></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\">​Grønt Punkt&nbsp;(2019). <a id=\"triv1400\" href=\"javascript:hyperlink1400()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Ta deg sammen</span></u></a></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\">​NRK&nbsp;(2018). <a id=\"triv1402\" href=\"javascript:hyperlink1402()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Flere millioner tonn plast i havet, men plastposen blir vi ikke kvitt</span></u></a></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\">​Hold Norge Rent (2011). <a id=\"triv1404\" href=\"javascript:hyperlink1404()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Ryddeportalen</span></u></a></span></li>\n	<li style=\"text-align: left; font-size:8pt;\"><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\">NRK&nbsp;(2019). <a id=\"triv1406\" href=\"javascript:hyperlink1406()\" style=\"cursor: pointer;\"><u><span style=\"text-decoration: underline; color:#0000FF;\">Om ett år er disse forbudt</span></u></a></span></li>\n</ul>\n\n<p><span style=\"font-size:12pt;\">&nbsp;</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 158px; width: 587px; height: 356px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj53",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tekst"
	},
	objData:	{"a":[0,32,0,[40,158,587,348]],"rcdOvr":{"res":0},"borderEffect":{"outline":1,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":41,"y":161,"width":599,"height":338},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text54.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 347px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 337px; min-height: 69px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:48pt; color: rgb(255, 255, 255); font-family: Impact, sans-serif;\">KJELDER</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 32px; top: 51px; width: 347px; height: 79px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj54",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Tittel"
	},
	objData:	{"a":[0,32,0,[32,51,347,79]],"rcdOvr":{"res":0},"textShadowEffect":{"opacity":"0.9","depth":8,"color":"#073763","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":52,"width":354,"height":81},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":"#000000","bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	22
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/home.png","images/plastic_ocean.jpg"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/plastic_ocean.jpg"); background-size: 1176px 617px; visibility: hidden;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","url(images/plastic_ocean.jpg)",1200,630,0.9796116504854369];
