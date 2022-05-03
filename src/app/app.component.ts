import { Component } from '@angular/core';
import { AuthenticationServiceService } from './services/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-adminlte3-demo-app';
  logout(){
  let  as :AuthenticationServiceService ;
  as.logout();
  }
}


