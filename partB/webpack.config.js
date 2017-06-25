var path = require("path");
module.exports = {
  entry: {
    app: ["./js/controller.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
	"devServer":{
	  "proxy": {
	    "/api": {
	    "target": 'https://api.mcmakler.de/v1/advertisements',
	    "pathRewrite": { '^/api': '' },
	    "changeOrigin": true,
	    "secure": false
	    }
	  }
	}  
};