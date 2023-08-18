class Traveller {
  constructor(journeys) {
    this.journeys = journeys;
  }

  getJourneyStartLocations() {
    return this.journeys.map((journey)=> journey.startLocation)
  }

  getJourneyEndLocations() {
    return this.journeys.map((journey)=> journey.endLocation)
  }

  getJourneysByTransport(transport) {
    return this.journeys.filter((journey)=>journey.transport === transport)
  }

  getJourneysByMinDistance(minDistance) {
    return this.journeys.filter(({distance})=> distance > minDistance)
  }

  calculateTotalDistanceTravelled() {
    return this.journeys.reduce((total,{distance}) => total + distance, 0)
    // return this.journeys.map(({distance})=>distance).reduce((total,distance)=> total+distance)
  }

  getUniqueModesOfTransport() {
    // const array = this.journeys.map(({transport})=>transport)
    // return [...new Set(array)]

    return this.journeys.map(journey => journey.transport).filter((transport,index,array)=>{
      return array.indexOf(transport)=== index
    })
  }
}


module.exports = Traveller;
