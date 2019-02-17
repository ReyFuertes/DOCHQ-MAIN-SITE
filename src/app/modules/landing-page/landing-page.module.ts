import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { EcoBenefitComponent } from './components/eco-benefit/eco-benefit.component';
import { QuoteFromComponent } from './components/quote-from/quote-from.component';
import { WeWorkWithComponent } from './components/we-work-with/we-work-with.component';
import { HowDocHQWorksComponent } from './pages/how-dochq-works/how-dochq-works.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'how-dochq-works',
    component: HowDocHQWorksComponent
  }
]

@NgModule({
  declarations: [
    HomepageComponent, 
    WhoWeAreComponent, 
    BenefitsComponent, 
    EcoBenefitComponent,
    QuoteFromComponent,
    WeWorkWithComponent,
    HowDocHQWorksComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 

    RouterModule.forChild(routes)
  ],
  exports: [
    HomepageComponent, 
    WhoWeAreComponent, 
    BenefitsComponent, 
    EcoBenefitComponent,
    QuoteFromComponent,
    WeWorkWithComponent,
    HowDocHQWorksComponent
  ],
  providers: [],
})


export class LandingPageModule { }