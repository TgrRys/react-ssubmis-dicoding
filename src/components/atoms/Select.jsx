const Select = ({ id, onChange, options, className, ...props }) => (
  <select id={id} onChange={onChange} className={className} {...props}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
