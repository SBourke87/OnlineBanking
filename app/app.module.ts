import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,  RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { LoginComponent } from '../login/login.component';
import {MatInputModule} from '@angular/material/input'; 
import { MatLabel } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'
const routes: Routes = [
  { path: '', component: LoginComponent},
];
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,   
    MatButtonModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
