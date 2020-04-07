package com.api.doan.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * A Detai.
 */
@Entity
@Table(name = "detai")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Detai implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ma")
    private String ma;

    @Column(name = "ten")
    private String ten;

    @Column(name = "thoigiantao")
    private LocalDate thoigiantao;

    @Column(name = "thoigianbatdau")
    private LocalDate thoigianbatdau;

    @Column(name = "thoigianketthuc")
    private LocalDate thoigianketthuc;

    @Column(name = "muctieu")
    private String muctieu;

    @Column(name = "noidung")
    private String noidung;

    @Column(name = "tinhcapthiet")
    private Integer tinhcapthiet;

    @Column(name = "ketqua")
    private String ketqua;

    @Column(name = "xeploai")
    private Integer xeploai;

    @Column(name = "trangthai")
    private Integer trangthai;

    @Column(name = "sudung")
    private Integer sudung;

    @OneToMany(mappedBy = "detai")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<DutoanKP> dutoanKPS = new HashSet<>();

    @OneToMany(mappedBy = "detai")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Tiendo> tiendos = new HashSet<>();

    @OneToMany(mappedBy = "detai")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Danhgia> danhgias = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("detais")
    private Linhvuc linhvuc;

    @ManyToOne
    @JsonIgnoreProperties("detais")
    private Capdetai capdetai;

    @ManyToOne
    @JsonIgnoreProperties("detais")
    private Hoidongdanhgia hoidongdanhgia;

    @ManyToMany(mappedBy = "detais")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<Coquanphoihop> coquanphoihops = new HashSet<>();

    @ManyToMany(mappedBy = "detais")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<Nguonkinhphi> nguonkinhphis = new HashSet<>();

    @ManyToMany(mappedBy = "detais")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<Nhansu> nhansus = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMa() {
        return ma;
    }

    public Detai ma(String ma) {
        this.ma = ma;
        return this;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }

    public String getTen() {
        return ten;
    }

    public Detai ten(String ten) {
        this.ten = ten;
        return this;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public LocalDate getThoigiantao() {
        return thoigiantao;
    }

    public Detai thoigiantao(LocalDate thoigiantao) {
        this.thoigiantao = thoigiantao;
        return this;
    }

    public void setThoigiantao(LocalDate thoigiantao) {
        this.thoigiantao = thoigiantao;
    }

    public LocalDate getThoigianbatdau() {
        return thoigianbatdau;
    }

    public Detai thoigianbatdau(LocalDate thoigianbatdau) {
        this.thoigianbatdau = thoigianbatdau;
        return this;
    }

    public void setThoigianbatdau(LocalDate thoigianbatdau) {
        this.thoigianbatdau = thoigianbatdau;
    }

    public LocalDate getThoigianketthuc() {
        return thoigianketthuc;
    }

    public Detai thoigianketthuc(LocalDate thoigianketthuc) {
        this.thoigianketthuc = thoigianketthuc;
        return this;
    }

    public void setThoigianketthuc(LocalDate thoigianketthuc) {
        this.thoigianketthuc = thoigianketthuc;
    }

    public String getMuctieu() {
        return muctieu;
    }

    public Detai muctieu(String muctieu) {
        this.muctieu = muctieu;
        return this;
    }

    public void setMuctieu(String muctieu) {
        this.muctieu = muctieu;
    }

    public String getNoidung() {
        return noidung;
    }

    public Detai noidung(String noidung) {
        this.noidung = noidung;
        return this;
    }

    public void setNoidung(String noidung) {
        this.noidung = noidung;
    }

    public Integer getTinhcapthiet() {
        return tinhcapthiet;
    }

    public Detai tinhcapthiet(Integer tinhcapthiet) {
        this.tinhcapthiet = tinhcapthiet;
        return this;
    }

    public void setTinhcapthiet(Integer tinhcapthiet) {
        this.tinhcapthiet = tinhcapthiet;
    }

    public String getKetqua() {
        return ketqua;
    }

    public Detai ketqua(String ketqua) {
        this.ketqua = ketqua;
        return this;
    }

    public void setKetqua(String ketqua) {
        this.ketqua = ketqua;
    }

    public Integer getXeploai() {
        return xeploai;
    }

    public Detai xeploai(Integer xeploai) {
        this.xeploai = xeploai;
        return this;
    }

    public void setXeploai(Integer xeploai) {
        this.xeploai = xeploai;
    }

    public Integer getTrangthai() {
        return trangthai;
    }

    public Detai trangthai(Integer trangthai) {
        this.trangthai = trangthai;
        return this;
    }

    public void setTrangthai(Integer trangthai) {
        this.trangthai = trangthai;
    }

    public Integer getSudung() {
        return sudung;
    }

    public Detai sudung(Integer sudung) {
        this.sudung = sudung;
        return this;
    }

    public void setSudung(Integer sudung) {
        this.sudung = sudung;
    }

    public Set<DutoanKP> getDutoanKPS() {
        return dutoanKPS;
    }

    public Detai dutoanKPS(Set<DutoanKP> dutoanKPS) {
        this.dutoanKPS = dutoanKPS;
        return this;
    }

    public Detai addDutoanKP(DutoanKP dutoanKP) {
        this.dutoanKPS.add(dutoanKP);
        dutoanKP.setDetai(this);
        return this;
    }

    public Detai removeDutoanKP(DutoanKP dutoanKP) {
        this.dutoanKPS.remove(dutoanKP);
        dutoanKP.setDetai(null);
        return this;
    }

    public void setDutoanKPS(Set<DutoanKP> dutoanKPS) {
        this.dutoanKPS = dutoanKPS;
    }

    public Set<Tiendo> getTiendos() {
        return tiendos;
    }

    public Detai tiendos(Set<Tiendo> tiendos) {
        this.tiendos = tiendos;
        return this;
    }

    public Detai addTiendo(Tiendo tiendo) {
        this.tiendos.add(tiendo);
        tiendo.setDetai(this);
        return this;
    }

    public Detai removeTiendo(Tiendo tiendo) {
        this.tiendos.remove(tiendo);
        tiendo.setDetai(null);
        return this;
    }

    public void setTiendos(Set<Tiendo> tiendos) {
        this.tiendos = tiendos;
    }

    public Set<Danhgia> getDanhgias() {
        return danhgias;
    }

    public Detai danhgias(Set<Danhgia> danhgias) {
        this.danhgias = danhgias;
        return this;
    }

    public Detai addDanhgia(Danhgia danhgia) {
        this.danhgias.add(danhgia);
        danhgia.setDetai(this);
        return this;
    }

    public Detai removeDanhgia(Danhgia danhgia) {
        this.danhgias.remove(danhgia);
        danhgia.setDetai(null);
        return this;
    }

    public void setDanhgias(Set<Danhgia> danhgias) {
        this.danhgias = danhgias;
    }

    public Linhvuc getLinhvuc() {
        return linhvuc;
    }

    public Detai linhvuc(Linhvuc linhvuc) {
        this.linhvuc = linhvuc;
        return this;
    }

    public void setLinhvuc(Linhvuc linhvuc) {
        this.linhvuc = linhvuc;
    }

    public Capdetai getCapdetai() {
        return capdetai;
    }

    public Detai capdetai(Capdetai capdetai) {
        this.capdetai = capdetai;
        return this;
    }

    public void setCapdetai(Capdetai capdetai) {
        this.capdetai = capdetai;
    }

    public Hoidongdanhgia getHoidongdanhgia() {
        return hoidongdanhgia;
    }

    public Detai hoidongdanhgia(Hoidongdanhgia hoidongdanhgia) {
        this.hoidongdanhgia = hoidongdanhgia;
        return this;
    }

    public void setHoidongdanhgia(Hoidongdanhgia hoidongdanhgia) {
        this.hoidongdanhgia = hoidongdanhgia;
    }

    public Set<Coquanphoihop> getCoquanphoihops() {
        return coquanphoihops;
    }

    public Detai coquanphoihops(Set<Coquanphoihop> coquanphoihops) {
        this.coquanphoihops = coquanphoihops;
        return this;
    }

    public Detai addCoquanphoihop(Coquanphoihop coquanphoihop) {
        this.coquanphoihops.add(coquanphoihop);
        coquanphoihop.getDetais().add(this);
        return this;
    }

    public Detai removeCoquanphoihop(Coquanphoihop coquanphoihop) {
        this.coquanphoihops.remove(coquanphoihop);
        coquanphoihop.getDetais().remove(this);
        return this;
    }

    public void setCoquanphoihops(Set<Coquanphoihop> coquanphoihops) {
        this.coquanphoihops = coquanphoihops;
    }

    public Set<Nguonkinhphi> getNguonkinhphis() {
        return nguonkinhphis;
    }

    public Detai nguonkinhphis(Set<Nguonkinhphi> nguonkinhphis) {
        this.nguonkinhphis = nguonkinhphis;
        return this;
    }

    public Detai addNguonkinhphi(Nguonkinhphi nguonkinhphi) {
        this.nguonkinhphis.add(nguonkinhphi);
        nguonkinhphi.getDetais().add(this);
        return this;
    }

    public Detai removeNguonkinhphi(Nguonkinhphi nguonkinhphi) {
        this.nguonkinhphis.remove(nguonkinhphi);
        nguonkinhphi.getDetais().remove(this);
        return this;
    }

    public void setNguonkinhphis(Set<Nguonkinhphi> nguonkinhphis) {
        this.nguonkinhphis = nguonkinhphis;
    }

    public Set<Nhansu> getNhansus() {
        return nhansus;
    }

    public Detai nhansus(Set<Nhansu> nhansus) {
        this.nhansus = nhansus;
        return this;
    }

    public Detai addNhansu(Nhansu nhansu) {
        this.nhansus.add(nhansu);
        nhansu.getDetais().add(this);
        return this;
    }

    public Detai removeNhansu(Nhansu nhansu) {
        this.nhansus.remove(nhansu);
        nhansu.getDetais().remove(this);
        return this;
    }

    public void setNhansus(Set<Nhansu> nhansus) {
        this.nhansus = nhansus;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Detai)) {
            return false;
        }
        return id != null && id.equals(((Detai) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Detai{" +
            "id=" + getId() +
            ", ma='" + getMa() + "'" +
            ", ten='" + getTen() + "'" +
            ", thoigiantao='" + getThoigiantao() + "'" +
            ", thoigianbatdau='" + getThoigianbatdau() + "'" +
            ", thoigianketthuc='" + getThoigianketthuc() + "'" +
            ", muctieu='" + getMuctieu() + "'" +
            ", noidung='" + getNoidung() + "'" +
            ", tinhcapthiet=" + getTinhcapthiet() +
            ", ketqua='" + getKetqua() + "'" +
            ", xeploai=" + getXeploai() +
            ", trangthai=" + getTrangthai() +
            ", sudung=" + getSudung() +
            "}";
    }
}
