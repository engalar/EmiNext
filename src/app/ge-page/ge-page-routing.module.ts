import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GePageComponent} from './ge-page/ge-page.component';

const routes: Routes = [
  {path: 'ge', component: GePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GePageRoutingModule {
}

export const routedComponents = [GePageComponent];
