package com.api.doan.repository;
import com.api.doan.domain.Nhansu;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Nhansu entity.
 */
@Repository
public interface NhansuRepository extends JpaRepository<Nhansu, Long>, JpaSpecificationExecutor<Nhansu> {

    @Query(value = "select distinct nhansu from Nhansu nhansu left join fetch nhansu.detais",
        countQuery = "select count(distinct nhansu) from Nhansu nhansu")
    Page<Nhansu> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct nhansu from Nhansu nhansu left join fetch nhansu.detais")
    List<Nhansu> findAllWithEagerRelationships();

    @Query("select nhansu from Nhansu nhansu left join fetch nhansu.detais where nhansu.id =:id")
    Optional<Nhansu> findOneWithEagerRelationships(@Param("id") Long id);

}
