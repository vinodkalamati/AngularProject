import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {provideRoutes,ROUTER_CONFIGURATION} from '@angular/router';
import {BannerComponent} from './banner/banner.component';
import {MoviedetailComponent} from './moviedetail/moviedetail.component';

const routes: Routes = [
  {path :'',component:BannerComponent},
  {path :'about',component:MoviedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
