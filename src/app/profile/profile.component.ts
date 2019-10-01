import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { ProfileService } from '../profile.service';

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
   repository: Repository;
   reporesults: any;
   userName: string;



  constructor( public profileService: ProfileService ) {
   }
   findProfile() {
     this.profileService.updateProfile(this.userName);
     this.profileService.getProfile();
     this.user = this.profileService.user;
     this.profileService.getProfileRepo(this.userName);
     this.reporesults = this.profileService.otherRepo;
   }


  ngOnInit() {
   this.profileService.getProfile();
   this.user = this.profileService.user;
   this.profileService.getProfileRepo(this.userName);
   this.repository = this.profileService.repository;
   console.log(this.profileService.repository.name);
   // this.getRepositoryRequest.getProfileRepo(this.profileSearch);
} }
