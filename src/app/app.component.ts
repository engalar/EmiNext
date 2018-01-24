import {AfterViewInit, Component, ContentChild, ViewChild} from '@angular/core';
import {GePageComponent} from './ge-page/ge-page/ge-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(GePageComponent) page: GePageComponent;
  isMenuOpened = false;
  isInSearch = false;

  ngAfterViewInit(): void {
    console.log(this.page);
  }
}
