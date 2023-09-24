import People.FlightManager;
import org.example.Plane;
import org.example.PlaneType;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
public class FlightManagerTest {
    private FlightManager flightManager;
    private Plane plane;

    @Before
    public void before(){
        flightManager = new FlightManager("Jimmy");
        plane = new Plane(PlaneType.Saab2000);


    }
}
