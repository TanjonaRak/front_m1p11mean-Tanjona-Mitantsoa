import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {


  isConnected = false;

  getCustomer(){
    let customerLocal = localStorage.getItem("customer");
    if(customerLocal){
      this.isConnected = true;
    }
  }

  ngOnInit(){
    this.getCustomer();
  }

  logout(){
    this.isConnected = false
  }

}
