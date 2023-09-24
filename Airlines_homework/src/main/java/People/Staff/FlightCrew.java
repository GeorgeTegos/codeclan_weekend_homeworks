package People.Staff;

import People.Person;

import java.util.ArrayList;

public class FlightCrew extends Person {

    private Rank rank;

    private ArrayList<FlightCrew> listOfFlyCrewMembers;
    public FlightCrew(String name, Rank rank){
        super(name);
        this.rank = rank;
        this.listOfFlyCrewMembers = new ArrayList<>();
    }

    public Rank getRank() {
        return rank;
    }

    public void addCrewToFlightList(FlightCrew member){
        this.listOfFlyCrewMembers.add(member);
    }
    public ArrayList<FlightCrew> getListOfFlyCrewMembers() {
        return listOfFlyCrewMembers;
    }


}
