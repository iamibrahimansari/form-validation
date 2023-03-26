const InputField = ({onChange, label, name, type, errMsg, formData, error}) =>{
    const styleP = {
        fontSize: '1.2rem',
        color: 'red'
    }
    return(
        <>
            <div className={name + ' input'}>
                <label htmlFor={name}>{label}</label>
                <input type={type} id={name} onChange={onChange} value={formData.name} name={name}  />
                <p style={styleP}>{error}</p>
            </div>
        </>
    )
}

export default InputField;