import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SideBarComponent } from './shared/header/side-bar/side-bar.component';
import { Dashboard1Component } from './modules/components/dashboard1/dashboard1.component';
import { Dashboard2Component } from './modules/components/dashboard2/dashboard2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,SideBarComponent,Dashboard1Component,Dashboard2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admira';
}
