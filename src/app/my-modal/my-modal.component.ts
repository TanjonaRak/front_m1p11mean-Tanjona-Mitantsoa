import { Component,Input,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Employee } from '../model/modelAll';
import { NgForm } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';


@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent {

  @Input() title!: string;
  @Input() content!: string;

  employee_to_update !: Employee 


  constructor(private service : EmployeeServiceService,public dialogRef: MatDialogRef<MyModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private sanitizer: DomSanitizer ) {
    this.title = data.title;
    this.content = data.content
    console.log(data.employee)
    this.employee_to_update =data.employee 
   }

   UpdateEmployee(form :NgForm){
      this.employee_to_update.name = form.value.name
      console.log(this.employee_to_update)
      this.closeDialog(); 
      this.service.UpdateEmployee(this.employee_to_update).subscribe((res:any)=>{
          console.log(res)
      })
   }

  closeDialog(): void {
    this.dialogRef.close();
  }

  get(): void {
    // Actions à effectuer lorsque le bouton est cliqué
    console.log("bjhj")
  }
  getSafeContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.content);
  }
}
