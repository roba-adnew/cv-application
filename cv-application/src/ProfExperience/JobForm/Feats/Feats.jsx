import PropTypes from 'prop-types'
import { Feat } from '../../../utils.components.jsx'
import { BiX } from "react-icons/bi";

function FeatsForm({ job, updateJob }) {
    const willDisplayLabel = job.feats.length > 0 ? true : false;

    return (
        <div id='feats-form'>
            {willDisplayLabel &&
                <label id='feats-instructions'>
                    Add relevant accomplishments 
                    and/or descriptions for this role
                </label>
            }
            {job.feats.map(feat => (
                <div className='feat-div' key={`form: ${feat.id}`}>
                    <input
                        onChange={(e) => {
                            e.preventDefault();
                            const updatedFeats = job.feats.map(ft => {
                                if (ft.id === feat.id) {
                                    ft.text = e.target.value;
                                }
                                return ft
                            })
                            updateJob(job.id, 'feats', updatedFeats);
                        }}
                        value={feat.text}
                    >
                    </input>
                    <button onClick={(e) => {
                        e.preventDefault();
                        const updatedFeats = job.feats.filter(
                            ft => ft.id !== feat.id
                        )
                        updateJob(job.id, 'feats', updatedFeats);
                    }}>
                        <BiX />
                    </button>
                </div>
            ))}
            <button
                className='new-description-button'
                onClick={(e) => {
                    e.preventDefault();
                    const updatedFeats = [...job.feats, Feat()];
                    updateJob(job.id, 'feats', updatedFeats)
                }}>
                Add detail
            </button>
        </div>
    )
}

FeatsForm.propTypes = {
    job: PropTypes.object,
    updateJob: PropTypes.func
}

export default FeatsForm;