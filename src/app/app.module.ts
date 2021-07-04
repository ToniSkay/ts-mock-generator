import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockGeneratorService } from './services/mock-generator.service';
import { AdditionalInterfaceComponent } from './components/additional-interface/additional-interface.component';
import { AdditionalInterfaceModalComponent } from './components/additional-interface/additional-interface-modal/additional-interface-modal.component';
import { AdditionalInterfaceService } from './services/additional-interface.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    AdditionalInterfaceComponent,
    AdditionalInterfaceModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [MockGeneratorService, AdditionalInterfaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
