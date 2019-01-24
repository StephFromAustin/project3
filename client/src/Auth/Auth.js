import auth0 from "auth0-js";
import history from "../history";

export default class Auth {

    accessToken;
    idToken;
    expiresAt;
    profile;
    scopes;
    //add other scopes once other pages are available to add
    requestedScopes = 'openid profile '


    auth0 = new auth0.WebAuth({
        domain: "shindig104.auth0.com",
        clientID: "Gc9JxPQx4UIWiTMIplPCl1c3ntmD669P",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://shindig104.auth0.com/userinfo",
        responseType: "token id_token",
        scope: this.requestedScopes
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
        this.userHasScopes = this.userHasScopes.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login() {
        this.auth0.authorize();
        localStorage.setItem(this.accessToken);
    }

    logout() {
        //clears user login properties when logged out
        this.accessToken = null;
        this.idToken = null;
        this.expiresAt = 0;

        //Removes the user's profile
        this.profile = null;

        //Removes user scopes
        this.scopes = null;

        //Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');

        //Navigate tot he home route
        history.replace('/home');
    }

    handleAuth() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
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
        localStorage.setItem('isLoggedIn', 'true');

        //Set the time that the access token will expire at
        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = expiresAt;

        //Set the users scopes
        this.scopes = authResult.scope || this.requestedScopes || '';

        //navigate to the home route
        history.replace('/home');
    }

    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.logout();
                console.log(err);
                alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
            }
        });
    }

    isAuth() {
        //Check whether the current time is past the access token's expiry time
        let expiresAt = this.expiresAt;
        return new Date().getTime() < expiresAt;
    }

    getProfile(cb) {
        this.auth0.client.userInfo(this.accessToken, (err, profile) => {
            if(profile) {
                this.profile = userProfile;
            }
            cb(err, userProfile);
        });
    }

    userHasScopes(scopes) {
        const grantedScopes = this.scopes.split(' ');
        return scopes.every(scope => grantedScopes.includes(scope));
    }

}