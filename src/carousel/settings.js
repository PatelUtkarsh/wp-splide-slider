import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, __experimentalNumberControl as NumberControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Settings({ attributes: { type, direction, perPage, width }, setAttributes }) {
	const onChangeType = (t) => {
		setAttributes({ type: t });
	};
	const onChangeDir = (d) => {
		setAttributes({ direction: d });
	};
	const onChangePerPage = (d) => {
		setAttributes({ perPage: d });
	};
	const onChangeWidth = (d) => {
		setAttributes({ width: d });
	};
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
					onChange={onChangeType}
				/>
				<SelectControl
					label="Direction"
					value={direction}
					options={[
						{ value: 'ltr', label: 'Left to right' },
						{ value: 'rtl', label: 'Right to Left' },
						{ value: 'ttb', label: 'Top to bottom' },
					]}
					onChange={onChangeDir}
				/>
				<NumberControl
					label="Per Page"
					isShiftStepEnabled={ true }
					onChange={ onChangePerPage }
					shiftStep={ 1 }
					max={ 5 }
					value={ perPage }
				/>
				<TextControl
					label="Width"
					help="Allows CSS values. Example: 100%"
					value={ width }
					onChange={ onChangeWidth }
				/>
			</PanelBody>
		</InspectorControls>
	);
}
