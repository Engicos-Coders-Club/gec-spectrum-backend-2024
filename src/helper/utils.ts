    const departments = [
        {
            "_id": "65eed7ed2378ad4bb65db272",
            "name": "Information Technology Engineering",
            "__v": 0
        },
        {
            "_id": "65eed7fb2378ad4bb65db274",
            "name": "Computer Engineering",
            "__v": 0
        },
        {
            "_id": "65eed8182378ad4bb65db276",
            "name": "Electronics & Telecommunications Engineering",
            "__v": 0
        },
        {
            "_id": "65eed8352378ad4bb65db278",
            "name": "Electrical & Electronics Engineering",
            "__v": 0
        },
        {
            "_id": "65eed83e2378ad4bb65db27a",
            "name": "Mechanical Engineering",
            "__v": 0
        },
        {
            "_id": "65eed8442378ad4bb65db27c",
            "name": "Civil Engineering",
            "__v": 0
        },
        {
            "_id": "65eed84d2378ad4bb65db27e",
            "name": "VLSI Engineering",
            "__v": 0
        }
    ]
// Function to retrieve the department name by _id
export function getDepartmentNameById(id:string) {
    let department = ""
    departments.forEach((item) => {
        if(item._id === id)
            department = item.name
    })
    return department;
}
