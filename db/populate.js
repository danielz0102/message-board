import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ) NOT NULL,
  text VARCHAR ( 255 ) NOT NULL,
  added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text)
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
