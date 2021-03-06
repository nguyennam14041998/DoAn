import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IDanhgiaCT } from 'app/shared/model/danhgia-ct.model';
import { getEntities as getDanhgiaCts } from 'app/entities/danhgia-ct/danhgia-ct.reducer';
import { getEntity, updateEntity, createEntity, reset } from './noidungdanhgia.reducer';
import { INoidungdanhgia } from 'app/shared/model/noidungdanhgia.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface INoidungdanhgiaUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface INoidungdanhgiaUpdateState {
  isNew: boolean;
  danhgiaCTId: string;
}

export class NoidungdanhgiaUpdate extends React.Component<INoidungdanhgiaUpdateProps, INoidungdanhgiaUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      danhgiaCTId: '0',
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

    this.props.getDanhgiaCts();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { noidungdanhgiaEntity } = this.props;
      const entity = {
        ...noidungdanhgiaEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/noidungdanhgia');
  };

  render() {
    const { noidungdanhgiaEntity, danhgiaCTS, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="doAnApp.noidungdanhgia.home.createOrEditLabel">
              <Translate contentKey="doAnApp.noidungdanhgia.home.createOrEditLabel">Create or edit a Noidungdanhgia</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : noidungdanhgiaEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="noidungdanhgia-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="noidungdanhgia-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="noidungLabel" for="noidungdanhgia-noidung">
                    <Translate contentKey="doAnApp.noidungdanhgia.noidung">Noidung</Translate>
                  </Label>
                  <AvField id="noidungdanhgia-noidung" type="text" name="noidung" />
                </AvGroup>
                <AvGroup>
                  <Label id="sudungLabel" for="noidungdanhgia-sudung">
                    <Translate contentKey="doAnApp.noidungdanhgia.sudung">Sudung</Translate>
                  </Label>
                  <AvField id="noidungdanhgia-sudung" type="string" className="form-control" name="sudung" />
                </AvGroup>
                <AvGroup>
                  <Label for="noidungdanhgia-danhgiaCT">
                    <Translate contentKey="doAnApp.noidungdanhgia.danhgiaCT">Danhgia CT</Translate>
                  </Label>
                  <AvInput id="noidungdanhgia-danhgiaCT" type="select" className="form-control" name="danhgiaCTId">
                    <option value="" key="0" />
                    {danhgiaCTS
                      ? danhgiaCTS.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/noidungdanhgia" replace color="info">
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
  danhgiaCTS: storeState.danhgiaCT.entities,
  noidungdanhgiaEntity: storeState.noidungdanhgia.entity,
  loading: storeState.noidungdanhgia.loading,
  updating: storeState.noidungdanhgia.updating,
  updateSuccess: storeState.noidungdanhgia.updateSuccess
});

const mapDispatchToProps = {
  getDanhgiaCts,
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
)(NoidungdanhgiaUpdate);
