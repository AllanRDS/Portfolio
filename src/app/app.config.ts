import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LUCIDE_ICONS, LucideIconProvider, House, User, Briefcase, GraduationCap, Award, Mail, Linkedin, Github, ExternalLink, ChevronRight, Menu, X, Database, Code, LayoutDashboard, Cpu, Terminal, ChartBar, Cloud } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideRouter(routes),
    { 
      provide: LUCIDE_ICONS, 
      multi: true, 
      useValue: new LucideIconProvider({ 
        House, User, Briefcase, GraduationCap, Award, Mail, Linkedin, Github, 
        ExternalLink, ChevronRight, Menu, X, Database, Code, LayoutDashboard, Cpu, Terminal, ChartBar, Cloud 
      }) 
    }
  ],
};
