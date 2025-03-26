import React, { useState } from "react";
import "./EnhancedCampusNavigation.css";
import BackgroundVideo from "../assets/backgroundadvance.mp4"; // Adjust path as needed

const CampusNavigation = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [route, setRoute] = useState(null);
  const [error, setError] = useState(null);

  // Example Campus Graph
  const campusGraph = {
    Library: { Cafeteria: 200, "Main Auditorium": 300 },
    Cafeteria: { Library: 200, "Science Block": 100 },
    "Main Auditorium": { Library: 300, "Science Block": 400 },
    "Science Block": { Cafeteria: 100, "Main Auditorium": 400 },
  };

  const findShortestPath = (graph, source, destination) => {
    const distances = {};
    const previousNodes = {};
    const unvisited = new Set(Object.keys(graph));

    for (const node of unvisited) {
      distances[node] = Infinity;
      previousNodes[node] = null;
    }
    distances[source] = 0;

    while (unvisited.size > 0) {
      let closestNode = null;
      for (const node of unvisited) {
        if (closestNode === null || distances[node] < distances[closestNode]) {
          closestNode = node;
        }
      }

      if (closestNode === destination) break;

      for (const neighbor in graph[closestNode]) {
        const newDistance = distances[closestNode] + graph[closestNode][neighbor];
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          previousNodes[neighbor] = closestNode;
        }
      }

      unvisited.delete(closestNode);
    }

    const path = [];
    let currentNode = destination;

    while (currentNode) {
      path.unshift(currentNode);
      currentNode = previousNodes[currentNode];
    }

    return {
      path,
      distance: distances[destination],
    };
  };

  const handleCalculateRoute = () => {
    if (!source || !destination) {
      setError("Source and destination are required.");
      setRoute(null);
      return;
    }

    if (!campusGraph[source] || !campusGraph[destination]) {
      setError("Invalid source or destination.");
      setRoute(null);
      return;
    }

    const result = findShortestPath(campusGraph, source, destination);
    setRoute(result);
    setError(null);
  };

  return (
    <section className="campus-navigation-container">
      {/* Background Video */}
      <video autoPlay muted loop className="navigation-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="navigation-content-overlay">
        <h2>Campus Navigation</h2>
        <form className="navigation-form" onSubmit={(e) => e.preventDefault()}>
          <div className="navigation-form-group">
            <label>Source:</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter source (e.g., Library)"
            />
          </div>
          <div className="navigation-form-group">
            <label>Destination:</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination (e.g., Science Block)"
            />
          </div>
          <button className="navigation-calculate-button" onClick={handleCalculateRoute}>
            Find Route
          </button>
        </form>

        {error && <p className="navigation-error">{error}</p>}

        {route && (
          <div className="navigation-results">
            <h3>Route Information:</h3>
            <p><strong>Path:</strong> {route.path.join(" → ")}</p>
            <p><strong>Total Distance:</strong> {route.distance} meters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CampusNavigation;
