import { useState } from 'react';
import JobForm from './JobForm.jsx';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function ExperienceForm() {
    const [jobs, setJobs] = useState([])

    function addNewJob() {
        const newJob = <JobForm />;
        setJobs([...jobs, newJob]);
    }

    
    return (
        <div>
            <h3>Professional Experience</h3>
            {jobs.map(job => 
                <div key={`job-container: ${uuidv4()}`}>
                    {job}
                </div>)}
            <button onClick={(e) => {
                e.preventDefault();
                addNewJob()}}
            >
                Add a current or past experience
            </button>
        </div>
    )   
}



export default ExperienceForm;