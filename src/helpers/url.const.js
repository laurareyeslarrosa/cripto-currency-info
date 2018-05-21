import {strReplaceCurrency, defaultConversion} from './const';

const apiBaseUrl = "https://min-api.cryptocompare.com";

export const baseUrl = "https://www.cryptocompare.com";
export const apiUrlResume = apiBaseUrl + "/data/top/totalvol?limit=20&tsym=" + defaultConversion;
export const apiPriceConversion = apiBaseUrl + "/data/pricemulti?fsyms=" + strReplaceCurrency + "&tsyms=" + defaultConversion;
export const apiDailyHistory = apiBaseUrl + "/data/histoday?fsym=" + strReplaceCurrency + "&tsym=" + defaultConversion + "&limit=10";
export const apiHourlyHistory = apiBaseUrl + "/data/histohour?fsym=" + strReplaceCurrency + "&tsym=" + defaultConversion + "&limit=10";