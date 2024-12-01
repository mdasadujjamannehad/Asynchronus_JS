const paymentSuccess = true;
const marks = 85;

function enroll() {
    console.log('Course enrollment is in proggress');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve()
            } else {
                reject('Payment Failed!!!!');
            }
        }, 2000)
    })
    return promise;
}

function progress() {
    console.log('Course on Proggress');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve()
            } else {
                reject('You could not get enough marks to get the certificate')
            }
        }, 2000)
    });

    return promise;
}

function getCertificate() {
    console.log('Preparing your certificate');
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Congrates! you got the certificate')
        }, 1000)
    })

    return promise;
}

async function course() {
    try {
        await enroll()
        await progress()
        const message = await getCertificate()
        console.log(message);
    } catch (err) {
        console.log(err);
    }

}
course();