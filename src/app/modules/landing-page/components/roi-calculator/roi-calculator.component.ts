import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roi-calculator',
  templateUrl: './roi-calculator.component.html',
  styleUrls: ['./roi-calculator.component.scss']
})
export class RoiCalculatorComponent implements OnInit {

  public roiCalculated = false;
  public isFormValid = false;
  public isShownAdvancedOptions = false;
  public workingDays = 365-52*2-30;
  public directCost = 0;
  public indirectCost = 0;
  public retentionCost = 0;
  public annualCost = 0;
  public bwLite = 0;
  public bw = 0;
  public bwPremium = 0;
  public bwLiteSavings = 0;
  public bwSavings = 0;
  public bwPremiumSavings = 0;
  public employeeCount = 0;
  public hasSickLeave: any;
  public sickPayTypes = [
    {
      label: "Statutory",
      value: 1,
    },
    {
      label: "Full Sick Pay",
      value: 2
    }
  ];
  public sickPayType = this.sickPayTypes[1].value;
  public industries = [
    {
      label: "Professional Services",
      sickLeaves: 5.9,
      aveSalary: 58245,
      attrition: 0.114
    },
    {
      label: "Care",
      sickLeaves: 11.3,
      aveSalary:  24857,
      attrition: 0.112
    },
    {
      label: "Government",
      sickLeaves: 9.9,
      aveSalary: 28200,
      attrition: 0.112
    },
    {
      label: "Hospitality & Catering",
      sickLeaves: 5.3,
      aveSalary: 27279,
      attrition: 0.172
    },
    {
      label: "IT & Tech",
      sickLeaves: 4,
      aveSalary: 50320,
      attrition: 0.133
    },
    {
      label: "Construction",
      sickLeaves: 4.9,
      aveSalary: 44083,
      attrition: 0.124
    },
    {
      label: "Financial Services",
      sickLeaves: 9.3,
      aveSalary: 48807,
      attrition: 0.108
    },
    {
      label: "Education",
      sickLeaves: 8.9,
      aveSalary: 33932,
      attrition: 0.112
    },
    {
      label: "Manufacturing",
      sickLeaves: 6.6,
      aveSalary: 31613,
      attrition: 0.124
    },
    {
      label: "Media",
      sickLeaves: 4.4,
      aveSalary: 37534,
      attrition: 0.132
    },
    {
      label: "Retail",
      sickLeaves: 7.4,
      aveSalary: 28766,
      attrition: 0.162
    },
    {
      label: "Recruitment",
      sickLeaves: 6.7,
      aveSalary: 41595,
      attrition: 0.114
    },
    {
      label: "Transport and Logistics",
      sickLeaves: 7.8,
      aveSalary: 29157,
      attrition: 0.114
    },
    {
      label: "Engineering",
      sickLeaves: 4.9,
      aveSalary: 38033,
      attrition: 0.124
    },
    {
      label: "Health and Medicine",
      sickLeaves: 10.9,
      aveSalary: 37723,
      attrition: 0.112
    },
    {
      label: "Motoring & Automotive",
      sickLeaves: 6.7,
      aveSalary: 34755,
      attrition: 0.13
    },
    {
      label: "Customer Service",
      sickLeaves: 5.3,
      aveSalary: 24054,
      attrition: 0.13
    },
    {
      label: "FMCG",
      sickLeaves: 11.7,
      aveSalary: 38058,
      attrition: 0.13
    },
    {
      label: "Other",
      sickLeaves: 6.6,
      aveSalary: 37770,
      attrition: 0.15
    }
  ];
  public industry: any;
  constructor() { }

  ngOnInit() {
  }

  showAdvancedOptions() {
    this.isShownAdvancedOptions = !this.isShownAdvancedOptions;
  }

  showInput(ev) {
    ev.target.previousSibling.classList.remove('d-none');
    ev.target.classList.add('d-none');
    ev.target.previousSibling.focus();
  }

  hideInput(ev) {
    ev.target.nextSibling.classList.remove('d-none');
    ev.target.classList.add('d-none');
  }

  calculate() {
    this.roiCalculated = true;
    if (!this.industry || !this.employeeCount) {
      return;
    }
    this.isFormValid = true;
    this.directCost = this.calculateDirectCost();
    this.indirectCost = this.calculateIndirectCost();
    this.retentionCost = this.calculateRetentionCost();
    this.annualCost = this.directCost + this.indirectCost + this.retentionCost;
    this.bwLite = this.calculateBWLite();
    this.bw = this.calculateBW();
    this.bwPremium = this.calculateBWPremium();
    this.bwLiteSavings = this.calculateBWLiteSavings();
    this.bwSavings = this.calculateBWSavings();
    this.bwPremiumSavings = this.calculateBWPremiumSavings();
  }

  calculateDirectCost() {
    let spType = this.sickPayType;
    let val = 0;
    if (this.hasSickLeave == 1) {
      if (spType == 1) {
        val = this.industry.sickLeaves / this.workingDays * this.industry.aveSalary * this.employeeCount * 0.1;
      } else if (spType == 2) {
        val = 145 / 5 * this.employeeCount * this.industry.sickLeaves;
      }
    } else {
      val = this.industry.sickLeaves / this.workingDays * this.industry.aveSalary * this.employeeCount;
    }

    return Math.round(val);
  }

  calculateIndirectCost() {
    return Math.round(this.industry.sickLeaves / this.workingDays * this.industry.aveSalary * this.employeeCount);
  }

  calculateRetentionCost() {
    return Math.round(this.industry.attrition * this.employeeCount * this.industry.aveSalary * 0.20);
  }

  calculateBWLite() {
    return Math.round(this.employeeCount * 8.8 * 12);
  }

  calculateBW() {
    return Math.round(this.employeeCount * 14.8 * 12);
  }

  calculateBWPremium() {
    return Math.round(this.employeeCount * 29.9 * 12);
  }

  calculateBWLiteSavings() {
    return Math.round(this.annualCost * 0.10 - this.bwLite);
  }

  calculateBWSavings() {
    return Math.round(this.annualCost * 0.225 - this.bw);
  }

  calculateBWPremiumSavings() {
    return Math.round(this.annualCost * 0.40 - this.bwPremium);
  }
}
