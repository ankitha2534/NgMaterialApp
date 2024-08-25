import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SideBarComponent } from './shared/header/side-bar/side-bar.component';
import { Dashboard1Component } from './modules/components/dashboard1/dashboard1.component';
import { Dashboard2Component } from './modules/components/dashboard2/dashboard2.component';

export const routes: Routes = [
    {path:'',component:LoginComponent, pathMatch: 'full' },
    {path:'Login',component:LoginComponent},
    {path:'SignUp',component:LoginComponent},
    {path:'Dashboard',component:SideBarComponent,
        children : [
            {path:'Dashboard1',component:Dashboard1Component},
            {path:'Dashboard2',component:Dashboard2Component}
        ]
    },
];
