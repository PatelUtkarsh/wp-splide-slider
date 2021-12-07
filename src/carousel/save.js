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
 * @param {Object}  props                      - Props.
 * @param {Object}  props.attributes           - The attributes of the block.
 * @param {string}  props.attributes.type      - The type of carousel.
 * @param {string}  props.attributes.direction - The direction of carousel.
 * @param {number}  props.attributes.perPage
 * @param {string}  props.attributes.width
 * @param {boolean} props.attributes.rewind
 * @param {number}  props.attributes.speed
 * @param {boolean} props.attributes.wheel
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save({
	attributes: { type, direction, perPage, width, rewind, speed, wheel },
}) {
	const blockProps = useBlockProps.save();
	const releaseWheel = true;
	const waitForTransition = true;
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
					width,
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
