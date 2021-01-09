import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   public ngmodel:any;
  ngOnInit(): void {
    this.ngmodel=new User('Yash','Duddalwar','yash123','yash@123','yashduddalwar@gmail.com','student');
  }

}
