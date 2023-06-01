function calculateMinCost() {
  var input = document.getElementById("rope-lengths").value;
  var ropes = input.split(",").map(Number);

  // Function to find the minimum cost of connecting ropes
  function minimumCostOfRopes(ropes) {
    var totalCost = 0;

    // Create a priority queue to store the ropes' lengths
    var PriorityQueue = require('js-priority-queue');
    var queue = new PriorityQueue({ comparator: function(a, b) { return a - b; } });

    // Add ropes to the priority queue
    for (var i = 0; i < ropes.length; i++) {
      queue.enqueue(ropes[i]);
    }

    // Connect the ropes until only one rope is left
    while (queue.length > 1) {
      // Extract the two smallest ropes from the queue
      var rope1 = queue.dequeue();
      var rope2 = queue.dequeue();

      // Connect the two ropes
      var connectedRope = rope1 + rope2;

      // Add the cost of connecting to the total cost
      totalCost += connectedRope;

      // Add the connected rope back to the queue
      queue.enqueue(connectedRope);
    }

    return totalCost;
  }

  // Find the minimum cost of connecting the ropes
  var minCost = minimumCostOfRopes(ropes);

  // Update the HTML with the minimum cost
  document.getElementById("result").innerHTML = minCost;
}

