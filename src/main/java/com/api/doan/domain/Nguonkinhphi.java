package com.api.doan.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Nguonkinhphi.
 */
@Entity
@Table(name = "nguonkinhphi")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Nguonkinhphi implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "manguonkinhphi")
    private String manguonkinhphi;

    @Column(name = "tennguonkinhphi")
    private String tennguonkinhphi;

    @Column(name = "noidung")
    private String noidung;

    @Column(name = "sotiencap")
    private Integer sotiencap;

    @Column(name = "sudung")
    private Integer sudung;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "nguonkinhphi_detai",
               joinColumns = @JoinColumn(name = "nguonkinhphi_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "detai_id", referencedColumnName = "id"))
    private Set<Detai> detais = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getManguonkinhphi() {
        return manguonkinhphi;
    }

    public Nguonkinhphi manguonkinhphi(String manguonkinhphi) {
        this.manguonkinhphi = manguonkinhphi;
        return this;
    }

    public void setManguonkinhphi(String manguonkinhphi) {
        this.manguonkinhphi = manguonkinhphi;
    }

    public String getTennguonkinhphi() {
        return tennguonkinhphi;
    }

    public Nguonkinhphi tennguonkinhphi(String tennguonkinhphi) {
        this.tennguonkinhphi = tennguonkinhphi;
        return this;
    }

    public void setTennguonkinhphi(String tennguonkinhphi) {
        this.tennguonkinhphi = tennguonkinhphi;
    }

    public String getNoidung() {
        return noidung;
    }

    public Nguonkinhphi noidung(String noidung) {
        this.noidung = noidung;
        return this;
    }

    public void setNoidung(String noidung) {
        this.noidung = noidung;
    }

    public Integer getSotiencap() {
        return sotiencap;
    }

    public Nguonkinhphi sotiencap(Integer sotiencap) {
        this.sotiencap = sotiencap;
        return this;
    }

    public void setSotiencap(Integer sotiencap) {
        this.sotiencap = sotiencap;
    }

    public Integer getSudung() {
        return sudung;
    }

    public Nguonkinhphi sudung(Integer sudung) {
        this.sudung = sudung;
        return this;
    }

    public void setSudung(Integer sudung) {
        this.sudung = sudung;
    }

    public Set<Detai> getDetais() {
        return detais;
    }

    public Nguonkinhphi detais(Set<Detai> detais) {
        this.detais = detais;
        return this;
    }

    public Nguonkinhphi addDetai(Detai detai) {
        this.detais.add(detai);
        detai.getNguonkinhphis().add(this);
        return this;
    }

    public Nguonkinhphi removeDetai(Detai detai) {
        this.detais.remove(detai);
        detai.getNguonkinhphis().remove(this);
        return this;
    }

    public void setDetais(Set<Detai> detais) {
        this.detais = detais;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Nguonkinhphi)) {
            return false;
        }
        return id != null && id.equals(((Nguonkinhphi) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Nguonkinhphi{" +
            "id=" + getId() +
            ", manguonkinhphi='" + getManguonkinhphi() + "'" +
            ", tennguonkinhphi='" + getTennguonkinhphi() + "'" +
            ", noidung='" + getNoidung() + "'" +
            ", sotiencap=" + getSotiencap() +
            ", sudung=" + getSudung() +
            "}";
    }
}
