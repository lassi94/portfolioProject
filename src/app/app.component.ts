import { Component } from '@angular/core';
import { fadeAnim } from './animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnim],
  host: {'[@fadeAnim]': ''}
})
export class AppComponent {
  title = 'app';
}
