import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './thanhvien-hd.reducer';
import { IThanhvienHD } from 'app/shared/model/thanhvien-hd.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IThanhvienHDProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type IThanhvienHDState = IPaginationBaseState;

export class ThanhvienHD extends React.Component<IThanhvienHDProps, IThanhvienHDState> {
  state: IThanhvienHDState = {
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
    const { thanhvienHDList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="thanhvien-hd-heading">
          <Translate contentKey="doAnApp.thanhvienHD.home.title">Thanhvien HDS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="doAnApp.thanhvienHD.home.createLabel">Create a new Thanhvien HD</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {thanhvienHDList && thanhvienHDList.length > 0 ? (
            <Table responsive aria-describedby="thanhvien-hd-heading">
              <thead>
                <tr>
                  <th className="hand" onClick={this.sort('id')}>
                    <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('ten')}>
                    <Translate contentKey="doAnApp.thanhvienHD.ten">Ten</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('donvi')}>
                    <Translate contentKey="doAnApp.thanhvienHD.donvi">Donvi</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('trachnhiem')}>
                    <Translate contentKey="doAnApp.thanhvienHD.trachnhiem">Trachnhiem</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={this.sort('sudung')}>
                    <Translate contentKey="doAnApp.thanhvienHD.sudung">Sudung</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    <Translate contentKey="doAnApp.thanhvienHD.hoidongdanhgia">Hoidongdanhgia</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {thanhvienHDList.map((thanhvienHD, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${thanhvienHD.id}`} color="link" size="sm">
                        {thanhvienHD.id}
                      </Button>
                    </td>
                    <td>{thanhvienHD.ten}</td>
                    <td>{thanhvienHD.donvi}</td>
                    <td>{thanhvienHD.trachnhiem}</td>
                    <td>{thanhvienHD.sudung}</td>
                    <td>
                      {thanhvienHD.hoidongdanhgiaId ? (
                        <Link to={`hoidongdanhgia/${thanhvienHD.hoidongdanhgiaId}`}>{thanhvienHD.hoidongdanhgiaId}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${thanhvienHD.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${thanhvienHD.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${thanhvienHD.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="doAnApp.thanhvienHD.home.notFound">No Thanhvien HDS found</Translate>
            </div>
          )}
        </div>
        <div className={thanhvienHDList && thanhvienHDList.length > 0 ? '' : 'd-none'}>
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

const mapStateToProps = ({ thanhvienHD }: IRootState) => ({
  thanhvienHDList: thanhvienHD.entities,
  totalItems: thanhvienHD.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThanhvienHD);
