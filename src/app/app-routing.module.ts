import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', pathMatch: 'full', component: HomePageComponent},
  {path: 'asd', pathMatch: 'full', component: HomePageComponent}
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
