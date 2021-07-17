import { Component } from '@angular/core';
import { MockGeneratorService } from '../../services/mock-generator.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  constructor(public mockGeneratorService: MockGeneratorService) { }
}
