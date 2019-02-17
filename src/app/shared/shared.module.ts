import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, TopNavComponent, JumbotronComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, TopNavComponent, JumbotronComponent],
  providers: [],
})
export class SharedModule { }