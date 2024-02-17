import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'popop';

  constructor(private matDialog:MatDialog){}
  
  openDialog(){
    this.matDialog.open(TestComponent,{
      width:"433px"
    })
  }
}
