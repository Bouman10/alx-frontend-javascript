interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Abdulhakeem',
  lastName: 'Abdullahi',
  age: 22,
  location: 'Kano',
};

const student2: Student = {
  firstName: 'Fatima',
  lastName: 'Aliyu',
  age: 21,
  location: 'Abuja',
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement('table');
table.style.border = '1px solid black';
table.style.width = '50%';
table.style.margin = '20px';
table.style.borderCollapse = 'collapse';

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = '1px solid black';
  firstNameCell.style.padding = '10px';

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '10px';

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
