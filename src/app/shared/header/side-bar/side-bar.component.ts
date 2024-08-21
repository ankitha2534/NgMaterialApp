import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule,NavBarComponent,MatIconModule,MatButtonModule,MatCardModule,RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  imageSrc: string = '/admin.jpg'; 
  adminMail:string="admin@133.com";
  isDashboardClicked:boolean=false;
  isMainNavClicked:boolean[]=new Array(15).fill(false);
  isSubNavClicked:boolean[]=new Array(15).fill(false);
  previousMain:number=0;
  previousSub:number=0;
  count:number=0;
  dashboard = [
    {icon:"airplay",titleName:"Dashboard",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Dashboard 1","Dashboard 2"]}
  ]
  navigations = [
    {icon:"calendar_today",titleName:"Calendar",isSubTitleExist:false},
    {icon:'public\trello.png',titleName:"Advance Table",isSubTitleExist:false},
    {icon:"task_alt",titleName:"Task",badge:"count",isSubTitleExist:false},
    {icon:"group",titleName:"Contacts",isSubTitleExist:false},
    {icon:'public\copy.png',titleName:"Material",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
      {titleName:"Form Controls",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Auto Complete","Checkbox","DatePicker","FormField","Input","Radio","Select","Slider","Side Toggle"]},
      {titleName:"Navigation",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Menu","SideNav","Toolbar"]},
      {titleName:"Layout",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Card","Divider","ExpansionPanel","Grid List","List","Tab","Tree","Drag & Drop"]},
      {titleName:"Buttons & Indicators",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Buttons","Button Toggle","Badge","Chips","Progress spinner","Progress bar","Ripple"]},
      {titleName:"Popups & Modals",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Bottom sheet","Dialog","Snack bar","Tooltip"]}
    ]},
    {icon:'public\layout.svg',titleName:"Forms",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Form Elements","Form Examples","Wizard","Editrs"]},
    {icon:"grid_view",titleName:"Tables",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Basic Table","Filter Table","Pagination Table","Sorting Table","Expandable Table","Column Reorder"]},
    {icon:'public\chart.svg',titleName:"Charts",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Apexchart","Echart","Chartjs","Ngax-Charts","Guage"]},
    {icon:'task_alt',titleName:"Widgets",isSubTitleExist:false},
    {icon:"person",titleName:"Profile",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Overview","Settings"]},
    {icon:'public/usertick.svg',titleName:"Sessions",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["403","404","500"]},
    {icon:'public\tool.svg',titleName:"Utilities",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["CSS Grid","CSS Helpers"]},
    {icon:'keyboard_double_arrow_down',titleName:"Menu",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
      {titleName:"Level 1.1",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
        {titleName:"Level 2.1",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
          {titleName:"Level 3.1",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
            {titleName:"Level 3.1",isSubTitleExist:false}
          ]}
        ]},
        {titleName:"Level 2.2",isSubTitleExist:false}
      ]},
      {titleName:"Level 1.2",isSubTitleExist:false}
    ]}
  ]

  // Method to upload file
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

  // Method to view drop down
  ViewSubMenu(){
    this.isDashboardClicked=!this.isDashboardClicked;
  }

  // Method to view main nav drop down
  ViewMainNav(i:number){
    if(i!=this.previousMain)this.isMainNavClicked=[];
    if(this.isMainNavClicked[i]==true){
      this.isMainNavClicked[i]=false;
    }
    else{
      this.isMainNavClicked[i]=true;
    }
    this.previousMain=i;
  }
  // Method to view sub nav drop down
  ViewSubNav(j:number){
    if(j!=this.previousSub)this.isSubNavClicked=[];
    if(this.isSubNavClicked[j]==false){
      this.isSubNavClicked[j]=true;
    }  
    else{
      this.isSubNavClicked[j]=false;
    }
    this.previousSub=j;
  }
}
