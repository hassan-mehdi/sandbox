(function($){
	var responsiveDiagram = Snap('#svg');
	var h = responsiveDiagram.select('#h');
	var a1 = responsiveDiagram.select('#a1');
	var s1 = responsiveDiagram.select('#s1');
	var a2 = responsiveDiagram.select('#a2');
	var s2 = responsiveDiagram.select('#s2');
	var n = responsiveDiagram.select('#n');
	var topLogo = responsiveDiagram.group(a1, s1);
	var bottomLogo = responsiveDiagram.group(a2, s2, n);

	topLogo.animate({transform:'s0 20 20'}, 800, mina.backin);
	bottomLogo.animate({transform:'s0 20 20'}, 600, mina.backin);

	$(document).delay(500).queue(function( mobileLogo1 ) {
		h.animate({transform:'s2 0 0'}, 1000, mina.elastic);
		h.animate({transform: 'r360 10 10'}, 1500, mina.elastic);
		h.animate({d:'M19.986,1.123l0.021,24.086c-0.006,0.613-0.315,0.917-0.93,0.91l-5.85-0.056c-0.613-0.007-0.917-0.313-0.91-0.926 l-0.043-8.759l-4.339-0.041l0.042,8.756c-0.006,0.614-0.316,0.916-0.93,0.91l-5.849-0.055c-0.614-0.007-0.917-0.315-0.912-0.929 L0.265,0.934c0.006-0.613,0.316-0.917,0.931-0.911l5.849,0.055c0.613,0.006,0.916,0.316,0.91,0.929l0.054,7.64l4.339,0.042 l-0.053-7.639c0.004-0.613,0.314-0.917,0.929-0.912l5.85,0.057C19.687,0.199,19.992,0.509,19.986,1.123z'}, 1000, mina.elastic);
		mobileLogo1();
	});

})(jQuery);