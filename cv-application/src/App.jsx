import { useState } from 'react';
import HeaderForm from './Header/HeaderForm.jsx';
import HeaderDisplay from './Header/HeaderDisplay.jsx';
import ProfExperienceForm from './ProfExperience/ProfExperienceForm.jsx';
import ProfExperienceDisplay from './ProfExperience/ProfessionalExpDisplay.jsx';
import Job from './utils.components.jsx';
import defaultJob, { defaultHeader } from './utils.constants.jsx';
import './App.css';

function App() {
	const [header, setHeader] = useState(() => (defaultHeader));
	const [jobs, setJobs] = useState([defaultJob])

	function addNewJob() {
		setJobs([...jobs, Job()]);
	}

	function updateJob(id, field, value) {
		setJobs(jobs.map(job => {
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
					<HeaderForm
						header={header}
						setHeader={setHeader}
					/>
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