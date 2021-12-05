import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";


export default function Settings( { attributes: { type }, setAttributes } ) {
	const onChangeContent = ( type ) => {
		setAttributes( { type: type } );
	};
	return (
		<InspectorControls>
			<PanelBody title={__( "Settings" )}>
				<SelectControl
					label="Select Slider Type"
					value={type}
					options={[
						{ value: "slide", label: "Slide" },
						{ value: "loop", label: "Loop" },
						{ value: "fade", label: "Fade" }
					]}
					onChange={onChangeContent}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
