var express = require('express');
var app = express();
var request = require('request');
var events = require('events');
var sequence = require('sequence').Sequence.create(),
    err

app.use(express.static('public'));

app.get('/hello', function(req, res) {
    res.send('Hello World!');
});

app.get('/actsearch', function(req, res) {
    var responseBody = [];
    res.send([{
        id: "170477",
        title: "Willis Tower Skydeck & The Ledge",
        imageUrl: "//a.travel-assets.com/lxweb/media-vault/170477_m.jpeg?v=101755",
        largeImageURL: "//a.travel-assets.com/lxweb/media-vault/170477_l.jpeg?v=101755",
        fromPrice: "$18",
        fromPriceLabel: "per adult",
        fromOriginalPrice: "",
        fromOriginalPriceValue: "",
        duration: "3h",
        fromPriceTicketType: "adult",
        freeCancellation: "true",
        discountPercentage: null,
        categories: [
            "Attractions"
        ],
        latLng: "41.8788764,-87.6359149",
        redemptionType: "Print",
        supplierName: "Willis Tower",
        recommendationScore: "85",
        discountType: null,
        shortDescription: null
    }, {
        id: "170477",
        title: "Willis Tower Skydeck & The Ledge",
        imageUrl: "//a.travel-assets.com/lxweb/media-vault/170477_m.jpeg?v=101755",
        largeImageURL: "//a.travel-assets.com/lxweb/media-vault/170477_l.jpeg?v=101755",
        fromPrice: "$18",
        fromPriceLabel: "per adult",
        fromOriginalPrice: "",
        fromOriginalPriceValue: "",
        duration: "3h",
        fromPriceTicketType: "adult",
        freeCancellation: "true",
        discountPercentage: null,
        categories: [
            "Attractions"
        ],
        latLng: "41.8788764,-87.6359149",
        redemptionType: "Print",
        supplierName: "Willis Tower",
        recommendationScore: "85",
        discountType: null,
        shortDescription: null
    }, {
        id: "170477",
        title: "Willis Tower Skydeck & The Ledge",
        imageUrl: "//a.travel-assets.com/lxweb/media-vault/170477_m.jpeg?v=101755",
        largeImageURL: "//a.travel-assets.com/lxweb/media-vault/170477_l.jpeg?v=101755",
        fromPrice: "$18",
        fromPriceLabel: "per adult",
        fromOriginalPrice: "",
        fromOriginalPriceValue: "",
        duration: "3h",
        fromPriceTicketType: "adult",
        freeCancellation: "true",
        discountPercentage: null,
        categories: [
            "Attractions"
        ],
        latLng: "41.8788764,-87.6359149",
        redemptionType: "Print",
        supplierName: "Willis Tower",
        recommendationScore: "85",
        discountType: null,
        shortDescription: null
    }]);
});


var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
