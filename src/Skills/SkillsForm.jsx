import PropTypes from 'prop-types';
import { BiX } from "react-icons/bi";
import { Skill } from '../utils/functions.jsx';
import './Skills.css';

function SkillsForm({ skills, setSkills }) {
    const willDisplayLabel = skills.length > 0 ? true : false;

    return (
        <>
            <h3 id='skills-forms-title'>SKILLS</h3>
            <div id='skills-form'>
                {willDisplayLabel &&
                    <label id='feats-instructions'>
                        Add relevant skills
                    </label>
                }
                {skills.map(skill => (
                    <div className='skill-div' key={`skill: ${skill.id}`}>
                        <input
                            onChange={(e) => {
                                e.preventDefault();
                                setSkills(skills.map(sk => {
                                    if (sk.id === skill.id) {
                                        sk.text = e.target.value;
                                    }
                                    return sk
                                }))
                            }}
                            value={skill.text}
                        >
                        </input>
                        <button 
                            className='delete-skill'
                            onClick={(e) => {
                                e.preventDefault();
                                setSkills(skills.filter(
                                    sk => sk.id !== skill.id
                                ))
                            }}
                        >
                            <BiX />
                        </button>
                    </div>
                ))}
                <button
                    id='new-skill-button'
                    onClick={(e) => {
                        e.preventDefault();
                        setSkills([...skills, Skill()]);
                    }}>
                    Add a skill
                </button>
            </div>
        </>
    )

}

SkillsForm.propTypes = {
    skills: PropTypes.array,
    setSkills: PropTypes.func
}

export default SkillsForm;