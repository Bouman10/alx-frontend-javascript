import { Teacher } from './Teacher';

export default class Subject {
  teacher!: Teacher; // <- The `!` tells TypeScript it will be assigned later

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
