package com.api.doan.service.mapper;

import com.api.doan.domain.*;
import com.api.doan.service.dto.NguonkinhphiDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Nguonkinhphi} and its DTO {@link NguonkinhphiDTO}.
 */
@Mapper(componentModel = "spring", uses = {DetaiMapper.class})
public interface NguonkinhphiMapper extends EntityMapper<NguonkinhphiDTO, Nguonkinhphi> {


    @Mapping(target = "removeDetai", ignore = true)

    default Nguonkinhphi fromId(Long id) {
        if (id == null) {
            return null;
        }
        Nguonkinhphi nguonkinhphi = new Nguonkinhphi();
        nguonkinhphi.setId(id);
        return nguonkinhphi;
    }
}
