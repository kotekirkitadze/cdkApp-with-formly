import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ManagerService } from 'src/app/manager.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  todo = this.manager.todo;
  done = this.manager.done;

  doneList = this.manager.doneList;
  constructor(private manager: ManagerService) {}
  drop(event: CdkDragDrop<string[]>) {
    this.manager.drop(event);
  }
}
