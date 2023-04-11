// use local storage to manage cart data
const addToDb = id => {
    let AppliedJobs = getAppliedJobs();
    // add quantity
    const quantity = AppliedJobs[id];
    if (!quantity) {
        AppliedJobs[id] = new Date() ;
    }
    localStorage.setItem('applied-data', JSON.stringify(AppliedJobs));
}

const removeFromDb = id => {
    const AppliedJobs = getAppliedJobs();
    if (id in AppliedJobs) {
        delete AppliedJobs[id];
        localStorage.setItem('applied-data', JSON.stringify(AppliedJobs));
    }
}

const getAppliedJobs = () => {
    let AppliedJobs = {};

    //get the shopping cart from local storage
    const storedData = localStorage.getItem('applied-data');
    if (storedData) {
        AppliedJobs = JSON.parse(storedData);
    }
    return AppliedJobs;
}

const deleteAppliedJobs = () => {
    localStorage.removeItem('applied-data');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobs,
    deleteAppliedJobs
}
