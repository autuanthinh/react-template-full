import React, { PureComponent } from 'react';
import { Route, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RoutersAuthen from '../../routers/RoutersAuthen';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            routes: RoutersAuthen,
        };
    }

    render() {
        const { routes } = this.state;

        return (
            <header id="header">
                {routes.length && (
                    <ul className="nav">
                        {routes.map((route, key) => (
                            <Route key={key} path={route.path} exact={route.exact}>
                                {({ match }) => (
                                    <li className={match ? 'active' : null}>
                                        <Link to={route.path}>{route.title}</Link>
                                    </li>
                                )}
                            </Route>
                        ))}
                    </ul>
                )}
            </header>
        );
    }
}

Header.propTypes = {};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
