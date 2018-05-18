import {apiUrlList, apiUrlDetails} from './const';

export function getCriptoCurrencyDataList(parent, statemame) {
console.log("aaaa")
    let url = apiUrlList;
    getApiConnectionData(parent, statemame, url);
}

export function getCriptoCurrencyDataDetails(parent, statemame) {
    let url = apiUrlDetails;
    getApiConnectionData(parent, statemame, url);
}

function getApiConnectionData(parent, statemame, url, callback) {
    fetch(url)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw Error("Network request failed")
            }
            return response
        })
        .then(data => data.json())
        .then(data => {
            parent.setState({
                [statemame]: data
            })

        }, () => {
            parent.setState({
                requestFailed: true
            })
        })
}