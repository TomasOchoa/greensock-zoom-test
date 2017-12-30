import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {BrowserWindow} from './data/browser-window';
import {MainComponent} from './components/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MainComponent) MainComponent;

  title = 'app';

  constructor(){ }

  onResize(event): void {
    this.MainComponent.BrowserWindow.width = event.target.innerWidth;
    this.MainComponent.BrowserWindow.height = event.target.innerHeight;
    this.MainComponent.updateBoxes();
  }
}
