import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IInput, IInput2 } from './input';

@Injectable({
  providedIn: 'root'
})
export class EstimatorService {
  severeImpact: IInput2;
  impact: IInput2;

  constructor() { }


  days(periodType, timeToElapse) {
    let day;
    const time = timeToElapse;
    if (periodType === 'months') {
      day = time * 30;
    } else if (periodType === 'weeks') {
      day = time * 7;
    } else {
      day = time;
    }
    const ans = (2 ** (Math.trunc((day / 3))));
    return ans;
  }

  hospitalBeds(severeCase, beds) {
    const remainBedActualCapity = 0.35 * beds;

    const requiredBeds = (remainBedActualCapity - severeCase);
    return Math.trunc(requiredBeds);
  }

  incomeLost(infected, income, pop, time, periodType) {
    let day;
    if (periodType === 'months') {
      day = time * 30;
    } else if (periodType === 'weeks') {
      day = time * 7;
    } else {
      day = time;
    }
    return Math.trunc((infected * pop * income) / (day));
  }

  impactEstimator(val: IInput) {
    const currentlyInfected = val.reportedCases * 10;
    const  infectionsByRequestedTime = currentlyInfected * this.days(
      val.periodType, val.timeToElapse
    );
    const severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
    const hospitalBedsByRequestedTime = this.hospitalBeds(
      severeCasesByRequestedTime, val.totalHospitalBeds
    );
    const casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
    const casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);
    const dollarsInFlight = this.incomeLost(
      infectionsByRequestedTime,
      val.region.avgDailyIncomeInUSD,
      +val.region.avgDailyIncomePopulation,
      val.timeToElapse,
      val.periodType
    );

    this.impact  = {
      currentlyInfected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    };

    return this.impact;
  }

  severeImpactEstimator(val: IInput) {
    const currentlyInfectedd = val.reportedCases * 50;
    const  infectionsByRequestedTimee = currentlyInfectedd * this.days(
      val.periodType, val.timeToElapse
    );
    const severeCasesByRequestedTimee = Math.trunc(0.15 * infectionsByRequestedTimee);
    const hospitalBedsByRequestedTimee = this.hospitalBeds(
      severeCasesByRequestedTimee, val.totalHospitalBeds
    );
    const casesForICUByRequestedTimee = Math.trunc(0.05 * infectionsByRequestedTimee);
    const casesForVentilatorsByRequestedTimee = Math.trunc(0.02 * infectionsByRequestedTimee);
    const dollarsInFlightt = this.incomeLost(
      infectionsByRequestedTimee,
      val.region.avgDailyIncomeInUSD,
      +val.region.avgDailyIncomePopulation,
      val.timeToElapse,
      val.periodType
    );
    this.severeImpact  = {
      currentlyInfected: currentlyInfectedd,
      infectionsByRequestedTime: infectionsByRequestedTimee,
      severeCasesByRequestedTime: severeCasesByRequestedTimee,
      hospitalBedsByRequestedTime: hospitalBedsByRequestedTimee,
      casesForICUByRequestedTime: casesForICUByRequestedTimee,
      casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTimee,
      dollarsInFlight: dollarsInFlightt
    };

    return this.severeImpact;
  }
}
