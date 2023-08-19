import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName: string = '';
  tasksArr: string[] = [];

  addTask(todoForm: NgForm) {
    this.taskName = todoForm.value.taskName;
    this.tasksArr.push(this.taskName);
    todoForm.resetForm();
  }

  deleteTask(i: number) {
    this.tasksArr.splice(i, 1);
  }

  completed(compTask: HTMLInputElement) {
    compTask.classList.add('line-through');
    compTask.style.color = 'green';
  }
}
