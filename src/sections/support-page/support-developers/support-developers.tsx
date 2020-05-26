import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { centerColumn, textColumn } from '@bit/bit.base-ui.layout.page-frame';

import { Button } from '../../../elements/button';
import { H1, H5 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

import styles from './support-developers.module.scss';
import { Link } from '../../../elements/link';
import { links } from '../../../content/links';

type SupportDevelopersProps = {
	/** handles 'book meeting' call to action */
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLElement>;

/**
 * Opening section for the Enterprise offering page.
 * @name EcoSystem
 */
export function SupportDevelopers(props: SupportDevelopersProps) {
	const { onBookMeeting, ...rest } = props;

	const cards = [
		{
			iconUrl: 'support-page/tool.svg',
			title: 'By core maintainers.',
			text:
				'With Bit, support is a core responsibility of every team building a product. Get support by the developers, architects and industry experts actually building your tools.',
			alt: '',
		},
		{
			iconUrl: 'support-page/support.svg',
			title: 'We respond fast.',
			text:
				'When you contact us, in any channel, our teams gets on the clock to respond with a solution as fast as possible. And, it’s not over until we see things through.',
			alt: '',
		},
		{
			iconUrl: 'support-page/eye.svg',
			title: 'We see things through.',
			text:
				'Your problem is our problem. Our work is not done until your problem is solved, fixed and won’t happen again. Put together with expert-level support, we got you covered.',
			alt: '',
		},
		{
			iconUrl: 'support-page/book.svg',
			title: 'With extensive resources.',
			text: (
				<span>
					We maintain an ever-growing rich{' '}
					<Link external href={links.docs}>
						documentation
					</Link>{' '}
					for every angle or use case of working with our technology. Always one click
					away.
				</span>
			),
			alt: '',
		},
	];

	return (
		<div className={classNames(centerColumn, styles.wrapper)}>
			<div className={classNames(styles.content, text.center)}>
				<H1 size={PossibleSizes.sm}>We support developers</H1>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					We provide the support we would like to get as developers.
				</Paragraph>
			</div>
			<Grid
				colMd={2}
				{...rest}
				data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
				className={classNames(
					props.className,
					text.center,
					styles.grid,
					centerColumn
				)}
			>
				{cards.map((card, index) => (
					<SupportDevelopersCard
						key={index}
						iconUrl={card.iconUrl}
						title={card.title}
						text={card.text}
						alt={card.alt}
						className={classNames(text.center, styles.supportCard)}
					/>
				))}
			</Grid>
		</div>
	);
}

type SupportDevelopersCardProps = {
	iconUrl: string;
	alt: string;
	title?: string;
	text?: string | ReactNode;
	className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function SupportDevelopersCard({
	iconUrl,
	title,
	text,
	alt,
	className,
}: SupportDevelopersCardProps) {
	return (
		<div className={classNames(className)}>
			<Image alt={alt} src={iconUrl} />
			<H5>{title}</H5>
			<Paragraph>{text}</Paragraph>
		</div>
	);
}
