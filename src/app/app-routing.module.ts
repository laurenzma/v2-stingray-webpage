import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StingrayComponent } from './stingray/stingray.component';
import { AppdevComponent } from './appdev/appdev.component';
import { WebdevComponent } from './webdev/webdev.component';
import { DesigndevComponent } from './designdev/designdev.component';
import { TeamComponent } from './team/team.component';
import { TestoComponent } from './testo/testo.component';




const routes: Routes = [  { path: '', component: StingrayComponent},{ path: 'team', component: TeamComponent}, { path: 'testo', component: TestoComponent}, { path: 'appdev', component: AppdevComponent}, { path: 'webdev', component: WebdevComponent}, { path: 'designdev', component: DesigndevComponent},]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
