import PropTypes from 'prop-types';
import { Tenure } from '../utils.components';

function EducationDisplay({ educationData }) {
    return (
        <div className='job-display'>
            <h3 className="h3-display">EDUCATION</h3>
            <hr />
            {educationData.map(degree =>
                <div className='degree-display' key={`degree-display: ${degree.id}`}>
                    <div className='degree-display-header'>
                        <p className='degree-name' >
                            {degree.type} in&nbsp;
                            {degree.area}
                        </p>
                        <Tenure
                            startDate={degree['startDate']}
                            endDate={degree['endDate']}
                        />
                    </div>
                    <ul>
                        <li>{degree.school}</li>
                    </ul>
                </div>

            )}
        </div>
    )
}

EducationDisplay.propTypes = { educationData: PropTypes.array }

export default EducationDisplay;