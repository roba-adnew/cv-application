import { useState } from 'react';
import PropTypes from 'prop-types';
import FeatsForm from './Feats/Feats.jsx';
import { Tenure } from '../../utils/components.jsx';
import { BiSolidHide, 
    BiSolidShow, 
    BiSolidCheckSquare, 
    BiSolidEdit, BiX } from "react-icons/bi";

function JobInput({ job, updateJob, switchDisplay }) {
    const tagAttributes = {
        company: 'Company name',
        role: 'Job Title',
        startDate: 'Start Date',
        endDate: 'End Date',
    }

    return (
        <div id='job-form'>
            <div>
                <div className='job-data' key={`job-data: ${job.id}`}>
                    {Object.keys(tagAttributes).map((field) =>
                        <div className={`${field}`} key={`${field}: ${job.id}`}>
                            <label>{tagAttributes[field]}</label>
                            <input
                                type={field.includes('Date') ? 'date' : 'text'}
                                value={job[field]}
                                placeholder={tagAttributes[field]}
                                onChange={(e) => {
                                    e.preventDefault();
                                    updateJob(job.id, field, e.target.value)
                                }}
                            ></input>
                        </div>
                    )}
                </div>
                <FeatsForm
                    job={job}
                    updateJob={updateJob}
                />
            </div>
            <button
                id='finalize-job-button'
                onClick={(e) => {
                    e.preventDefault();
                    switchDisplay();
                }}
            >
                <BiSolidCheckSquare />
            </button>
        </div>
    )
}

function JobInputDisplay({ job, switchDisplay }) {
    return (
        <div className='parent-job-display'>
            <div className='job-display'>
                <div className='job-display-header'>
                    <p className='company' >{job['company']}&nbsp;</p>
                    <p className='role' >{job['role']}&nbsp;</p>
                    <Tenure 
                        startDate={job['startDate']} 
                        endDate={job['endDate']} 
                    />
                </div>
                <ul>
                    {job.feats.map(feat =>
                        <li key={`feat-display: ${feat.id}`}>
                            {feat.text}
                        </li>)}
                </ul>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    switchDisplay();
                }}
            >
                <BiSolidEdit />
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
        <div id='parent-form'>
            <div id='parent-form-buttons'>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        updateJob(job.id, 'display', !job.display);
                    }}
                >
                    {job['display'] ? <BiSolidHide /> : <BiSolidShow />}
                </button>
                <button
                    className='delete'
                    onClick={(e) => {
                        e.preventDefault();
                        deleteJob(job.id);
                    }}
                >
                    <BiX />
                </button>
            </div>
            <div id='parent-form-or-display'>
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
        </div>
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