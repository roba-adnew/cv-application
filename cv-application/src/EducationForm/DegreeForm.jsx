import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tenure } from '../utils.components.jsx'
import { BiSolidCheckSquare, BiSolidEdit, BiX } from 'react-icons/bi';

function DegreeInput({ degree, updateDegree, switchDisplay }) {
    const tagAttributes = {
        type: 'Type of Degree',
        area: 'Area of Study',
        school: 'School',
        startDate: 'Start Date',
        endDate: 'End Date',
    }

    return (
        <div>
            {Object.keys(tagAttributes).map(field =>
                <div key={`degree-form: ${Math.random()}`}>
                    <label>{tagAttributes[field]}</label>
                    <input
                        type={field.includes('Date') ? 'date' : 'text'}
                        className={field}
                        value={degree[field]}
                        placeholder={tagAttributes[field]}
                        onChange={(e) => {
                            e.preventDefault();
                            updateDegree(degree.id, field, e.target.value)
                        }}
                    ></input>
                </div>
            )}
            <button
                id='finalize-job-button'
                onClick={(e) => {
                    e.preventDefault();
                    switchDisplay();
                }}
            >
                <BiSolidCheckSquare />
            </button>
        </div>

    )
}

function DegreeInputDisplay({ degree, switchDisplay }) {
    return (
        <div className='parent-degree-display'>
            <div className='degree-display'>
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
            <button
                onClick={(e) => {
                    e.preventDefault();
                    switchDisplay();
                }}
            >
                <BiSolidEdit />
            </button>
        </div>
    )
}



function DegreeForm({ degree, updateDegree, deleteDegree }) {
    const [shouldRenderForm, setShouldRenderForm] = useState(true)

    function switchDisplay() {
        setShouldRenderForm(!shouldRenderForm)
    }

    const shouldRenderDisplay = !shouldRenderForm;

    return (
        <div id='parent-form'>
            <div id='parent-form-button'>
                <button
                    className='delete'
                    onClick={(e) => {
                        e.preventDefault();
                        deleteDegree(degree.id);
                    }}
                >
                    <BiX />
                </button>
            </div>
            <div id='parent-form-or-display'>
                {shouldRenderForm &&
                    <DegreeInput
                        degree={degree}
                        updateDegree={updateDegree}
                        switchDisplay={switchDisplay}
                    />
                }
                {shouldRenderDisplay &&
                    <DegreeInputDisplay
                        degree={degree}
                        switchDisplay={switchDisplay}
                    />
                }
            </div>
        </div>
    )
}

DegreeForm.propTypes = {
    degree: PropTypes.object,
    updateDegree: PropTypes.func,
    deleteDegree: PropTypes.func
}

DegreeInput.propTypes = {
    degree: PropTypes.object,
    updateDegree: PropTypes.func,
    switchDisplay: PropTypes.func
}

DegreeInputDisplay.propTypes = {
    degree: PropTypes.object,
    switchDisplay: PropTypes.func
}

export default DegreeForm;
