import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdditionalInterfaceService } from '../../../services/additional-interface.service';

@Component({
  selector: 'app-additional-interface-modal',
  templateUrl: './additional-interface-modal.component.html',
  styleUrls: ['./additional-interface-modal.component.scss'],
})
export class AdditionalInterfaceModalComponent {
  options = [{ name: 'Interface' }, { name: 'Enum' }];

  formGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    value: new FormControl(null, Validators.required),
    type: new FormControl(this.options[0].name, Validators.required),
  });

  constructor(private additionalInterfaceService: AdditionalInterfaceService) {}

  save() {
    this.additionalInterfaceService.saveAdditionalValue(this.formGroup.getRawValue());
    this.close();
    this.formGroup.reset();
  }

  close() {
    document.getElementById('close-btn').click();
  }
}
