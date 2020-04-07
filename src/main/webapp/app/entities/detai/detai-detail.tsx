import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './detai.reducer';
import { IDetai } from 'app/shared/model/detai.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDetaiDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class DetaiDetail extends React.Component<IDetaiDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { detaiEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="doAnApp.detai.detail.title">Detai</Translate> [<b>{detaiEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="ma">
                <Translate contentKey="doAnApp.detai.ma">Ma</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.ma}</dd>
            <dt>
              <span id="ten">
                <Translate contentKey="doAnApp.detai.ten">Ten</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.ten}</dd>
            <dt>
              <span id="thoigiantao">
                <Translate contentKey="doAnApp.detai.thoigiantao">Thoigiantao</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={detaiEntity.thoigiantao} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="thoigianbatdau">
                <Translate contentKey="doAnApp.detai.thoigianbatdau">Thoigianbatdau</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={detaiEntity.thoigianbatdau} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="thoigianketthuc">
                <Translate contentKey="doAnApp.detai.thoigianketthuc">Thoigianketthuc</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={detaiEntity.thoigianketthuc} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="muctieu">
                <Translate contentKey="doAnApp.detai.muctieu">Muctieu</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.muctieu}</dd>
            <dt>
              <span id="noidung">
                <Translate contentKey="doAnApp.detai.noidung">Noidung</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.noidung}</dd>
            <dt>
              <span id="tinhcapthiet">
                <Translate contentKey="doAnApp.detai.tinhcapthiet">Tinhcapthiet</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.tinhcapthiet}</dd>
            <dt>
              <span id="ketqua">
                <Translate contentKey="doAnApp.detai.ketqua">Ketqua</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.ketqua}</dd>
            <dt>
              <span id="xeploai">
                <Translate contentKey="doAnApp.detai.xeploai">Xeploai</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.xeploai}</dd>
            <dt>
              <span id="trangthai">
                <Translate contentKey="doAnApp.detai.trangthai">Trangthai</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.trangthai}</dd>
            <dt>
              <span id="sudung">
                <Translate contentKey="doAnApp.detai.sudung">Sudung</Translate>
              </span>
            </dt>
            <dd>{detaiEntity.sudung}</dd>
            <dt>
              <Translate contentKey="doAnApp.detai.linhvuc">Linhvuc</Translate>
            </dt>
            <dd>{detaiEntity.linhvucId ? detaiEntity.linhvucId : ''}</dd>
            <dt>
              <Translate contentKey="doAnApp.detai.capdetai">Capdetai</Translate>
            </dt>
            <dd>{detaiEntity.capdetaiId ? detaiEntity.capdetaiId : ''}</dd>
            <dt>
              <Translate contentKey="doAnApp.detai.hoidongdanhgia">Hoidongdanhgia</Translate>
            </dt>
            <dd>{detaiEntity.hoidongdanhgiaId ? detaiEntity.hoidongdanhgiaId : ''}</dd>
          </dl>
          <Button tag={Link} to="/detai" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/detai/${detaiEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ detai }: IRootState) => ({
  detaiEntity: detai.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetaiDetail);
