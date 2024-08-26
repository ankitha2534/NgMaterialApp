import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatProgressBarModule],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css'
})
export class Dashboard1Component {
  financialMetrics : any[] =[
    {type:'Investment',period:'Monthly',ammount:'$47000',revenueTitle:'Total Revenue',revenuePercent:'55',percent:'%'},
    {type:'Sales',period:'Annual',ammount:'$22784',revenueTitle:'Total Revenue',revenuePercent:'42',percent:'%'},
    {type:'Cost',period:'Today',ammount:'$1587',revenueTitle:'Total Revenue',revenuePercent:'75',percent:'%'},
    {type:'Profit',period:'Weekly',ammount:'$1400',revenueTitle:'Total Revenue',revenuePercent:'48',percent:'%'}
  ]
}
