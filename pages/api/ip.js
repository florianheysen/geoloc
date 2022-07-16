const RequestIp = require("@supercharge/request-ip");

export default function handler(req, res) {
    const ip = RequestIp.getClientIp(req);
    res.status(200).json({ yourIp: ip })
  }
  