import { Component, OnInit, Input, Injector } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.scss'],
})
export class ConfirmationMessageComponent implements OnInit {

  @Input() message: string;
  @Input() modalWindow: NgbModalRef;

  error: string;
  closeButton: string = this.translateService.instant('no');
  modalTitle: string = this.translateService.instant('systemmessage');

  constructor(
    injector: Injector,
    protected modalService: NgbModal,
    private translateService: TranslateService
  ) {
    //super(injector);
  }

  ngOnInit() { }

  ngAfterContentInit() {
    //this.switchTheme();
  }

  confirm(confirm: boolean) {
    if (!confirm) {
      this.modalWindow.dismiss(false);
    } else {
      this.modalWindow.dismiss(true);
    }
  }


  getTheme() {
    let isDarkTheme = localStorage.getItem('isDarkTheme') == 'true' ? true : false;
    if (!isDarkTheme) {
      return 'light';
    }
    return 'dark';
  }

}
