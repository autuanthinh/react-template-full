import Cookies from 'js-cookie';
import _ from 'lodash';
import moment from 'moment';

// const optionInit = {
//     // expires: new Date(),
//     // path: '/',
//     // domain: `.${domain}`,
// };

class Cookie {
    keys = {
        TOKEN: 'token',
    };

    setItem(key, value, option, onlyDomain = true) {
        Cookies.set(key, value, this.calcOption(option, onlyDomain));
    }

    getItem(key) {
        return Cookies.get(key);
    }

    getItemJson(key) {
        return JSON.parse(Cookies.get(key));
    }

    setItemJson(key, value, option, onlyDomain = true) {
        Cookies.set(key, JSON.stringify(value), this.calcOption(option, onlyDomain));
    }

    removeItem(key, option, onlyDomain = true) {
        Cookies.remove(key, this.calcOption(option, onlyDomain));
    }

    calcOption(option, onlyDomain = true) {
        const calcOption = typeof option === 'object' ? _.cloneDeep(option) : {};
        if (!calcOption.domain && onlyDomain) {
            const { host } = window.location;
            const hostSegments = host.split(':')[0].split('.');
            const domain = hostSegments.splice(-2).join('.');
            calcOption.domain = `.${domain}`;
        }

        if (!(calcOption.expires instanceof Date)) {
            let expiredDate = null;
            if (calcOption.expires > 0) {
                expiredDate = new Date(calcOption.expires);
            } else {
                expiredDate = moment()
                    .add(30, 'minutes')
                    .toDate();
            }
            calcOption.expires = expiredDate;
        }

        return calcOption;
    }
}

export default new Cookie();
