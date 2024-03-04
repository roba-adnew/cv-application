import { useState } from 'react';
import PropTypes from 'prop-types';
import './HeaderForm.css';

function HeaderInput({ 
    header, 
    updateHeader,
    shouldDisplay, 
    handleEdit, 
    submitHandler}) { 
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
    
    const dataAndTagStructureMatch = Object.keys(header)
    .every(field => {
        return Object.keys(tagAttributes).includes(field) 
    })
    
    if (!dataAndTagStructureMatch) {
        throw new Error(' DOM may not match the structure of the header data')
    }
    
    return (
        <>
        {shouldDisplay && 
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
                            value={header[field]}
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
        </>
    )
}

function SubmittedInputDisplay({
    header, 
    handleEdit, 
    shouldDisplay
}) {

    return (
        <>
            {shouldDisplay && 
                    <div>
                        {Object.keys(header).map(field => 
                            <p key={field}>{header[field]}</p>
                        )}
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                }
        </>
    )
}

function HeaderForm({ submitHandler }) {
    const [shouldRenderInput, setShouldRenderInput] = useState(true);
    // {
    //     name: '',
    //     phone: '',
    //     email: '',
    //     address: '',
    //     linkedin: '',
    //     github: ''
    // }
    const [header, setHeader] = useState(() => ({
        name: 'Roba Adnew',
        phone: '240-602-0279',
        email: 'roba.adnew@gmail.com',
        address: '260 Saint James Pl, Brooklyn, NY, 11238',
        linkedin: 'https://www.linkedin.com/in/roba-adnew/',
        github: 'https://github.com/roba-adnew'
    }))

    
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

    
    return (
        <div>
            <p>Resume Header</p>
                <HeaderInput 
                    header={header}
                    updateHeader={updateHeader} 
                    shouldDisplay={shouldRenderInput}
                    handleEdit={handleEdit}
                    submitHandler={submitHandler}
                />
                <SubmittedInputDisplay 
                    header={header}
                    shouldDisplay={shouldShowSubmission}
                    handleEdit={handleEdit}
                />
                
        </div>
    )
}

HeaderForm.propTypes = { submitHandler: PropTypes.func }
HeaderInput.propTypes = {
    header: PropTypes.object,
    updateHeader: PropTypes.func,
    shouldDisplay: PropTypes.bool,
    handleEdit: PropTypes.func,
    submitHandler: PropTypes.func
}
SubmittedInputDisplay.propTypes = {
    header: PropTypes.object,
    shouldDisplay: PropTypes.bool,
    handleEdit: PropTypes.func
}

export default HeaderForm;
