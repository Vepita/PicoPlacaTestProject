import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestSolutionComponent } from './test-solution/test-solution.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    TestSolutionComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
