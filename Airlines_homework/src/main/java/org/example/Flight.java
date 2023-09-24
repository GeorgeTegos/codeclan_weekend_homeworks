package org.example;

import People.Customers.Passenger;
import People.Person;
import People.Staff.CabinCrew;
import People.Staff.FlightCrew;
import People.Staff.Pilot;

import java.util.ArrayList;

public class Flight {
    private Pilot pilot;
    private ArrayList<FlightCrew> flightCrewList;
    private ArrayList<CabinCrew> cabinCrew;
    private ArrayList<Passenger> passengers;
    private Plane plane;
    private String flightNumber;
    private String destination;
    private String departure;
    private String departureTime;

    public  Flight(Pilot pilot,
                       ArrayList<CabinCrew> cabinCrew,
                       ArrayList<Passenger> passengers,
                       Plane plane,
                       String flightNumber,
                       String destination,
                       String departure,
                       String departureTime){
        this.pilot = pilot;
        this.cabinCrew = cabinCrew;
        this.passengers = passengers;
        this.plane = plane;
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.departure = departure;
        this.departureTime = departureTime;
    }


    public int availableSeats() {
        int result = this.plane.getPlaneCapacity() - this.pilot.getListOfFlyCrewMembers().size();
        result = result - this.passengers.size();
        return result;
    }

    public void bookAPassenger(Passenger passenger){
        if(this.availableSeats() > 0){
            this.passengers.add(passenger);
        }
    }
}
