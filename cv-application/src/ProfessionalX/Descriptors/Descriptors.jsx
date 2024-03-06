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


function JobDescriptorsInput() {
    const [feats, setFeats] = useState([]);

    function addDescriptorInput(e) {
        e.preventDefault();
        setFeats([...feats, Feat(true)]);
    }

    function updateFeat(e, id) {
        e.preventDefault();
        const text = e.target.value;
        const updatedFeats = feats.map(feat => {
            if (feat.id === id) {
                feat.text = text;
                return feat;
            }
            else {
                return feat
            }});
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
            }});
        setFeats(updatedFeats);
    }

    return (
        <>
            {feats.map(feat => (
                feat.displayForm ?
                <form key={feat.id}>
                    <input 
                        className='describe'
                        onChange={(e) => updateFeat(e,feat.id)}
                        value={feat.text}></input>
                    <button onClick={() => switchDisplay(feat.id)}>Add descriptor</button> 
                </form> :
                <div key={feat.id}>
                <p  className='description'>{feat.text}</p>
                <button onClick={() => switchDisplay(feat.id)} >Edit</button>
                </div>
            ))}
            <button
                id='new-job-button'
                onClick={(e) => addDescriptorInput(e)}>
                Add a descriptions and/or accomplishment
            </button>
        </>
    )

}

JobDescriptorsInput.propTypes = {
    job: PropTypes.object
}

export default JobDescriptorsInput;