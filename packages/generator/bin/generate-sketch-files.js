const fs = require("fs");

const configFileName = ".jam-ui.json";

fs.readFile(configFileName, "utf8", (err, code) => {
    const config = JSON.parse(code);
});
