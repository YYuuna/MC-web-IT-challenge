$(document).ready(function() {
    // attach a click event to the button
    $('#submit').click(function() {
        // get the value of the input field
        var city = $('#city').val();
        // make the request to the server
        $.get('/weather_api', {city: city}, function(data) {
            // check if there is an error
            if (data.error) {
                // display the error
                $('#weather').hide();
                $('#error_message').html(data.error['message']);
                $('#error').show();
            } else {
                // display the weather
                $('#error').hide();                
                let forcastday = data['forecast']['forecastday'][0]['day'];
                $('#icon').attr('src', forcastday['condition']['icon']);
                $('#city_name').html('City Name : ' + data['location']['name']);
                $('#region').html('Region : ' + data['location']['region']);
                $('#country').html('Country : ' + data['location']['country']);
                $('#description').html('Description : ' + forcastday['condition']['text']);
                $('#avgtemp').html('Average Temperature : ' + forcastday['avgtemp_c'] + '°C'+ ' / ' + forcastday['avgtemp_f'] + '°F');
                $('#maxtemp').html('Max Temperature : ' + forcastday['maxtemp_c'] + '°C'+ ' / ' + forcastday['maxtemp_f'] + '°F');
                $('#mintemp').html('Min Temperature : ' + forcastday['mintemp_c'] + '°C'+ ' / ' + forcastday['mintemp_f'] + '°F');
                $('#daily_chance_of_rain').html('Daily Chance of Rain : ' + forcastday['daily_chance_of_rain'] + '%');
                $('#daily_chance_of_snow').html('Daily Chance of Snow : ' + forcastday['daily_chance_of_snow'] + '%');
                $('#weather').show();                
            }
        });
    });
});