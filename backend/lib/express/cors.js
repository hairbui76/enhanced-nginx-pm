const validator = require('../validator');

module.exports = function (req, res, next) {
	if (req.headers.origin) {
		const originSchema = {
			oneOf: [
				{
					type: 'string',
					pattern: '^[a-z\\-]+:\\/\\/(?:[\\w\\-\\.]+(:[0-9]+)?/?)?$',
				},
				{
					type: 'string',
					pattern: '^[a-z\\-]+:\\/\\/(?:\\[([a-z0-9]{0,4}\\:?)+\\])?/?(:[0-9]+)?$',
				},
			],
		};

		// very relaxed validation....
		validator(originSchema, req.headers.origin)
			.then(function () {
				res.set({
					'Access-Control-Allow-Origin': req.headers.origin,
					'Access-Control-Allow-Credentials': true,
					'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
					'Access-Control-Allow-Headers': 'Content-Type, Cache-Control, Pragma, Expires, Authorization, X-Dataset-Total, X-Dataset-Offset, X-Dataset-Limit',
					'Access-Control-Max-Age': 5 * 60,
					'Access-Control-Expose-Headers': 'X-Dataset-Total, X-Dataset-Offset, X-Dataset-Limit',
				});
				next();
			})
			.catch(next);
	} else {
		// No origin
		next();
	}
};
