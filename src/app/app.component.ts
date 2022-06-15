import { Component } from '@angular/core';

import { CapacitorSegment } from '@joinflux/capacitor-segment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
    console.log('Inicializando Capacitor Segment11');

    CapacitorSegment.initialize({
      key: '',
      trackLifecycle: true
    });
  }

}
