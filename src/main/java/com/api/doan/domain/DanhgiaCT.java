package com.api.doan.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A DanhgiaCT.
 */
@Entity
@Table(name = "danhgia_ct")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class DanhgiaCT implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "diem")
    private Integer diem;

    @Column(name = "sudung")
    private Integer sudung;

    @OneToMany(mappedBy = "danhgiaCT")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Noidungdanhgia> noidungdanhgias = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("danhgiaCTS")
    private Danhgia danhgia;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getDiem() {
        return diem;
    }

    public DanhgiaCT diem(Integer diem) {
        this.diem = diem;
        return this;
    }

    public void setDiem(Integer diem) {
        this.diem = diem;
    }

    public Integer getSudung() {
        return sudung;
    }

    public DanhgiaCT sudung(Integer sudung) {
        this.sudung = sudung;
        return this;
    }

    public void setSudung(Integer sudung) {
        this.sudung = sudung;
    }

    public Set<Noidungdanhgia> getNoidungdanhgias() {
        return noidungdanhgias;
    }

    public DanhgiaCT noidungdanhgias(Set<Noidungdanhgia> noidungdanhgias) {
        this.noidungdanhgias = noidungdanhgias;
        return this;
    }

    public DanhgiaCT addNoidungdanhgia(Noidungdanhgia noidungdanhgia) {
        this.noidungdanhgias.add(noidungdanhgia);
        noidungdanhgia.setDanhgiaCT(this);
        return this;
    }

    public DanhgiaCT removeNoidungdanhgia(Noidungdanhgia noidungdanhgia) {
        this.noidungdanhgias.remove(noidungdanhgia);
        noidungdanhgia.setDanhgiaCT(null);
        return this;
    }

    public void setNoidungdanhgias(Set<Noidungdanhgia> noidungdanhgias) {
        this.noidungdanhgias = noidungdanhgias;
    }

    public Danhgia getDanhgia() {
        return danhgia;
    }

    public DanhgiaCT danhgia(Danhgia danhgia) {
        this.danhgia = danhgia;
        return this;
    }

    public void setDanhgia(Danhgia danhgia) {
        this.danhgia = danhgia;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof DanhgiaCT)) {
            return false;
        }
        return id != null && id.equals(((DanhgiaCT) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "DanhgiaCT{" +
            "id=" + getId() +
            ", diem=" + getDiem() +
            ", sudung=" + getSudung() +
            "}";
    }
}
