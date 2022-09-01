import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor(private manager: ManagerService) {}

  ngOnInit(): void {}
  done = this.manager.done;
  todoList = this.manager.todoList;
  drop(event: CdkDragDrop<string[]>) {
    this.manager.drop(event);
  }
}
