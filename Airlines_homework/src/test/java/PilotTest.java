import People.Staff.Pilot;
import People.Staff.Rank;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class PilotTest {
    private Pilot pilot;

    @Before
    public void before(){
        pilot = new Pilot("Jayce", Rank.Captain,"AZ9923OP");
    }

    @Test
    public void hasLicenceNumber(){
        String expect = "AZ9923OP";

        assertEquals(expect,pilot.getLicenceNumber());
    }

    @Test
    public void canFlyThePlane(){
        String expect = "I am your Pilot, i can fly the plane";
        assertEquals(expect,pilot.flyThePlane());
    }
}
