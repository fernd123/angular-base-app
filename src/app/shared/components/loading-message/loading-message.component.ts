import { Component, OnInit, Input, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-loading-message',
  templateUrl: './loading-message.component.html',
  styleUrls: ['./loading-message.component.scss'],
})
export class LoadingMessageComponent  implements OnInit {

  @Input() message;
  modalTitle: string = "";

  constructor(
    public translateService: TranslateService,
    injector: Injector
  ) {
    //super(injector);
  }

  ngOnInit() { 
    this.modalTitle = this.translateService.instant('systemmessage');
  }

  ngAfterContentInit() {
    //this.switchTheme();
  }

  getTheme() {
    let isDarkTheme = localStorage.getItem('isDarkTheme') == 'true' ? true : false;
    if(!isDarkTheme){
      return 'light';
    }
    return 'dark';
  }

}
