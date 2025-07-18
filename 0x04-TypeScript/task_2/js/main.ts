// Interfaces for Director and Teacher
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Testing the function
console.log(createEmployee(200));    // Should return a Teacher instance
console.log(createEmployee(1000));   // Should return a Director instance
console.log(createEmployee('$500')); // Should return a Director instance
// Type guards
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work based on employee role
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// ✅ Test Cases
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
// String literal type
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  if (todayClass === 'History') return 'Teaching History';
}

// ✅ Test cases
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History

