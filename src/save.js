import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-about-header',
    }) }>
			<InnerBlocks.Content />
      <h1 className='uncommon-about-header-title'>{attributes.title}</h1>
		</div>
	);
}
