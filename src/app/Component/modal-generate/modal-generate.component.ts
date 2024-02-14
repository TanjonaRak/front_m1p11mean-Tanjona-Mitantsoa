import { Component,Input,Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-generate',
  templateUrl: './modal-generate.component.html',
  styleUrls: ['./modal-generate.component.css']
})
export class ModalGenerateComponent {
  @Input() componentType!: Type<any>;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(this.componentType);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
