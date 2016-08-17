import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

// Import all components for this module
import { AppComponent }   from './app.component';
import { SpeakerComponent, SpeakerButtonComponent, SpeakersComponent, SpeakerListComponent } from './speakers';

import './shared/rxjs-extensions';
import {
  InMemoryBackendConfig,
  InMemoryBackendService,
  SEED_DATA
} from 'angular2-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';
import { routing } from './routing/app.routing';
import { SpeakerService } from './models';
import { SortSpeakersPipe } from './speakers/shared';

/* Feature Modules */
import { DashboardModule }  from './dashboard/dashboard.module';
import { LoginModule }  from './login/login.module';
import { SessionsModule }  from './sessions/sessions.module';
import { SharedModule }   from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    LoginModule,
    routing,
    SessionsModule,
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,

    SpeakerComponent,
    SpeakerButtonComponent,
    SpeakersComponent,
    SpeakerListComponent,

    SortSpeakersPipe, //TODO: move to its own module later ?
  ],
  providers: [
    { provide: InMemoryBackendConfig, useValue: { delay: 600 } },
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryStoreService },     // in-mem server data
    SpeakerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

