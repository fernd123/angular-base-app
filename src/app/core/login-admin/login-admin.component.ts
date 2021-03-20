import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { ParentComponent } from 'app/shared/components/parent-component/parent.component';

@Component({
  selector: 'inf-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent extends ParentComponent {

  originalBg: string;
  error: boolean;
  user: any = {
    username: null,
    password: null
  };
  loading: boolean;
  redirectURL: string;
  loggedIn = false;

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      tenantId: [null, Validators.required],
    });
    this.preventBackButton();
  }

  ngAfterViewInit() {
   
  }


  login() {
    let username = this.form.get('username').value;
    let password = this.form.get('password').value;
    let tenantId = this.form.get('tenantId').value;
    this.loading = true;
    this.router.navigateByUrl("/dashboard");
  }

  public openModalEntry(): void {
    /*const modalRef = this.modalService.open(ConfirmEntryComponent, { size: 'lg', backdrop: 'static' });

    modalRef.result.then(() => { console.log('When user closes'); },
      (res) => {
        this.router.navigate(['/user-pages/register-visit']);

      });*/
  }

}