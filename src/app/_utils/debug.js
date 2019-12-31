import _ from 'lodash';
// import moment from 'moment';
// import queryString from 'query-string';
// import currencyFormatter from 'currency-formatter';
// import hex2rgba from 'hex-to-rgba';
// import immutable from 'immutable';
// import utils from 'app/utils';

export default function(w) {
    const libs = [
        { lib: 'lodash', alias: '_', value: _ },
        // { lib: 'moment', alias: 'moment', value: moment },
        // { lib: 'query-string', alias: 'queryString', value: queryString },
        // { lib: 'currency-formatter', alias: 'currencyFormatter', value: currencyFormatter },
        // { lib: 'hex-to-rgba', alias: 'hex2rgba', value: hex2rgba },
        // { lib: 'immutable', alias: 'immutable', value: immutable },
        // { lib: 'utils', alias: 'utils', value: utils },
        // { lib: 'Config', alias: 'Config', value: Config },
    ];

    Object.assign(
        w,
        libs.reduce((o, v) => {
            o[v.alias] = v.value;
            return o;
        }, {})
    );

    w.help = () => {
        return libs
            .map(i => {
                return i.lib + ': ' + i.alias;
            })
            .join(' ,\n');
    };
}
