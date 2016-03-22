(function($) {

	var $body = $('body'),
		$boy = $('#boy'),
		$boyEyeLeft = $('#boy-eye-left'),
		$mouth = $('#boy-mouth'),
		$h1 = $('h1'),
		$letter = $('#letter'),
		$letterTop = $('#letter-top'),
		$letterBottom = $('#letter-bottom'),
		$letterSingleTop = $('#letter-single-top'),
		$letterSingleBottom = $('#letter-single-bottom'),
		$table = $('#table'),
		path = [{x: 60, y: 482}, {x:267 , y: 200}, {x: 380, y: 412}],
		$stolz = $('#stolz'),
		$bewerbung = $('#bewerbung'),
		$bewerbungBorder = $('#bewerbung-border'),
		$bewerbungEdge = $('#bewerbung-edge'),
		$bewerbungLine1 = $('#bewerbung-line-1'),
		$bewerbungLine2 = $('#bewerbung-line-2'),
		$bewerbungLine3 = $('#bewerbung-line-3'),
		$medal = $('#medal'),
		$kranz = $('#kranz'),
		$printer = $('#thesis-printer'),
		$paper = $('#paper'),
		$printerLightTopLeft = $('#printer-light-top-left'),
		$printerLightBottomLeft = $('#printer-light-bottom-left'),
		$printerLightTopRight = $('#printer-light-top-right'),
		$printerLightBottomRight = $('#printer-light-bottom-right')
		;

	function clearStage() {
		var clearTl = new TimelineMax();

		clearTl
			.set($boy, {autoAlpha: 0, y: '400px', x: '2000px', scale: 1.7, transformOrigin: 'bottom center'})
			.set($mouth, {scale: 0.4, transformOrigin: 'center center'})
			.set($letter, {x: '600px', y: '600px'})
			.set($letterSingleTop, {x: '153', y: '-32'})
			.set($letterSingleBottom, {x: '22', y: '4'})
			.set($table, {x: '310px', y:'600'})
			.set($stolz, {x: '2000px', y: '325px'})
			.set($bewerbung, {x: '50%', y: '260px'})
			.set($bewerbungBorder, {strokeDasharray: 1573, strokeDashoffset: 1573})
			.set($bewerbungEdge, {strokeDasharray: 216, strokeDashoffset: 216})
			.set([$bewerbungLine1, $bewerbungLine2, $bewerbungLine3], {strokeDasharray: 220, strokeDashoffset: 220})
			.set($medal, {x: '123px', y: '253px'})
			.set($kranz, {x: '-260px', y: '700px'})
			.set($printer, {x: '325px', y: '550px'})
			.set($paper, {y: '+=34px'})
			;

		return clearTl;
	}

	function getIntroTl() {
		var introTl = new TimelineMax();

		introTl
			.set($h1, {y: '-=40px'})
			.to($boy, 0.8, {autoAlpha: 1, x: '700px', ease:Power4.easeInOut})
			.fromTo($h1, 0.5, {x: '-46%', autoAlpha: 0}, {x: '-50%', autoAlpha: 1}, '-=0.4')
			.to($mouth, 0.6, {scale: 1.4, transformOrigin: 'center center', ease:Power4.easeInOut}, '+=0.7')
			.add('zoom-out')
			.to($boy, 1, {x: 0, scale: 1, transformOrigin: 'bottom center', ease:Power4.easeInOut}, 'zoom-out+=1')
			.to($h1, 0.5, {autoAlpha: 0, ease:Power4.easeInOut}, 'zoom-out+=1')
			.set($body, {className: 'is-active'}, 'zoom-out+=1')
			.set($h1, {y: '-=60px', text: 'Ich habe einen Brief'}) // Update heading text
			.add('text-in')
			.to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut}, 'text-in')
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, '+=2.5')
			.set($h1, {y: '-=30px', text: "Mit einem wichtigen Inhalt"})
			.to($letter, 1.2, {autoAlpha: 1, rotation: 720, y: '482px', x: '60px', ease:Power4.easeInOut}, 'text-in+=1')
			//.to($letter, 1, {scale: 1.2, ease:RoughEase.ease.config({template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})})
			.to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut})
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, '+=2.5')
			.set($h1, {y: '-=30px', text: "Diesen möchte ich auf Ihren Tisch legen"});

		return introTl;
	}

	function getStolzTl() {
		var stolzTl = new TimelineMax();

		stolzTl
			.to($table, 1, {autoAlpha: 1, y: '480px', ease:Back.easeInOut})
			.to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut})
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, '+=2.5')
			.set($h1, {y: '-=30px', text: "Schauen Sie doch mal nach..."})
			.to($letter, 3, {rotation: 1440, transformOrigin: 'center center', bezier: {curviness: 0.3, values: path}, ease:SlowMo.ease.config(0.5, 0.7, false)}, '-=2')
			.to($h1, 0.3, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut}, '+=0.5')
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, '+=2.5')
			.set($h1, {y: '-=30px', text: "Meine Thesis-Bewerbung!"})
			.to($stolz, 2, {autoAlpha: 1, x: '306px', ease:Power2.easeInOut}, '-=1');

		return stolzTl;
	}

	function getletterTl() {
		var letterTl = new TimelineMax();

		/*
			lines: 220
			edge: 216
			border: 1573
		*/

		letterTl
			.to($letter, 1, {y: '-=140px', x: '-=108px', scale: 1.8, ease:Power4.easeInOut})
			.add('fade-out-letter')
			.set($letter, {autoAlpha: 0})
			.set($letterSingleTop, {autoAlpha: 1})
			.set($letterSingleBottom, {autoAlpha: 1})
			.to($letterSingleTop, 1, {rotation: 360, y: '-400px', x: '-800px', autoAlpha: 0, ease:Power4.easeInOut}, 'fade-out-letter+=0.2')
			.to($letterSingleBottom, 1, {rotation: 360, y: '400px', x: '800px', autoAlpha: 0, ease:Power4.easeInOut}, 'fade-out-letter+=0.5')
			.add('letter-big')
			.set($bewerbung, {autoAlpha: 1})
			.to($bewerbungBorder, 1.3, {strokeDashoffset: 0}, 'letter-big+=0.2')
			.to($bewerbungEdge, 0.6, {strokeDashoffset: 0}, 'letter-big+=0.9')
			.staggerTo([$bewerbungLine1, $bewerbungLine2, $bewerbungLine3], 1.4, {strokeDashoffset: 0, ease:Power3.easeInOut}, 0.35, 'letter-big+=0.8')
			.to($h1, 0.5, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut}, 'letter-big+=1.2')
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, '+=2.5')
			.set($h1, {y: '-=30px', text: "Denn ich bin sicher..."});

		return letterTl;
	}

	function getGreatProfTl() {
		var greatProfTl = new TimelineMax();

		greatProfTl
			.to($h1, 0.5, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut})
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, '+=2.5')
			.set($h1, {y: '-=30px', text: "Dass Sie eine tolle Betreuerin sind!"})
			.add('sicher')
			.to($medal, 0.8, {autoAlpha: 1, x: '+=50px', ease:Power4.easeInOut}, 'sicher-=1.8')
			.to($kranz, 1.2, {rotation: 400, autoAlpha: 1, x: '40px', y: '480px', ease:Power4.easeInOut}, 'sicher-=0.9')
			.to($h1, 0.5, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut}, 'sicher+=0.4')
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, '+=2.5')
			.set($h1, {y: '-=30px', text: "Damit am Ende..."})
			.addPause();

		return greatProfTl;
	}

	function getClearForThesisTl() {
		var clearForThesisTl = new TimelineMax();

		clearForThesisTl
			.staggerTo([$medal, $kranz, $table, $bewerbung], 1.2, {x: '+=500px', y: '+=500px', autoAlpha: 0, ease:Power4.easeInOut}, 0.25);

		return clearForThesisTl
	}

	function getPrinterTl() {
		var printerTl = new TimelineMax();

		printerTl
			.to($printer, 1, {y: '172px', autoAlpha: 1, ease:Back.easeInOut})
			.add('printer-in')
			.fromTo([$printerLightTopRight, $printerLightTopLeft], 0.5, {fill: '#f8876e'}, {fill: '#73c996', repeat: 10, yoyo: true}, 'printer-in')
			.fromTo([$printerLightBottomRight, $printerLightBottomLeft], 0.5, {fill: '#f8ad43'}, {fill: '#73c996', repeat: 10, yoyo: true}, 'printer-in+=0.3')
			.to($h1, 0.5, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut}, 'printer-in+=0.4')
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, 'printer-in+=2.9')
			.set($h1, {y: '-=30px', text: "Eine coole Thesis rauskommt!"}, 'printer-in+=3')
			.to($paper, 2.5, {y: '-=34px', ease:SteppedEase.config(8)}, 'printer-in+=1.5')
			.to($h1, 0.5, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut}, 'printer-in+=4')
			.to($h1, 0.2, {y: '+=10px', autoAlpha: 0, ease:Power4.easeInOut}, '+=2.5')
			.set($h1, {y: '-=30px', text: "Sagen Sie einfach Ja!"});

		return printerTl;
	}

	function getOutroTl() {
		var outroTl = new TimelineMax();

		outroTl
			.add('final-position')
			.staggerTo([$stolz, $printer], 1.5, {x: '+=1000px', autoAlpha: 0, ease:Power4.easeInOut}, 0.25, 'final-position')
			.to($boy, 1.5, {x: '+=200px', y: '+=80px', scale: 1.6, ease:Power4.easeInOut}, 'final-position+=0.25')
			.to($h1, 0.5, {y: '+=20px', autoAlpha: 1, ease:Power4.easeInOut}, 'final-position+=0.7')
			.fromTo($boyEyeLeft, 0.5, {scale: 0.2, transformOrigin: 'center center'}, {scale: 1, immediateRender: false}, 'final-position+=2.5');

		return outroTl;
	}

	function init() {
		var mainTl = new TimelineMax();

		mainTl
			.add(clearStage())
			.add(getIntroTl(), 'scene-intro')
			.add(getStolzTl(), 'scene-stolz')
			.add(getletterTl(), 'scene-letter')
			.add(getGreatProfTl(), 'scene-great')
			.add(getClearForThesisTl(), 'scene-thesis')
			.add(getPrinterTl(), 'scene-printer')
			.add(getOutroTl(), 'scene-outro');

		// mainTl.seek('scene-printer+=4');

	}
	init();

})(jQuery);


















