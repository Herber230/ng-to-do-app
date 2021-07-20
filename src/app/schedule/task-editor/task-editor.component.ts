import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Task} from '../types/Task';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {

  @Input() task?: Task;

  constructor() { }

  ngOnInit(): void {
  }

  get displayText() {
    return this.task ? this.task?.displayText : '';
  }
  set displayText(value) {
    if (!this.task) {
      this.task = {} as Task;
    }
    this.task.displayText = value;
  }

  get description() {
    return this.task ? this.task?.description : '';
  }
  set description(value) {
    if (!this.task) {
      this.task = {} as Task;
    }
    this.task.description = value;
  }

  get status() {
    return this.task ? this.task?.status : '';
  }
  set status(value) {
    if (!this.task) {
      this.task = {} as Task;
    }
    this.task.status = value as 'pending' | 'onGoing' | 'done';
  }
}
