// Convert callback to promise withot reject
function callMethod(_method, instance) {
    return (...param) => {
        return new Promise(resolve => {
            const callBack = (error, result) => {
                resolve([error, result]);
            };

            if (instance) {
                _method.call(instance, ...param, callBack);
            } else {
                _method(...param, callBack);
            }
        });
    };
}

// Convert callback to promise
function callMethodWithReject(_method, instance) {
    return (...param) => {
        return new Promise((resolve, reject) => {
            const callBack = (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            };

            if (instance) {
                _method.call(instance, ...param, callBack);
            } else {
                _method(...param, callBack);
            }
        });
    };
}

// Call list promise method callMethod without reject
function callAllMethodWithReject(promises) {
    return new Promise(async resolve => {
        let result = await Promise.all(promises);
        let error = null;
        result = result.map(item => {
            const [e, r] = item;
            e && !error && (error = e);
            return r;
        });

        if (error) {
            resolve([error, null]);
        } else {
            resolve([null, result]);
        }
    });
}

// Call list promise method callMethodWithReject without reject
function callAllPromise(promises) {
    return new Promise(async resolve => {
        try {
            const result = await Promise.all(promises);
            resolve([null, result]);
        } catch (error) {
            resolve([error, null]);
        }
    });
}

// Convert promise to promise
function callMethodPromise(_method, instance) {
    return (...param) => {
        return new Promise(resolve => {
            const promise = instance ? _method.call(instance, ...param) : _method(...param);
            promise.then(
                result => resolve([null, result]),
                error => resolve([error, null])
            );
        });
    };
}

export default {
    callMethod,
    callMethodWithReject,
    callAllMethodWithReject,
    callAllPromise,
    callMethodPromise,
};
