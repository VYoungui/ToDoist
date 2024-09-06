import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {LucideAngularModule, CircleUser, User, ChevronRight, ChevronDown, CalendarDays, Check,
        Trash2, X}
  from "lucide-angular";
import {provideNativeDateAdapter} from "@angular/material/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    importProvidersFrom(LucideAngularModule.pick({
      CircleUser, User, ChevronRight, ChevronDown, CalendarDays, Check, Trash2, X
    })),
  ]

};
