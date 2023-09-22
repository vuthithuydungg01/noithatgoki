import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  subscription = new Subscription;
  activeShoppingCart = false;
  constructor(
     private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
      this.activeShoppingCart =  sessionStorage.getItem('role') === 'USER';

    }

  onLogin(): void {

    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'vcs-config-dialog',
      width: '860px',
      data: {

      },
    });
    this.subscription.add(
      dialogRef.afterClosed().subscribe(status => {

      })
    );
  }


  onLogout() : void {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('role', '');
    this.activeShoppingCart = false;
  }

}
