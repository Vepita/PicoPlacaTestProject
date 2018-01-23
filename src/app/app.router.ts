import { TestSolutionComponent } from './test-solution/test-solution.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const router: Routes = [

  {

    path: 'testSolution',
    component: TestSolutionComponent,
    data: {
      title: 'testSolution'
    }
  },

  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {});
