import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NavBarComponent,MatIconModule,MatButtonModule,MatCardModule,RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  imageSrc: string | ArrayBuffer = '/admin.jpg'; 
  adminMail:string="admin@163.com";
  isEmpty:boolean=false;
  navigations = [
  ]

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result; 
      };
      reader.readAsDataURL(file);
    }
  }
}
