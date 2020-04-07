package com.api.doan.repository;
import com.api.doan.domain.Nguonkinhphi;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Nguonkinhphi entity.
 */
@Repository
public interface NguonkinhphiRepository extends JpaRepository<Nguonkinhphi, Long>, JpaSpecificationExecutor<Nguonkinhphi> {

    @Query(value = "select distinct nguonkinhphi from Nguonkinhphi nguonkinhphi left join fetch nguonkinhphi.detais",
        countQuery = "select count(distinct nguonkinhphi) from Nguonkinhphi nguonkinhphi")
    Page<Nguonkinhphi> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct nguonkinhphi from Nguonkinhphi nguonkinhphi left join fetch nguonkinhphi.detais")
    List<Nguonkinhphi> findAllWithEagerRelationships();

    @Query("select nguonkinhphi from Nguonkinhphi nguonkinhphi left join fetch nguonkinhphi.detais where nguonkinhphi.id =:id")
    Optional<Nguonkinhphi> findOneWithEagerRelationships(@Param("id") Long id);

}
