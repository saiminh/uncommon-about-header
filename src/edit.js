import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-about-header',
    }) }>
			<InnerBlocks
        allowedBlocks={['core/image']}
        template={[
          ['core/image', {}],
          ['core/image', {}],
          ['core/image', {}],
          ['core/image', {}],
          ['core/image', {}],
          ['core/image', {}],
          ['core/image', {}],
          ['core/image', {}],
          ['core/image', {}],
          ['core/image', {}],
        ]}
      />
      <TextControl
        className='uncommon-about-header-title-input'
        label={__('About title')}
        value={ attributes.title }
        onChange={ ( title ) => setAttributes( { title } ) }
      />
		</div>
	);
}
