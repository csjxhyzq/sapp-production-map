import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { AppFooterComponent } from "./app-footer/app-footer";
import { AppHeaderComponent } from "./app-header/app-header";
import { AppiconWidgetComponent } from "./appicon-widget/appicon-widget";
import { AngularDraggableModule } from "angular2-draggable";
import { ModalHeaderComponent } from './modal-header/modal-header';

@NgModule({
  declarations: [
    AppFooterComponent,
    AppHeaderComponent,
    AppiconWidgetComponent,
    ModalHeaderComponent
  ],
  imports: [IonicModule, AngularDraggableModule],
  exports: [AppFooterComponent, AppHeaderComponent, AppiconWidgetComponent,
    ModalHeaderComponent]
})
export class ComponentsModule {


  constructor() {}



}


