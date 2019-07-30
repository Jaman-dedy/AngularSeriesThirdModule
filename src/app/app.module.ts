import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHignlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHilightDirective } from './better-hilight/better-hilight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [AppComponent, BasicHignlightDirective, BetterHilightDirective, UnlessDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
