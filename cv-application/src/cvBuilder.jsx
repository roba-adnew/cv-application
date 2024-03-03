import { useState } from 'react';
import './cvBuilder.css';

export default function HeaderForm() {
    const [shouldRenderInput, setShouldRenderInput] = useState(true);
    const [header, setHeader] = useState(() => ({
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
    }))
     

    function updateHeader(e) {
        e.preventDefault();``
        const value = e.target.value;
        const field = e.target.id;
        setHeader({...header, [field]: {
            ...header[field], value: value
        }});
    }

    function handleEdit(e) {
        e.preventDefault();
        setShouldRenderInput(!shouldRenderInput);
    }

    const shouldShowSubmission = !shouldRenderInput;
    
    return (
        <div>
            <p>Resume Header</p>
                {shouldRenderInput && 
                    <form>
                        {Object.keys(header).map(field => 
                            <input 
                                placeholder={header[field]['placeholder']}
                                key={field}
                                id={field}
                                {...header[field]['required'] 
                                    && {required: true}}
                                onChange={updateHeader}
                                >
                            </input>
                        )}
                        <button onClick={handleEdit}>
                            Submit
                        </button>
                    </form>
                }
                {shouldShowSubmission && 
                    <div>
                        {Object.keys(header).map(field => 
                            <p key={field}>{header[field]['value']}</p>
                        )}
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                }
        </div>
    )
}