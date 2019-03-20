var topics = ["Basketball", "Tennis", "Football", "Soccer"];



function showInfo() {

    //create a variable using giphy search and include array variable

    var sport = $( this ).attr( "data-name" );
    console.log( sport );
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&rating=g&api_key=CzAlbxJgZNeqUfc3v0PSdcxACwxhr5Zh&limit=10";

    //use ajax to get 10 gifs and then display to page

    $.ajax( {
        url: queryURL,
        method: "GET"
    } ).then( function ( response ) {

        // var results = response.data[j];

        console.log( response );
        for ( var j = 0; j < response.data.length; j++ ) {





            var image = $( "<img src=" + response.data[j].images.fixed_width.url + ">" );
            $( "#display" ).prepend( image );


            // var gifDiv = $( "<div class='gifs'>" );
            // var rating = response.rated;
            // var ratingDisplay = $( "<p>" ).text( "Rating: " + rating );
            // image.append( ratingDisplay );
            // ( "#display" ).prepend( gifDiv );



            // var picDiv = $( "<div class= 'gifs'>" );
            // var rating = results.rating;
            // var staticSrc = results.images.fixed_height_still.url;
            // var image = $( "<img>" );
            // var p = $( "<p>" ).text( "Rating: " + rating );
            // image.attr( "src", staticSrc );
            // image.addClass( "gifGiphy" );
            // image.attr( "data-state", "still" );
            // image.attr( "data-still", staticSrc );
            // image.attr( "data-animate", defaultAnimatedSrc );
            // picDiv.append( p );
            // picDiv.append( image );
            // $( "#display" ).prepend( picDiv );

            // pausePlayGifs();

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
    console.log( event );
    event.preventDefault();


    var topic = $( "#sports-input" ).val().trim();
    topics.push( topic )
    console.log( topics )


    choiceButtons();

} )


$( document ).on( "click", ".sport-buttons", showInfo );
choiceButtons();


// function pausePlayGifs() {
//     var state = $( this ).attr( "data-state" );
//     if ( state === "still" ) {
//         $( this ).attr( "src", $( this ).attr( "data-animate" ) );
//         $( this ).attr( "data-state", "animate" );
//     } else {
//         $( this ).attr( "src", $( this ).attr( "data-still" ) );
//         $( this ).attr( "data-state", "still" );
//     }
// }








