// Constants
const COLOR = `color`;
const BACKGROUND_COLOR = `background-color`;
const WHITE = 'white';
const BLACK = 'black';

var IS_DARK_MODE = false;

$(document).ready(function() {
	// const content = $(`#content`);
	// content.css('marginTop', -content.height() + 'px');
	
	const elements = $('body,html,main');
	$(elements).click(function() {
    toggleColorScheme(elements);
	});
});

function toggleColorScheme(elements) {
	IS_DARK_MODE = !IS_DARK_MODE;
	
	if (IS_DARK_MODE) {
		elements.css(COLOR, WHITE);
  	elements.css(BACKGROUND_COLOR, BLACK);
  } else {
  	elements.css(COLOR, BLACK);
  	elements.css(BACKGROUND_COLOR, WHITE);
  }
}