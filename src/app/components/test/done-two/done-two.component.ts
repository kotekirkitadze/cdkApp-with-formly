import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-done-two',
  templateUrl: './done-two.component.html',
  styleUrls: ['./done-two.component.scss'],
})
export class DoneTwoComponent implements OnInit {
  constructor(private manager: ManagerService) {}

  ngOnInit(): void {}
  doneTwo = this.manager.done;
  todoList = this.manager.doneList;
  drop(event: CdkDragDrop<string[]>) {
    this.manager.drop(event);
  }
}
