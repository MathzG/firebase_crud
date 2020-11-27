import React,{useState,useEffect} from "react";
const { default: ContactForm } = require("./ContactForm")
import firebaseDb from "../firebase";

const Contacts = () => {

    var [contactObjects,setcontactObjects] = useState({})
    var [currentId,setCurrentId] = useState('')
useEffect(()=>{
    firebaseDb.child('contacts').on('value',snapshot=>{
      if(snapshot.val()!=null)
      setcontactObjects({
          ...snapshot.val()
      })
    })
},[])

    const addOrEdit = obj=>{
        if(currentId == '')
firebaseDb.child('contacts').push(  
obj,
err => {
    if(err)
    console.log(err)
}
)
else
firebaseDb.child(`contacts/${currentid}`).push(  
    obj,
    err => {
        if(err)
        console.log(err)
        else
        setCurrentId('')
    })
     
    const onDelete = key=>{
        if(window.confirm('tem certeza que quer deletar o save?')){
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if(err)
                    console.log(err)
                    else
                    setCurrentId('')
                   }
            )
                }
        
     }
    
         
    }
    return (
        <>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 text-center">Registro de Contato</h1>
  </div>
 </div>

<div className="row">
    <div className="col-md-5">
        <ContactForm {...(addOrEdit,currentId,contactObjects)}/>
     </div>
    <div className="col-md-7"> 
    <table className="table table-borderless table-stripped">
        <thead className="thead-light">
            <tr>
                <th>Nome Completo</th>
                <th>Celular</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                Object.keys(contactObjects).map(id=>{
                    return <tr key={id}>
                        <td>{contactObjects.fullName}</td>
                        <td>{contactObjects.Mobile}</td>
                        <td>{contactObjects.Email}</td>
                        <td>
                            <a className="btn text-primary" onClick={()=> {setCurrentId(id)}}>
                                <i className="fas fa-pencial-alt"></i>
                            </a>
                            <a className="btn text-danger" onClick={() => {onDelete(key) }}>
                                <i className="fas fa-trash-alt"></i>
                            </a>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>
    </div>
    </>
     );
}

export default Contacts;
 