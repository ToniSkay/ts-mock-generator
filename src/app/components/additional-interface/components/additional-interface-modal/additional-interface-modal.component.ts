import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdditionalInterfaceService } from '../../../../services/additional-interface.service';
import { AdditionalInterfaceFormField } from '../../enums/additional-interface-form-field.enum';

@Component({
  selector: 'app-additional-interface-modal',
  templateUrl: './additional-interface-modal.component.html',
  styleUrls: ['./additional-interface-modal.component.scss'],
})
export class AdditionalInterfaceModalComponent implements AfterViewInit {
  typeOptions = ['Interface', 'Enum'];
  formField = AdditionalInterfaceFormField;

  formGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    value: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
  });

  constructor(private additionalInterfaceService: AdditionalInterfaceService) {}

  ngAfterViewInit() {
    this.formGroup.reset();
  }

  save() {
    this.additionalInterfaceService.saveAdditionalValue(this.formGroup.getRawValue());
    this.close();
  }

  close() {
    document.getElementById('close-btn').click();
  }
}
