package com.api.doan.service.mapper;

import com.api.doan.domain.*;
import com.api.doan.service.dto.DetaiDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Detai} and its DTO {@link DetaiDTO}.
 */
@Mapper(componentModel = "spring", uses = {LinhvucMapper.class, CapdetaiMapper.class, HoidongdanhgiaMapper.class})
public interface DetaiMapper extends EntityMapper<DetaiDTO, Detai> {

    @Mapping(source = "linhvuc.id", target = "linhvucId")
    @Mapping(source = "capdetai.id", target = "capdetaiId")
    @Mapping(source = "hoidongdanhgia.id", target = "hoidongdanhgiaId")
    DetaiDTO toDto(Detai detai);

    @Mapping(target = "dutoanKPS", ignore = true)
    @Mapping(target = "removeDutoanKP", ignore = true)
    @Mapping(target = "tiendos", ignore = true)
    @Mapping(target = "removeTiendo", ignore = true)
    @Mapping(target = "danhgias", ignore = true)
    @Mapping(target = "removeDanhgia", ignore = true)
    @Mapping(source = "linhvucId", target = "linhvuc")
    @Mapping(source = "capdetaiId", target = "capdetai")
    @Mapping(source = "hoidongdanhgiaId", target = "hoidongdanhgia")
    @Mapping(target = "coquanphoihops", ignore = true)
    @Mapping(target = "removeCoquanphoihop", ignore = true)
    @Mapping(target = "nguonkinhphis", ignore = true)
    @Mapping(target = "removeNguonkinhphi", ignore = true)
    @Mapping(target = "nhansus", ignore = true)
    @Mapping(target = "removeNhansu", ignore = true)
    Detai toEntity(DetaiDTO detaiDTO);

    default Detai fromId(Long id) {
        if (id == null) {
            return null;
        }
        Detai detai = new Detai();
        detai.setId(id);
        return detai;
    }
}
