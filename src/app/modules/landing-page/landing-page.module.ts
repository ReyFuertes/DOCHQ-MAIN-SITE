import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { EcoBenefitComponent } from './components/eco-benefit/eco-benefit.component';
import { QuoteFromComponent } from './components/quote-from/quote-from.component';
import { WeWorkWithComponent } from './components/we-work-with/we-work-with.component';
import { HowDocHQWorksComponent } from './pages/how-dochq-works/how-dochq-works.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { RoiCalculatorComponent } from './components/roi-calculator/roi-calculator.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'how-dochq-works',
    component: HowDocHQWorksComponent
  },
  {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
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
    HowDocHQWorksComponent,
    PackagesComponent,
    RoiCalculatorComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
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
    HowDocHQWorksComponent,
    PackagesComponent,
    RoiCalculatorComponent
  ],
  providers: [],
})


export class LandingPageModule { }
