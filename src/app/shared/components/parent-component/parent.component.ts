import { DatePipe, LocationStrategy } from '@angular/common';
import { Component, ElementRef, Injector, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationDeleteMessageComponent } from '../confirmation-delete-message/confirmation-delete-message.component';
import { ConfirmationMessageComponent } from '../confirmation-message/confirmation-message.component';
import { InfoMessageComponent } from '../info-message/info-message.component';
import { LoadingMessageComponent } from '../loading-message/loading-message.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent-component.html',
})
export class ParentComponent implements OnInit {
  protected elRef: ElementRef;
  public modalService: NgbModal;
  protected translateService: TranslateService;
  protected formBuilder: FormBuilder;
  protected router: Router;
  protected datePipe: DatePipe;
  protected locationStrategy: LocationStrategy;

  // Properties
  form: FormGroup;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  
  modalInfo: any;
  modalLoading: any;
  currentFile: any;

  constructor(injector: Injector) {
    this.elRef = injector.get(ElementRef);
    this.modalService = injector.get(NgbModal);
    this.translateService = injector.get(TranslateService);
    this.formBuilder = injector.get(FormBuilder);
    this.router = injector.get(Router);
    this.datePipe = injector.get(DatePipe);
    this.locationStrategy = injector.get(LocationStrategy);

    /* TRANSLATION MODULE */
    let lang = localStorage.getItem("es");
    if (lang == undefined) {
      lang = 'es';
    }
    this.translateService.setDefaultLang(lang);
    this.translateService.addLangs(['es', 'en']);
    this.translateService.use(lang);
  }

  ngOnInit() { }

  ngAfterViewInit() { }


  public readURL(input) {
    let self = this;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      self.currentFile = input.files[0];

      reader.onload = function (e) {
        self.form.get('image').setValue(e.target.result);
        //$('#blah').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  public openLoadingModal(message: string) {
    const modalRef = this.modalService.open(LoadingMessageComponent, { size: 'sm1', backdrop: 'static' });
    modalRef.componentInstance.message = message;
    this.modalLoading = modalRef;
    return modalRef;
  }

  public closeLoadingModal() {
    if (this.modalLoading != undefined) {
      this.modalLoading.dismiss();
      this.modalLoading = undefined;
    }
  }

  public openInfoModal(message: string): any {
    const modalRef = this.modalService.open(InfoMessageComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.modalWindow = modalRef;

    this.modalInfo = modalRef;
    return modalRef;
  }

  public closeInfoModal() {
    if (this.modalInfo != undefined) {
      this.modalInfo.dismiss();
      this.modalInfo = undefined;
    }
  }

  public openConfirmationDeleteModal(message: string, registerUrl: string, service: any): any {
    let modalRef = this.modalService.open(ConfirmationDeleteMessageComponent, { size: 'sm1', backdrop: 'static' });
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.registerUrl = registerUrl;
    modalRef.componentInstance.service = service;
    modalRef.componentInstance.modalWindow = modalRef;

    return modalRef;
  }

  public openConfirmationSendModal(message: string): any {
    let modalRef = this.modalService.open(ConfirmationMessageComponent, { size: 'sm1', backdrop: 'static' });
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.modalWindow = modalRef;

    return modalRef;
  }

  delete(url, service) {
    let modalDelete = this.openConfirmationDeleteModal(this.translateService.instant('messagesystem.deleteregister'), url, service);
    modalDelete.result.then(() => { console.log('When user closes'); },
      (res) => {
        if (res) {
          this.modalService.dismissAll(true);
        }
      });
  }

  // To cancel browser backbutton
  preventBackButton() {
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, location.href);
    })
  }
}