import { Component, OnInit } from '@angular/core';
import { ManageUserService } from './manage-user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
  listUsers: any[] = [];
  constructor(private api: ManageUserService) {}

  ngOnInit(): void {
    this.api
      .getUser({ page: 1, limit: 20 })
      .subscribe((res) => {
        if(res.status === 200) {
          this.listUsers = res.body;
        }
      });
  }
  onDeleteAll(): void {}
}
