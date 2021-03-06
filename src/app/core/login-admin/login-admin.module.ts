import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { LoginAdminService } from './login-admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    LoginAdminRoutingModule
  ],
  exports: [LoginAdminComponent],
  providers: [LoginAdminService]
})
export class LoginAdminModule { }
