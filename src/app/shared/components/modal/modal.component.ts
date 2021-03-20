import { Component, OnInit, Input, Injector, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent-component/parent.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent extends ParentComponent implements OnInit {
  
  showCloseBool : boolean = true;

  @Input() title = 'Information';
  @Input() tooltip = this.translateService.instant('tooltip.savemodal');

  @Input()  set showClose(value: any) {
    this.showCloseBool = (value == 'false') ? false : true;
  }
  
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() { 
    
  }

  ngAfterContentInit() {
  }

  getTheme() {
    let isDarkTheme = localStorage.getItem('isDarkTheme') == 'true' ? true : false;
    if(!isDarkTheme){
      return 'light';
    }
    return 'dark';
  }

}
