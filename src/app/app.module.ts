import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {HomePageModule} from './home-page/home-page.module';
import {GePageModule} from './ge-page/ge-page.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot([{path: '', pathMatch: 'full', component: AppComponent}]),
    MaterialModule,
    HomePageModule,
    GePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
