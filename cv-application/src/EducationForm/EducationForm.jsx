import PropTypes from 'prop-types';
import DegreeForm from './DegreeForm.jsx';
import './Education.css'

function EducationForm({ education, addDegree, updateDegree,deleteDegree }) {

    return (
        <div id='parent-education-form'>
            <h3>EDUCATION</h3>
            {education.map(degree => 
                <DegreeForm 
                    key={`degree-container: ${degree.id}`}
                    degree={degree}
                    updateDegree={updateDegree}
                    deleteDegree={deleteDegree}
                />
            )}
            <button 
                id='add-degree'
                onClick={(e) => {
                    e.preventDefault();
                    addDegree()
                }}
            >
                Add a degree
            </button>
        </div>
    )

}

EducationForm.propTypes = {
    education: PropTypes.array,
    addDegree: PropTypes.func,
    updateDegree: PropTypes.func,
    deleteDegree: PropTypes.func
}

export default EducationForm;