// Constants
const COLOR = `color`;
const BACKGROUND_COLOR = `background-color`;
const WHITE = 'white';
const BLACK = 'black';

var IS_DARK_MODE = false;

$(document).ready(function() {
	// const content = $(`#content`);
	// content.css('marginTop', -content.height() + 'px');
	
	const page = $('html');
	$(page).click(function() {
    toggleColorScheme(page);
	});
});

function toggleColorScheme(page) {
	IS_DARK_MODE = !IS_DARK_MODE;

	if (IS_DARK_MODE) {
		page.css(COLOR, WHITE);
  	page.css(BACKGROUND_COLOR, BLACK);
  } else {
  	page.css(COLOR, BLACK);
  	page.css(BACKGROUND_COLOR, WHITE);
  }
}