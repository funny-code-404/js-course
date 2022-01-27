export const Input = (props) => {
   const { errors,type, name, placeholder,handleChange,validationText,data} = props;
   return (<label name={name}>
      <input type={type} name={name} placeholder={placeholder} onChange={handleChange} value={data[name]}/>
       {!errors[name] && <p>{validationText}</p>}
      </label>
   )
}