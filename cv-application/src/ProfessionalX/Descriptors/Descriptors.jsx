import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

function Feat() {
    return {
        id: uuidv4(),
        text: '',
    }
}

function JobFeats({ job, updateJob }) {
    const [feats, setFeats] = useState([...job.feats]);

    function addFeat() {
        setFeats([...feats, Feat()]);
    }

    function updateFeat(id, text) {
        const updatedFeats = feats.map(feat => {
            if (feat.id === id) {
                feat.text = text;
                return feat;
            }
            else {
                return feat
            }
        });
        setFeats(updatedFeats);
    }

    function deleteFeat(id) {
        setFeats(feats.filter(feat => feat.id !== id));
    }

    return (
        <>
            {feats.map(feat => (
                    <div key={'form: ' + feat.id}>
                        <input
                            className='describe'
                            onChange={(e) => {
                                e.preventDefault();
                                updateFeat(feat.id, e.target.value)
                            }}
                            value={feat.text}
                        >
                        </input>
                        <button onClick={(e) => {
                            e.preventDefault();
                            updateJob('feats',feats);
                            deleteFeat(feat.id)
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

JobFeats.propTypes = {
    job: PropTypes.object,
    updateJob: PropTypes.func
}

export default JobFeats;