import { Component } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Platform } from "@ionic/angular";
import { CalendarService } from "../calendar.service";
import { auth } from "firebase";

declare var gapi;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  access_token: string;
  constructor(
    public platform: Platform,
    public afAuth: AngularFireAuth,
    private httpClient: HttpClient,
    private calendarService: CalendarService
  ) {
    // this.afAuth.auth
    //   .getRedirectResult()
    //   .then(res => console.log("res: ", res.credential));
    // this.platform.ready().then(() => {
    // gapi.load("client", () => {
    //   console.log("loaded client");
    //   gapi.client.init({
    //     apiKey: "AIzaSyCTs2oYqWCgQ2Hwk45eDbDOOklfs4TZyrM",
    //     clientId:
    //       "874036221463-8vcmeh4ra6clcd2oa3pg518le2nqe5ja.apps.googleusercontent.com",
    //     discoveryDocs: [
    //       "https://www.googleapis.com/admin/directory/v1/groups/02jxsxqh1ewkirf/hasMember/silvio.limeira%40gedu.demo.mstech.com.br?key=AIzaSyCTs2oYqWCgQ2Hwk45eDbDOOklfs4TZyrM"
    //     ],
    //     scope: "https://www.googleapis.com/auth/some.scope"
    //   });
    // });
    // });

    this.afAuth.auth.getRedirectResult().then(res => {
      console.log(res);
      // console.log(res.credential);
      // if (res.credential) {
      // let tmp = res.credential.toJSON();
      // console.log("tmp: ", tmp);

      let credential = res.credential;
      // console.log("credential: ", credential);
      // console.log(credential);

      this.access_token = res.credential["accessToken"];

      console.log("access_token: ", this.access_token);
      // var token
      // }
    });
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    // provider.addScope("openid");
    // provider.addScope("https://www.googleapis/auth/plus.login");
    // provider.addScope("https://www.googleapis.com/auth/calendar");
    // provider.addScope("https://www.googleapis.com/auth/calendar.readonly");
    provider.addScope("https://www.googleapis.com/auth/calendar.events");
    // provider.addScope("https://www.googleapis.com/auth/calendar");
    // provider.addScope(
    //   "https://www.googleapis.com/auth/calendar.events.readonly"
    // );
    // provider.addScope(
    //   "https://www.googleapis.com/auth/calendar.settings.readonly"
    // );
    // provider.addScope(
    //   "https://www.googleapis.com/auth/calendar.addons.execute"
    // );

    const credential = await this.afAuth.auth.signInWithRedirect(provider);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  // signOut() {
  //   this.afAuth.auth.confirmPasswordReset;
  //   this.afAuth.auth.signOut().then(() => {
  //     location.reload();
  //   });
  // }

  makeRequest() {
    console.log("makeRequest");
    this.calendarService
      .postArticle(
        '{ summary: "Teste123", location: "Teste123", start: { dateTime: "2019-12-25T11:00:00.000-03:00", timeZone: "America/Sao_Paulo" }, end: { dateTime: "2019-12-25T11:25:00.000-03:00", timeZone: "America/Sao_Paulo" } }',
        this.access_token
      )
      .subscribe(res => {
        console.log("res: ", res);
      });

    // let res = this.calendarService
    //   .post1("{}", this.access_token)
    //   .subscribe(res => console.log("res: ", res));
  }
}
