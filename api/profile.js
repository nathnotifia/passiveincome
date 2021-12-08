const { Router } = require('express')
const router = Router()
const parseJson = require('parse-json');


router.use('/profile', (req, res) => {
  
    var Airtable = require('airtable');
var base = new Airtable({apiKey: 'INSERT YOUR AIRTABLE API KEY'}).base('INSERT AIRTABLE BASE KEY');
const airtableField = "Name"

base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 1,
    view: "Grid view",
    filterByFormula: `{${airtableField}} = "${req.query.id}"`

}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
        res.json({record})

    });



    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


})





module.exports = router