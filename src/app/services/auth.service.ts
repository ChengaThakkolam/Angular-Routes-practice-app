



export class AuthService{
    loggedIn=false;

    login(){
        this.loggedIn=true;
    }

    logOut(){
        this.loggedIn=false;
    }

    isAuthenticated(){
        return this.loggedIn;
    }

}