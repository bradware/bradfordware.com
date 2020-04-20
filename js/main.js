// Constants
const COLOR = `color`;
const BACKGROUND_COLOR = `background-color`;
const WHITE = 'white';
const BLACK = 'black';
const HEIGHT_OFFSET = 0.75;

// File Scoped
let IS_DARK_MODE = true;

$(document).ready(function() {
	const html = $('html');
	const body = $(`body`);
	
	body.css('marginTop', -(body.height() * HEIGHT_OFFSET) + 'px');
	html.click(function(event) {
		// Don't change the color scheme if clicking on an icon
		if (event.target.tagName !== 'I') {
			toggleColorScheme(body);
		}
	});
});

function toggleColorScheme(domElement) {
	IS_DARK_MODE = !IS_DARK_MODE;

	if (IS_DARK_MODE) {
		domElement.css(COLOR, WHITE);
		domElement.css(BACKGROUND_COLOR, BLACK);
	} else {
		domElement.css(COLOR, BLACK);
		domElement.css(BACKGROUND_COLOR, WHITE);
	}
}