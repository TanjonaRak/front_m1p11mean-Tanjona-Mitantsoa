import { Component } from '@angular/core';


function delay(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    // '../../../assets/css/owl.carousel.min.css'
  ]
})
export class HomeComponent {

  loading  = true;
  

  ngOnInit(): void {
    this.LoaderStatic();
    console.log(this.loading)
  }

  async LoaderStatic (){
    await delay(500);
    this.loading = false
  }
}
