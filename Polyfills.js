let isPromiseOneResolved = false;
let isPromiseTwoResolved = true;
let isPromiseThreeResolved = false;

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isPromiseOneResolved ? resolve('Promise 1 resolved') :
            reject('Promise 1 rejected')
    }, 100)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isPromiseTwoResolved ? resolve('Promise 2 resolved') :
            reject('Promise 2 rejected');
    }, 100)
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isPromiseThreeResolved ? resolve('Promise 3 resolved') :
            reject('Promise 3 rejected');
    }, 300)
});

// pollyfills
// =========== Promise.all  ================= //
// The Promise.all() method returns a single Promise from a list of promises, when all promises fulfill.
// if any of the promise is rejected then it stop executing and it will be rejected at a point
// where it is rejected and returnthe rejected promise.

Promise.myPromisAll = (promisArr) => {
    let result = [];
    return new Promise((resolve, reject) => {
        promisArr.forEach((promise, index) => {
            promise.then(response => {
                result[index] = response;
                if (index === promisArr.length - 1) {
                    resolve(result);
                }
            })
                .catch((err) => reject(err));
        });
    });
};

// ================ Promise.any ============= //

Promise.myPromiseAny = (promiseArr) => {
    let resultErr = [];
    return new Promise((resolve, reject)  => {
        promiseArr.forEach((promise, index) => {
            promise.then(response => {
                resolve(response)
            }).catch(error => {
                resultErr[index] = error;
                if(index === promiseArr.length - 1) {
                    reject(new AggregateError(resultErr));
                }
            })
        })
    })
}

// ================ Promise.race ============= //

Promise.myPromiseRace = (promiseArr) => {
    return new Promise ((resolve, reject) => {
        promiseArr.forEach(promise => {
            promise.then(response => {
                resolve(response)
            }).catch(error => reject(error));
        })
    })
}

// ================ Promise.allSettled ============= //
Promise.myPromiseAllSettled = (promiseArr) => {
    const promises = promiseArr.map(promise => {
        return promise.then(response => {
            return {
                status: 'fulfilled',
                value: response
            } 
        }).catch(error => {
            return {
                status: 'rejected',
                reason: error
            }
        })
    });
    return Promise.myPromisAll(promises);
}

Promise.myPromiseAllSettled([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.error(err));