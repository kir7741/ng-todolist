import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Route Module
import { AppRoutingModule } from './app-routing.module';

// Page Module
import { DashboardModule } from './dashboard/dashboard.module';
import { TaskModule } from './task/task.module';

// Root Component
import { AppComponent } from './app.component';
import { ProgressModule } from './progress/progress.module';
import { CompleteModule } from './complete/complete.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    TaskModule,
    ProgressModule,
    CompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
