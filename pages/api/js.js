const { SplitbeeAnalytics } = require('@splitbee/node');
const RequestIp = require("@supercharge/request-ip");
const NodeCache = require("node-cache");
const axios = require("axios").default;

const Cache = new NodeCache({ stdTTL : 20})

const analytics = new SplitbeeAnalytics('XVE9367GCHKF');

export default function handler(req, res) {
    analytics.track({
      requestIp: RequestIp.getClientIp(req),
      event: 'GET /api/js/'
    });
    if(Cache.has('codeCached')){
        res.write(Cache.get('codeCached'))
        res.end();
    } else {
      const ip = RequestIp.getClientIp(req);
      const UrlGeoApi = `http://ip-api.com/json/${ip}`;
      axios
        .get(UrlGeoApi).then(function (response) {
          const data = response.data;
          const longitude = data.lon;
          const latitude = data.lat;
          const country = data.countryCode;
          const timezone = data.timezone;
          const region = data.regionName;
          const asOrganization = data.isp;
          const displayCode = `var geoloc={"longitude":"${longitude}","latitude":"${latitude}","country":"${country}","timezone":"${timezone}","region":"${region}","asOrganization": "${asOrganization}"}; document.dispatchEvent(new CustomEvent('geoloc-loaded'));`
          Cache.set("codeCached", displayCode);
          res.write(displayCode);
          res.end();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}