var request = require("request");

const getCountries = async (req, res, next) => {
    let countries;

    try {
        await request("https://api.covid19api.com/summary", (error, response, body) => {
            countries = JSON.parse(response.body).Countries;
            res.json({ countries: countries });
        });
    } catch (e) {
        return next(new Error('Erro'));
    }
};

const getTenHighestRisk = async (req, res, next) => {

}

exports.getCountries = getCountries;
