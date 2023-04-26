import React, { useState } from 'react'

const AddTodo = (props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    

    const handleNameInp = (e) => {
        setName(e.target.value);
    };
    // console.log(name);

    const handleSurnameInp = (e) => {
        setSurname(e.target.value)
    };
    const handlePhoneInp = (e) => {
        setPhone(e.target.value);
    };
    const handleMailInp = (e) => {
        setMail(e.target.value);
    };


    const handleAdd = () => {
        if(!name || !surname || !phone || !mail){
            alert("Напеши что нибудь");
            return;
        }


        const newContact = {
            name: name,
            surname: surname,
            phone: phone,
            mail:mail,
            status: false,
            id: Date.now(),
        };
        props.hendeleCont(newContact)

        setName("");
        setSurname("");
        setPhone("");
        setMail("");
    }
  return (
    <div>
        <h1>Contact Book</h1>
        <input type="text" placeholder='name' onChange={handleNameInp} value={ name} />
        <input type="text" placeholder='surname' onChange={handleSurnameInp}value={surname} />
        <input type="text" placeholder='phone' onChange={handlePhoneInp} value={phone}/>
        <input type="text" placeholder='mail' onChange={handleMailInp}value={mail} />
        <button onClick={handleAdd}>add</button>
    </div>
  )
}

export default AddTodo