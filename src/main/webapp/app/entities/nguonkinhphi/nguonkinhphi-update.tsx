import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IDetai } from 'app/shared/model/detai.model';
import { getEntities as getDetais } from 'app/entities/detai/detai.reducer';
import { getEntity, updateEntity, createEntity, reset } from './nguonkinhphi.reducer';
import { INguonkinhphi } from 'app/shared/model/nguonkinhphi.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface INguonkinhphiUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface INguonkinhphiUpdateState {
  isNew: boolean;
  idsdetai: any[];
}

export class NguonkinhphiUpdate extends React.Component<INguonkinhphiUpdateProps, INguonkinhphiUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsdetai: [],
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getDetais();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { nguonkinhphiEntity } = this.props;
      const entity = {
        ...nguonkinhphiEntity,
        ...values,
        detais: mapIdList(values.detais)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/nguonkinhphi');
  };

  render() {
    const { nguonkinhphiEntity, detais, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="doAnApp.nguonkinhphi.home.createOrEditLabel">
              <Translate contentKey="doAnApp.nguonkinhphi.home.createOrEditLabel">Create or edit a Nguonkinhphi</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : nguonkinhphiEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="nguonkinhphi-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="nguonkinhphi-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="manguonkinhphiLabel" for="nguonkinhphi-manguonkinhphi">
                    <Translate contentKey="doAnApp.nguonkinhphi.manguonkinhphi">Manguonkinhphi</Translate>
                  </Label>
                  <AvField id="nguonkinhphi-manguonkinhphi" type="text" name="manguonkinhphi" />
                </AvGroup>
                <AvGroup>
                  <Label id="tennguonkinhphiLabel" for="nguonkinhphi-tennguonkinhphi">
                    <Translate contentKey="doAnApp.nguonkinhphi.tennguonkinhphi">Tennguonkinhphi</Translate>
                  </Label>
                  <AvField id="nguonkinhphi-tennguonkinhphi" type="text" name="tennguonkinhphi" />
                </AvGroup>
                <AvGroup>
                  <Label id="noidungLabel" for="nguonkinhphi-noidung">
                    <Translate contentKey="doAnApp.nguonkinhphi.noidung">Noidung</Translate>
                  </Label>
                  <AvField id="nguonkinhphi-noidung" type="text" name="noidung" />
                </AvGroup>
                <AvGroup>
                  <Label id="sotiencapLabel" for="nguonkinhphi-sotiencap">
                    <Translate contentKey="doAnApp.nguonkinhphi.sotiencap">Sotiencap</Translate>
                  </Label>
                  <AvField id="nguonkinhphi-sotiencap" type="string" className="form-control" name="sotiencap" />
                </AvGroup>
                <AvGroup>
                  <Label id="sudungLabel" for="nguonkinhphi-sudung">
                    <Translate contentKey="doAnApp.nguonkinhphi.sudung">Sudung</Translate>
                  </Label>
                  <AvField id="nguonkinhphi-sudung" type="string" className="form-control" name="sudung" />
                </AvGroup>
                <AvGroup>
                  <Label for="nguonkinhphi-detai">
                    <Translate contentKey="doAnApp.nguonkinhphi.detai">Detai</Translate>
                  </Label>
                  <AvInput
                    id="nguonkinhphi-detai"
                    type="select"
                    multiple
                    className="form-control"
                    name="detais"
                    value={nguonkinhphiEntity.detais && nguonkinhphiEntity.detais.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {detais
                      ? detais.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/nguonkinhphi" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  detais: storeState.detai.entities,
  nguonkinhphiEntity: storeState.nguonkinhphi.entity,
  loading: storeState.nguonkinhphi.loading,
  updating: storeState.nguonkinhphi.updating,
  updateSuccess: storeState.nguonkinhphi.updateSuccess
});

const mapDispatchToProps = {
  getDetais,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NguonkinhphiUpdate);
