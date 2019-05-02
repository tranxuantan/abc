/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5ccab04da2e55831070c2520
*
* You will get 10% discount for each one of your friends
* 
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageUserEditRoutingModule } from './manage-user-edit-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ManageUserEditComponent } from './manage-user-edit.component';


@NgModule({
  imports: [
    CommonModule,
    ManageUserEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ManageUserEditComponent
  ]
})
export class ManageUserEditModule { }
