import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InterfaceStructure } from '../../shared/interfaces/interface-structure';

@Injectable()
export class AdditionalInterfaceService {
  additionalValues: InterfaceStructure[] = [];

  saveAdditionalValue({ name, value, type }: InterfaceStructure) {
    this.additionalValues = [
      ...this.additionalValues,
      { name, value, type },
    ];
  }

  remove(name: string) {
    this.additionalValues.find((item: InterfaceStructure, index) => {
      if (item.name === name) {
        this.additionalValues.splice(index, 1);
      }
    });
  }
}
