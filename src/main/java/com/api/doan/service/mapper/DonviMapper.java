package com.api.doan.service.mapper;

import com.api.doan.domain.*;
import com.api.doan.service.dto.DonviDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Donvi} and its DTO {@link DonviDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface DonviMapper extends EntityMapper<DonviDTO, Donvi> {


    @Mapping(target = "nhansus", ignore = true)
    @Mapping(target = "removeNhansu", ignore = true)
    Donvi toEntity(DonviDTO donviDTO);

    default Donvi fromId(Long id) {
        if (id == null) {
            return null;
        }
        Donvi donvi = new Donvi();
        donvi.setId(id);
        return donvi;
    }
}
