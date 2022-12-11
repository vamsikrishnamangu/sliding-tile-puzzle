
var rows = 3;
var columns = 3;

var selectedTile;
var blankTile; 


var imageOrder = ["4", "2", "8", "5", "1", "6", "7", "0", "3"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imageOrder.shift() + ".PNG";

            tile.addEventListener("dragstart", function(){
                selectedTile=this;
            });  //click an image to drag
            tile.addEventListener("dragover", function(event){
                event.preventDefault();
            });    //moving image around while clicked
            tile.addEventListener("dragenter", function(event){
                event.preventDefault();
            });  //dragging image onto another one
            //tile.addEventListener("dragleave", dragLeave);  //dragged image leaving another image
            tile.addEventListener("drop", function(){
                blankTile=this;
            });        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);

        }
    }
}

function dragEnd() {
    if (!blankTile.src.includes("0.PNG")) {
        return;
    }

    let selectedCoordinates = selectedTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(selectedCoordinates[0]);
    let c = parseInt(selectedCoordinates[1]);

    let blankCoordinates = blankTile.id.split("-");
    let r2 = parseInt(blankCoordinates[0]);
    let c2 = parseInt(blankCoordinates[1]);

    let Left = r == r2 && c2 == c-1;
    let Right = r == r2 && c2 == c+1;

    let Up = c == c2 && r2 == r-1;
    let Down = c == c2 && r2 == r+1;

    let isNeighbour = Left || Right || Up || Down;

    if (isNeighbour) {
        let selectedImg = selectedTile.src;
        let blankImg = blankTile.src;

        selectedTile.src = blankImg;
        blankTile.src = selectedImg;
    }


}