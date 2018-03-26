import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

import { NorahSchedulerComponent } from './norah-scheduler.component';
import { TextInputHighlightModule } from 'angular-text-input-highlight';

// service import
import {NorahService } from './shared/norah.service';
import { CanDeactivateGurad } from './shared/can-deactivate-guard.service';
import { DialogService } from './shared/dialog.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NorahSchedulerComponent,
        canDeactivate:[CanDeactivateGurad,]
      },
    ]),
    ThemeModule,
    TextInputHighlightModule,
  ],
  exports: [NorahSchedulerComponent],
  declarations: [NorahSchedulerComponent],
  providers: [NorahService,CanDeactivateGurad,DialogService],
})
export class NorahSchedulerModule {
}
