import { Routes, RouterModule } from '@angular/router';

import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SpeakersComponent } from './speakers.component';
import { CanDeactivateGuard, CanActivateAuthGuard } from '../routing';

const routes: Routes = [
  {
    path: '',
    component: SpeakersComponent,
    children: [
      {
        path: '',
        component: SpeakerListComponent,
      },
      {
        path: ':id',
        component: SpeakerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

export const routing = RouterModule.forChild(routes);

export const routedComponents = [SpeakersComponent, SpeakerListComponent, SpeakerComponent]
