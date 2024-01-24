document.addEventListener('DOMContentLoaded', function() {
    const chessboard = document.getElementById('chessboard');
    const rows = 8;
    const columns = 8;
    const pieceMap = {
        '1_0': 'b_rook.png',
        '1_1': 'b_knight.png',
        '1_2': 'b_bishop.png',
        '1_3': 'b_queen.png',
        '1_4': 'b_king.png',
        '1_5': 'b_bishop.png',
        '1_6': 'b_knight.png',
        '1_7': 'b_rook.png',
    
        '2_0': 'w_pawn.png',
        '2_1': 'w_pawn.png',
        '2_2': 'w_pawn.png',
        '2_3': 'w_pawn.png',
        '2_4': 'w_pawn.png',
        '2_5': 'w_pawn.png',
        '2_6': 'w_pawn.png',
        '2_7': 'w_pawn.png',

        // ... Initialize other pieces
        '6_0': 'w_pawn.png',
        '6_1': 'w_pawn.png',
        '6_2': 'w_pawn.png',
        '6_3': 'w_pawn.png',
        '6_4': 'w_pawn.png',
        '6_5': 'w_pawn.png',
        '6_6': 'w_pawn.png',
        '6_7': 'w_pawn.png',
        
        // ... Initialize other pieces
        '7_0': 'w_rook.png',
        '7_1': 'w_knight.png',
        '7_2': 'w_bishop.png',
        '7_3': 'w_queen.png',
        '7_4': 'w_king.png',
        '7_5': 'w_bishop.png',
        '7_6': 'w_knight.png',
        '7_7': 'w_rook.png'
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let square = document.createElement('div');
            square.className = 'square ' + ((row + col) % 2 === 0 ? 'white-square' : 'black-square');

            let pieceImage = pieceMap[`${row}_${col}`];
            if (pieceImage) {
                let imgElement = document.createElement('img');
                imgElement.src = `piece_images/${pieceImage}`; // Assuming images are in an 'images' folder
                square.appendChild(imgElement);
            }

            chessboard.appendChild(square);
        }
    }
});
