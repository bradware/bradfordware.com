// Constants
const COLOR = `color`;
const BACKGROUND_COLOR = `background-color`;
const WHITE = 'white';
const BLACK = 'black';
const ICON_TAG_NAME = 'I';

let IS_DARK_MODE = false;

$(document).ready(function() {
	const content = $(`main`);
	content.css('marginTop', -content.height() + 'px');
	
	const html = $('html');
	$(html).click(function(event) {
    if (event.target.tagName === ICON_TAG_NAME) {
    	return;
    }
    
    toggleColorScheme(html);
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