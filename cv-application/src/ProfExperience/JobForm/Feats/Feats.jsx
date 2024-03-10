import PropTypes from 'prop-types'
import { Feat } from '../../../utils.components.jsx'

function FeatsForm({ job, updateJob }) {

    return (
        <>
            {job.feats.map(feat => (
                <div key={'form: ' + feat.id}>
                    <input
                        className='describe'
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
                        Delete descriptor
                    </button>
                </div>
            ))}
            <button
                id='new-description-button'
                onClick={(e) => {
                    e.preventDefault();
                    const updatedFeats = [...job.feats, Feat()];
                    updateJob(job.id, 'feats', updatedFeats)
                }}>
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