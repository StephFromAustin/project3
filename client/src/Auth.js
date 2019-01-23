import auth0 from "auth0-js";
import history from "./history";

export default class Auth {

    accessToken;
    idToken;
    expires;
    profile;


    auth0 = new auth0.WebAuth({
        domain: "shindig104.auth0.com",
        clientID: "Gc9JxPQx4UIWiTMIplPCl1c3ntmD669P",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://shindig104.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.isAuth = this.isAuth.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.renewSession = this.renewSession.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login() {
        //authorizes user
        this.auth0.authorize();
        //sets localstorage to the users accessToken
        localStorage.setItem(this.accessToken);
    }

    logout() {
        //clears user login properties when logged out
        this.accessToken = null;
        this.idToken = null;
        this.expires = null;
        this.profile = null;
    }

    handleAuth() {
        this.auth0.parseHash((err, authResult) => {
            if(authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                localStorage.setItem("access_token", authResult.accessToken);
            } else if (err) {
                history.replace('/home');
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    getAccessToken() {
        return this.accessToken;
    }

    getIdToken() {
        return this.idToken;
    }

    setSession(authResult) {
        //Set isLoggedIn flag in localStorage
        localStorage.setItem(        )
    }
}