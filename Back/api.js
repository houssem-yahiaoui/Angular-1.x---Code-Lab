var app = require('express')(),
    cors = require('cors')
    faker = require('faker');

var Users = [];

function create() {
  for (var i = 0; i < 25; i++) {
    Users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      job: faker.name.jobTitle(),
      phoneNumber: faker.phone.phoneNumber(),
      avatar: faker.internet.avatar()
    })
  }
}
create();

app.use(cors());

app.get('/users', function(req, res) {
  res.status(200).json(Users);
})

app.listen('3000', function() {
  console.log('Port 3000 Open !');
})
