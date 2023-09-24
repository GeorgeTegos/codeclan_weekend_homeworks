package People.Staff;

public class Pilot extends FlightCrew{
    private String licenceNumber;
    public Pilot(String name,Rank rank,String licenceNumber){
        super(name,rank);
        this.licenceNumber = licenceNumber;
    }

    public String getLicenceNumber() {
        return licenceNumber;
    }


}
