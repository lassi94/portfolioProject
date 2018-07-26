import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']

})
export class SkillsComponent implements OnInit {

    public lottieConfig: Object;
    private anim: any;
    private animationSpeed: number = 1;


    constructor() {
      this.lottieConfig = {
          path: '../../assets/images/data.json',
          autoplay: true,
          loop: true
      };
  }

  handleAnimation(anim: any) {
      this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed() {
      this.anim.setSpeed();
  }

  ngOnInit(){

  }

}
