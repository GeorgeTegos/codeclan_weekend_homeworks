package People.Staff;

import People.Person;

public class FlightCrew extends Person {

    private Rank rank;
    public FlightCrew(String name, Rank rank){
        super(name);
        this.rank = rank;
    }

    public Rank getRank() {
        return rank;
    }
}
