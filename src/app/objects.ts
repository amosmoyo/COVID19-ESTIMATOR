export class Objects {
  constructor(
    public currentlyInfected: number,
    public infectionsByRequestedTime: number,
    public severeCasesByRequestedTime: number,
    public hospitalBedsByRequestedTime: number,
    public casesForICUByRequestedTime: number,
    public casesForVentilatorsByRequestedTime: number,
    public dollarsInFlight: number
  ) {}
}
