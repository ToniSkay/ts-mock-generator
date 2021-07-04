import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InterfaceStructure } from '../../shared/interfaces/interface-structure';

@Injectable()
export class AdditionalInterfaceService {

  additionalInterfaces: InterfaceStructure[] = [];

  constructor() {}

  saveInterface({name, value, type}: InterfaceStructure) {
    this.additionalInterfaces = [...this.additionalInterfaces, {name, value, type}];
  }

  remove(name: string) {
    this.additionalInterfaces.find((item, index) => {
      if (item.name === name) {
        this.additionalInterfaces.splice(index, 1);
      }
    });
  }
}
