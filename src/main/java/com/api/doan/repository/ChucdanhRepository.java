package com.api.doan.repository;
import com.api.doan.domain.Chucdanh;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Chucdanh entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ChucdanhRepository extends JpaRepository<Chucdanh, Long>, JpaSpecificationExecutor<Chucdanh> {

}
