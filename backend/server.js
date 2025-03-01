const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
const albums = [
  {
    id: 1,
    collectionName: "EPIC: The Troy Saga (Official Concept Album)",
    artistName: "Jorge Rivera-Herrans",
    type: "EP",
    songCount: 5,
    duration: "00:15:40",
    size: "45 MB",
    releasedOn: "03 Sept 2024, 02:35 PM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
      {
        title: "Warrior of the Mind",
        performers:
          "Jorge Rivera-Herrans, Teagan Earley & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "23 MB",
      },
    ],
  },
  {
    id: 2,
    collectionName: "EPIC: The Ocean Saga (Official Concept Album)",
    artistName: "Jorge Rivera-Herrans",
    type: "EP",
    songCount: 4,
    duration: "00:13:00",
    size: "15 MB",
    releasedOn: "04 Sept 2024, 10:00 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
    ],
  },
  {
    id: 3,
    collectionName: "EPIC: The Ithaca Saga (Official Concept Album)",
    artistName: "Jorge Rivera-Herrans",
    type: "EP",
    songCount: 4,
    duration: "00:12:24",
    size: "30 MB",
    releasedOn: "04 Sept 2024, 10:00 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
    ],
  },
  {
    id: 4,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Album",
    songCount: 8,
    duration: "00:21:06",
    size: "12 MB",
    releasedOn: "10 Oct 2024, 02:35 PM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
    ],
  },
  {
    id: 5,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Album",
    songCount: 7,
    duration: "00:20:22",
    size: "10 MB",
    releasedOn: "01 Sept 2024, 12:31 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
      {
        title: "Open Arms",
        performers: "Jorge Rivera-Herrans & Steven Dookie",
        duration: "00:05:10",
        size: "23 MB",
      },
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
      {
        title: "Just a Man",
        performers: "Jorge Rivera-Herrans & Cast of EPIC: The Musical",
        duration: "00:02:30",
        size: "18 MB",
      },
      {
        title: "Full Speed Ahead",
        performers:
          "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical",
        duration: "00:05:10",
        size: "24 MB",
      },
    ],
  },
  {
    id: 6,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Album",
    songCount: 0,
    duration: "00:25:40",
    size: "16 MB",
    releasedOn: "05 Sept 2024, 12:31 AM",
    songs: [],
  },
  {
    id: 7,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Single",
    songCount: 1,
    duration: "00:01:20",
    size: "24 MB",
    releasedOn: "11 Oct 2024, 12:31 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
    ],
  },
  {
    id: 8,
    collectionName: "Collection Name",
    artistName: "Artist Name",
    type: "Single",
    songCount: 1,
    duration: "00:01:20",
    size: "24 MB",
    releasedOn: "11 Oct 2024, 12:31 AM",
    songs: [
      {
        title: "The Horse and the Infant",
        performers:
          "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical",
        duration: "00:02:15",
        size: "13 MB",
      },
    ],
  },
];

// Mock Data
const users = [
  { id: 1, name: "John Doe", email: "john@gmail.com" },
  { id: 2, name: "Jane Smith", email: "jane@gmail.com" },
];
app.get("/api/collections", (req, res) => {
  const { search, type } = req.query;
  let filteredAlbums = albums;
  if (search) {
    filteredAlbums = filteredAlbums.filter(
      (album) =>
        album.collectionName.toLowerCase().includes(search.toLowerCase()) ||
        album.artistName.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (type) {
    const typeArray = type.split(",").map((t) => t.trim().toLowerCase());

    filteredAlbums = filteredAlbums.filter((album) =>
      typeArray.some((t) => album.type.toLowerCase().includes(t))
    );
  }
  res.status(200).json({
    code: 200,
    message: "Collections fetched successfully",
    data: filteredAlbums,
  });
});
app.get("/api/collections/:id", (req, res) => {
  const { id } = req.params;
  const album = albums.find((album) => album.id == id);

  if (album) {
    res.status(200).json({
      code: 200,
      message: "Collection fetched successfully",
      data: album,
    });
  } else {
    res.status(404).json({
      code: 404,
      message: "Collection not found",
      data: [],
    });
  }
});
// Server Listening
app.listen(PORT, () => {
  console.log(`Mock server is running on http://localhost:${PORT}`);
});
