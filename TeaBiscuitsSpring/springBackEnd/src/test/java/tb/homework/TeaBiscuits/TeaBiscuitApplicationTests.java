package tb.homework.TeaBiscuits;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import tb.homework.TeaBiscuits.models.Biscuit;
import tb.homework.TeaBiscuits.models.Tea;
import tb.homework.TeaBiscuits.repositories.BiscuitRepository;
import tb.homework.TeaBiscuits.repositories.TeaRepository;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class TeaBiscuitApplicationTests {

	@Autowired
	TeaRepository teaRepository;

	@Autowired
	BiscuitRepository biscuitRepository;
	private Tea tea;
	private Biscuit biscuit;

	@BeforeAll
	public void setup(){
		tea = new Tea("TeaName","TeaBrand");
		biscuit = new Biscuit("BiscuitName","BiscuitBrand");
	}

	@Test
	void contextLoads() {
	}

	@Test
	public void canAddTea(){
		teaRepository.save(tea);
	}

	@Test
	public void canAddBiscuit(){
		biscuitRepository.save(biscuit);
	}

}
