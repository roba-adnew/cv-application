import PropTypes from 'prop-types';
import JobForm from './JobForm/JobForm.jsx';

function ProfExperienceForm({ jobs, addNewJob, updateJob, deleteJob }) {
    return (
        <div>
            <h3>Professional Experience</h3>
            {jobs.map(job => 
                <JobForm 
                    key={`job-container: ${job.id}`} 
                    job={job} 
                    updateJob={updateJob}
                    deleteJob={deleteJob}
                />
            )}
            <button onClick={(e) => {
                e.preventDefault();
                addNewJob()
            }}>
                Add a current or past experience
            </button>

        </div>
    )   
}

ProfExperienceForm.propTypes = { 
    jobs: PropTypes.array,
    addNewJob: PropTypes.func,
    updateJob: PropTypes.func,
    deleteJob: PropTypes.func,
 }

export default ProfExperienceForm;