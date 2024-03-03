import { useState } from 'react';
import PropTypes from 'prop-types';
import './HeaderForm.css';

export default function HeaderForm({ submitHandler }) {
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
        const field = e.target.id;
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
        throw new Error(' DOM may not match the structure of the header data')
    }

    return (
        <div>
            <p>Resume Header</p>
                {shouldRenderInput && 
                    <form
                    >
                        {Object.keys(header).map(field => 
                            <input 
                                key={field}
                                id={field}
                                placeholder={tagAttributes[field]['placeholder']}
                                type={tagAttributes[field]['placeholder']}
                                {...tagAttributes[field]['required'] 
                                    && {required: true}}
                                onChange={updateHeader}
                                >
                            </input>
                        )}
                        <button onClick={(e) => {
                            handleEdit(e)
                            submitHandler(header)
                        }}>
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

HeaderForm.propTypes = { submitHandler: PropTypes.func }