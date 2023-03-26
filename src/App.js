import inputFields from './data/inputFields';
import InputField from './InputField';
import {useState} from 'react';

const App = () => {
  const [formData, setFormData] = useState({fname: '', lname: '', email: '', pwd: '', tel: '', bio: ''});
  const [errors, setErrors] = useState([]);
  const handleOnChange = event =>{
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  const validateFunction = (name, regx, temp, index) =>{
    if(!name.match(regx)){
      temp[index] = inputFields[index].errMsg;
      setErrors(temp)
    }else{
      temp[index] = null;
      setErrors(temp)
    }
  }

  const handleOnClick = event =>{
    event.preventDefault();
    const {fname, lname, email, pwd, tel, bio} = formData;
    const regx = [
      /^[a-zA-Z]{3,16}$/,
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      /^[a-zA-Z0-9@_-]{6,20}$/,
      /^\d{10}$/,
      /^[a-zA-Z\s.-]{8,50}$/
    ]
    let temp = [...errors];
    validateFunction(fname, regx[0], temp, 0);
    validateFunction(lname, regx[0], temp, 1);
    validateFunction(email, regx[1], temp, 2);
    validateFunction(pwd, regx[2], temp, 3);
    validateFunction(tel, regx[3], temp, 4);
    validateFunction(bio, regx[4], temp, 5);
  }
  return (
    <div className="App">
      {
        errors.every(error => error === null) && errors.length !== 0 ?
        <p className="message">Thankyou for Signup!</p> :
        <>
          <header className="header">
            <h1>Validating Web Forms</h1>
          </header>
          <main>
            <form>
              {
                inputFields.map((field, index) => {
                  return(
                    <InputField 
                      onChange={handleOnChange} 
                      key={field.label} 
                      {...field}
                      formData={formData}
                      error={errors[index]} 
                    />
                  )
                })
              }
              <div className="submit-btn">
                <button type="submit" onClick={handleOnClick}>Submit</button>
              </div>
            </form>
          </main>
        </>
      }
    </div>
  );
}

export default App;
