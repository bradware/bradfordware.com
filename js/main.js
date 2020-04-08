// Constants
const COLOR = `color`;
const BACKGROUND_COLOR = `background-color`;
const WHITE = 'white';
const BLACK = 'black';
const HEIGHT_OFFSET = 0.75;

// File Scoped
let IS_DARK_MODE = false;

$(document).ready(function() {
	const main = $(`main`);
	main.css('marginTop', -(main.height() * HEIGHT_OFFSET) + 'px');
	
	const html = $('html');
	$(html).click(function(event) {
		// Don't change the color scheme if clicking on an icon
    if (event.target.tagName !== 'I') {
    	toggleColorScheme(html);
    }
	});
});

function toggleColorScheme(html) {
	IS_DARK_MODE = !IS_DARK_MODE;

	if (IS_DARK_MODE) {
		html.css(COLOR, WHITE);
  	html.css(BACKGROUND_COLOR, BLACK);
  } else {
  	html.css(COLOR, BLACK);
  	html.css(BACKGROUND_COLOR, WHITE);
  }
}