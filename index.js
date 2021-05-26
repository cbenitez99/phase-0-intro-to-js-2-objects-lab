// const employee = {
//     name: "Cristian",
//     streetAddress: "420 Fountain Lane"
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return Object.assign({}, employee, {[key]: value});
// };

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     return Object.assign(employee, {[key]: value});
    
// };

// function deleteFromEmployeeByKey(employee, key) {
//     const newEmp = Object.assign({}, employee);
//     delete newEmp[key];
//     return newEmp;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// }

const employee = {
    name: 'Cristian',
    streetAddress: '321 XD Rd.'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]: value});
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;   
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}