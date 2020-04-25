// Constants
const HTML = 'html';
const BODY = 'body';
const LOADING = '#loading';
const CONTENT = '#content';
const PX = 'px';
const ICON = 'I';

const COLOR = 'color';
const BACKGROUND_COLOR = 'background-color';
const WHITE = 'white';
const BLACK = 'black';
const MARGIN_TOP = 'marginTop';

const ONE_SECOND = 1000;
const LOADING_OFFSET = ONE_SECOND * 2;
const HEIGHT_OFFSET = 0.75;

let IS_DARK_MODE = true;
let START_TIME = $.now();

$(document).ready(function() {
	const loading = $(LOADING);
	const content = $(CONTENT);
	const body = $(BODY);
	const html = $(HTML);

	loading.delay(ONE_SECOND).fadeOut(ONE_SECOND);
	content.delay(LOADING_OFFSET).fadeIn(ONE_SECOND);

	body.css(MARGIN_TOP, -(body.height() * HEIGHT_OFFSET) + PX);
	html.click(function(event) {
		// Ignore if clicking on an icon (external link) or the content hasn't loaded yet
		if (isTargetEligible(event.target) && isTimeEligible()) {
			toggleColorScheme(body);
		}
	});
});

function isTargetEligible(target) {
	return target.tagName !== ICON;
}

function isTimeEligible() {
	return $.now() - START_TIME > LOADING_OFFSET;
}

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