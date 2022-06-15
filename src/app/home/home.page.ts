import { Component } from '@angular/core';

import { CapacitorSegment } from '@joinflux/capacitor-segment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public onClick(event: string): void {

    console.log(event);

    const valor = {
      valorEnviado: event
    };

    CapacitorSegment.track({
      eventName: 'clickOnItemTest',
      properties: valor
    });

  }

}
