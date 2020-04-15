import { Injectable } from '@angular/core';
import { Objects } from './objects';

@Injectable({
  providedIn: 'root'
})
export class EstimatorService {
  severeImpact: object;
  impact: object;
  input2;
  state = false;

  generalObj;

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

  impactEstimator(val) {
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
      val.region.avgDailyIncomePopulation,
      val.timeToElapse,
      val.periodType
    );

    const impact  = new Objects(
      currentlyInfected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    );

    return impact;
  }

  severeImpactEstimator(val) {
    const currentlyInfected = val.reportedCases * 50;
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
      val.region.avgDailyIncomePopulation,
      val.timeToElapse,
      val.periodType
    );

    const severeImpact  = new Objects(
      currentlyInfected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    );

    return severeImpact;
  }

  covid19ImpactEstimator(data: object) {
    if (data) {
      console.log('amos', data);
      this.state = true;
      return {
        dataa: data,
        impact: this.impactEstimator(data),
        severeImpact: this.severeImpactEstimator(data)
      };
    }
  }
}
