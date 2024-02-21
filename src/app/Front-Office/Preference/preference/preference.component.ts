import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
function delay(ms:number){
  return new Promise(resolve=>setTimeout(resolve,ms))
}

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent {

  showComponent !: string| null;

  isFavoris !:boolean;
  loading  = true;


  constructor(private route: ActivatedRoute,private router :Router) {}

  ngOnInit(): void {
    window.scrollTo(0,0);
    // window.scrollY(0:Number)
    // console.log("sdvdfvfdvefdv")
    // this.getRouter();
    // this.router.events.subscribe((event)=>{
    //   if(event instanceof NavigationEnd){
    //      console.log(this.router.url)
         
    //     if(this.router.url == " /preference"){
    //       console.log('MADE 2 ')
    //       this.isFavoris = false;
    //     }if(this.router.url == "/preference/favoris"){
    //     console.log("MDD")
    //       this.isFavoris = true
    //     }
    //   }
    // })
    this.route.paramMap.subscribe(params => {
      this.showComponent = params.get('url');
      console.log(params.keys)
      if(this.showComponent ==="favoris"){
        window.scrollTo(0,0);
        this.loading = true;
        this.LoaderStatic()
        this.isFavoris = true;
      }else{
        window.scrollTo(0,0);
        this.loading = true;
        this.LoaderStatic()
        this.isFavoris = false
      }
      // console.log('URL récupérée :', this.showComponent);
      // this.ngAfterViewInit();
    });
  }

  getRouter(){
    
  }
  async LoaderStatic (){
    await delay(500);
    this.loading = false
  }
}
