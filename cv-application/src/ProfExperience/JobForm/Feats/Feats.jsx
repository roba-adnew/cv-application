import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

function Feat() {
    return {
        id: uuidv4(),
        text: '',
    }
}

function FeatsForm({ job, updateJob }) {
    const [feats, setFeats] = useState([...job.feats]);

    function addFeat() {
        setFeats([...feats, Feat()]);
    }

    function updateFeat(id, text) {
        setFeats(featsPrior => featsPrior.map(feat => {
            if (feat.id === id) {
                feat.text = text;
                return feat;
            }
            else {
                return feat
            }
        }))
    }

    function deleteFeat(id) {
        setFeats(featsPrior => featsPrior.filter(feat => feat.id !== id));
    }

    return (
        <>
            {feats.map(feat => (
                    <div key={'form: ' + feat.id}>
                        <input
                            className='describe'
                            onChange={(e) => {
                                e.preventDefault();
                                updateFeat(feat.id, e.target.value);
                                updateJob(job.id, 'feats', feats);
                            }}
                            value={feat.text}
                        >
                        </input>
                        <button onClick={(e) => {
                            e.preventDefault();
                            deleteFeat(feat.id);
                            updateJob(job.id, 'feats', feats);
                        }}>
                            Delete descriptor
                        </button>
                    </div> 
            ))}
            <button
                id='new-description-button'
                onClick={(e) => {
                    e.preventDefault();
                    addFeat()}}>
                Add a descriptions and/or accomplishment
            </button>
        </>
    )

}

FeatsForm.propTypes = {
    job: PropTypes.object,
    updateJob: PropTypes.func
}

export default FeatsForm;