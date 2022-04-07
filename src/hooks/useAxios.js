import { useState } from "react"
import axios from 'axios'
import useUpdateEffect from "./useUpdateEffect";

// Testing Result
const geoResult = {
  "data": {
    "results": [
      {
        "address": "Syndal, Fiander Ave &, Coleman Parade, Glen Waverley VIC 3150, Australia",
        "postal_code": "3150",
        "country": "Australia",
        "region": "Victoria",
        "area": "City of Monash",
        "locality": "Glen Waverley",
        "street": "Coleman Parade",
        "location": {
          "lat": -37.876402,
          "lng": 145.148668
        },
        "location_type": "centroid",
        "type": "transit_station"
      }
    ]
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
    "access-control-allow-credentials": "true",
    "access-control-allow-origin": "http://localhost:3000",
    "connection": "keep-alive",
    "content-encoding": "br",
    "content-length": "296",
    "content-type": "application/json; charset=utf-8",
    "date": "Thu, 07 Apr 2022 05:52:18 GMT",
    "server": "RapidAPI-1.2.8",
    "vary": "Accept-Encoding",
    "x-backside-transport": "OK OK",
    "x-global-transaction-id": "075554b2624e7c121900c2df",
    "x-rapidapi-region": "AWS - ap-southeast-2",
    "x-rapidapi-version": "1.2.8",
    "x-ratelimit-requests-limit": "1000",
    "x-ratelimit-requests-remaining": "995",
    "x-ratelimit-requests-reset": "73897"
  },
  "config": {
    "transitional": {
      "silentJSONParsing": true,
      "forcedJSONParsing": true,
      "clarifyTimeoutError": false
    },
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "X-RapidAPI-Key": "826d4a86afmsha73f94f97130934p1a01f2jsn22208fcbe0ae"
    },
    "method": "get",
    "url": "https://trueway-geocoding.p.rapidapi.com/Geocode",
    "params": {
      "address": "Syndal Station, Glen Waverley",
      "language": "en"
    }
  },
  "request": {}
}

const matrixResult = {
  "data": {
    "distances": [
      [
        0,
        3939,
        2077,
        5418
      ],
      [
        4004,
        0,
        2609,
        1480
      ],
      [
        2985,
        2803,
        0,
        3646
      ],
      [
        5760,
        2395,
        5949,
        0
      ]
    ],
    "durations": [
      [
        0,
        855,
        475,
        1134
      ],
      [
        894,
        0,
        746,
        427
      ],
      [
        600,
        780,
        0,
        1060
      ],
      [
        1186,
        595,
        1194,
        0
      ]
    ]
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
    "access-control-allow-credentials": "true",
    "access-control-allow-origin": "http://localhost:3000",
    "connection": "keep-alive",
    "content-encoding": "br",
    "content-length": "204",
    "content-type": "application/json; charset=utf-8",
    "date": "Thu, 07 Apr 2022 06:50:15 GMT",
    "server": "RapidAPI-1.2.8",
    "vary": "Accept-Encoding",
    "x-backside-transport": "OK OK",
    "x-global-transaction-id": "104ed9dd624e89a704394a51",
    "x-rapidapi-region": "AWS - ap-southeast-2",
    "x-rapidapi-version": "1.2.8",
    "x-ratelimit-elements-limit": "1000",
    "x-ratelimit-elements-remaining": "920",
    "x-ratelimit-elements-reset": "70478"
  },
  "config": {
    "transitional": {
      "silentJSONParsing": true,
      "forcedJSONParsing": true,
      "clarifyTimeoutError": false
    },
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "X-RapidAPI-Host": "trueway-matrix.p.rapidapi.com",
      "X-RapidAPI-Key": "826d4a86afmsha73f94f97130934p1a01f2jsn22208fcbe0ae"
    },
    "method": "get",
    "url": "https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix",
    "params": {
      "origins": "40.629041,-74.025606;40.630099,-73.993521;40.644895,-74.013818;40.627177,-73.980853",
      "destinations": "40.629041,-74.025606;40.630099,-73.993521;40.644895,-74.013818;40.627177,-73.980853"
    }
  },
  "request": {}
}

export const useAxios = (url, method, payload, dependency) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useUpdateEffect(() => {
    // if (url === 'https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix') {
    //   setData({ ...matrixResult, timestamp: new Date })
    // } else {
    //   setData({ ...geoResult, timestamp: new Date })
    // }
    // axios
    //   .request({
    //     method,
    //     url,
    //     ...payload
    //   })
    //   .then(response => {
    //     setData(response)
    //   })
    //   .catch(error => setError(error.message))
    //   .finally(() => setLoading(true));
  }, [dependency]);

  return { data, error, loading };
};
