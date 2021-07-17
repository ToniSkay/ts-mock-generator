import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceToMockComponent } from './components/interface-to-mock/interface-to-mock.component';
import { MockGeneratorService } from './services/mock-generator.service';
import { AdditionalInterfaceComponent } from './components/additional-interface/additional-interface.component';
import { AdditionalInterfaceModalComponent } from './components/additional-interface/additional-interface-modal/additional-interface-modal.component';
import { AdditionalInterfaceService } from './services/additional-interface.service';
import { HeaderComponent } from './components/header/header.component';
import { InterfaceInputComponent } from './components/interface-input/interface-input.component';
import { MockInputComponent } from './components/mock-input/mock-input.component';
import { MockToInterfaceComponent } from './components/mock-to-interface/mock-to-interface.component';
import { InterfaceGeneratorService } from './services/interface-generator.service';
import { GeneratorService } from './services/generator.service';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceToMockComponent,
    AdditionalInterfaceComponent,
    AdditionalInterfaceModalComponent,
    HeaderComponent,
    InterfaceInputComponent,
    MockInputComponent,
    MockToInterfaceComponent,
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
    MatTabsModule,
  ],
  providers: [MockGeneratorService, AdditionalInterfaceService, InterfaceGeneratorService, GeneratorService],
  bootstrap: [AppComponent],
})
export class AppModule { }
