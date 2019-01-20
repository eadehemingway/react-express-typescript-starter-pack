"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
app_1.app.listen(app_1.app.get('port'), function () {
    console.log("server is running on http://localhost:" + app_1.app.get('port'));
});
//# sourceMappingURL=index.js.map