package com.api.doan.service.dto;

import java.io.Serializable;
import java.util.Objects;
import io.github.jhipster.service.Criteria;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;

/**
 * Criteria class for the {@link com.api.doan.domain.Chunhiem} entity. This class is used
 * in {@link com.api.doan.web.rest.ChunhiemResource} to receive all the possible filtering options from
 * the Http GET request parameters.
 * For example the following could be a valid request:
 * {@code /chunhiems?id.greaterThan=5&attr1.contains=something&attr2.specified=false}
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class ChunhiemCriteria implements Serializable, Criteria {

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private IntegerFilter sudung;

    private LongFilter nhansuId;

    public ChunhiemCriteria(){
    }

    public ChunhiemCriteria(ChunhiemCriteria other){
        this.id = other.id == null ? null : other.id.copy();
        this.sudung = other.sudung == null ? null : other.sudung.copy();
        this.nhansuId = other.nhansuId == null ? null : other.nhansuId.copy();
    }

    @Override
    public ChunhiemCriteria copy() {
        return new ChunhiemCriteria(this);
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public IntegerFilter getSudung() {
        return sudung;
    }

    public void setSudung(IntegerFilter sudung) {
        this.sudung = sudung;
    }

    public LongFilter getNhansuId() {
        return nhansuId;
    }

    public void setNhansuId(LongFilter nhansuId) {
        this.nhansuId = nhansuId;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final ChunhiemCriteria that = (ChunhiemCriteria) o;
        return
            Objects.equals(id, that.id) &&
            Objects.equals(sudung, that.sudung) &&
            Objects.equals(nhansuId, that.nhansuId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
        id,
        sudung,
        nhansuId
        );
    }

    @Override
    public String toString() {
        return "ChunhiemCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (sudung != null ? "sudung=" + sudung + ", " : "") +
                (nhansuId != null ? "nhansuId=" + nhansuId + ", " : "") +
            "}";
    }

}
