import PropTypes from 'prop-types';
import { Tenure } from '../utils/components.jsx'

function ProfExperienceDisplay({ jobData }) {
    return (
        <div className='job-display'>
            <h3 className="h3-display">PROFESSIONAL EXPERIENCE</h3>
            <hr />
            {jobData.map(job => job.display &&
                <div key={`job-display: ${job.id}`}>
                    <div className='job-display-header'>
                        <div className='company-role'>
                            <p className='company' >{job['company']}&nbsp;</p>
                            <p className='role' >{job['role']}&nbsp;</p>
                        </div>
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
            )}
        </div>
    )
}

ProfExperienceDisplay.propTypes = { jobData: PropTypes.array }

export default ProfExperienceDisplay;