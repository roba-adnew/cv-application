import { useState } from 'react';
import PropTypes from 'prop-types';
import FeatsForm from './Feats/Feats.jsx';


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
            <div key={`job-input: ${job.id}`}>
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
                            updateJob(job.id, field, e.target.value)
                        }}
                    ></input>
                )}
                <FeatsForm job={job} updateJob={updateJob} />
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
            <button 
                onClick={(e) => { 
                    e.preventDefault();
                    switchDisplay();
                }}
            >
                Edit
            </button>
        </div>
    )
}

function JobForm({ job, updateJob, deleteJob }) {
    const [shouldRenderForm, setShouldRenderForm] = useState(true)

    function switchDisplay() { 
        setShouldRenderForm(!shouldRenderForm) 
    }

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
                    updateJob(job.id, 'display', !job.display);
                }}
            >
                {job['display'] ? 'Exclude from resume' : 'Include in resume'}
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    deleteJob(job.id);
                }}
            >
                Delete Job
            </button>
        </>
    )
}

JobForm.propTypes = {
    job: PropTypes.object,
    deleteJob: PropTypes.func,
    updateJob: PropTypes.func,
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
