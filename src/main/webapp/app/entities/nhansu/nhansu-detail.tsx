import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './nhansu.reducer';
import { INhansu } from 'app/shared/model/nhansu.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface INhansuDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class NhansuDetail extends React.Component<INhansuDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { nhansuEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="doAnApp.nhansu.detail.title">Nhansu</Translate> [<b>{nhansuEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="manhansu">
                <Translate contentKey="doAnApp.nhansu.manhansu">Manhansu</Translate>
              </span>
            </dt>
            <dd>{nhansuEntity.manhansu}</dd>
            <dt>
              <span id="tennhansu">
                <Translate contentKey="doAnApp.nhansu.tennhansu">Tennhansu</Translate>
              </span>
            </dt>
            <dd>{nhansuEntity.tennhansu}</dd>
            <dt>
              <span id="sdt">
                <Translate contentKey="doAnApp.nhansu.sdt">Sdt</Translate>
              </span>
            </dt>
            <dd>{nhansuEntity.sdt}</dd>
            <dt>
              <span id="email">
                <Translate contentKey="doAnApp.nhansu.email">Email</Translate>
              </span>
            </dt>
            <dd>{nhansuEntity.email}</dd>
            <dt>
              <span id="diachi">
                <Translate contentKey="doAnApp.nhansu.diachi">Diachi</Translate>
              </span>
            </dt>
            <dd>{nhansuEntity.diachi}</dd>
            <dt>
              <span id="namsinh">
                <Translate contentKey="doAnApp.nhansu.namsinh">Namsinh</Translate>
              </span>
            </dt>
            <dd>{nhansuEntity.namsinh}</dd>
            <dt>
              <span id="sudung">
                <Translate contentKey="doAnApp.nhansu.sudung">Sudung</Translate>
              </span>
            </dt>
            <dd>{nhansuEntity.sudung}</dd>
            <dt>
              <Translate contentKey="doAnApp.nhansu.detai">Detai</Translate>
            </dt>
            <dd>
              {nhansuEntity.detais
                ? nhansuEntity.detais.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === nhansuEntity.detais.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="doAnApp.nhansu.donvi">Donvi</Translate>
            </dt>
            <dd>{nhansuEntity.donviId ? nhansuEntity.donviId : ''}</dd>
            <dt>
              <Translate contentKey="doAnApp.nhansu.chucdanh">Chucdanh</Translate>
            </dt>
            <dd>{nhansuEntity.chucdanhId ? nhansuEntity.chucdanhId : ''}</dd>
            <dt>
              <Translate contentKey="doAnApp.nhansu.hocham">Hocham</Translate>
            </dt>
            <dd>{nhansuEntity.hochamId ? nhansuEntity.hochamId : ''}</dd>
          </dl>
          <Button tag={Link} to="/nhansu" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/nhansu/${nhansuEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ nhansu }: IRootState) => ({
  nhansuEntity: nhansu.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NhansuDetail);
