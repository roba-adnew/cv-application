import { useState } from 'react';
import HeaderForm from './Header/HeaderForm.jsx';
import HeaderDisplay from './Header/HeaderDisplay.jsx';
import ProfExperienceForm from './ProfExperience/ProfExperienceForm.jsx';
import ProfExperienceDisplay from './ProfExperience/ProfessionalExpDisplay.jsx';
import { Job, Degree } from './utils.components.jsx';
import { defaultHeader, defaultJob, defaultDegree } from './utils.constants.jsx';
import EducationForm from './EducationForm/EducationForm.jsx';
import EducationDisplay from './EducationForm/EducationDisplay.jsx';
import SkillsForm from './Skills/SkillsForm.jsx';
import './App.css';
import SkillsDisplay from './Skills/SkillsDisplay.jsx';

function App() {
	const [header, setHeader] = useState(() => (defaultHeader));
	const [jobs, setJobs] = useState([defaultJob]);
	const [education, setEducation] = useState([defaultDegree]);
	const [skills, setSkills] = useState([]);

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
					<h1>Resume Builder</h1>
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
					<SkillsForm 
						skills={skills}
						setSkills={setSkills}
					/>
				</div>
				<div id='display'>
					<HeaderDisplay headerData={header} />
					<ProfExperienceDisplay jobData={jobs} />
					<EducationDisplay educationData={education} />
					<SkillsDisplay skillsData={skills} />
				</div>
			</div>
		</>
	)
}

export default App;