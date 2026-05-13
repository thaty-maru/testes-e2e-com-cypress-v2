const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: '1aewv2',
	e2e: {
		baseUrl: 'https://notes-serverless-app.com',
		env: {
			viewportWidthBreakpoint: 768,
		},
		defaultCommandTimeout: 10000,
		requestTimeout: 30000,
		chromeWebSecurity: false,
	},
})
