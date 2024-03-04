import { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function HeaderInput({ 
    header, 
    updateHeader,
    handleEdit, 
    submitHandler}) { 
    const tagAttributes = 
        {
            name: {
                placeholder: 'Full Name',
                required: true,
                type: 'text'
            },
            email: {
                placeholder: 'Email',
                required: true,
                type: 'email'
            },
            phone: {
                placeholder: 'Phone Number',
                required: true,
                type: 'text'
            },
            city: {
                placeholder: 'Address',
                required: true,
                type: 'text'
            },
            LinkedIn: {
                placeholder: 'LinkedIn',
                required: true,
                type: 'url'
            },
            Github: {
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
            <form>
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
        </>
    )
}

function SubmittedInputDisplay({
    header, 
    handleEdit
}) {

    return (
        <>
            <div>
                {Object.keys(header).map(field => 
                    <p key={field}>{header[field]}</p>
                )}
                <button onClick={handleEdit}>Edit</button>
            </div>
                
        </>
    )
}

function HeaderForm({ submitHandler }) {
    const [shouldRenderForm, setShouldRenderForm] = useState(true);
    // {
    //     name: '',
    //     phone: '',
    //     email: '',
    //     city: '',
    //     linkedin: '',
    //     github: ''
    // }
    const [header, setHeader] = useState(() => ({
        name: 'Roba Adnew',
        phone: '240-602-0279',
        email: 'roba.adnew@gmail.com',
        city: 'Brooklyn, NY',
        LinkedIn: 'https://www.linkedin.com/in/roba-adnew/',
        Github: 'https://github.com/roba-adnew'
    }))

    
    function updateHeader(e) {
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.id;
        setHeader({...header, [field]: value});
    }

    function handleEdit(e) {
        e.preventDefault();
        setShouldRenderForm(!shouldRenderForm);
    }
    const shouldShowSubmission = !shouldRenderForm;

    
    return (
        <div>
            <h3>Resume Header</h3>
                {shouldRenderForm && 
                <HeaderInput 
                    header={header}
                    updateHeader={updateHeader} 
                    shouldDisplay={shouldRenderForm}
                    handleEdit={handleEdit}
                    submitHandler={submitHandler}
                />}
                
                {shouldShowSubmission && 
                <SubmittedInputDisplay 
                    header={header}
                    shouldDisplay={shouldShowSubmission}
                    handleEdit={handleEdit}
                />}
                
        </div>
    )
}

HeaderForm.propTypes = { submitHandler: PropTypes.func }
HeaderInput.propTypes = {
    header: PropTypes.object,
    updateHeader: PropTypes.func,
    handleEdit: PropTypes.func,
    submitHandler: PropTypes.func
}
SubmittedInputDisplay.propTypes = {
    header: PropTypes.object,
    handleEdit: PropTypes.func
}

export default HeaderForm;
