import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet,Router,NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,FormsModule,MatCheckboxModule,MatButtonModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin : boolean = true;

  name = 'Get Current Url Route Demo';
  currentRoute: string = "";

  constructor(private router: Router) {
        console.log(this.router.url);
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
          this.currentRoute = event.urlAfterRedirects;
          if (this.currentRoute === '/') {
            this.isLogin = true;
          }
          else if (this.currentRoute === '/Login') {
            this.isLogin = true;
          }
          else{
            this.isLogin = false;
          }
        });
      }
}
