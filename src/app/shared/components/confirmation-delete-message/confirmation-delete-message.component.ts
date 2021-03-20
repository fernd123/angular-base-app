import { Component, OnInit, Input, Injector } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-delete-message',
  templateUrl: './confirmation-delete-message.component.html',
  styleUrls: ['./confirmation-delete-message.component.scss'],
})
export class ConfirmationDeleteMessageComponent implements OnInit {

  @Input() message: string;
  @Input() registerUrl;
  @Input() service: any;
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
    
  }

  confirm(confirm: boolean) {
    if (!confirm) {
      this.modalWindow.dismiss(false);
    } else {
      this.service.delete(this.registerUrl).subscribe((res: any) => {
        let httpCode = res.status;
        // Success
        if (httpCode == 204) {
          this.modalWindow.dismiss(true);
        }

        // Error
        if (httpCode == 400) {
          let type = res.error.message;
          if (type == 'Data Integrity') {
            this.closeButton = this.translateService.instant('close');
            this.error = 'El registro posee datos relacionados y no puede ser eliminado'
          }
        }


      }),
        ((error: any) => {

        })
    }
  }
}
