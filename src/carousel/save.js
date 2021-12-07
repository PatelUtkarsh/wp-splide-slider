//import '@splidejs/splide/dist/css/splide.min.css';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param {Object} props                 - Props.
 * @param {Object} props.attributes      - The attributes of the block.
 * @param {string} props.attributes.type - The type of carousel.
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save({ attributes: { type } }) {
	const blockProps = useBlockProps.save();
	const perPage = 1;
	const rewind = false;
	const speed = 1000;
	const wheel = true;
	const releaseWheel = true;
	const waitForTransition = true;
	const direction = 'ttb';
	const heightRatio = '0.3';
	return (
		<div {...blockProps}>
			<div
				className="splide"
				data-splide={JSON.stringify({
					type,
					perPage,
					rewind,
					speed,
					wheel,
					releaseWheel,
					waitForTransition,
					direction,
					heightRatio,
				})}
			>
				<div className="splide__track">
					<ul className="splide__list">
						<InnerBlocks.Content />
					</ul>
				</div>
			</div>
		</div>
	);
}
