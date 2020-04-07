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
import { getEntity, updateEntity, createEntity, reset } from './coquanphoihop.reducer';
import { ICoquanphoihop } from 'app/shared/model/coquanphoihop.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICoquanphoihopUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ICoquanphoihopUpdateState {
  isNew: boolean;
  idsdetai: any[];
}

export class CoquanphoihopUpdate extends React.Component<ICoquanphoihopUpdateProps, ICoquanphoihopUpdateState> {
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
      const { coquanphoihopEntity } = this.props;
      const entity = {
        ...coquanphoihopEntity,
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
    this.props.history.push('/coquanphoihop');
  };

  render() {
    const { coquanphoihopEntity, detais, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="doAnApp.coquanphoihop.home.createOrEditLabel">
              <Translate contentKey="doAnApp.coquanphoihop.home.createOrEditLabel">Create or edit a Coquanphoihop</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : coquanphoihopEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="coquanphoihop-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="coquanphoihop-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="macoquanLabel" for="coquanphoihop-macoquan">
                    <Translate contentKey="doAnApp.coquanphoihop.macoquan">Macoquan</Translate>
                  </Label>
                  <AvField id="coquanphoihop-macoquan" type="text" name="macoquan" />
                </AvGroup>
                <AvGroup>
                  <Label id="tencoquanLabel" for="coquanphoihop-tencoquan">
                    <Translate contentKey="doAnApp.coquanphoihop.tencoquan">Tencoquan</Translate>
                  </Label>
                  <AvField id="coquanphoihop-tencoquan" type="text" name="tencoquan" />
                </AvGroup>
                <AvGroup>
                  <Label id="noidungLabel" for="coquanphoihop-noidung">
                    <Translate contentKey="doAnApp.coquanphoihop.noidung">Noidung</Translate>
                  </Label>
                  <AvField id="coquanphoihop-noidung" type="text" name="noidung" />
                </AvGroup>
                <AvGroup>
                  <Label id="tendaidienLabel" for="coquanphoihop-tendaidien">
                    <Translate contentKey="doAnApp.coquanphoihop.tendaidien">Tendaidien</Translate>
                  </Label>
                  <AvField id="coquanphoihop-tendaidien" type="text" name="tendaidien" />
                </AvGroup>
                <AvGroup>
                  <Label id="sudungLabel" for="coquanphoihop-sudung">
                    <Translate contentKey="doAnApp.coquanphoihop.sudung">Sudung</Translate>
                  </Label>
                  <AvField id="coquanphoihop-sudung" type="string" className="form-control" name="sudung" />
                </AvGroup>
                <AvGroup>
                  <Label for="coquanphoihop-detai">
                    <Translate contentKey="doAnApp.coquanphoihop.detai">Detai</Translate>
                  </Label>
                  <AvInput
                    id="coquanphoihop-detai"
                    type="select"
                    multiple
                    className="form-control"
                    name="detais"
                    value={coquanphoihopEntity.detais && coquanphoihopEntity.detais.map(e => e.id)}
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
                <Button tag={Link} id="cancel-save" to="/coquanphoihop" replace color="info">
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
  coquanphoihopEntity: storeState.coquanphoihop.entity,
  loading: storeState.coquanphoihop.loading,
  updating: storeState.coquanphoihop.updating,
  updateSuccess: storeState.coquanphoihop.updateSuccess
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
)(CoquanphoihopUpdate);
