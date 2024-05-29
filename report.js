const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/30260227-66258ae0-38f4-44e9-89ea-f238d5cbf5d1?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});