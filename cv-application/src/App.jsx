import { useState } from 'react';
import HeaderForm from './Header/HeaderForm.jsx';
import HeaderDisplay from './Header/HeaderDisplay.jsx';
import ProfExperienceForm from './ProfExperience/ProfExperienceForm.jsx';
import ProfExperienceDisplay from './ProfExperience/ProfessionalExpDisplay.jsx';
import { Job, Degree } from './utils.components.jsx';
import { defaultHeader, defaultJob, defaultDegree } from './utils.constants.jsx';
import EducationForm from './EducationForm/EducationForm.jsx';
import EducationDisplay from './EducationForm/EducationDisplay.jsx';

import './App.css';

function App() {
	const [header, setHeader] = useState(() => (defaultHeader));
	const [jobs, setJobs] = useState([defaultJob]);
	const [education, setEducation] = useState([defaultDegree])

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

	function addDegree() {
		setEducation([...education, Degree()]);
	}

	function updateDegree(id, field, value) {
		setEducation(education.map(degree => {
			if (id !== degree.id) {
				return degree
			}

			return { ...degree, [field]: value }
		}))
	}

	function deleteDegree(id) {
		setEducation(education.filter(degree => degree.id !== id))
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
						deleteJob={deleteJob}
					/>
					<EducationForm 
						education={education}
						addDegree={addDegree}
						updateDegree={updateDegree}
						deleteDegree={deleteDegree}
					/>
				</div>
				<div id='display'>
					<HeaderDisplay headerData={header} />
					<ProfExperienceDisplay jobData={jobs} />
					<EducationDisplay educationData={education} />
				</div>
			</div>
		</>
	)
}

export default App;