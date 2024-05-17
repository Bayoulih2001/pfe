export default function SelectComponent({ options, onSelect }){
    const handleChange = (e) => {
      const selectedOption = e.target.value;
      onSelect(selectedOption);
    };
  
    return (
      <select onChange={handleChange}>
        <option value="">Select profile</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
};

