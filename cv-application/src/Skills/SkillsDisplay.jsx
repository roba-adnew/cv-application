import PropTypes from 'prop-types';

function SkillsDisplay({ skillsData }) {
    return (
        <div className='skills-display'>
            <h3 className="h3-display">SKILLS</h3>
            <hr />
            <ul id='skills-list-display'>
                {skillsData.map(skill =>
                    <li key={`skill-display: ${skill.id}`}>
                        {skill.text}
                    </li>)}
            </ul>
        </div>
    )
}

SkillsDisplay.propTypes = { skillsData: PropTypes.array };

export default SkillsDisplay;