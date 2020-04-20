// Constants
const HTML = 'html';
const BODY = 'body';
const COLOR = 'color';
const BACKGROUND_COLOR = 'background-color';
const WHITE = 'white';
const BLACK = 'black';
const MARGIN_TOP = 'marginTop';
const PX = 'px';
const ICON = 'I';
const HEIGHT_OFFSET = 0.75;

let IS_DARK_MODE = true;

$(document).ready(function() {
	const html = $(HTML);
	const body = $(BODY);
	
	body.css(MARGIN_TOP, -(body.height() * HEIGHT_OFFSET) + PX);
	html.click(function(event) {
		// Don't change the color scheme if clicking on an icon
		if (event.target.tagName !== ICON) {
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