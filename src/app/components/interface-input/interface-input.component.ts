import { Component, Input } from '@angular/core';
import { MockGeneratorService } from '../../services/mock-generator.service';
import { InterfaceGeneratorService } from '../../services/interface-generator.service';
import { GeneratorService } from '../../services/generator.service';

@Component({
  selector: 'app-interface-input',
  templateUrl: './interface-input.component.html',
  styleUrls: ['./interface-input.component.scss'],
})
export class InterfaceInputComponent {
  @Input() isInterfaceToMockMode = true;

  constructor(
    public mockGeneratorService: MockGeneratorService,
    public interfaceGeneratorService: InterfaceGeneratorService,
    public generatorService: GeneratorService,
  ) {}
}
