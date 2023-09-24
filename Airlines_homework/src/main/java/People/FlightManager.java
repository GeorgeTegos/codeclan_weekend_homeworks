package People;

import People.Customers.Passenger;
import org.example.Plane;
import org.example.PlaneType;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class FlightManager extends Person{

    public FlightManager(String name){
        super(name);
    }

    public static double baggageWeightPerPerson(PlaneType planeType){
        double bagSpace = planeType.getBagSpace() ;
        int capacity= planeType.getCapacity();

        double result = bagSpace/capacity;

        return result;
    }

    public static double weightBookedByPassengers(Plane planeType, ArrayList<Passenger> passengers) {
        double result = 0;
        for(Passenger passenger:passengers){
            result += passenger.getWeightOfBag() * passenger.getNumberOfBags();
        }
        return result;
    }


    public static double remainingWeightLeft(Plane plane, ArrayList<Passenger> passengers) {
        double result = plane.getType().getBagSpace() - weightBookedByPassengers(plane,passengers);

        return result;
    }
}
