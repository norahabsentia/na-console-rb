import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NotificationManagerComponent } from "./notification-manager.component";
import { NorahSchedulerModule } from "../norah-scheduler/norah-scheduler.module";
import { NotificationlistModule } from "../notifications/notificationlist.module";
import { RouterModule } from "@angular/router";
import { CanDeactivateGurad } from "../norah-scheduler/shared/can-deactivate-guard.service";

@NgModule({
  imports:[
    NorahSchedulerModule,
    NotificationlistModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: NotificationManagerComponent,
    //     canDeactivate: [CanDeactivateGurad,]
    //   },
    // ]),
  ],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NotificationManagerModule { }