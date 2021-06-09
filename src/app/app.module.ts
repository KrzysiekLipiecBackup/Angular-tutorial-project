import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaymentsService } from './payments/payments.service';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { CustomPipe } from './custom.pipe';
import { PanelComponent } from './panel/panel.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    NavigationComponent,
    FavoriteComponent,
    CustomPipe,
    PanelComponent,
    ZippyComponent,
    ContactFormComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PaymentsService
  ],
  bootstrap: [
    AppComponent,
    FavoriteComponent
  ]
})
export class AppModule { }
