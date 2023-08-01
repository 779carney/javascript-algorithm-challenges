// takes an array of objects as argument
// returns new array 
// updated object with location propery if they dont have a location property
// 


// Please do not change the name of this function
function updateRemoteStudents (studentsArr) {
  return studentsArr.map(student => {
  if (!student.location) {
  return {...student, location: 'remote' }
  }
  return student
  })}

module.exports = updateRemoteStudents;
