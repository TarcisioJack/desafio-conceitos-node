const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const { title } = request.query;

  const results = title
    ? repositories.filter(repository => repository.title.includes(title))
    : repositories;

  return response.json(results);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs, likes } = request.body;

  const repository = {id: uuid(), title, url, techs, likes};
  repositories.push(repository);

  console.log(repository);
  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
