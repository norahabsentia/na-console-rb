import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

import { TextInputHighlightModule } from 'angular-text-input-highlight';
 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NotificationListComponent } from './notification.component';

import { ModalComponent } from '../ui-features/modals/modal/modal.component';

import { FormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';
import {FillerLibraryModule} from '../filler-library/filler-library.module';
import {FillerLibraryComponent} from '../filler-library/filler-library.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'list',
        component: NotificationListComponent,
      },
      {
          path: '',
          component: NotificationListComponent,
      },

    ]),
    ThemeModule,
    TextInputHighlightModule,
    Ng2OrderModule,
    FormsModule,
    FillerLibraryModule,MatGridListModule,MatCardModule,MatButtonModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [NotificationListComponent],
  declarations: [NotificationListComponent],
  providers: [],
})
export class NotificationlistModule {
}
