import PropTypes from 'prop-types'

function ProfExperienceDisplay({ jobData }) {
    return (
        <>
            <h3>Professional Experience</h3>
            <div id='professional-display'>
                {jobData.map(job => job.display &&
                    <div className={'prof-header'} key={`prof-header: ${job.id}`}>
                        <p className="company">{job.company}</p>
                        <p className="role">{job.role}</p>
                        <p className="startDate">{job.startDate}</p>
                        <p className="endDate">{job.endDate}</p>
                        <ul>
                            {job.feats.map(feat =>
                                <li key={`feat-display: ${feat.id}`}>
                                    {feat.text}
                                </li>)}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

ProfExperienceDisplay.propTypes = { jobData: PropTypes.array }

export default ProfExperienceDisplay;