let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(studentArr) {
    rollCall('Math', studentArr);
  };
  // implement this function...
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
// Above is a somewhat contrived solution, since there aren't any circumstances, given this code, in which we wouldn't supply the set of students returned by subjects['Math'].

function subjectRollCall(subject, subjectObject) {
  console.log(subject + ':');
  subjectObject[subject].forEach(student => {
    console.log(student);
  });
}

function makeSubjectRollCall(subject) {
  return function(subjectObject) {
    subjectRollCall(subject, subjectObject);
  };
}

let mathRollCall = makeSubjectRollCall('Math');
mathRollCall(subjects);

let englishRollCall = makeSubjectRollCall('English');
englishRollCall(subjects);

let biologyRollCall = makeSubjectRollCall('Biology');
biologyRollCall(subjects);