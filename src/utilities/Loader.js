

const JobDetailsLoader = async(id) => {
    const load_data = await fetch("/data/job's_data.json")
    const data = await load_data.json()
    const main_data = data.find(singleData => singleData._id == id)
    return main_data
}
export default JobDetailsLoader;