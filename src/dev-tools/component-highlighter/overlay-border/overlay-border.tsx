import React, { Component } from 'react';
import classNames from 'classnames';

//@ts-ignore
import createRef from 'react-create-ref';
import { Instance, createPopper } from '@popperjs/core';

import styles from './overlay-border.module.scss';
import { ignorePopperSize } from '@bit/bit.base-ui.utils.popper-js.ignore-popper-size';
import { resizeToMatchReference } from '@bit/bit.base-ui.utils.popper-js.resize-to-match-reference';

export type ComponentBorderProps = {
	targetElement?: HTMLElement;
} & React.HTMLAttributes<HTMLDivElement>;

export class OverlayBorder extends Component<ComponentBorderProps> {
	private popperInstance?: Instance;
	private ref = createRef();

	componentWillUnmount() {
		this.destroy();
	}

	componentDidUpdate(prevProps: ComponentBorderProps) {
		const nextProps = this.props;

		if (prevProps.targetElement !== nextProps.targetElement) {
			this.reposition(nextProps.targetElement);
		}
	}

	private reposition = (targetElement?: HTMLElement) => {
		if (!targetElement) {
			this.destroy();
			return;
		}

		const overlayElem: HTMLDivElement = this.ref.current;

		if (!overlayElem) return;

		this.popperInstance = createPopper(targetElement, overlayElem, {
			placement: 'top-start',
			modifiers: [
				ignorePopperSize,
				resizeToMatchReference,
				{
					name: 'flip',
					enabled: false,
				},
				{
					name: 'computeStyles',
					options: {
						adaptive: false, // true by default
					},
				},
				{
					name: 'offset',
					options: {
						offset: [-6, 6],
					},
				},
			],
		});
	};

	private destroy() {
		if (!this.popperInstance) return;
		this.popperInstance.destroy();
		this.popperInstance = undefined;
	}

	render() {
		const { children, className, targetElement, ...rest } = this.props; //TODO
		return (
			<div
				{...rest}
				className={classNames(className, styles.overlayBorder)}
				ref={this.ref}
			></div>
		);
	}
}