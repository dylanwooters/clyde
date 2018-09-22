import { Component } from '@angular/core';
import { UserService } from '../services/UserService'
import { User } from '../../../clyde-common/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Clyde';
  public user: User;
  public error: string;
  public loading: boolean;

  constructor(
    private userSrv: UserService
  ) {
    this.userSrv.broadcastError$.subscribe((error) => {
      console.log(error);
      this.error = error.message;
    })
  }

  public getUser(): void {
    this.loading = true;
    this.userSrv.getUser(1)
      .subscribe((user) => {
        this.user = user;
        this.loading = false;
      })
  }
}
