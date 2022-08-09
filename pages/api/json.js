const { SplitbeeAnalytics } = require('@splitbee/node');
const RequestIp = require("@supercharge/request-ip");
const NodeCache = require("node-cache");
const axios = require("axios").default;

const Cache = new NodeCache({ stdTTL : 20})

const analytics = new SplitbeeAnalytics('XVE9367GCHKF');

export default function handler(req, res) {
    analytics.track({
      requestIp: RequestIp.getClientIp(req),
      event: 'GET /api/json/'
    });
    if(Cache.has('dataCached')){
        res.status(200).json(Cache.get('dataCached'));
    } else {
      const ip = RequestIp.getClientIp(req);
      const UrlGeoApi = `http://ip-api.com/json/${ip}`;
      axios
        .get(UrlGeoApi)
        .then(function (response) {
          const data = response.data;
          const longitude = data.lon;
          const latitude = data.lat;
          const country = data.countryCode;
          const region = data.regionName;
          const timezone = data.timezone;
          const asOrganization = data.isp;
          const displayCode = {
            longitude,
            latitude,
            country,
            region,
            timezone,
            asOrganization
          }
          Cache.set("dataCached", displayCode);
          res.status(200).json(displayCode);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
}