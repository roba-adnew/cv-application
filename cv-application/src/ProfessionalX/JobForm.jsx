import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

// const [exp, setExp] = useState(() => ([
//     {
//         id: '123',
//         company: '',
//         role: '',
//         startDate: '',
//         endDate: '',
//         feats: []
//     }
// ]))

// function addJob(newProfObject){
//     setExp(prevProf => prevProf.push(newProfObject))
// }

// function removeJob(profID) {
//     const profObject = exp.find(({ id }) => id === profID);
//     setExp(prevProf => 
//         prevProf.splice(prevProf.indexOf(profObject),1))
// }

// const [shouldRenderForm, setShouldRenderForm] = useState(false);


// function handleEdit() {setShouldRenderForm(!shouldRenderForm)}


function JobInput({ id, shouldRenderForm = true }) {
    const [job, setJob] = useState(() => ({
            id: id,
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            feats: []
    }))

    const tagAttributes = {
        company: 'Company name',
        role: 'Job Title',
        startDate: '',
        endDate: '',
        feats: 'Describe your accomplishments',
    }


    function updateJob(e) {
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.id;
        setJob({...job, [field]: value});
    }

    function handleEdit() { return shouldRenderForm}

    return (
        <form>
            <div>
                {shouldRenderForm &&  
                    <>
                    {Object.keys(tagAttributes).map((field) => 
                        <input 
                            key={job.id}
                            id={field}
                            type={field.includes('Date') ? 'date' : 'text'}
                            placeholder={tagAttributes[field]}
                            onChange={(e) => updateJob(e)}
                        ></input>
                    )}  
                    <button onClick={handleEdit}>
                        Submit
                    </button>
                    </>
                }
            </div>
        </form>
    ) 
}

JobInput.propTypes = {
    id: PropTypes.string,
    shouldRenderForm: PropTypes.bool}

export default JobInput;