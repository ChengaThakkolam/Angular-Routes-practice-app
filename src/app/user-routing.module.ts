import {NgModule} from '@angular/core'
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './services/guards/auth-guard.service';


const userRoutes:Route[]=[
    {
        path:'users',component:UsersComponent,
        canActivateChild:[AuthGuardService],
        children:[{path:':id/:name',component:UsersComponent}]
      }
   
  ];
  


@NgModule({
    
    imports:[RouterModule.forChild(userRoutes)],
    exports:[RouterModule]
})

export class UserRoutingModule{}