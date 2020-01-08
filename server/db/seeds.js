use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Alan",
    email: "a@b.co.uk",
    checked_in: false
  },
  {
    name: "Emma",
    email: "b@c.co.uk",
    checked_in: true
  },
  {
    name: "Quentin",
    email: "c@d.co.uk",
    checked_in: true
  }
]);
