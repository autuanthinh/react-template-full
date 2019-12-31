import React, { PureComponent } from 'react';
import LoadingComponent from 'app/components/_base/LoadingComponent';

const asyncComponent = importComponent => {
    class AsyncComponent extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                component: null,
            };

            this._isUnmounted = false;

            importComponent().then(({ default: component }) => {
                if (component && !this._isUnmounted) {
                    this.setState({
                        component,
                    });
                }
            });
        }

        componentWillUnmount() {
            this._isUnmounted = true;
        }

        componentDidMount() {
            this._isUnmounted = false;
        }

        render() {
            const { component: C } = this.state;

            return C ? <C {...this.props} /> : <LoadingComponent />;
        }
    }

    return AsyncComponent;
};

export default asyncComponent;
