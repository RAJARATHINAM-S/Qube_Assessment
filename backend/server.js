const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data
const users = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com' },
];

// GET All Users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST Create User
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push({ id: users.length + 1, ...newUser });
  res.json({ message: 'User added successfully', users });
});

// PUT Update User
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    res.json({ message: 'User updated successfully', users });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE User
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const filteredUsers = users.filter((user) => user.id != id);

  if (filteredUsers.length !== users.length) {
    users.length = 0;
    users.push(...filteredUsers);
    res.json({ message: 'User deleted successfully', users });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Mock server is running on http://localhost:${PORT}`);
});
