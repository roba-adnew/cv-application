import { useState } from 'react';
import JobForm from './JobForm.jsx';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


function ExperienceForm() {
    const [jobForms, setJobForms] = useState([])
    const [includedJobForms, setIncludedJobForms] = useState([])

    function addNewJob() {
        const newJob = <JobForm key={uuidv4()}/>;
        setJobForms(() => [...jobForms, newJob]);
        setIncludedJobForms([...jobForms])
    }

    function ToggleInclusionButton({ job }) {
        const [showExcludeButton, setShowExcludeButton] = useState(true)

        return (
           <>
                {showExcludeButton ?
                    <button key={'exclude: ' + job.key} onClick={(e) => {
                        e.preventDefault();
                        setIncludedJobForms(includedJobForms.filter(
                            jobForm => jobForm !== job
                        ));
                        setShowExcludeButton(false);
                    }}>
                            Exclude from resume
                    </button> :
                    <button key={'include: ' + job.key} onClick={(e) => {
                        e.preventDefault();
                        setIncludedJobForms(...includedJobForms, job);
                        setShowExcludeButton(true);
                    }}>
                        Include in resume
                    </button>
                }
            </>
        )
    }
    
    ToggleInclusionButton.propTypes = { job: PropTypes.element }
    
    return (
        <div>
            <h3>Professional Experience</h3>
            {jobForms.map(job => {
                return (
                    <div key={uuidv4()}>
                        {job}
                        <ToggleInclusionButton job={job} />
                    </div>
                )
            })}
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