import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ ProfileService ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
   public profileSearch = 'karobia001';
   // public newUserName: string;
   


  constructor(  ) {
   }
  
   }


  ngOnInit() {
   
  
} }
