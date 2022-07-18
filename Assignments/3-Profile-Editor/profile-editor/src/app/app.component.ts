import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-editor';

  user: User = {name: "Dean", age: 32, favoriteColor: "Red"};

  displayEdit: boolean = false;

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }

  formUser: User = {
    name: "Sam",
    age: 25,
    favoriteColor: "White"
  };

  saveChanges(form: NgForm) {
    this.toggleEdit();

    this.user.age = form.controls["age"].value;
    this.user.name = form.controls["name"].value;
    this.user.favoriteColor = form.controls["favoriteColor"].value;
    
  }

}
