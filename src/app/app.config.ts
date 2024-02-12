import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


//https://stackoverflow.com/questions/77482678/no-provider-for-httpclient
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient()]
};
