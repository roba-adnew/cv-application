import PropTypes from 'prop-types'

function ProfExperienceDisplay({ expData }) {
    return (
        <>
            <h3>Professional Experience</h3>
            {/* code for a line */}
            {expData.map(job => job.display && 
            <> 
                <div className={'job-header'}key={`job-header: ${job.id}`}>
                    <p className="company">{job.company}</p>
                    <p className="role">{job.role}</p>
                    <p className="startDate">{job.startDate}</p>
                    <p className="endDate">{job.endDate}</p>
                </div>
                <ul> 
                {job.feats.map(feat => 
                    <li key={`feat-display: ${feat.id}`}>
                        {feat.text}
                    </li>)}
                </ul>
                </>
            )}
            
        </>
    )
}

ProfExperienceDisplay.propTypes = { expData : PropTypes.array }

export default ProfExperienceDisplay;