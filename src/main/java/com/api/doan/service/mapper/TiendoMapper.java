package com.api.doan.service.mapper;

import com.api.doan.domain.*;
import com.api.doan.service.dto.TiendoDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Tiendo} and its DTO {@link TiendoDTO}.
 */
@Mapper(componentModel = "spring", uses = {DetaiMapper.class})
public interface TiendoMapper extends EntityMapper<TiendoDTO, Tiendo> {

    @Mapping(source = "detai.id", target = "detaiId")
    TiendoDTO toDto(Tiendo tiendo);

    @Mapping(source = "detaiId", target = "detai")
    Tiendo toEntity(TiendoDTO tiendoDTO);

    default Tiendo fromId(Long id) {
        if (id == null) {
            return null;
        }
        Tiendo tiendo = new Tiendo();
        tiendo.setId(id);
        return tiendo;
    }
}
