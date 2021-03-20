import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingMessageComponent } from './components/loading-message/loading-message.component';
import { ParentComponent } from './components/parent-component/parent.component';
import { ConfirmationDeleteMessageComponent } from './components/confirmation-delete-message/confirmation-delete-message.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { ConfirmationMessageComponent } from './components/confirmation-message/confirmation-message.component';
import { InfoMessageComponent } from './components/info-message/info-message.component';


@NgModule({
  declarations: [
    ParentComponent,
    ModalComponent,
    TitlePageComponent,
    LoadingMessageComponent,
    ConfirmationMessageComponent,
    ConfirmationDeleteMessageComponent,
    InfoMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule
  ],
  exports: [
    ParentComponent,
    TitlePageComponent,
    CommonModule,
    NgbModule,
    TranslateModule,
    ModalComponent,
    LoadingMessageComponent,
    ConfirmationMessageComponent,
    ConfirmationDeleteMessageComponent,
    InfoMessageComponent,
    ReactiveFormsModule
  ],
  entryComponents: [

  ],
  providers: []
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}