import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar';
import { FooterComponent } from './footer/footer';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationBarComponent, 
    FooterComponent,
    UserListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';

  catImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR96bi1iH6GWM1wRmQezQHTqC30PPUaBNVmg&s";
}
 