// Constants
const COLOR = `color`;
const BACKGROUND_COLOR = `background-color`;
const WHITE = 'white';
const BLACK = 'black';

$(document).ready(function() {
	// const content = $(`#content`);
	// content.css('marginTop', -content.height() + 'px');
	
	let isDarkMode = false;
	const page = $('body,html,main');
	
	$(page).click(function() {
    isDarkMode = !isDarkMode;
    changeColorScheme(page, isDarkMode);
	});
});

function changeColorScheme(page, isDarkMode) {
	if (isDarkMode) {
			page.css(COLOR, WHITE);
    	page.css(BACKGROUND_COLOR, BLACK);
    } else {
    	page.css(COLOR, BLACK);
    	page.css(BACKGROUND_COLOR, WHITE);
    }
}