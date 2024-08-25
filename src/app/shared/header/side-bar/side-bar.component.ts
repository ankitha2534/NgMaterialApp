import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink,RouterOutlet,ActivatedRoute,Router } from '@angular/router';
import { Dashboard1Component } from '../../../modules/components/dashboard1/dashboard1.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule,NavBarComponent,MatIconModule,MatButtonModule,MatCardModule,RouterLink,RouterOutlet,Dashboard1Component],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  imageSrc: string = '/admin.jpg'; 
  adminMail:string="admin@133.com";
  isDashboardClicked:boolean=false;
  isMainNavClicked:boolean[]=new Array(15).fill(false);
  isSubNavClicked:boolean[]=new Array(15).fill(false);
  isNestedNavClicked:boolean[]=new Array(15).fill(false);
  isNestedSubNavClicked:boolean[]=new Array(15).fill(false);
  previousMain:number=-1;
  previousSub:number=-1;
  previousNestedSub:number=0;
  previousNestedSub1:number=0;
  count:number=0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  dashboard = [
    {icon:"airplay",titleName:"Dashboard",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Dashboard 1","Dashboard 2"]}
  ]
  navigations:any[] = [
    {icon:"calendar_today",titleName:"Calendar",isSubTitleExist:false},
    {icon:"table",titleName:"Advance Table",isSubTitleExist:false},
    {icon:"task_alt",titleName:"Task",isSubTitleExist:false},
    {icon:"group",titleName:"Contacts",isSubTitleExist:false},
    {icon:'tab_inactive',titleName:"Material",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
      {titleName:"Form Controls",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Auto Complete","Checkbox","DatePicker","FormField","Input","Radio","Select","Slider","Side Toggle"]},
      {titleName:"Navigation",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Menu","SideNav","Toolbar"]},
      {titleName:"Layout",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Card","Divider","ExpansionPanel","Grid List","List","Tab","Tree","Drag & Drop"]},
      {titleName:"Buttons & Indicators",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Buttons","Button Toggle","Badge","Chips","Progress spinner","Progress bar","Ripple"]},
      {titleName:"Popups & Modals",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Bottom sheet","Dialog","Snack bar","Tooltip"]}
    ]},
    {icon:"view_comfy",titleName:"Forms",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Form Elements","Form Examples","Wizard","Editrs"]},
    {icon:"grid_view",titleName:"Tables",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Basic Table","Filter Table","Pagination Table","Sorting Table","Expandable Table","Column Reorder"]},
    {icon:'pie_chart',titleName:"Charts",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Apexchart","Echart","Chartjs","Ngax-Charts","Guage"]},
    {icon:'task_alt',titleName:"Widgets",isSubTitleExist:false},
    {icon:"person",titleName:"Profile",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["Overview","Settings"]},
    {icon:"person_check",titleName:"Sessions",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["403","404","500"]},
    {icon:'build',titleName:"Utilities",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:["CSS Grid","CSS Helpers"]},
    {icon:'keyboard_double_arrow_down',titleName:"Menu",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
      {titleName:"Level 1.1",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
        {titleName:"Level 2.1",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
          {titleName:"Level 3.1",isSubTitleExist:true,dropDown1:"keyboard_arrow_right",dropDown2:"keyboard_arrow_down",subtitles:[
            {titleName:"Level 4.1",isSubTitleExist:false}
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
      this.isDashboardClicked=false;
    }
    this.previousMain=i;
  }
  // Method to view sub nav drop down
  ViewSubNav(j:number){
    if(j!=this.previousSub)this.isSubNavClicked=[];
    if(this.isSubNavClicked[j]==true){
      this.isSubNavClicked[j]=false;
    }  
    else{
      this.isSubNavClicked[j]=true;
    }
    this.previousSub=j;
  }

  ViewNestedNav(k:number){
    if(k!=this.previousNestedSub)this.isNestedNavClicked=[];
    if(this.isNestedNavClicked[k]==false){
      this.isNestedNavClicked[k]=true;
    }  
    else{
      this.isNestedNavClicked[k]=false;
    }
    this.previousNestedSub=k;
  }

  ViewNestedSubNav(l:number){
    if(l!=this.previousNestedSub1)this.isNestedSubNavClicked=[];
    if(this.isNestedSubNavClicked[l]==false){
      this.isNestedSubNavClicked[l]=true;
    }  
    else{
      this.isNestedSubNavClicked[l]=false;
    }
    this.previousNestedSub1=l;
  }

  // Method to check current User interaction and navigate to the component  
  checkAndNavigate(subtitle : string) {
    if (subtitle === 'Dashboard 1') {
      this.router.navigate(['/Dashboard/Dashboard1']);
    } else if (subtitle === 'Dashboard 2') {
      this.router.navigate(['/Dashboard/Dashboard2']);
    } else {
      this.router.navigate(['/Dashboard/Dashboard1']); // Default navigation
    }
  }

}
