import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  percent: any;
  options: any;
 
  constructor() {
      this.percent = 80;
      this.options = {
        size: 50,
        rotate: 0
      };
  }
  ngOnInit() {
  }

}
