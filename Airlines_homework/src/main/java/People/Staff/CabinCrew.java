package People.Staff;

public class CabinCrew extends FlightCrew{

    public CabinCrew(String name, Rank rank){
        super(name,rank);
    }

    public String message(String message){
        return message;
    }
}
