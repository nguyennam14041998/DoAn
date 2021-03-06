package com.api.doan.service.dto;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the {@link com.api.doan.domain.Nhansu} entity.
 */
public class NhansuDTO implements Serializable {

    private Long id;

    private String manhansu;

    private String tennhansu;

    private Integer sdt;

    private String email;

    private String diachi;

    private String namsinh;

    private Integer sudung;


    private Set<DetaiDTO> detais = new HashSet<>();

    private Long donviId;

    private Long chucdanhId;

    private Long hochamId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getManhansu() {
        return manhansu;
    }

    public void setManhansu(String manhansu) {
        this.manhansu = manhansu;
    }

    public String getTennhansu() {
        return tennhansu;
    }

    public void setTennhansu(String tennhansu) {
        this.tennhansu = tennhansu;
    }

    public Integer getSdt() {
        return sdt;
    }

    public void setSdt(Integer sdt) {
        this.sdt = sdt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDiachi() {
        return diachi;
    }

    public void setDiachi(String diachi) {
        this.diachi = diachi;
    }

    public String getNamsinh() {
        return namsinh;
    }

    public void setNamsinh(String namsinh) {
        this.namsinh = namsinh;
    }

    public Integer getSudung() {
        return sudung;
    }

    public void setSudung(Integer sudung) {
        this.sudung = sudung;
    }

    public Set<DetaiDTO> getDetais() {
        return detais;
    }

    public void setDetais(Set<DetaiDTO> detais) {
        this.detais = detais;
    }

    public Long getDonviId() {
        return donviId;
    }

    public void setDonviId(Long donviId) {
        this.donviId = donviId;
    }

    public Long getChucdanhId() {
        return chucdanhId;
    }

    public void setChucdanhId(Long chucdanhId) {
        this.chucdanhId = chucdanhId;
    }

    public Long getHochamId() {
        return hochamId;
    }

    public void setHochamId(Long hochamId) {
        this.hochamId = hochamId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        NhansuDTO nhansuDTO = (NhansuDTO) o;
        if (nhansuDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), nhansuDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "NhansuDTO{" +
            "id=" + getId() +
            ", manhansu='" + getManhansu() + "'" +
            ", tennhansu='" + getTennhansu() + "'" +
            ", sdt=" + getSdt() +
            ", email='" + getEmail() + "'" +
            ", diachi='" + getDiachi() + "'" +
            ", namsinh='" + getNamsinh() + "'" +
            ", sudung=" + getSudung() +
            ", donvi=" + getDonviId() +
            ", chucdanh=" + getChucdanhId() +
            ", hocham=" + getHochamId() +
            "}";
    }
}
