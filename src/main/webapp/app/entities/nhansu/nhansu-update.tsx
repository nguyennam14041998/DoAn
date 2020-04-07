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
import { IDonvi } from 'app/shared/model/donvi.model';
import { getEntities as getDonvis } from 'app/entities/donvi/donvi.reducer';
import { IChucdanh } from 'app/shared/model/chucdanh.model';
import { getEntities as getChucdanhs } from 'app/entities/chucdanh/chucdanh.reducer';
import { IHocham } from 'app/shared/model/hocham.model';
import { getEntities as getHochams } from 'app/entities/hocham/hocham.reducer';
import { getEntity, updateEntity, createEntity, reset } from './nhansu.reducer';
import { INhansu } from 'app/shared/model/nhansu.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface INhansuUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface INhansuUpdateState {
  isNew: boolean;
  idsdetai: any[];
  donviId: string;
  chucdanhId: string;
  hochamId: string;
}

export class NhansuUpdate extends React.Component<INhansuUpdateProps, INhansuUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsdetai: [],
      donviId: '0',
      chucdanhId: '0',
      hochamId: '0',
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
    this.props.getDonvis();
    this.props.getChucdanhs();
    this.props.getHochams();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { nhansuEntity } = this.props;
      const entity = {
        ...nhansuEntity,
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
    this.props.history.push('/nhansu');
  };

  render() {
    const { nhansuEntity, detais, donvis, chucdanhs, hochams, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="doAnApp.nhansu.home.createOrEditLabel">
              <Translate contentKey="doAnApp.nhansu.home.createOrEditLabel">Create or edit a Nhansu</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : nhansuEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="nhansu-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="nhansu-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="manhansuLabel" for="nhansu-manhansu">
                    <Translate contentKey="doAnApp.nhansu.manhansu">Manhansu</Translate>
                  </Label>
                  <AvField id="nhansu-manhansu" type="text" name="manhansu" />
                </AvGroup>
                <AvGroup>
                  <Label id="tennhansuLabel" for="nhansu-tennhansu">
                    <Translate contentKey="doAnApp.nhansu.tennhansu">Tennhansu</Translate>
                  </Label>
                  <AvField id="nhansu-tennhansu" type="text" name="tennhansu" />
                </AvGroup>
                <AvGroup>
                  <Label id="sdtLabel" for="nhansu-sdt">
                    <Translate contentKey="doAnApp.nhansu.sdt">Sdt</Translate>
                  </Label>
                  <AvField id="nhansu-sdt" type="string" className="form-control" name="sdt" />
                </AvGroup>
                <AvGroup>
                  <Label id="emailLabel" for="nhansu-email">
                    <Translate contentKey="doAnApp.nhansu.email">Email</Translate>
                  </Label>
                  <AvField id="nhansu-email" type="text" name="email" />
                </AvGroup>
                <AvGroup>
                  <Label id="diachiLabel" for="nhansu-diachi">
                    <Translate contentKey="doAnApp.nhansu.diachi">Diachi</Translate>
                  </Label>
                  <AvField id="nhansu-diachi" type="text" name="diachi" />
                </AvGroup>
                <AvGroup>
                  <Label id="namsinhLabel" for="nhansu-namsinh">
                    <Translate contentKey="doAnApp.nhansu.namsinh">Namsinh</Translate>
                  </Label>
                  <AvField id="nhansu-namsinh" type="text" name="namsinh" />
                </AvGroup>
                <AvGroup>
                  <Label id="sudungLabel" for="nhansu-sudung">
                    <Translate contentKey="doAnApp.nhansu.sudung">Sudung</Translate>
                  </Label>
                  <AvField id="nhansu-sudung" type="string" className="form-control" name="sudung" />
                </AvGroup>
                <AvGroup>
                  <Label for="nhansu-detai">
                    <Translate contentKey="doAnApp.nhansu.detai">Detai</Translate>
                  </Label>
                  <AvInput
                    id="nhansu-detai"
                    type="select"
                    multiple
                    className="form-control"
                    name="detais"
                    value={nhansuEntity.detais && nhansuEntity.detais.map(e => e.id)}
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
                <AvGroup>
                  <Label for="nhansu-donvi">
                    <Translate contentKey="doAnApp.nhansu.donvi">Donvi</Translate>
                  </Label>
                  <AvInput id="nhansu-donvi" type="select" className="form-control" name="donviId">
                    <option value="" key="0" />
                    {donvis
                      ? donvis.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="nhansu-chucdanh">
                    <Translate contentKey="doAnApp.nhansu.chucdanh">Chucdanh</Translate>
                  </Label>
                  <AvInput id="nhansu-chucdanh" type="select" className="form-control" name="chucdanhId">
                    <option value="" key="0" />
                    {chucdanhs
                      ? chucdanhs.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="nhansu-hocham">
                    <Translate contentKey="doAnApp.nhansu.hocham">Hocham</Translate>
                  </Label>
                  <AvInput id="nhansu-hocham" type="select" className="form-control" name="hochamId">
                    <option value="" key="0" />
                    {hochams
                      ? hochams.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/nhansu" replace color="info">
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
  donvis: storeState.donvi.entities,
  chucdanhs: storeState.chucdanh.entities,
  hochams: storeState.hocham.entities,
  nhansuEntity: storeState.nhansu.entity,
  loading: storeState.nhansu.loading,
  updating: storeState.nhansu.updating,
  updateSuccess: storeState.nhansu.updateSuccess
});

const mapDispatchToProps = {
  getDetais,
  getDonvis,
  getChucdanhs,
  getHochams,
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
)(NhansuUpdate);
