/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';

function SolidButton({
	to,
	className = '',
	navLink = false,
	children,
	onClick,
}) {
	const classes = `bg-accent px-5 py-2 text-[#ffffff] ${className}`;

	if (to && !navLink)
		return (
			<Link to={to} className={classes}>
				{children}
			</Link>
		);

	if (to && navLink)
		return (
			<NavLink to={to} className={classes}>
				{children}
			</NavLink>
		);

	return (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);
}

export default SolidButton;
