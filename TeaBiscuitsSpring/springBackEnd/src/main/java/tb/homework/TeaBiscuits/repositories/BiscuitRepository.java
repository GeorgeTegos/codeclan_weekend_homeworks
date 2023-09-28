package tb.homework.TeaBiscuits.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tb.homework.TeaBiscuits.models.Biscuit;

@Repository
public interface BiscuitRepository extends JpaRepository<Biscuit,Long> {
}
