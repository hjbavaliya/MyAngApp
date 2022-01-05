import { Component, OnInit } from '@angular/core';
import { User, UserList } from '../CustomModels/UserViewModel';
import { UserService } from '../Services/UserService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.getUserList();

  }

  // Get user list
  getUserList() {
    return this.userService.getUserList().subscribe((data: any) => {
      this.userList = data;
      //console.log(this.userList);
    });
  }

  deleteUser(userId: number) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.userService.deleteUser(userId).subscribe(data => {
        this.getUserList()
      })
    }
  }
}
