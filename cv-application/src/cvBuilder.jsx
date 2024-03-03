import { useState } from 'react';
import './cvBuilder.css';

export default function HeaderForm() {
    const [shouldRenderInput, setShouldRenderInput] = useState(true);
    const [header, setHeader] = useState(() => ({
        name: '',
        phone: '',
        email: '',
        address: '',
        linkedin: '',
        github: ''
    }))

    const tagAttributes = 
        {
            name: {
                placeholder: 'Full Name',
                required: true,
                type: 'text'
            },
            phone: {
                placeholder: 'Phone Number',
                required: true,
                type: 'text'
            },
            email: {
                placeholder: 'Email',
                required: true,
                type: 'email'
            },
            address: {
                placeholder: 'Address',
                required: true,
                type: 'text'
            },
            linkedin: {
                placeholder: 'LinkedIn',
                required: true,
                type: 'url'
            },
            github: {
                placeholder: 'Github',
                required: false,
                type: 'url'
            }
        };
     

    function updateHeader(e) {
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.key;
        setHeader({...header, [field]: value});
    }

    function handleEdit(e) {
        e.preventDefault();
        setShouldRenderInput(!shouldRenderInput);
    }
    const shouldShowSubmission = !shouldRenderInput;

    const dataAndTagStructureMatch = Object.keys(header)
        .every(field => {
            return Object.keys(tagAttributes).includes(field) 
        })
    
    if (!dataAndTagStructureMatch) {
        throw new Error('The DOM may not match the structure of the header data')
    }

    return (
        <div>
            <p>Resume Header</p>
                {shouldRenderInput && 
                    <form>
                        {Object.keys(header).map(field => 
                            <input 
                                placeholder={tagAttributes[field]['placeholder']}
                                key={field}
                                type={tagAttributes[field]['placeholder']}
                                {...tagAttributes[field]['required'] 
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
                            <p key={field}>{header[field]}</p>
                        )}
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                }
        </div>
    )
}