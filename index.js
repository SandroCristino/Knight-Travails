function knightMoves(start, end) {

    if (start.toString() === end.toString()) {
      return console.log(`You are already on [${start}]`);
    }

    const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    const rows = 8, cols = 8;
    const parents = {[start.toString()]: null};

    const queue = [start];
    while (queue.length > 0) {
      const curr = queue.shift();

      //Compare if curr matches with target position
      if (curr.toString() === end.toString()) {
        break;
      }


      for (const move of moves) {
        const nextRow = curr[0] + move[0];
        const nextCol = curr[1] + move[1];
        const nextPos = [nextRow, nextCol];

        // Check if it's inside gameboard
        if (0 <= nextRow && nextRow < rows && 0 <= nextCol && nextCol < cols && !parents.hasOwnProperty(nextPos.toString())) {
          queue.push(nextPos);
          parents[nextPos.toString()] = curr;
        }
      }
    }
    if (!parents.hasOwnProperty(end.toString())) {
      return [];
    }
    const path = [end];
    let curr = end;
    while (curr.toString() !== start.toString()) {
      curr = parents[curr.toString()];
      path.unshift(curr);
    }
    return console.log(`You made it in ${path.length} moves. Here's your path: ${path}`);
}

knightMoves([2,2],[5,4]);