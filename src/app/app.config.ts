import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"ng-task18-17e1b","appId":"1:650761218490:web:da66b3ad0ad312af441583","storageBucket":"ng-task18-17e1b.appspot.com","apiKey":"AIzaSyDsgp8oa8_odIqZKTOlMzmoobMmvEpsly8","authDomain":"ng-task18-17e1b.firebaseapp.com","messagingSenderId":"650761218490"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
