import countriesData from '../utils/country-codes-lat-long.json'

const useCountries = () => {
    const countries = countriesData?.ref_country_codes;

    return {
        countries
    }

};

export default useCountries;
