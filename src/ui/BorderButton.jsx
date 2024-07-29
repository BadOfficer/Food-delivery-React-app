import { Link, NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function BorderButton({ to, children, className = '', navLink = false }) {
	const classes = `hover:bg-highlight hover:border-2 hover:border-accent rounded-xl text-typeFaded ${className}`;
	const activeClasses = `${className} bg-highlight border-2 border-accent rounded-xl text-accent`;

	if (to && !navLink)
		return (
			<Link to={to} className={classes}>
				{children}
			</Link>
		);

	if (to && navLink)
		return (
			<NavLink
				to={to}
				className={({ isActive }) =>
					isActive ? `${activeClasses}` : `${classes}`
				}
			>
				{children}
			</NavLink>
		);

	return <button className={classes}>{children}</button>;
}

export default BorderButton;
