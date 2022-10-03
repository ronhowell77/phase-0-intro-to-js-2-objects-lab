const employee = {
  name: 'Sam',
  streetAddress: ''
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newobj= {...employee};
    newobj[key] = value;
    return newobj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newKey= {...employee};
    delete newKey[key];
    return newKey
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee
}