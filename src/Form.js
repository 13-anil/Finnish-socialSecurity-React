import React, { useState } from "react";
//import { Textbox } from "react-inputs-validation";

const Form = () => {
    const [code, setCode] = useState();
    const [status, setStatus] = useState();
  
  
    function validate() {
  
      if(!code || !code.length) {
        //console.log();
        setStatus('is-invalid');
        return;
      }
  
      const codeValue =  code;
      const reg = /^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])(0\d|\d\d)(-|A|\+)\d{3}[\dA-Z]$/ ;
      
      if(!reg.test(codeValue)){
        //console.log('is-invalid');
        setStatus('is-invalid')
      }else{
          //console.log('is-valid');
          setStatus('is-valid')
      }
    }
  
  return (
      <div>
        <label> Identification Code: </label>
        <input
          type= "text"
          id= "code"
          maxLength= "11"
          placeholder="Social security no."
          onBlur ={validate}
          className={status}
          onChange={e => setCode(e.target.value)}
        />
  
        <p>State: {status}</p>
      </div>
    );
  }

export default Form;