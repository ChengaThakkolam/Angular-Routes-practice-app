import { NgModule } from "@angular/core";
import { UsersComponent } from "./users/users.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/guards/auth-guard.service";




@NgModule(
    {
        declarations:[UsersComponent],
        imports:[UserRoutingModule,
        CommonModule // common Module for angular core features 
    ],
        providers:[AuthService,AuthGuardService],
        exports:[UsersComponent]
    }
)

export class UserModule{}