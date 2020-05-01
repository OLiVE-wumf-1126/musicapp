$(function(){
  function news_data(data, i){
    console.log(data)
    var author = data.articles[i].author;
    var title = data.articles[i].title;
    var description = data.articles[i].description;
    var artUrl = data.articles[i].url;
    var html =
    `<div class=news__content>
      <a href = "${artUrl}">● ${title}</a>
    </div>`
    ;
    return html
  }
    
  

  var API_KEY = gon.news_aip_key
  var country = 'jp';
  var url = 'http://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + API_KEY;
  $.ajax({
    url: url,
    dataType: "json",
    type: 'GET',
  })
  .done(function(data) {
    console.log(data)
    var insertHTML = "";
    for (var i = 0; i < data.articles.length; i++) {
      insertHTML += news_data(data, i);
    }
    $('.news').append(insertHTML);
  });
});

