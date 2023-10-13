import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './user.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';


const routes:Route[]=[
  
  {
    path:'', component:HomeComponent
  },
  
  {
    path:'categories', component:CategoriesComponent,canActivate:[AuthGuardService]
  },
  {
    path:'page-not-found', component:PageNotFoundComponent
  },
  // ** means above all uri's are not matched then it goes to page not found component
  // if you want to test page not found uri how does it work? then you can enter any user 
  // not contain above all uri's then you will see result
  {
    path:"**", redirectTo:'page-not-found'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    CategoriesComponent,
    
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    
    UserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
