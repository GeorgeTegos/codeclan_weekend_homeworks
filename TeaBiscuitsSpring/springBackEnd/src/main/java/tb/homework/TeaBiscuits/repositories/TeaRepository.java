package tb.homework.TeaBiscuits.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tb.homework.TeaBiscuits.models.Tea;

@Repository
public interface TeaRepository extends JpaRepository<Tea,Long> {
}
