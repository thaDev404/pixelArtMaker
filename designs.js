function makeGrid() {
    
    // Select size input
    var canvasHeight = $('#inputHeight').val();
    var canvasWidth = $('#inputWidth').val();
    alert('H');

    //Selector for table
    var tableDraw = $('#pixelCanvas');

    //Clear pre existing table grid
    tableDraw.children().remove();

    //
    for (var row = 0; row <= canvasHeight; row++){
        var tr = $('<tr></tr>');
        tableDraw.append(tr);
        for (var col = 0; col <= canvasWidth; col++) {
            tr.append('<td></td>');
        }
    }
}



$('#pixelCanvas').on('click', 'td', function(e){
       // Select color input
    var colorPicker = $('#colorPicker').val();
   $(this).css('backgroundColor', colorPicker)

});

    //selector.hover( handlerIn, handlerOut )
    $('#colorPicker').hover(function(){
        $(this).css('cursor','pointer').attr('title','Please pick a colour')
    }, function(){
        $(this).css('cursor', 'auto')
    });

    // When size is submitted by the user, call makeGrid()
    $('#inputWidth').next().click(function(event){
    event.preventDefault();
    
    makeGrid();
    
});