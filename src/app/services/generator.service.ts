import { Injectable } from '@angular/core';
import { MockGeneratorService } from './mock-generator.service';
import { InterfaceGeneratorService } from './interface-generator.service';

@Injectable()
export class GeneratorService {
  constructor(public mockGeneratorService: MockGeneratorService, public interfaceGeneratorService: InterfaceGeneratorService) { }

  generate(isInterfaceToMockMode: boolean) {
    if (isInterfaceToMockMode) {
      this.mockGeneratorService.generateMock();
    } else {
      this.interfaceGeneratorService.generateInterface();
    }
  }
}
