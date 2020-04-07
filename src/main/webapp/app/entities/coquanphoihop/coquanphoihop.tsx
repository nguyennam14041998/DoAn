import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './coquanphoihop.reducer';
import { ICoquanphoihop } from 'app/shared/model/coquanphoihop.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface ICoquanphoihopProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type ICoquanphoihopState = IPaginationBaseState;

export class Coquanphoihop extends React.Component<ICoquanphoihopProps, ICoquanphoihopState> {
  state: ICoquanphoihopState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.getEntities();
  }

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => this.sortEntities()
    );
  };

  sortEntities() {
    this.getEntities();
    this.props.history.push(`${this.props.location.pathname}?page=${this.state.activePage}&sort=${this.state.sort},${this.state.order}`);
  }

  handlePagination = activePage => this.setState({ activePage }, () => this.sortEntities());

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { coquanphoihopList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="coquanphoihop-heading">
          <Translate contentKey="doAnApp.coquanphoihop.home.title">Coquanphoihops</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="doAnApp.coquanphoihop.home.createLabel">Create a new Coquanphoihop</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {coquanphoihopList && coquanphoihopList.length > 0 ? (
            <Table responsive aria-describedby="coquanphoihop-heading">
              <thead>
                <tr>
                  <th className="hand" onClick={this.sort('id')}>
                    <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('macoquan')}>
                    <Translate contentKey="doAnApp.coquanphoihop.macoquan">Macoquan</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('tencoquan')}>
                    <Translate contentKey="doAnApp.coquanphoihop.tencoquan">Tencoquan</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('noidung')}>
                    <Translate contentKey="doAnApp.coquanphoihop.noidung">Noidung</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('tendaidien')}>
                    <Translate contentKey="doAnApp.coquanphoihop.tendaidien">Tendaidien</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('sudung')}>
                    <Translate contentKey="doAnApp.coquanphoihop.sudung">Sudung</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {coquanphoihopList.map((coquanphoihop, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${coquanphoihop.id}`} color="link" size="sm">
                        {coquanphoihop.id}
                      </Button>
                    </td>
                    <td>{coquanphoihop.macoquan}</td>
                    <td>{coquanphoihop.tencoquan}</td>
                    <td>{coquanphoihop.noidung}</td>
                    <td>{coquanphoihop.tendaidien}</td>
                    <td>{coquanphoihop.sudung}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${coquanphoihop.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${coquanphoihop.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${coquanphoihop.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="doAnApp.coquanphoihop.home.notFound">No Coquanphoihops found</Translate>
            </div>
          )}
        </div>
        <div className={coquanphoihopList && coquanphoihopList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={this.state.activePage} total={totalItems} itemsPerPage={this.state.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={this.state.activePage}
              onSelect={this.handlePagination}
              maxButtons={5}
              itemsPerPage={this.state.itemsPerPage}
              totalItems={this.props.totalItems}
            />
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ coquanphoihop }: IRootState) => ({
  coquanphoihopList: coquanphoihop.entities,
  totalItems: coquanphoihop.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coquanphoihop);
