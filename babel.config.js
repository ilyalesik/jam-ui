module.exports = {
	presets: [
		[
			'@babel/env',
			{
				modules: false,
				useBuiltIns: 'usage',
			},
		],
		'@babel/react',
	],
    "plugins": [
        ["reshadow/babel", {
            "postcss": true
        }]
    ]
};
