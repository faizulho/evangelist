import React from 'react';
import classNames from 'classnames';

import styles from './twitter-link.module.scss';

import { PrimaryLink, PrimaryLinkProps } from '../primary-link';
import { Icon } from '../../icon';

/**
 * @name TwitterLink
 * @description Concrete link to a Twitter account. Styled as a 'pill' button, with the Twitter logo
 * @example
 * ```tsx
 * <TwitterLink href="https://twitter.com/bitdev_" />
 * ```
 */
export type TwitterLinkProps = PrimaryLinkProps;

export function TwitterLink({ className, href, ...rest }: TwitterLinkProps) {
	return (
		<PrimaryLink
			external
			{...rest}
			href={href}
			className={classNames(styles.twitterLink, className)}
			data-bit-id="bit.evangelist/atom/community-links/twitter-link"
		>
			<Icon of="twitter-logo" className={classNames(styles.icon)} />
			<span>@bitdev_</span>
		</PrimaryLink>
	);
}
