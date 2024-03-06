import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import JobDescriptors from './Descriptors/Descriptors';
import { format } from 'date-fns'; 


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
                    <>
                    <input 
                        key={job.id}
                        id={field}
                        type={field.includes('Date') ? 'date' : 'text'}
                        value={job[field]}
                        placeholder={tagAttributes[field]}
                        onChange={(e) => {
                            e.preventDefault();
                            updateJob(field, e.target.value)
                        }}
                    ></input>
                    </>
                )}
                <JobDescriptors updateJob={updateJob}/>
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
                field !== 'id' && field !== 'feats' &&
                <p className="display" key={field}>{job[field]}</p>
            )}
            {Object.keys(job).map(field => 
                field === 'feats' &&
                job[field].map(
                    feat => 
                    <p className="display" key={feat.id}>{feat.text}</p>
                )
            )}
            <button onClick={switchDisplay}>Edit</button>
        </div>
    )
}

function setDefaultDueDate() {
    const today = new Date;
    const tomorrow = new Date(); 
    tomorrow.setDate(today.getDate());
    return format(tomorrow, 'yyyy-MM-dd');
}

function JobForm() {
    // {
    //     id: uuidv4(),
    //     company: '',
    //     role: '',
    //     startDate: '',
    //     endDate: '',
    //     feats: []
    // }
    const [job, setJob] = useState(() => ({
        id: uuidv4(),
        company: 'meta',
        role: 'product',
        startDate: setDefaultDueDate(),
        endDate: setDefaultDueDate(),
        feats: []
    }))
    const [shouldRenderForm, setShouldRenderForm] = useState(true)

    function updateJob(field, value) {
        if (field === 'feats') {
            setJob(() => ({...job, [field]: [...value]}))
        }
        else {
            setJob({...job, [field]: value});
        }
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