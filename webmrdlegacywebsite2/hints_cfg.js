var HINTS_CFG = {
	'top'        : 15, // a vertical offset of a hint from mouse pointer
	'left'       : 5, // a horizontal offset of a hint from mouse pointer
	'css'        : 'hintsClass', // a style class name for all hints, TD object
	'show_delay' : 250, // a delay between object mouseover and hint appearing
	'hide_delay' : 3000, // a delay between hint appearing and hint hiding
	'wise'       : true,
	'follow'     : true,
	'z-index'    : 0 // a z-index for all hint layers
},

HINTS_ITEMS = {
	'TT1':wrap("Lixiviaci&oacute;n: Que no se disuelve en agua"), 
	'TT2':wrap("Lixivia: Que no se disuelve en agua"), 
	'TT3':wrap("Tigra Hints Forum"), 
	'TT4':wrap_img("01", "A picture of a tiger"), 
	'TT5':wrap_img("70","A picture of a tiger"), 
	'TT6':wrap_img("20","A picture of a puma"), 
	6:'<table border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr><td><table border="0" cellspacing="1" cellpadding="3"><tr class="row"><td nowrap><b>currentStyle</b></td><td align="center">supported</td></tr><tr class="row"><td nowrap><b>getComputedStyle()</b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>style</b></td><td align="center">supported</td></tr></table></td></tr></table>',
	7:'<table border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr><td><table border="0" cellspacing="1" cellpadding="3"><tr class="row"><td><b>currentStyle</b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>getComputedStyle()</b></td><td align="center">supported</td></tr><tr class="row"><td><b>style</b></td><td align="center">supported</td></tr></table></td></tr></table>',
	8:'<table border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr><td><table border="0" cellspacing="1" cellpadding="3"><tr class="row"><td><b>currentStyle</b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>getComputedStyle()</b></td><td align="center">unsupported</td></tr><tr class="row"><td><b>style</b></td><td align="center">supported</td></tr></table></td></tr></table>',
	9:'<table width="173" border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr class="row"><td><table border="0" bgcolor="#FFFFFF" cellspacing="1" cellpadding="3"><tr class="row"><td><font face="Verdana" size="1"><b>Que no se disuelve en agua</b></font></td></tr></table></td></tr></table>',
	10:'<table width="173" border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr class="row"><td><table border="0" bgcolor="#FFFFFF" cellspacing="1" cellpadding="3"><tr class="row"><td><font face="Verdana" size="1"><b>Que no se disuelve en agua</b></font></td></tr></table></td></tr></table>',
	11:'<table width="173" border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr class="row"><td><table border="0" bgcolor="#FFFFFF" cellspacing="1" cellpadding="3"><tr class="row"><td><font face="Verdana" size="1"><b>El buscador acepta *. Su selecci&oacute;n ser&aacute; buscada como una frase</b></font></td></tr></table></td></tr></table>',
	12:'<table border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr><td><table border="0" cellspacing="1" cellpadding="3"><tr class="row"><td><b>addRule()</b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>deleteRule()</b></td><td align="center">supported</td></tr><tr class="row"><td nowrap><b>insertRule() </b></td><td align="center">supported</td></tr><tr class="row"><td nowrap><b>removeRule()</b></td><td align="center">unsupported</td></tr></table></td></tr></table>',
	13:'<table border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr><td><table border="0" cellspacing="1" cellpadding="3"><tr class="row"><td nowrap><b>createCSS StyleSheet()</b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>createStyleSheet() </b></td><td align="center">supported</td></tr><tr class="row"><td nowrap><b>getOverrideStyle() </b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>getPropertyPriority()</b></td><td align="center">unsupported</td></tr></table></td></tr></table>',
	14:'<table border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr><td><table border="0" cellspacing="1" cellpadding="3"><tr class="row"><td nowrap><b>createCSS StyleSheet() </b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>createStyleSheet() </b></td><td align="center">supported</td></tr><tr class="row"><td nowrap><b>getOverrideStyle() </b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>getPropertyPriority()</b></td><td align="center">supported</td></tr></table></td></tr></table>',
	15:'<table border="1" cellspacing="0" cellpadding="0" bgcolor="#4682B4"><tr><td><table border="0" cellspacing="1" cellpadding="3"><tr class="row"><td nowrap><b>createCSS StyleSheet() </b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>createStyleSheet() </b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>getOverrideStyle() </b></td><td align="center">unsupported</td></tr><tr class="row"><td nowrap><b>getPropertyPriority()</b></td><td align="center">supported</td></tr></table></td></tr></table>',
	16:'Softcomplex Inc. is rapidly growing<br>US/Ukrainian company providing high quality <br>software development and IT consulting services.',
	17:wrap("El buscador acepta * y comandos AND, OR.", true)
};

var myHint = new THints (HINTS_CFG, HINTS_ITEMS);

function wrap (s_, b_ques) {
	return "<table width='150' cellpadding='0' cellspacing='0' border='1' style='-moz-opacity:90%;offX=4,offY=4)'><tr><td rowspan='4'><font color='#000000' size='1'>"+s_+"</td><td></td></tr><tr></td><td></td></tr></table>"
}

function wrap_img (s_file, s_title) {
	return "<table cellpadding=5 bgcolor=white style='border:1px solid #777777'><tr><td><img src='img/k0"+s_file+".JPG' class='picI'></td></tr><tr><td align=center>"+s_title+"</td></tr></table>"
}
