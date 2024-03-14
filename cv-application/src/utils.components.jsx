import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


function setDefaultDueDate() {
    const today = new Date;
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate());
    return format(tomorrow, 'yyyy-MM-dd');
}

export function Tenure({ startDate, endDate }) {
    const start = format(startDate, 'MMM yyyy');
    const end = format(endDate, 'MMM yyyy');
    return (
        <p id='tenure' className='tenure'>{`${start} - ${end}`}</p>
    )

}

export function Feat() {
    return {
        id: uuidv4(),
        text: '',
    }
}

export function Job(company, role, startDate, endDate) {
    const goodStartDate = startDate ? startDate : setDefaultDueDate();
    const goodEndDate = endDate ? endDate : setDefaultDueDate();
    let feats = [];

    return {
        id: uuidv4(),
        company,
        role,
        startDate: goodStartDate,
        endDate: goodEndDate,
        feats,
        display: true,
    }
}


export function Degree(type, area, school, startDate, endDate) {
    const goodStartDate = startDate ? startDate : setDefaultDueDate();
    const goodEndDate = endDate ? endDate : setDefaultDueDate();

    return {
        id: uuidv4(),
        type,
        area,
        school,
        startDate: goodStartDate,
        endDate: goodEndDate
    }
}

export function Skill() {
    return {
        id: uuidv4(),
        text: '',
    }
}

Tenure.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string
}
