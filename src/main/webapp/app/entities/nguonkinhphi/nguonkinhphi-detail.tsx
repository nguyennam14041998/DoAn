import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './nguonkinhphi.reducer';
import { INguonkinhphi } from 'app/shared/model/nguonkinhphi.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface INguonkinhphiDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class NguonkinhphiDetail extends React.Component<INguonkinhphiDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { nguonkinhphiEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="doAnApp.nguonkinhphi.detail.title">Nguonkinhphi</Translate> [<b>{nguonkinhphiEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="manguonkinhphi">
                <Translate contentKey="doAnApp.nguonkinhphi.manguonkinhphi">Manguonkinhphi</Translate>
              </span>
            </dt>
            <dd>{nguonkinhphiEntity.manguonkinhphi}</dd>
            <dt>
              <span id="tennguonkinhphi">
                <Translate contentKey="doAnApp.nguonkinhphi.tennguonkinhphi">Tennguonkinhphi</Translate>
              </span>
            </dt>
            <dd>{nguonkinhphiEntity.tennguonkinhphi}</dd>
            <dt>
              <span id="noidung">
                <Translate contentKey="doAnApp.nguonkinhphi.noidung">Noidung</Translate>
              </span>
            </dt>
            <dd>{nguonkinhphiEntity.noidung}</dd>
            <dt>
              <span id="sotiencap">
                <Translate contentKey="doAnApp.nguonkinhphi.sotiencap">Sotiencap</Translate>
              </span>
            </dt>
            <dd>{nguonkinhphiEntity.sotiencap}</dd>
            <dt>
              <span id="sudung">
                <Translate contentKey="doAnApp.nguonkinhphi.sudung">Sudung</Translate>
              </span>
            </dt>
            <dd>{nguonkinhphiEntity.sudung}</dd>
            <dt>
              <Translate contentKey="doAnApp.nguonkinhphi.detai">Detai</Translate>
            </dt>
            <dd>
              {nguonkinhphiEntity.detais
                ? nguonkinhphiEntity.detais.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === nguonkinhphiEntity.detais.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
          </dl>
          <Button tag={Link} to="/nguonkinhphi" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/nguonkinhphi/${nguonkinhphiEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ nguonkinhphi }: IRootState) => ({
  nguonkinhphiEntity: nguonkinhphi.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NguonkinhphiDetail);
