import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  User = {
    name: 'Outang',
    firstName: 'Laurent',
    age: 25,
    quote: 'Pas de cerveau, pas de migraines',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  constructor() {}

  ngOnInit(): void {}

  showAge: boolean = true;
  displayAge() {
    this.showAge = false;
  }
}
