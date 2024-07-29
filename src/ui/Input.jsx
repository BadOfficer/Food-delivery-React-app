/* eslint-disable react/prop-types */
function Input({
	name,
	placeholder,
	className,
	id,
	value,
	onChange = () => {},
	defaultValue,
	type = 'text',
	required = false,
}) {
	const styles = `px-3 min-w-80 py-2 rounded-xl placeholder:text-typeDark/60 ${className}`;

	if (defaultValue)
		return (
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				id={id}
				className={styles}
				defaultValue={defaultValue}
				required={required}
			/>
		);

	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			id={id}
			className={styles}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			required={required}
		/>
	);
}

export default Input;
