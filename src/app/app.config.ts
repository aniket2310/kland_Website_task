import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { provideHttpClient } from '@angular/common/http';



export const routes: Routes = [
{path: '',redirectTo:'login',pathMatch:'full'},
{path: 'login', component: LoginComponent},
{path: 'profile', component: ProfileComponent}
];


export const appConfig: ApplicationConfig = {
  providers:
   [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(withEventReplay())]
};
