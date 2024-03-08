import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import JobFeats from './Descriptors/Descriptors.jsx';
import { format } from 'date-fns'; 

function JobInput({ job, updateJob, switchDisplay }) {
    const tagAttributes = {
        company: 'Company name',
        role: 'Job Title',
        startDate: 'Start Date',
        endDate: 'End Date',
        feats: 'Describe your accomplishments',
        display: 'true,'
    }

    return (
        <form>
            <div key={`job-input: ${job.id}`}>
                {Object.keys(tagAttributes).map((field) => 
                    (field !== 'feats' && field !== 'display') &&
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
                <JobFeats job={job} updateJob={updateJob}/> 
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
        <div key={`job-display: ${job.id}`}>
            {Object.keys(job).map(field => 
                (field !== 'feats' && field !== 'display' && field !== 'id') && 
                <p className="display" key={`${field}}: ${job.id}`}>
                    {job[field]}
                </p>
            )}
            {Object.keys(job).map(field => 
                field === 'feats' &&
                job[field].map(
                    feat => 
                    <p className="display" key={`feat: ${feat.id}`}>
                        {feat.text}
                    </p>
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
        feats: [],
        display: true,
    };

const defaultJob = {
    id: uuidv4(),
    company: 'meta',
    role: 'product',
    startDate: setDefaultDueDate(),
    endDate: setDefaultDueDate(),
    feats: [
        {
            id: uuidv4(),
            text: 'a lil bit of this',
            displayForm: true
        },
        {
            id: uuidv4(),
            text: 'a lil bit of that',
            displayForm: true
        },
    ],
    display: true,
}

function JobForm({ deleteJob }) {
    const [job, setJob] = useState(() => defaultJob)
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
        <>
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
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    setJob({...job, display: !job.display})
                }}
            >
                {job.display ? 'Exclude from resume' : 'Include in resume'}
            </button>
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    deleteJob(this)
                }}
            >
                Delete Job
            </button>
        </>
    )
}

JobForm.propTypes = {
    deleteJob: PropTypes.func
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