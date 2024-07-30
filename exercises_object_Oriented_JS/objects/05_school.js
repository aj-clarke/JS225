/*

Create a school object. The school object uses the same kind of student object as the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

// addStudent:
//   # create new student
//     - validate student YEAR is equal to '1st', '2nd', '3rd', '4th', or '5th'
//       - if not equal (is Invalid), console log 'Invalid Year'
//       - if it is valid, continue creation 
//   # add created student to `school.students` (`this.students`) collection of students


// enrollStudent: 
//   # enroll a student into a course (add a course object into a students `courses` property collection (array) value
//     # should consist of the `name` and `code` for the course

addGrade: 
  Adds the grade of a student for a course.
    # get a course ID from an existing `courses` collection (array of course objects) (the index of the correct element)
    # add the `grade` to the object to the course object at that index position

// getReportCard: 
//   Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
//     # takes the `student` as an argument
//     # iterates the students `courses` property value (the array)
//       # if the `obj.grade` value exists
//         # log the `name` and the `grade` (ex: 'Math: 95')
//       # else
//         # log the `name` and `'In Progress'` (ex: 'Physics: In progress' )

// courseReport:
//   Logs the grades of all students for a given course name. Only student with grades are part of the course report.
//     # going to be a double iteration or a filter

To test your code, use the three student objects listed below. Using the three student objects, produce the following values from the getReportCard and courseReport methods respectively.

Copy Code
// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects
*/

let paul = {
  name: 'paul',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};


let mary = {
  name: 'Mary',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

let school = {
  students: [],

  addStudent(name, year) {
    if (this.isInvalidStudentYear(year)) return console.log('Invalid Year');

    let student = {
      name,
      year,
      courses: [],
    };
    this.students.push(student);
  },

  isInvalidStudentYear(year) {
    let years = ['1st', '2nd', '3rd', '4th', '5th'];
    if (!years.includes(year)) return true;
  },

  enrollStudent(studentName, courseName, courseCode) {
    let index = this.getStudentIndex(studentName);
    this.students[index].courses['courseName'] = courseName;
    this.students[index].courses['courseCode'] = courseCode;
  },

  getStudentIndex(studentName) {
    for (let idx = 0; idx < this.students.length; idx++) {
      if (this.students[idx].name === studentName) {
        return idx;
      }
    }
  },

  getReportCard(studentName) {
    let studentObj = this.students.filter(obj => obj.name === studentName.name)[0]

    studentObj.courses.forEach(course => {
      if (course.grade) console.log(course.name + ': ' + course.grade);
      else console.log(course.name + ': In Progress');
    });
  },
  
  courseReport(courseName) {
    let studentsList = [];
    let grades = [];
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && course.grade) {
          studentName = student.name[0].toUpperCase() + student.name.slice(1);
          studentsList.push(studentName);
          grades.push(course.grade);
        }
      });
    });
        
    if (studentsList.length === 0) return console.log('undefined');
    
    this.displayCourseReport(courseName, studentsList, grades);
  },

  displayCourseReport(courseName, studentsList, grades) {
    console.log('=' + courseName + " Grades=")

    studentsList.forEach((_, idx) => {
      console.log(studentsList[idx] + ': ' + grades[idx]);
    });

    let avgGrade = grades.reduce((total, cv) => total += cv) / grades.length;
    console.log('---');
    console.log('Course Average: ' + avgGrade);
  },
}

function createStudent(name, studentYear) {
  return {
    name,
    studentYear,
    courses: [],
  };
}

school.addStudent('aj', '1st');
console.log(school);
school.enrollStudent('aj', 'Math', 101);
console.log(school.students)

// console.log(paul);
// // {
// //   name: 'paul',
// //   year: '3rd',
// //   courses: [
// //     { name: 'Math', code: 101, grade: 95, },
// //     { name: 'Advanced Math', code: 102, grade: 90, },
// //     { name: 'Physics', code: 202, }
// //   ],
// // }

// console.log(mary);
// // {
// //   name: 'Mary',
// //   year: '1st',
// //   courses: [
// //     { name: 'Math', code: 101, grade: 91, },
// //   ],
// // }

// console.log(kim);
// // {
// //   name: 'Kim',
// //   year: '2nd',
// //   courses: [
// //     { name: 'Math', code: 101, grade: 93, },
// //     { name: 'Advanced Math', code: 102, grade: 90, },
// //    ],
// // }

// // getReportCard outputCopy Code
// school.getReportCard(paul);
// // = Math: 95
// // = Advanced Math: 90
// // = Physics: In progress

// courseReport outputCopy Code
// school.courseReport('Math');
// // = =Math Grades=
// // = Paul: 95
// // = Mary: 91
// // = Kim: 93
// // = ---
// // = Course Average: 93

// // school.courseReport('Advanced Math');
// // // = =Advanced Math Grades=
// // // = Paul: 90
// // // = Kim: 90
// // // = ---
// // // = Course Average: 90

// school.courseReport('Physics');
// // = undefined


// let paul = {
//   name: 'paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// };


// let mary = {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// };

// let collection = [paul, mary];

// // console.log(collection)


// collection.forEach(student => {
//   student.courses.forEach(course => {
//     if (course.grade) {
//       console.log(course);
//     }
//   })
// });

// console.log(test)