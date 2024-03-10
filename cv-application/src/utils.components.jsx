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

function Job(company, role, startDate, endDate) {
    // function addFeat() {
    //     return [...feats, Feat()]
    // }

    // function updateFeat(id, text) {
    //     return feats.map(feat => {
    //         if (feat.id === id) {
    //             feat.text = text;
    //         }
    //         return feat
    //     })
    // }

    // function deleteFeat(id) {
    //     return feats.filter(feat => feat.id !== id)
    // }

    const goodStartDate = startDate !== '' ? startDate : setDefaultDueDate();
    const goodEndDate = endDate !== '' ? endDate : setDefaultDueDate();
    let feats = [];

    return {
        id: uuidv4(),
        company,
        role,
        startDate: goodStartDate,
        endDate: goodEndDate,
        feats,
        // addFeat,
        // updateFeat,
        // deleteFeat,
        display: true,
    }
}

export default Job;