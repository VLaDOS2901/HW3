import { Component, OnInit } from '@angular/core';
import { IUser } from '../userObject';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  login: string = '';
  user: IUser = {
    name: "",
    login: "",
    html_url: "",
    blog: "",
    location: "",
    email: "",
    followers: 0,
    following: 0,
    avatar_url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"
  };
  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {  
  }

  find(){
    this.UsersService.getUserByLogin(this.login).subscribe(result => {
      this.user = result;
    });
  }
}
