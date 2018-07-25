import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  chart = [];

  constructor() {
     
  }
  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: 'HTML5' 
      }
    })


  }

}
