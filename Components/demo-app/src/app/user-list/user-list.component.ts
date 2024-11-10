import { Component } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { User } from './types';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [ 
    { name: 'Dayana', id: 1, age: 22 },
    { name: 'Gogo', id: 2, age: 42 },
    { name: 'Milena', id: 3, age: 25 },
    { name: 'Atanasia', id: 4, age: 20 },
    { name: 'Kiril', id: 5, age: 50 }
  ]
}
