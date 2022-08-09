const { SplitbeeAnalytics } = require('@splitbee/node');
 const RequestIp = require("@supercharge/request-ip");

 const analytics = new SplitbeeAnalytics('XVE9367GCHKF');

export default function handler(req, res) {
    analytics.track({
      requestIp: RequestIp.getClientIp(req),
      event: 'GET /api/ip/'
    });
    const ip = RequestIp.getClientIp(req);
    res.status(200).json({ yourIp: ip })
  }
  