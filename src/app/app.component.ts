import { Component,OnInit } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(){};
  ngOnInit(){
  $(document).foundation();
  };
  title = 'Tour of Heroes';

}
