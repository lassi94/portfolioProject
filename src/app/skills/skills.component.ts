import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']

})
export class SkillsComponent implements OnInit {

    public lottieConfig; lottieConfig2; lottieConfig3; lottieConfig4; lottieConfig6; lottieConfig5: Object;
    private anim; anim2; anim3; anim4; anima6; anim5: any;
    private animationSpeed; animationSpeed2; animationSpeed3; animationSpeed4; animationSpeed6; animationSpeed5: number = 1;


    constructor() {
      this.lottieConfig = {
          path: '../../assets/images/data.json',
          autoplay: true,
          loop: false
      };

      this.lottieConfig2 = {
        path: '../../assets/images/data2.json',
        autoplay: true,
        loop: false
      };
      this.lottieConfig3 = {
        path: '../../assets/images/data3.json',
        autoplay: true,
        loop: false
      };

      this.lottieConfig4 = {
        path: '../../assets/images/data4.json',
        autoplay: 'true',
        loop: false
      };
      
      this.lottieConfig6 = {
        path: '../../assets/images/data5.json',
        autoplay: 'true',
        loop: false
      };

      this.lottieConfig5 = {
        path: '../../assets/images/data6.json',
        autoplay: 'true',
        loop: false
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
