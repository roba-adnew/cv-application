import { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function HeaderInput({ 
    header, 
    updateHeader,
    switchDisplay, 
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
            <form id="header-form">
                {Object.keys(header).map((field) => 
                    <div key={field}>
                    <label>{tagAttributes[field]['placeholder']}</label>
                    <input 
                        key={field}
                        id={field}
                     
                        type={tagAttributes[field]['placeholder']}
                        {...tagAttributes[field]['required'] 
                            && {required: true}}
                        value={header[field]}
                        onChange={updateHeader}
                        >
                    </input>
                    </div>
                    
                )}
                <button onClick={() => {
                    switchDisplay()
                    submitHandler(header)
                }}>
                    Submit
                </button>
            </form>
        </>
    )
}

function HeaderInputDisplay({
    header, 
    switchDisplay
}) {

    return (
        <>
            <div id="inputDisplay">
                {Object.keys(header).map(field => 
                    <p className="display" key={field}>{header[field]}</p>
                )}
                <button onClick={switchDisplay}>Edit</button>
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
        email: 'roba.adnew@gmail.com',
        phone: '240-602-0279',
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

    function switchDisplay() {setShouldRenderForm(!shouldRenderForm)}

    const shouldShowSubmission = !shouldRenderForm;
    
    return (
        <div>
            <h3>Header</h3>
                {shouldRenderForm && 
                <HeaderInput 
                    header={header}
                    updateHeader={updateHeader} 
                    shouldDisplay={shouldRenderForm}
                    switchDisplay={switchDisplay}
                    submitHandler={submitHandler}
                />}
                
                {shouldShowSubmission && 
                <HeaderInputDisplay 
                    header={header}
                    shouldDisplay={shouldShowSubmission}
                    switchDisplay={switchDisplay}
                />}
                
        </div>
    )
}

HeaderForm.propTypes = { submitHandler: PropTypes.func }
HeaderInput.propTypes = {
    header: PropTypes.object,
    updateHeader: PropTypes.func,
    switchDisplay: PropTypes.func,
    submitHandler: PropTypes.func
}
HeaderInputDisplay.propTypes = {
    header: PropTypes.object,
    switchDisplay: PropTypes.func
}

export default HeaderForm;
