import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { expenses } from 'src/app/model/modelAll';
import { ExpensesApiService } from 'src/app/service/Expenses/expenses-api.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {


  OpenSnackBar (message:string,action:string){
    this.snak_Bar.open(message,action,{
      duration:500,
      panelClass:['toast-success'],
      verticalPosition:'top'
    });
  }


  expense_to_add ={
    name_expense:"",
    date:new Date(),
    amount:0
  }as expenses;
  constructor(private expensesApi : ExpensesApiService,private snak_Bar : MatSnackBar){

  }

  AddExpenses(form:NgForm){
    // console.log(form.value.date_expenses)
   
    if(form.valid){
      this.expense_to_add.name_expense = form.value.name_expense;
      this.expense_to_add.date = form.value.date_expenses;
      this.expense_to_add.amount= form.value.amount;
      this.expensesApi.SaveExpenses(this.expense_to_add).subscribe((res:any)=>{
          if(res.status === 200){
            this.OpenSnackBar("Save with Success","Success")      
          }else{
            this.OpenSnackBar(res.message,"Error")       
          }
      })
    }else{
      this.OpenSnackBar("Input is obligation","Warning")
    }

  }

}
