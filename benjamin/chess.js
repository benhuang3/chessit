
document.addEventListener('DOMContentLoaded', function() {
    const chessboard = document.getElementById('chessboard');
    const rows = 8;
    const columns = 8;
    let selectedPiece = null;

    const pieceMap = {
        '0_0': 'b_rook.png',
        '0_1': 'b_knight.png',
        '0_2': 'b_bishop.png',
        '0_3': 'b_queen.png',
        '0_4': 'b_king.png',
        '0_5': 'b_bishop.png',
        '0_6': 'b_knight.png',
        '0_7': 'b_rook.png',
    
        '1_0': 'b_pawn.png',
        '1_1': 'b_pawn.png',
        '1_2': 'b_pawn.png',
        '1_3': 'b_pawn.png',
        '1_4': 'b_pawn.png',
        '1_5': 'b_pawn.png',
        '1_6': 'b_pawn.png',
        '1_7': 'b_pawn.png',

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

    const clearSelection = () => {
        selectedPiece = null;
        Array.from(chessboard.children).forEach(child => {
            child.classList.remove('selected');
        });
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let square = document.createElement('div');
            square.className = 'square ' + ((row + col) % 2 === 0 ? 'white-square' : 'black-square');
            square.dataset.position = `${row}_${col}`;

            let pieceImage = pieceMap[`${row}_${col}`];
            if (pieceImage) {
                let imgElement = document.createElement('img');
                imgElement.src = `piece_images/${pieceImage}`;
                imgElement.draggable = false;
                square.appendChild(imgElement);
            }

            chessboard.appendChild(square);

            square.addEventListener('click', function() {
                if (selectedPiece && square.childNodes.length === 0) {
                    // Move the piece to the new square
                    square.appendChild(selectedPiece);
                    clearSelection();
                } else if (square.childNodes.length > 0) {
                    // Select the piece
                    clearSelection();
                    selectedPiece = square.childNodes[0];
                    square.classList.add('selected');
                } else {
                    clearSelection();
                }
            });
        }
    }

    document.addEventListener('click', function(e) {
        if (!chessboard.contains(e.target)) {
            clearSelection();
        }
    });
});
