export interface IInput {
  region: {
    regionName: string;
    avgAge: number;
    avgDailyIncomeInUSD: number;
    avgDailyIncomePopulation: number;
  };
  periodType: string;
  timeToElapse: number;
  reportedCases: number;
  population: number;
  totalHospitalBeds: number;
}


export interface IInput2 {
  currentlyInfected: number;
  infectionsByRequestedTime: number;
  severeCasesByRequestedTime: number;
  hospitalBedsByRequestedTime: number;
  casesForICUByRequestedTime: number;
  casesForVentilatorsByRequestedTime: number;
  dollarsInFlight: number;
}
