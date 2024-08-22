import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SideBarComponent } from './shared/header/side-bar/side-bar.component';

export const routes: Routes = [
    {path:'',component:LoginComponent, pathMatch: 'full' },
    {path:'Login',component:LoginComponent},
    {path:'SignUp',component:LoginComponent},
    {path:'Dashboard',component:SideBarComponent}
];
