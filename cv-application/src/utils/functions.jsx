import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

function setDefaultDueDate() {
    const today = new Date;
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate());
    return format(tomorrow, 'yyyy-MM-dd');
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

export function Skill(description) {
    const goodDescription = description ? description : ''
    return {
        id: uuidv4(),
        text: goodDescription,
    }
}