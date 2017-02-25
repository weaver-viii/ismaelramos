import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'ir-zoomquilt-page',
  templateUrl: 'zoomquilt-page.component.html',
  styleUrls: ['zoomquilt-page.component.scss']
})

export class ZoomquiltPageComponent implements OnDestroy {
  private audio: any;

  constructor() {
    this.audio = new Audio('assets/audio/applescal.mp3');
    this.audio.play();
  }

  ngOnDestroy() {
    this.audio.pause();
  }
}
