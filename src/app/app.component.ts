import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit {
  title = 'My First Angular';

  constructor(private spinnerService: NgxSpinnerService) {
     
  }
  
  ngOnInit(): void {
    this.spinnerService.show();
  }
  ngAfterViewInit(): void {
    this.spinnerService.hide();
  }
}
