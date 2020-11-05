# AnimPure

## Simple Animation Library
It's complete functional JavaScript library without any dependencies. It still needs more development, but it's ready to use as module(341B) or minified version(1KB).

### Sample Usage
After you insert [minified version](https://github.com/fatihgozenc/animpure/dist/AnimPure.min.js/) or [module version](https://github.com/fatihgozenc/animpure/dist/AnimPure.module.js/) in your document, you can use it like in the example:
<pre>

var box = document.getElementById('box');

AnimPure.animate({
	// Duration is calculated in miliseconds 1s == 1000ms
	duration: 1000,
	// Default timing is linear, 
	// but you can select other options if you want.
	timing: AnimPure.ease.inOutQuint,
	action: (progress) => {
		// Progress starts from 0 to 1
		// In this example; we want 0 to 100 so we multiply progress with 100
		// We add toFixed() for performance optimizations, 
		// So it goes 0,1,2,3... instead of 0.000000001, 0.000000002...
		let animatedValue = (progress * 100).toFixed()
		box.style.width = animatedValue + "px"
	}
})

</pre>

### Thank you
For your interest. I am still developing it but you can download and use it. It's designed for thinking simple and lightweight code structures.