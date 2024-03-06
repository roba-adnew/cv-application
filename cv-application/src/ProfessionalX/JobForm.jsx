import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import JobDescriptors from './Descriptors/Descriptors';


// DONT FORGET CODE AT THE BOTTOM

function JobInput({ job, updateJob, switchDisplay }) {
    const tagAttributes = {
        company: 'Company name',
        role: 'Job Title',
        startDate: 'Start Date',
        endDate: 'End Date',
        feats: 'Describe your accomplishments',
    }

    return (
        <form>
            <div>
                {Object.keys(tagAttributes).map((field) => 
                    field !== 'feats' &&
                    <input 
                        key={job.id}
                        id={field}
                        type={field.includes('Date') ? 'date' : 'text'}
                        placeholder={tagAttributes[field]}
                        onChange={(e) => updateJob(e)}
                    ></input>
                )}
                <JobDescriptors />
                <button onClick={switchDisplay}>
                    Submit
                </button>
            </div>
        </form>
    ) 
}

function JobInputDisplay({ job, switchDisplay }) {
    return (
        <div id="jobDisplay">
            {Object.keys(job).map(field => 
                field !== 'id' &&
                <p className="display" key={field}>{job[field]}</p>
            )}
            <button onClick={switchDisplay}>Edit</button>
        </div>
    )
}

function JobForm() {
    const [job, setJob] = useState(() => ({
        id: uuidv4(),
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        feats: []
    }))
    const [shouldRenderForm, setShouldRenderForm] = useState(true)

    function updateJob(e) {
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.id;
        setJob({...job, [field]: value});
    }

    function switchDisplay() {setShouldRenderForm(!shouldRenderForm)}

    const shouldRenderDisplay = !shouldRenderForm;

    return (
        <div>
            <h3>Professional Experience</h3>
            {shouldRenderForm &&
            <JobInput 
                job={job} 
                updateJob={updateJob} 
                switchDisplay={switchDisplay}
            />}
            {shouldRenderDisplay &&
            <JobInputDisplay
                job={job}
                switchDisplay={switchDisplay}
            />}
        </div>
    )

}

JobInput.propTypes = {
    job: PropTypes.object,
    updateJob: PropTypes.func,
    switchDisplay: PropTypes.func
}

JobInputDisplay.propTypes = {
    job: PropTypes.object,
    switchDisplay: PropTypes.func
}

export default JobForm;

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