import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home/home-page.component';
import {ZoomquiltPageComponent} from './pages/zoomquilt/zoomquilt-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', pathMatch: 'full', component: HomePageComponent},
  {path: 'zoomquilt', pathMatch: 'full', component: ZoomquiltPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
