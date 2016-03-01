
var appRouter = function(app) {

 app.post("/rental", function(req, res, next) {

     if(!req.body.address || !req.body.city || !req.body.state || !req.body.zip) {

         return res.send({"status": "error", "message": "missing a parameter"});

     } else {
       // Put all the geocoding shit you put in the test file here
       // instead of geocoder.geocode('29 champs elysée paris') put
       // geocoder.geocode(req.body.address + ' ' + req.body.city + ' ' + req.body.state + ' ' + req.body.zip, function(err, res) {}
       // then in that function in geocoder.geocode, return res.send(res)

       var geocoderProvider = 'google';
       var httpAdapter = 'https';
       // optionnal
       var extra = {
           apiKey: 'AIzaSyAWH_mVa3Dy6FfgLcr4oCn7lco0UOUbqTY', // for Mapquest, OpenCage, Google Premier
           formatter: null         // 'gpx', 'string', ...
       };

       var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);
       var address = req.body.address + ' ' + req.body.city + ' ' + req.body.state + ' ' + req.body.zip;

       // Using callback
       geocoder.geocode(address, function(err, location) {
           if(err) { console.log('err'); console.log(err); }
           console.log('location');
           console.log(location);
           return res.send(location);
       });

     }
 });
}

module.exports = appRouter;
