import { Component, OnInit } from '@angular/core';
import {AdditionalInterfaceService } from '../../services/additional-interface.service';

@Component({
  selector: 'app-additional-interface',
  templateUrl: './additional-interface.component.html',
  styleUrls: ['./additional-interface.component.scss']
})
export class AdditionalInterfaceComponent implements OnInit {
  constructor(public additionalInterfaceService: AdditionalInterfaceService) { }

  ngOnInit(): void {
  }

  identify(index){
    return index;
  }
}
