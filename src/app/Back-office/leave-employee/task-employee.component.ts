import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { data, task } from 'src/app/model/modelAll';
@Component({
  selector: 'app-task-employee',
  templateUrl: './task-employee.component.html',
  styleUrls: ['./task-employee.component.css'],
  // standalone: true,
  // imports: [CdkDropList, CdkDrag],
})
export class LeaveEmployeeComponent {

  todo :any[]=data ;
  dataTast = data;
  done :any[]=[];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.container.id)
      alert("Vous etes sure cette action")
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
