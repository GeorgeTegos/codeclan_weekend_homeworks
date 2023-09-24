package People;

import org.example.PlaneType;

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
}
