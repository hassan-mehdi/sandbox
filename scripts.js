(function($) {
	var s = Snap('#svg')
	,   bubble1 = s.circle(10, 10, 10)
	,   bubble2 = s.circle(70, 20, 15)
	,   bubble3 = s.circle(40, 50, 5);

	var bubble1Matrix = new Snap.Matrix();
		bubble1Matrix.scale(0.95,0.95);
		bubble1Matrix.translate(50,20);
		bubble1Matrix.rotate(320); 

	var bubble1MatrixInverted = bubble1Matrix.invert();


	var bubble2Matrix = new Snap.Matrix();
		bubble2Matrix.scale(0.95,0.95);
		bubble2Matrix.translate(40,20);
		bubble2Matrix.rotate(20); 

	var bubble2MatrixInverted = bubble2Matrix.invert();


	var bubble3Matrix = new Snap.Matrix();
		bubble3Matrix.scale(0.85,0.85);
		bubble3Matrix.translate(50,20);
		bubble3Matrix.rotate(310); 

	var bubble3MatrixInverted = bubble3Matrix.invert();

	var bubbles = s.group(bubble1, bubble2, bubble3);

	bubbles.attr({
		fill: '#f00'
	})

	$(document).ready(function(){
		
		function bubbleRotate(){
			bubbles.stop().animate({transform: 'r-365, 0, 0'}, 10000, mina.backout, function(){
				bubbles.animate({transform: 'r0, 0, 0'}, 10000, mina.backout, function(){
					bubbleRotate();
				});
			});
		};

		bubbleRotate();

		function bubble1Animation(){
			bubble1.animate({transform: bubble1Matrix}, 1000, mina.backout, function(){
				bubble1.animate({transform: bubble1MatrixInverted}, 1000, mina.backout, function(){
					bubble1Animation();
				});
			});
		};

		bubble1Animation();

		function bubble2Animation(){
			bubble2.stop().animate({transform: bubble2Matrix}, 1000, mina.backout, function(){
				bubble2.animate({transform: bubble2MatrixInverted}, 1000, mina.backout, function(){
					bubble2Animation();
				});
			});
		};

		bubble2Animation();

		function bubble3Animation(){
			bubble3.stop().animate({transform: bubble3Matrix}, 1000, mina.backout, function(){
				bubble3.animate({transform: bubble3MatrixInverted}, 1000, mina.backout, function(){
					bubble3Animation();
				});
			});
		};

		bubble3Animation();
	});

})(jQuery);