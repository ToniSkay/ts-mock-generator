import { Component, Input } from '@angular/core';
import { MockGeneratorService } from '../../services/mock-generator.service';
import { InterfaceGeneratorService } from '../../services/interface-generator.service';

@Component({
  selector: 'app-mock-input',
  templateUrl: './mock-input.component.html',
  styleUrls: ['./mock-input.component.scss'],
})
export class MockInputComponent {
  @Input() isResultInput: boolean;
  @Input() isInterfaceToMockMode = true;

  constructor(public mockGeneratorService: MockGeneratorService, public interfaceGeneratorService: InterfaceGeneratorService) {}

  generate() {
    this.isInterfaceToMockMode ? this.mockGeneratorService.generateMock() : this.interfaceGeneratorService.generateInterface();
  }
}
