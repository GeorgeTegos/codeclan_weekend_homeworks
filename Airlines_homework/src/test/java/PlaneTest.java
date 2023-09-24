import org.example.Plane;
import org.example.PlaneType;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
public class PlaneTest {

    private Plane plane;

    @Before
    public void before(){
        plane = new Plane(PlaneType.Boeing747);
    }

    @Test
    public void hasCapacity(){
        double expect = 250;
        assertEquals(expect,plane.getPlaneCapacity(), 0.0);
    }

    @Test
    public void hasCorrectTotalWeight(){
        double expect = plane.getPlaneTotalWeight();
        assertEquals(expect,PlaneType.Boeing747.getTotalWeight(), 0.0);
    }
}
