import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UserModule,
    AdminModule,
    // JwtModule.forRoot({
    //   config: {
    //     // Cấu hình cho JwtModule nếu cần
    //   },
    // }),
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
