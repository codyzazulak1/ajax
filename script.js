var searchTerm = prompt("Before we start, search for a tag!")
var url = 'https://api.instagram.com/v1/tags/' + searchTerm + '/media/recent?access_token=5509571.f59def8.d71968f130404523aacd18b0e3123793&callback=?';
    $.getJSON(url, function(data) {
        for (var i=0; i < 20; i++) {
            $("#photobox").append("<img src=' " + data.data[i].images.standard_resolution.url + " '>");
        }
        $("#photobox img").hide();
    });

$(document).ready(function() {
        $('.button').click(function() {
            $('#photobox :first-child').fadeIn();
            setInterval(function(){
                $('#photobox :first-child')
                .fadeOut()
                .next('img')
                .fadeIn()
                .end()
                .appendTo('#photobox');
                console.log(searchTerm);
            }, 3000); 
        });
            
});
