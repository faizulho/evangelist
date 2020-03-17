import React from 'react';
import classnames from 'classnames';

export type BaseIconProps = { of: string } & React.HTMLAttributes<HTMLSpanElement>;

export function BaseIcon({ of: iconName, className, ...rest }: BaseIconProps) {
	return <span {...rest} className={classnames(iconName, className)} />;
}
