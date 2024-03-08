import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

function Feat(displayForm = false) {
    return {
        id: uuidv4(),
        text: '',
        displayForm: displayForm
    }
}

function JobDescriptors({ job, updateJob }) {
    const [feats, setFeats] = useState([...job.feats]);

    function addDescriptor() {
        setFeats([...feats, Feat(true)]);
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

    function switchDisplay(id) {
        const updatedFeats = feats.map(feat => {
            if (feat.id === id) {
                feat.displayForm = !feat.displayForm;
                return feat;
            }
            else {
                return feat
            }
        });
        setFeats(updatedFeats);
    }

    return (
        <>
            {feats.map(feat => (
                feat.displayForm ?
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
                            switchDisplay(feat.id)
                        }}>
                            Add descriptor
                        </button>
                    </div> :
                    <div key={'display: ' + feat.id}>
                        <p className='description'>{feat.text}</p>
                        <button onClick={(e) => {
                            e.preventDefault();
                            switchDisplay(feat.id)
                        }}>
                            Edit
                        </button>
                    </div>
            ))}
            <button
                id='new-description-button'
                onClick={(e) => {
                    e.preventDefault();
                    addDescriptor()}}>
                Add a descriptions and/or accomplishment
            </button>
        </>
    )

}

JobDescriptors.propTypes = {
    job: PropTypes.object,
    updateJob: PropTypes.func
}

export default JobDescriptors;