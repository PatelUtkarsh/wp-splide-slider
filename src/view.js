import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function() {
	const splide = new Splide( '.splide' );
	console.log(splide);
	splide.mount();
} );
