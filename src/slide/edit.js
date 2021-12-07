import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';
//import {SplideSlide} from "@splidejs/react-splide";

import './editor.scss';
import classname from "classnames";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const props = {...useBlockProps()};
	props.className = classname( props.className, 'splide__slide' );
	return (
		<div {...props}>
			<InnerBlocks template={[["core/cover"]]} allowedBlocks={["core/cover"]} renderAppender={ false } />
		</div>
	);
}
