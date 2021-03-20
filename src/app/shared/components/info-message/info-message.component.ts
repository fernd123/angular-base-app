import { Component, OnInit, Input, Injector } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.scss'],
})
export class InfoMessageComponent implements OnInit {

  @Input() message: string;
  @Input() modalWindow: NgbModalRef;

  error: string;
  closeButton: string = this.translateService.instant('close');
  modalTitle: string = this.translateService.instant('systemmessage');

  constructor(
    protected modalService: NgbModal,
    private translateService: TranslateService
  ) {
  }

  ngOnInit() { }

  ngAfterContentInit() {
    //this.switchTheme();
  }

  confirm() {
    this.modalWindow.dismiss(true);
  }


  getTheme() {
    let isDarkTheme = localStorage.getItem('isDarkTheme') == 'true' ? true : false;
    if (!isDarkTheme) {
      return 'light';
    }
    return 'dark';
  }

}
