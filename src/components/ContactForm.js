import React, {useState, useEffect } from "react";

const ContactForm= (props) => {
    const initialFieldValues = {
        nomeCompleto:'',
        celular:'',
        email:'',
        endereço:''
    }

    var [values,setValues] = useState(initialFieldValues)
    
useEffect(()=>{
    if(props.currentId=='')
    setValues({
        ...initialFieldValues
    })
    else
    setValues({
        ...props.contactObjects[props.currentId]
    })
}, [props.currentId,props.contactObjects])

const handleInputChange = e => { 
   var {name, value} = e.target
   setValues({
       ...values,
       [name]: value
   })
}
 const handleFormSubmit = e =>{
    //e.preventdefault();
    props.addOrEdit(values)
}

    return ( 
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto"
                value = {values.nomeCompleto}
                onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-celular-alt"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Celular" name="celular"
                value = {values.celular}
                onChange={handleInputChange}

                />
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="email"
                value = {values.email}
                onChange={handleInputChange}

                />
                </div>
             </div>
             <div className="form-group">
                 <textarea className="form-control" placeholder="Endereço" name="endereço"
                 value = {values.endereço}
                 onChange={handleInputChange}
 
                 />
              </div>
              <div className="form-group">
                  <input type="submit" value={props.currentId == '' ? "Save" : "Atualizar"} className="btn btn-primary btn-block" />
                 </div>        
        </form>
     ); 
   }

export default ContactForm;