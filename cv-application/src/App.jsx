import { useState } from 'react';
import HeaderForm from './Header/HeaderForm.jsx';
import HeaderDisplay from './Header/HeaderDisplay.jsx';
import ProfExperienceForm from './ProfExperience/ProfExperienceForm.jsx';
import ProfExperienceDisplay from './ProfExperience/ProfessionalExpDisplay.jsx';
import Job from './utils.components.jsx';
import defaultJob from './utils.constants.jsx';
import './App.css';

function App() {
	const [header, setHeader] = useState(() => ({
		name: '',
		phone: '',
		email: '',
		address: '',
		linkedin: '',
		github: ''
	}));


	const [jobs, setJobs] = useState([defaultJob])

	function headerSubmitHandler(updatedHeader) {
		setHeader({ ...updatedHeader })
	}

	function addNewJob() {
		setJobs((jobsPrior) => [...jobsPrior, Job()]);
	}

	function updateJob(id, field, value) {
		setJobs(jobsPrior => jobsPrior.map(job => {
			if (id !== job.id) {
				return job
			}

			if (field !== 'feats') {
				return { ...job, [field]: value }
			}

			return { ...job, [field]: [...value] }
		}))
	}

	function deleteJob(id) {
		setJobs(jobs.filter(job => job.id !== id))
	}

	return (
		<>
			<div id='app'>
				<div id='form'>
					<HeaderForm submitHandler={headerSubmitHandler} />
					<ProfExperienceForm
						jobs={jobs}
						addNewJob={addNewJob}
						updateJob={updateJob}
						setJobs={setJobs}
						deleteJob={deleteJob}
					/>
				</div>
				<div id='display'>
					<HeaderDisplay headerData={header} />
					<ProfExperienceDisplay jobData={jobs} />
				</div>
			</div>
		</>
	)
}

export default App;