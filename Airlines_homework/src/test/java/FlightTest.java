import People.Customers.Passenger;
import People.FlightManager;
import People.Staff.CabinCrew;
import People.Staff.Pilot;
import People.Staff.Rank;
import org.example.Flight;
import org.example.Plane;
import org.example.PlaneType;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;
public class FlightTest {
    private Flight flight;
    private Pilot pilot;
    private CabinCrew cabinCrewOne;
    private CabinCrew cabinCrewTwo;
    private ArrayList<CabinCrew> cabinCrewList;
    private Passenger passengerOne;
    private Passenger passengerTwo;
    private ArrayList<Passenger> passengers;
    private Plane plane;
    private String flightNumber;
    private String destination;
    private String departure;
    private String departureTime;


    @Before
    public void before(){
        pilot = new Pilot("George", Rank.Captain,"AZ001122");
        cabinCrewOne = new CabinCrew("Zoe",Rank.FlightAttendant);
        cabinCrewTwo = new CabinCrew("Jax", Rank.FlightAttendant);
        cabinCrewList = new ArrayList<>();
        cabinCrewList.add(cabinCrewOne);
        cabinCrewList.add(cabinCrewTwo);

        passengerOne = new Passenger("John",2);
        passengerTwo = new Passenger("Jack", 2);
        passengers = new ArrayList<>();
        passengers.add(passengerOne);
        passengers.add(passengerTwo);


        plane = new Plane(PlaneType.Boeing747);
        flightNumber = "Flight AZ00";
        destination = "Paris";
        departure = "London";
        departureTime = "18:30";



        flight = new Flight(pilot,cabinCrewList,passengers,plane,flightNumber,destination,departure,departureTime);
    }

    @Test
    public void testAvailableSeats(){
        pilot.addCrewToFlightList(pilot);
        pilot.addCrewToFlightList(cabinCrewOne);
        pilot.addCrewToFlightList(cabinCrewTwo);
        int expect = 245;
        assertEquals(expect,this.flight.availableSeats());
    }

    @Test
    public void canBookAPassenger(){
        pilot.addCrewToFlightList(pilot);
        pilot.addCrewToFlightList(cabinCrewOne);
        pilot.addCrewToFlightList(cabinCrewTwo);
        this.flight.bookAPassenger(passengerTwo);

        int expect = 244; //244

        assertEquals(expect, this.flight.availableSeats());
    }


    @Test
    public void canCalculateBaggagePerPassenger() {

        int expect = 496;
        double result = FlightManager.baggageWeightPerPerson(this.plane.getType());

        assertEquals(expect,result,0.0);
    }

    @Test
    public void testWeightBookedByPassengers(){
        double expect =40;
         double result = FlightManager.weightBookedByPassengers(this.flight.getPlane(),this.flight.getPassengers());
        assertEquals(expect,result,0.0);
    }

    @Test
    public void testRemainingWeightLeft(){

        double expect = 123960.0;
        double result = FlightManager.remainingWeightLeft(this.flight.getPlane(),this.flight.getPassengers());

        assertEquals(expect,result,0.0);
    }

}
