import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const QLdulieu = props => (
  <NavDropdown icon="th-list" name="Quản lý dữ liệu" id="entity-menu">
    <MenuItem icon="asterisk" to="/donvi">
      Chuyên ngành
    </MenuItem>
    <MenuItem icon="asterisk" to="/linhvuc">
      Lĩnh vực
    </MenuItem>
    <MenuItem icon="asterisk" to="/capdetai">
      Cấp đề tài
    </MenuItem>
    <MenuItem icon="asterisk" to="/chucdanh">
      Chức danh
    </MenuItem>
    <MenuItem icon="asterisk" to="/hocham">
      Học hàm
    </MenuItem>
    <MenuItem icon="asterisk" to="/nhansu">
      Nhân sự
    </MenuItem>
    <MenuItem icon="asterisk" to="/chunhiem">
      Chủ nhiệm
    </MenuItem>
    <MenuItem icon="asterisk" to="/coquanphoihop">
      Cơ quan phối hợp
    </MenuItem>
    
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
export const QLDeTai = props => (
  <NavDropdown icon="th-list" name="Quản lý đề tài" id="entity-menu">
    
    <MenuItem icon="asterisk" to="/detai">
      Đề tài
    </MenuItem>
    <MenuItem icon="asterisk" to="/tiendo">
      Tiến độ
    </MenuItem>
    <MenuItem icon="asterisk" to="/danhgia">
      Đánh giá
    </MenuItem>
    <MenuItem icon="asterisk" to="/danhgia-ct">
      Đánh giá chi tiết
    </MenuItem>
    <MenuItem icon="asterisk" to="/noidungdanhgia">
      Nội dung đánh giá
    </MenuItem>
    
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
  
);
export const QLKinhPhi = props => (
  <NavDropdown icon="th-list" name="Quản lý kinh phí" id="entity-menu">
   
   <MenuItem icon="asterisk" to="/nguonkinhphi">
      Nguồn kinh phí
    </MenuItem>
    <MenuItem icon="asterisk" to="/dutoan-kp">
      Dự toán kinh phí
    </MenuItem>
    <MenuItem icon="asterisk" to="/dutoan-kpct">
      Dự toán kinh phí chi tiết
    </MenuItem>
    <MenuItem icon="asterisk" to="/noidung-dt">
      Nội dung dự toán
    </MenuItem>
    
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
export const QLHoiDong = props => (
  <NavDropdown icon="th-list" name="Hội đồng thẩm định" id="entity-menu">
   
    <MenuItem icon="asterisk" to="/hoidongdanhgia">
      Hội đồng đánh giá
    </MenuItem>
    <MenuItem icon="asterisk" to="/thanhvien-hd">
      Thành viên hội đồng
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);