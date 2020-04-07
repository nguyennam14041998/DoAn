package com.api.doan.service.mapper;

import com.api.doan.domain.*;
import com.api.doan.service.dto.NoidungdanhgiaDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Noidungdanhgia} and its DTO {@link NoidungdanhgiaDTO}.
 */
@Mapper(componentModel = "spring", uses = {DanhgiaCTMapper.class})
public interface NoidungdanhgiaMapper extends EntityMapper<NoidungdanhgiaDTO, Noidungdanhgia> {

    @Mapping(source = "danhgiaCT.id", target = "danhgiaCTId")
    NoidungdanhgiaDTO toDto(Noidungdanhgia noidungdanhgia);

    @Mapping(source = "danhgiaCTId", target = "danhgiaCT")
    Noidungdanhgia toEntity(NoidungdanhgiaDTO noidungdanhgiaDTO);

    default Noidungdanhgia fromId(Long id) {
        if (id == null) {
            return null;
        }
        Noidungdanhgia noidungdanhgia = new Noidungdanhgia();
        noidungdanhgia.setId(id);
        return noidungdanhgia;
    }
}
