var topics = ["Basketball", "Tennis", "Football", "Soccer"];



function showInfo() {

    //create a variable using giphy search and include array variable

    var sport = $( this ).attr( "data-name" );
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&rating=g&api_key=CzAlbxJgZNeqUfc3v0PSdcxACwxhr5Zh&limit=10";

    //use ajax to get 10 gifs and then display to page

    $.ajax( {
        url: queryURL,
        method: "GET"
    } ).then( function ( response ) {
        console.log( response );
        for ( var j = 0; j < response.data.length; j++ ) {

            var image = $( "<img src=" + response.data[j].images.fixed_width.url + ">" );
            $( "#display" ).append( image );

        }

    } )
};
function choiceButtons() {
    $( "#buttons" ).empty();
    for ( var i = 0; i < topics.length; i++ ) {

        var myButton = $( "<button>" );
        myButton.addClass( "sport-buttons" );
        myButton.attr( "data-name", topics[i] );
        myButton.text( topics[i] );
        $( "#buttons" ).append( myButton );


    }
}


$( "#new-sport" ).on( "click", function ( event ) {
    event.preventDefault();


    var topic = $( "#sports-input" ).val().trim();
    topics.push( topic )
    console.log( topics )


    choiceButtons();

} )


$( document ).on( "click", ".sport-buttons", showInfo );
choiceButtons();








