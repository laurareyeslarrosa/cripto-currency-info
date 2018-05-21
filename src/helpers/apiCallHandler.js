import { defaultCurrency, strReplaceCurrency } from './const';
import { apiUrlResume, apiPriceConversion, apiDailyHistory, apiHourlyHistory } from './url.const';

export function getCriptoCurrencyDataList(parent, statemame) {
    let url = apiUrlResume;
    getApiConnectionData(parent, statemame, url);
}

export function getCriptoCurrencyPriceList(parent, statemame, currencyList) {
    let url = setUrl(apiPriceConversion, currencyList);
    getApiConnectionData(parent, statemame, url);
}

export function getCriptoCurrencyDailyHistory(parent, statemame, currency) {
    let url = setUrl(apiDailyHistory, currency);
    getApiConnectionData(parent, statemame, url);
}

export function getCriptoCurrencyHourlyHistory(parent, statemame, currency) {
    let url = setUrl(apiHourlyHistory, currency);
    getApiConnectionData(parent, statemame, url);
}

function setUrl(url, currency) {
    return url
        .replace(strReplaceCurrency, (currency || defaultCurrency))
}

function getApiConnectionData(parent, statemame, url, callback) {
    fetch(url)
        .then(response => {
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