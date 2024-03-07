import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import JobDescriptors from './Descriptors/Descriptors.jsx';
import { format } from 'date-fns'; 

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
            <div key={'feats: ' + job.id}>
                {Object.keys(tagAttributes).map((field) => 
                    field !== 'feats' &&
                    <input 
                        key={field + ":" + job.id}
                        id={field}
                        type={field.includes('Date') ? 'date' : 'text'}
                        value={job[field]}
                        placeholder={tagAttributes[field]}
                        onChange={(e) => {
                            e.preventDefault();
                            updateJob(field, e.target.value)
                        }}
                    ></input>
                )}
                <JobDescriptors job={job} updateJob={updateJob}/>
                <button onClick={(e) => {
                    e.preventDefault();
                    switchDisplay();
                }}>
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
                <p className="display" key={job.id}>{job[field]}</p>
            )}
            {Object.keys(job).map(field => 
                field === 'feats' &&
                job[field].map(
                    feat => 
                    <p className="display" key={job.id+feat.id}>{feat.text}</p>
                )
            )}
            <button onClick={switchDisplay}>Edit</button>
        </div>
    )
}

// Get rid of this on eventually...maybe 
function setDefaultDueDate() {
    const today = new Date;
    const tomorrow = new Date(); 
    tomorrow.setDate(today.getDate());
    return format(tomorrow, 'yyyy-MM-dd');
}

const emptyJob = {
        id: uuidv4(),
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        feats: []
    };

const defaultJob = {
    id: uuidv4(),
    company: 'meta',
    role: 'product',
    startDate: setDefaultDueDate(),
    endDate: setDefaultDueDate(),
    feats: []
}

function JobForm() {
    const [job, setJob] = useState(() => emptyJob)
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
            {shouldRenderForm &&
                <JobInput 
                    job={job} 
                    updateJob={updateJob} 
                    switchDisplay={switchDisplay}
                />
            }
            {shouldRenderDisplay &&
                <JobInputDisplay
                    job={job}
                    switchDisplay={switchDisplay}
                />
            }
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