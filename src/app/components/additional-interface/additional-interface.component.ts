import { Component } from '@angular/core';
import { AdditionalInterfaceService } from '../../services/additional-interface.service';

@Component({
  selector: 'app-additional-interface',
  templateUrl: './additional-interface.component.html',
  styleUrls: ['./additional-interface.component.scss'],
})
export class AdditionalInterfaceComponent {
  constructor(public additionalInterfaceService: AdditionalInterfaceService) { }

  identify(index: number): number {
    return index;
  }
}
