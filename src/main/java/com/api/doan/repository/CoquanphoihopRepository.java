package com.api.doan.repository;
import com.api.doan.domain.Coquanphoihop;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Coquanphoihop entity.
 */
@Repository
public interface CoquanphoihopRepository extends JpaRepository<Coquanphoihop, Long>, JpaSpecificationExecutor<Coquanphoihop> {

    @Query(value = "select distinct coquanphoihop from Coquanphoihop coquanphoihop left join fetch coquanphoihop.detais",
        countQuery = "select count(distinct coquanphoihop) from Coquanphoihop coquanphoihop")
    Page<Coquanphoihop> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct coquanphoihop from Coquanphoihop coquanphoihop left join fetch coquanphoihop.detais")
    List<Coquanphoihop> findAllWithEagerRelationships();

    @Query("select coquanphoihop from Coquanphoihop coquanphoihop left join fetch coquanphoihop.detais where coquanphoihop.id =:id")
    Optional<Coquanphoihop> findOneWithEagerRelationships(@Param("id") Long id);

}
