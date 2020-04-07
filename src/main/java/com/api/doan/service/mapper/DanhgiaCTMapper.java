package com.api.doan.service.mapper;

import com.api.doan.domain.*;
import com.api.doan.service.dto.DanhgiaCTDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link DanhgiaCT} and its DTO {@link DanhgiaCTDTO}.
 */
@Mapper(componentModel = "spring", uses = {DanhgiaMapper.class})
public interface DanhgiaCTMapper extends EntityMapper<DanhgiaCTDTO, DanhgiaCT> {

    @Mapping(source = "danhgia.id", target = "danhgiaId")
    DanhgiaCTDTO toDto(DanhgiaCT danhgiaCT);

    @Mapping(target = "noidungdanhgias", ignore = true)
    @Mapping(target = "removeNoidungdanhgia", ignore = true)
    @Mapping(source = "danhgiaId", target = "danhgia")
    DanhgiaCT toEntity(DanhgiaCTDTO danhgiaCTDTO);

    default DanhgiaCT fromId(Long id) {
        if (id == null) {
            return null;
        }
        DanhgiaCT danhgiaCT = new DanhgiaCT();
        danhgiaCT.setId(id);
        return danhgiaCT;
    }
}
