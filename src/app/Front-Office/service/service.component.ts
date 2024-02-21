import { Component } from '@angular/core';


function delay(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  loading  = true;
  

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.LoaderStatic();
    console.log(this.loading)
  }

  async LoaderStatic (){
    await delay(500);
    this.loading = false
  }

}
