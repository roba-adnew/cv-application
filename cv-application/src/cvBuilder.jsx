import './cvBuilder.css';
import { useState } from 'react';

function Header() {
    const [header, setHeader] = useState(() => {
        return {
            name: {
                placeholder: 'Full Name',
                required: true,
                value: ''
            },
            phone: {
                placeholder: 'Phone Number',
                required: true,
                value: ''
            },
            email: {
                placeholder: 'Email',
                required: true,
                value: ''
            },
            address: {
                placeholder: 'Address',
                required: true,
                value: ''
            },
            linkedin: {
                placeholder: 'LinkedIn',
                required: true,
                value: ''
            },
            github: {
                placeholder: 'Github',
                required: false,
                value: ''
            }
        };
    }); 



    function updateHeader(e) {
        e.preventDefault;
        const property = e.target.name;
        const value = e.target.value;
        const validField = Object.keys(header).includes(property);
        if (!validField) return;
        setHeader(prevHeader => {
            prevHeader[property]['value'] = value;
            return prevHeader
        })
    }

    return (
        <>
            <p>Resume Header</p>
                {Object.keys(header).map(field =>
                    <input 
                        placeholder={header[field]['placeholder']}
                        key={field}
                        name={field}
                        onChange={updateHeader}
                        {...header[field]['required'] && 'required'}
                        >
                    </input>
                )}
            <div>
                <p>Does this work{header.name.value}</p>
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