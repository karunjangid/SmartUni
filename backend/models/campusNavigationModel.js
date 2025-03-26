export const findShortestPath = (graph, source, destination) => {
    const distances = {};
    const previousNodes = {};
    const unvisited = new Set(Object.keys(graph));
  
    // Initialize distances and previous nodes
    for (const node of unvisited) {
      distances[node] = Infinity;
      previousNodes[node] = null;
    }
    distances[source] = 0;
  
    while (unvisited.size > 0) {
      // Find the closest unvisited node
      let closestNode = null;
      for (const node of unvisited) {
        if (closestNode === null || distances[node] < distances[closestNode]) {
          closestNode = node;
        }
      }
  
      if (closestNode === destination) break; // Stop when destination is reached
  
      // Update distances to neighbors
      for (const neighbor in graph[closestNode]) {
        const newDistance = distances[closestNode] + graph[closestNode][neighbor];
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          previousNodes[neighbor] = closestNode;
        }
      }
  
      unvisited.delete(closestNode); // Mark node as visited
    }
  
    // Reconstruct path
    const path = [];
    let currentNode = destination;
    while (currentNode) {
      path.unshift(currentNode);
      currentNode = previousNodes[currentNode];
    }
    const campusGraph = {
        Library: { Cafeteria: 200, "Main Auditorium": 300 },
        Cafeteria: { Library: 200, "Science Block": 100 },
        "Main Auditorium": { Library: 300, "Science Block": 400 },
        "Science Block": { Cafeteria: 100, "Main Auditorium": 400 },
      };
      
  
    return {
      path,
      distance: distances[destination],
    };
  };
  