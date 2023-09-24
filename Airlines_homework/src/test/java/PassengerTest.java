import People.Customers.Passenger;
import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.assertEquals;
public class PassengerTest {
    private Passenger passenger;

    @Before
    public void before(){
        passenger= new Passenger("George",2);
    }

    @Test
    public void hasBags(){
        assertEquals(2,passenger.getNumberOfBags());
    }
}
