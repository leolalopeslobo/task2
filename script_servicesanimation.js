let line1_class = document.querySelector('.import');
let line2_class = document.querySelector('.export');
let line3_class = document.querySelector('.represent');

var services_heading = document.querySelector('.services-main-title');
function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop + 100;
	var opacity = 1;
	

	if(element === line1_class) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
		opacity = opacity;
		if(opacity >= 0.8){
			element.style.opacity = 1;
		}
		else if (opacity >= 0) {
			element.style.opacity = opacity - 0.65;
		}
	}

	if(element === line2_class) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
		opacity = opacity + 0.25;
		if(opacity >= 0.8){
			element.style.opacity = 1;
		}
		else if (opacity >= 0) {
			element.style.opacity = opacity - 0.7;
		}
	}

	if(element === line3_class) {
		element.style.opacity = 1;
	}
}

function scrollHandler() {
	fadeOutOnScroll(line1_class);
    fadeOutOnScroll(line2_class);
    fadeOutOnScroll(line3_class);
}

window.addEventListener('scroll', scrollHandler);





// CHNAGING OF IMAGES ON SCROLL
const serviceImage = document.querySelector('.bg');
    const textScrolled = document.querySelector('.right-section .inner');

    let services_import = document.querySelector('.import');
    let services_export = document.querySelector('.export');
    let services_represent = document.querySelector('.represent');

    const services_import_img = document.querySelector('.servives-img-one');
    const services_export_img = document.querySelector('.servives-img-two');
    const services_represent_img = document.querySelector('.servives-img-three');

    const scrollAmount = -650;
    const scrollAmount_firstTime = -400;
    const scrollAmount_secondTime = -700;
    var opacity = 1;

    window.addEventListener('scroll',(event) => {
        if (services_import.getBoundingClientRect().top > scrollAmount) {
            serviceImage.style.backgroundImage = 'url(res/services_img_1.png)';
        }

		if (services_import.getBoundingClientRect().top < scrollAmount_firstTime) {
		console.log(services_import.getBoundingClientRect().top, "IMPORT");
		serviceImage.style.backgroundImage = 'url(res/services_img_2.png)';
        }
		
		if (services_export.getBoundingClientRect().top < scrollAmount_secondTime) {            
            serviceImage.style.backgroundImage = 'url(res/services_img_3.png)';
        }
    });