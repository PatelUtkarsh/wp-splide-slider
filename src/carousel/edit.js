import {
	InnerBlocks,
	useBlockProps,
} from "@wordpress/block-editor";
//import '@splidejs/splide/dist/css/splide.min.css';
import "./editor.scss";
import Settings from "./settings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement|JSX.Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const template = [ [ 'splide/slide', {}, [
		[ 'core/cover' ],
	] ] ];
	return (
		<>
		<Settings { ...{ attributes, setAttributes } } />
		<div {...useBlockProps()}>
			<div className="splide">
				<div className="splide__track">
					<div className="splide__list">
						<InnerBlocks
							orientation="horizontal"
							allowedBlocks={["splide/slide"]}
							renderAppender={InnerBlocks?.ButtonBlockAppender}
							template={template}
						/>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
