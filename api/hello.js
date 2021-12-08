const { Router } = require('express')
const router = Router()
const parseJson = require('parse-json');


router.use('/hello', (req, res) => {
  
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'INSERT YOUR AIRTABLE API KEY'}).base('INSERT AIRTABLE BASE KEY');

base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 1000,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    return res.json({records})

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


})





module.exports = router