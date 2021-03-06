import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './hoidongdanhgia.reducer';
import { IHoidongdanhgia } from 'app/shared/model/hoidongdanhgia.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IHoidongdanhgiaProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type IHoidongdanhgiaState = IPaginationBaseState;

export class Hoidongdanhgia extends React.Component<IHoidongdanhgiaProps, IHoidongdanhgiaState> {
  state: IHoidongdanhgiaState = {
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
    const { hoidongdanhgiaList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="hoidongdanhgia-heading">
          <Translate contentKey="doAnApp.hoidongdanhgia.home.title">Hoidongdanhgias</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="doAnApp.hoidongdanhgia.home.createLabel">Create a new Hoidongdanhgia</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {hoidongdanhgiaList && hoidongdanhgiaList.length > 0 ? (
            <Table responsive aria-describedby="hoidongdanhgia-heading">
              <thead>
                <tr>
                  <th className="hand" onClick={this.sort('id')}>
                    <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('mahoidong')}>
                    <Translate contentKey="doAnApp.hoidongdanhgia.mahoidong">Mahoidong</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('tenhoidong')}>
                    <Translate contentKey="doAnApp.hoidongdanhgia.tenhoidong">Tenhoidong</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('sudung')}>
                    <Translate contentKey="doAnApp.hoidongdanhgia.sudung">Sudung</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {hoidongdanhgiaList.map((hoidongdanhgia, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${hoidongdanhgia.id}`} color="link" size="sm">
                        {hoidongdanhgia.id}
                      </Button>
                    </td>
                    <td>{hoidongdanhgia.mahoidong}</td>
                    <td>{hoidongdanhgia.tenhoidong}</td>
                    <td>{hoidongdanhgia.sudung}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${hoidongdanhgia.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${hoidongdanhgia.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${hoidongdanhgia.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="doAnApp.hoidongdanhgia.home.notFound">No Hoidongdanhgias found</Translate>
            </div>
          )}
        </div>
        <div className={hoidongdanhgiaList && hoidongdanhgiaList.length > 0 ? '' : 'd-none'}>
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

const mapStateToProps = ({ hoidongdanhgia }: IRootState) => ({
  hoidongdanhgiaList: hoidongdanhgia.entities,
  totalItems: hoidongdanhgia.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hoidongdanhgia);
