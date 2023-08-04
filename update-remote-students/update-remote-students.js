
function updateRemoteStudents (studentsArr) {
  return studentsArr.map(student => {
  if (!student.location) {
  return {...student, location: 'remote' }
  }
  return student
  })}

module.exports = updateRemoteStudents;
