import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	__experimentalNumberControl as NumberControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useCallback } from '@wordpress/element';
import genericAttributesSetter from './../generic-attributes-setter';

export default function Settings({
	attributes: {
		type,
		direction,
		perPage,
		width,
		rewind,
		speed,
		wheel,
		autoWidth,
		heightRatio,
	},
	setAttributes,
}) {
	const setter = useCallback(genericAttributesSetter(setAttributes), [
		setAttributes,
	]);
	return (
		<InspectorControls>
			<PanelBody title={__('Settings')}>
				<SelectControl
					label="Select Slider Type"
					value={type}
					options={[
						{ value: 'slide', label: 'Slide' },
						{ value: 'loop', label: 'Loop' },
						{ value: 'fade', label: 'Fade' },
					]}
					onChange={setter('type')}
				/>
				<SelectControl
					label="Direction"
					value={direction}
					options={[
						{ value: 'ltr', label: 'Left to right' },
						{ value: 'rtl', label: 'Right to Left' },
						{ value: 'ttb', label: 'Top to bottom' },
					]}
					onChange={setter('direction')}
				/>
				<NumberControl
					label="Per Page"
					isShiftStepEnabled={true}
					onChange={setter('perPage')}
					shiftStep={1}
					max={5}
					value={perPage}
				/>
				<TextControl
					label="Width"
					help="Allows CSS values. Example: 100%"
					value={width}
					onChange={setter('width')}
				/>
				<ToggleControl
					label="Rewind"
					help={
						'Rewind to the first item after the last item is reached.'
					}
					checked={rewind}
					onChange={setter('rewind')}
				/>
				<NumberControl
					label="Speed"
					help="The transition speed in milliseconds."
					isShiftStepEnabled={true}
					onChange={setter('speed')}
					shiftStep={1000}
					max={10000}
					value={speed}
				/>
				<ToggleControl
					label="Wheel"
					help={'Enables navigation by the mouse wheel.'}
					checked={wheel}
					onChange={setter('wheel')}
				/>
				<ToggleControl
					label="Auto Width"
					help={'Allows slides / cover to have their own width.'}
					checked={autoWidth}
					onChange={setter('autoWidth')}
				/>
				<NumberControl
					label="Height Ratio"
					help="Determines height of slides by the ratio to the slider width."
					isShiftStepEnabled={true}
					onChange={setter('heightRatio')}
					shiftStep={0.1}
					max={1}
					value={heightRatio}
				/>
			</PanelBody>
		</InspectorControls>
	);
}
