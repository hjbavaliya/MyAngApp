import { Component, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../Services/UserService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  id: number = 0;
  userList: any;
  constructor(private route: ActivatedRoute,
    private userService: UserService ) { }

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this.getUserDetails(this.id);
  }

  // Get user detail
  getUserDetails(id: number) {
     
      return this.userService.getUserDetails(id).subscribe((data: any) => {
        this.userList = data;
         
      });
  }


}
