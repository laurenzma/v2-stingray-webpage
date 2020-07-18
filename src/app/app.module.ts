
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'; // CLI imports AppRoutingModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StingrayComponent } from './stingray/stingray.component';
import { MaincardComponent } from './maincard/maincard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductcardsComponent } from './productcards/productcards.component';
import { AppdevComponent } from './appdev/appdev.component';
import { WebdevComponent } from './webdev/webdev.component';
import { DesigndevComponent } from './designdev/designdev.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from './connection.service';
import { HttpClientModule } from '@angular/common/http';
import { ParallaxDirective } from './parallax.directive';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { AboutmobileComponent } from './aboutmobile/aboutmobile.component';
import { TestoComponent } from './testo/testo.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    StingrayComponent,
    MaincardComponent,
    NavbarComponent,
    ProductcardsComponent,
    AppdevComponent,
    WebdevComponent,
    DesigndevComponent,
    ParallaxDirective,
    TeamComponent,
    AboutComponent,
    AboutmobileComponent,
    TestoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFullpageModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
