import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { convertToObject } from '../../shared/utils/convertToObject';

@Injectable()
export class InterfaceGeneratorService {
  interfaceControl = new FormControl(JSON.stringify({}), Validators.required);
  mockControl = new FormControl('', Validators.required);

  constructor() {}

  get json() {
    return JSON.parse(this.interfaceControl.value);
  }

  generateInterface() {
    Object.keys(convertToObject(this.mockControl.value)).map(key => {
      this.setInterface(this.getUpdatedInterface(key))
    });
  }

  getUpdatedInterface(key: string) {
    const currentInterface = JSON.parse(this.interfaceControl.value);
    currentInterface[key] = typeof convertToObject(this.mockControl.value)[key];

    return currentInterface;
  }

  setInterface<T>(currentInterface: T) {
    this.interfaceControl.reset();
    this.interfaceControl.setValue(JSON.stringify(currentInterface));
  }
}
