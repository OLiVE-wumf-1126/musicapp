$(function() {
  
  function buildHTML(data, i) {
    var Week = new Array("（日）","（月）","（火）","（水）","（木）","（金）","（土）");
    var date = new Date (data.list[i].dt_txt);
    date.setHours(date.getHours() + 9);
    var month = date.getMonth()+1;
    var day = month + "月" + date.getDate() + "日" + Week[date.getDay()] + date.getHours() + "：00";
    var icon = data.list[i].weather[0].icon;
    var html =
    '<div class="weather__report">' + 
      '<div class="weather__report--date">' + day + '</div>' +
      '<img class="weather__report--img" src="http://openweathermap.org/img/w/' + icon + '.png">' +
      '<div class="weather__report--main">'+ data.list[i].weather[0].main + '</div>' +
      '<div class="weather__report--temp">' + '気温：' + Math.round(data.list[i].main.temp) + '℃</div>' +
    '</div>';
    return html
  }

  var API_KEY = gon.openweather_aip_key
  var city = 'Tokyo';
  var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',jp&units=metric&APPID=' + API_KEY;
  $.ajax({
    url: url,
    dataType: "json",
    type: 'GET',
  })
  .done(function(data) {
    console.log(data)
    var insertHTML = "";
    var cityName = '<h2>' + data.city.name + '</h2>';
    $('#city-name').html(cityName);
    for (var i = 0; i <= 8; i = i + 1) {
      insertHTML += buildHTML(data, i);
    }
    // $('.weather').html(insertHTML);
    $('.weather').append(insertHTML);
  })
  .fail(function(data) {
    console.log("失敗しました");
  });
});

// --------------------------------------------------------------------------
