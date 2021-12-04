/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
//import { __ } from '@wordpress/i18n';
// import { defineElement as defineBentoBaseCarousel } from '@bentoproject/base-carousel';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import { BentoBaseCarousel } from "@bentoproject/base-carousel/react";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save() {
	return (
		<div {...useBlockProps().save()}>
			<div className="bento-carousel-wrapper">
				<BentoBaseCarousel autoAdvance={false} loop={false} snap={true}>
					<img
						src="https://source.unsplash.com/random/1200x800?1"
						width={1200}
						height={800}
						alt=""
					/>
					<img
						src="https://source.unsplash.com/random/1200x800?2"
						width={1200}
						height={800}
						alt=""
					/>
					<img
						src="https://source.unsplash.com/random/1200x800?3"
						width={1200}
						height={800}
						alt=""
					/>
					<img
						src="https://source.unsplash.com/random/1200x800?4"
						width={1200}
						height={800}
						alt=""
					/>
				</BentoBaseCarousel>
			</div>
			<div className="bento-carousel-buttons">
				<button className="bento-carousel-prev">{'Previous'}</button>
				<button className="bento-carousel-next">{'Next'}</button>
			</div>
		</div>
	);
}
