import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './galery.html',
  styleUrls: ['./galery.css']
})
export class App {
  protected readonly title = signal('LearningAngular');
}
