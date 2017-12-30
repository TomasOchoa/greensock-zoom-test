import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { ZoomService } from '../../services/zoom.service';
import {BrowserWindow} from '../../data/browser-window';

const TweenMax = require('gsap/TweenMax');
const EasePack = require('gsap/EasePack');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  BrowserWindow: BrowserWindow;
  Boxes:any[] = [];
  showZoomButton: boolean;



  constructor(private _zoomService: ZoomService) { }

  ngOnInit() {
    console.log('Main Component');
    this.BrowserWindow = new BrowserWindow(window.innerWidth, window.innerHeight);
    this.showZoomButton = false;
    this.initBoxes();
  }

  setViewBox(): string {
    return '0 0 ' + this.BrowserWindow.width + ' ' + this.BrowserWindow.height;
  }

  initBoxes(): void {
    const rows = 3;
    const columns = 3;
    const xSpacer = this.BrowserWindow.width/3;
    const ySpacer = this.BrowserWindow.height/3;
    const boxes = [];

    for(let i = 0; i < rows; i++){
      for(let j = 0; j < columns; j++){
        let box = {x: 0, y: 0, fill: 'none'};
        box.x = j > 0 ? j*xSpacer : 0;
        box.y = i > 0 ? i*ySpacer : 0;
        box.fill = i%1 === 0 ? 'red' : 'green';
        this.Boxes.push(box)
      }
    }
  }

  updateBoxes(): void {
    const rows = 3;
    const columns = 3;
    const xSpacer = this.BrowserWindow.width/3;
    const ySpacer = this.BrowserWindow.height/3;
    const boxes = [];
    let count = 0;
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < columns; j++){
        this.Boxes[count].x = j > 0 ? j*xSpacer : 0;
        this.Boxes[count].y = i > 0 ? i*ySpacer : 0;
        count++;
      }
    }
  }

  zoomIn(event): void {
    const SvgContainer = event.target.parentElement;
    const viewBox = event.target.getAttribute('x') + ' ' + event.target.getAttribute('y') + ' ' + event.target.getAttribute('width') + ' ' + event.target.getAttribute('height');
    console.log(viewBox);

    TweenMax.to(SvgContainer, 1, {attr: {viewBox: viewBox}, ease: EasePack.Power4.easeOut});
    this.showZoomButton = true;
  }

  zoomOut(svgContainer: SVGElement): void {
   const viewBox = '0 0 ' + svgContainer.getAttribute('width') + ' ' + svgContainer.getAttribute('height');
   console.log(viewBox);
   TweenMax.to(svgContainer, 1, {attr: {viewBox: viewBox}, ease: EasePack.Power4.easeIn});
    this.showZoomButton = false;
  }
}
