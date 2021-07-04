import { Injectable } from '@angular/core';
import { convertToObject } from '../../shared/utils/convertToObject';
import { generateSystemName } from '../../shared/utils/generate-system-name';
import { FormControl, Validators } from '@angular/forms';
import { PrimitiveTypes } from '../../shared/enums/primitive-types.enum';
import { getRandomInt } from '../../shared/utils/get-random-int';
import { AdditionalInterfaceService } from './additional-interface.service';

@Injectable()
export class MockGeneratorService {
  interfaceControl = new FormControl(null, Validators.required);
  mockControl = new FormControl(JSON.stringify({}), Validators.required);

  get json() {
    return JSON.parse(this.mockControl.value)
  }

  constructor(private additionalInterfaceService: AdditionalInterfaceService) {}

  generateMock(): void {
    Object.keys(convertToObject(this.interfaceControl.value)).map((key) =>
      this.generateMockValue(
        convertToObject(this.interfaceControl.value)[key],
        key
      )
    );
  }

  private generateMockValue(type: string, key: string): void {
    const json = JSON.parse(this.mockControl.value);

    if (this.isPrimitive(type)) {
      this.setMock(json, key, this.getValueByType(type, key))
    }
    else if (this.isInterface(type)) {
      this.setMock(json, key, this.getValueByInterface(type))
    }
    else if (this.isEnum(type)) {
      this.setMock(json, key, this.getValueByEnum(type))
    }
    else {
      return;
    }
  }

  private setMock<T,S>(json: T, mockKey: string, mockValue: S): void {
    json[mockKey] = mockValue;

    this.mockControl.reset()
    this.mockControl.setValue(JSON.stringify(json));
  }

  private isSystemName(key: string): boolean {
    return key.includes('systemName') || key.includes('SystemName');
  }

  private isPrimitive(value: string) {
    return value === PrimitiveTypes.String || value === PrimitiveTypes.Number || value === PrimitiveTypes.Boolean;
  }

  private getValueByType(type: string, key: string) {
    if (this.isInterface(type)) {
      return this.getValueByInterface(type)[key];
    }

    if (this.isEnum(type)) {
      return this.getValueByEnum(type);
    }

    if (this.isSystemName(key)) {
      return generateSystemName();
    }

    switch (type) {
      case PrimitiveTypes.String: {
        return 'test string';
      }
      case PrimitiveTypes.Number: {
        return getRandomInt(20);
      }
      case PrimitiveTypes.Boolean: {
        return !!getRandomInt(2);
      }
      default: {
        return null;
      }
    }
  }

  private getValueByInterface(interfaceName: string) {
    let additionalInterface = {};

    return Object.keys(this.getProcessedInterface(interfaceName)).map(
      (key) =>
        (additionalInterface = {...additionalInterface, [key]: this.getValueByType(this.getProcessedInterface(interfaceName)[key], key)})
    ).pop();
  }

  private getProcessedInterface(interfaceName: string) {
    return convertToObject(
      this.additionalInterfaceService.additionalInterfaces.find(
        ({name}) => name === interfaceName
      ).value
    );
  }

  private getValueByEnum(enumName: string) {
    const processedEnum = this.getProcessedEnum(enumName);
    const firstEnumKey = Object.keys(processedEnum)[0]

    return processedEnum[firstEnumKey];
  }

  private getProcessedEnum(enumName: string) {
    return convertToObject(
      this.additionalInterfaceService.additionalInterfaces.find(
        ({name}) => name === enumName
      ).value
    );
  }


  private isInterface(interfaceName): boolean {
    return Boolean(this.additionalInterfaceService.additionalInterfaces.find(({name, type}) => name === interfaceName && type === 'Interface'))
  }

  private isEnum(enumName): boolean {
    return Boolean(this.additionalInterfaceService.additionalInterfaces.find(({name, type}) => name === enumName && type === 'Enum'))
  }
}
