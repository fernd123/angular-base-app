import { Component, OnInit, Input, Injector } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss'],
})
export class TitlePageComponent  implements OnInit {

  @Input() title;
  @Input() tooltip;

  constructor(
    injector: Injector
  ) {
    //super(injector);
  }

  ngOnInit() { }

}
