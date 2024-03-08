import { useState } from 'react';
import PropTypes from 'prop-types';
import JobForm from './JobForm/JobForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';


function setDefaultDueDate() {
    const today = new Date;
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate());
    return format(tomorrow, 'yyyy-MM-dd');
}

function Job(company, role, startDate, endDate, feats) {
    const listedFeats = feats ? feats : [];
    const goodStartDate = startDate !== '' ? startDate : setDefaultDueDate();
    const goodEndDate = endDate !== '' ? endDate : setDefaultDueDate();

    return {
        id: uuidv4(),
        company,
        role,
        startDate: goodStartDate,
        endDate: goodEndDate,
        feats: listedFeats,
        display: true,
    }
}

const defaultJob = Job('Meta','Product Partnerships Manager','','',[
        {
            id: uuidv4(),
            text: 'a lil bit of this',
            displayForm: true
        },
        {
            id: uuidv4(),
            text: 'a lil bit of that',
            displayForm: true
        }])


function ProfExperienceForm({ submitHandler }) {
    const [jobs, setJobs] = useState([defaultJob])

    function addNewJob() {
        const newJob = Job();
        setJobs((jobsPrior) => [...jobsPrior, newJob]);
    }

    function deleteJob(id) {
        setJobs(jobs.filter(job => job.id !== id))
    }

    return (
        <div>
            <h3>Professional Experience</h3>
            {jobs.map(job => 
                <JobForm 
                    key={`job-container: ${job.id}`} 
                    jobObject={job} 
                    deleteJob={deleteJob}
                />
            )}
            <button onClick={(e) => {
                e.preventDefault();
                addNewJob()}}
            >
                Add a current or past experience
            </button>
            <button onClick={(e) => {
                e.preventDefault();
                submitHandler(jobs)}}
            >
                Update professional experience section
            </button>
        </div>
    )   
}

ProfExperienceForm.propTypes = { submitHandler : PropTypes.func }

export default ProfExperienceForm;