import './cvBuilder.css';
import { useState } from 'react';

function Header() {
    // const headerFrame = 

    const [header, setHeader] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        linkedin: '',
        github: ''
    }); 

    console.log('why');
    console.table(header)

    function updateHeader(e) {
        e.preventDefault;
        const property = e.target.name;
        const value = e.target.value;
        const validField = Object.keys(header).includes(property);
        if (!validField) return;
        setHeader(prevHeader => {
            prevHeader[property] = value;
            return {...prevHeader}
        })
    }

    return (
        <>
            <p>Resume Header</p>
            <input placeholder='Full Name' name ='name' onChange={updateHeader} required></input>
            <input placeholder='Phone Number' name ='phone' onChange={updateHeader} required></input>
            <input placeholder='Email' type='email' name ='email' onChange={updateHeader} required></input>
            <input placeholder='Address' name ='address' onChange={updateHeader} required></input>
            <input placeholder='LinkedIn' name ='linkedin' onChange={updateHeader} type='url'></input>
            <input placeholder='Github' name ='github' onChange={updateHeader}  type='url'></input>
            {/* need to figure out how to separate the below */}
            <div>
                <p>Does this work{header.name}</p>
            </div>
        </>
    )
    

}

export default function ResumeForm() {
    return (
        <div>
            <form>
                <Header />
            </form>
        </div>
    )
}