import People.Staff.CabinCrew;
import People.Staff.Rank;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CabinCrewTest {

    private CabinCrew crewMember;

    @Before
    public void before(){
        crewMember = new CabinCrew("Jinx", Rank.FlightAttendant);
    }

    @Test
    public void canMessage(){
        String expect = "Welcome to Flight!";
        assertEquals(expect,crewMember.message("Welcome to Flight!"));
    }
}
