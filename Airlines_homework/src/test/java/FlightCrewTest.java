import People.Staff.FlightCrew;
import People.Staff.Rank;
import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.assertEquals;
public class FlightCrewTest {
    private FlightCrew crewMember;
    private FlightCrew captain;

    @Before
    public void before(){
        crewMember = new FlightCrew("Jayce", Rank.FlightAttendant);
        captain = new FlightCrew("Nick",Rank.Captain);
    }

    @Test
    public void testRank(){
        assertEquals(Rank.Captain,captain.getRank());
    }
}
