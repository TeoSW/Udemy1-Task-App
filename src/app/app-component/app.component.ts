import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'udemyApp';

  users = DUMMY_USERS;
  selectedUserId?: string; 

  get selectedUser(){
    return this.users.find( (user) => user.id === this.selectedUserId );
  }
  //* find a specific element, in this case a function that recieves the user it's currently looking at
  //* and return true if it's the element we're looking for, false otherwise

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
