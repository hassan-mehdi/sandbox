(function($){
	var doran_logo = Snap('#svg');
	var d_segment = doran_logo.select('#d_segment');

	doran_logo.attr({
		fill: '#f00'
	});

	var d_segment_matrix = new Snap.Matrix();
		d_segment_matrix.scale(0.95,0.95);
		d_segment_matrix.translate(50,20);
		d_segment_matrix.rotate(320); 

	function bubbleRotate(){
		d_segment.stop().animate({transform: 'r-365, 0, 0'}, 1000, mina.easeinout, function(){
			d_segment.animate({transform: 'r0, 0, 0'}, 1000, mina.easeinout, function(){
				bubbleRotate();
			});
		});
	};

	bubbleRotate();
})(jQuery);