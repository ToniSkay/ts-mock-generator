import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { convertToObject } from '../../shared/utils/convertToObject';
import { generateSystemName } from '../../shared/utils/generate-system-name';
import { PrimitiveTypes } from '../../shared/enums/primitive-types.enum';
import { getRandomInt } from '../../shared/utils/get-random-int';
import { AdditionalInterfaceService } from './additional-interface.service';
import { AdditionalValueTypes } from '../../shared/enums/additional-value-types.enum';

type PrimitiveType = string | number | boolean;

@Injectable()
export class MockGeneratorService {
  interfaceControl = new FormControl(null, Validators.required);

  mockControl = new FormControl(JSON.stringify({}), Validators.required);

  constructor(private additionalInterfaceService: AdditionalInterfaceService) {}

  get json() {
    return JSON.parse(this.mockControl.value);
  }

  generateMock(): void {
    this.mockControl.setValue(JSON.stringify({}));

    Object.keys(convertToObject(this.interfaceControl.value)).map((key) => this.generateMockValue(
      convertToObject(this.interfaceControl.value)[key],
      key,
    ));
  }

  private generateMockValue(type: string, key: string): void {
    const currentMock = JSON.parse(this.mockControl.value);

    this.setMock(currentMock, key, this.getMockValue(type, key));
  }

  private setMock<T, S>(currentMock: T, mockKey: string, mockValue: S): void {
    currentMock[mockKey] = mockValue;

    this.mockControl.setValue(JSON.stringify(currentMock));
  }

  private isSystemName(key: string): boolean {
    return key.includes('systemName') || key.includes('SystemName');
  }

  private isPrimitive(type: string) {
    return (
      type === PrimitiveTypes.String
      || type === PrimitiveTypes.Number
      || type === PrimitiveTypes.Boolean
    );
  }

  private getMockValue(type: string, key: string) {
    switch (true) {
      case this.isSystemName(key):
        return generateSystemName();

      case this.isInterface(type):
        return this.getValueByInterface(type);

      case this.isEnum(type):
        return this.getValueByEnum(type);

      case this.isPrimitive(type):
        return this.getValueByType(type);

      default:
        return null;
    }
  }

  private getValueByType(type: string): PrimitiveType {
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

    return Object.keys(this.getProcessedInterface(interfaceName))
      .map(
        (key: string) => {
          additionalInterface = {
            ...additionalInterface,
            [key]: this.getMockValue(
              this.getProcessedInterface(interfaceName)[key],
              key,
            ),
          };
        },
      )
      .pop();
  }

  private getProcessedInterface(interfaceName: string) {
    return convertToObject(
      this.additionalInterfaceService.additionalValues.find(
        ({ name }) => name === interfaceName,
      ).value,
    );
  }

  private getValueByEnum(enumName: string) {
    const processedEnum = this.getProcessedEnum(enumName);
    const firstEnumKey = Object.keys(processedEnum)[0];

    return processedEnum[firstEnumKey];
  }

  private getProcessedEnum(enumName: string) {
    return convertToObject(
      this.additionalInterfaceService.additionalValues.find(
        ({ name }) => name === enumName,
      ).value,
    );
  }

  private isInterface(interfaceName): boolean {
    return Boolean(
      this.additionalInterfaceService.additionalValues.find(
        ({ name, type }) => name === interfaceName && type === AdditionalValueTypes.Interface,
      ),
    );
  }

  private isEnum(enumName): boolean {
    return Boolean(
      this.additionalInterfaceService.additionalValues.find(
        ({ name, type }) => name === enumName && type === AdditionalValueTypes.Enum,
      ),
    );
  }
}
