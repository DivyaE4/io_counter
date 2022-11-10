import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Counter App';
  number=0;

  increase(){
    this.number=this.number + 1;
  }

  decrease(){
    this.number=this.number -1;
  }
}
