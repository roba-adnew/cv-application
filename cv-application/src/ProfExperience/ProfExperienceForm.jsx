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

export function Job(company, role, startDate, endDate, feats) {
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


function ProfExperienceForm({ jobs, addNewJob, updateJob, deleteJob }) {
    return (
        <div>
            <h3>Professional Experience</h3>
            {jobs.map(job => 
                <JobForm 
                    key={`job-container: ${job.id}`} 
                    job={job} 
                    deleteJob={deleteJob}
                    updateJob={updateJob}
                />
            )}
            <button onClick={(e) => {
                e.preventDefault();
                addNewJob()}}
            >
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