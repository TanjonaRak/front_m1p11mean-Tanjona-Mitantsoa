import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  loading  = true;
  

  ngOnInit(): void {
    for(let i = 0;i<100000000;i++){
      // console.log("eefef") 
      if(i==9999999){
        this.loading = false
      }
    }
    console.log(this.loading)
  }

}
