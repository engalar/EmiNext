import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GePageComponent} from './ge-page/ge-page.component';
import {GePageRoutingModule} from './ge-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GePageRoutingModule,
  ],
  declarations: [GePageComponent]
})
export class GePageModule {
}
