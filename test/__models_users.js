const expect = require('chai').expect;
const faker = require('faker');
const User = require('../src/models/user');

describe('User Model', () => {
  let server;
  let testUsers;
  let tempUser;

  // Open server at each stub
  beforeEach(() => {
    server = require('../src/server');
  });

  // Close server after each stub done
  afterEach(() => {
    server.close();
  });

  // Test for all Users
  it('should GET All Users', (done) => {
    User.all(
      (err) => {
        throw new Error(err);
      },
      (users) => {
        this.testUsers = users;
        expect(this.testUsers.length).to.be.above(0);
        done();
      }
    );
  });

  // Add an User
  it('should Add a new User', (done) => {
    // Generate a fake User with a random title
    const fakeUser = { name: 'faker.name.firstName()' };

    // Call User model for adding
    User.add(fakeUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // Save the returned data for later use in tests
        this.tempUser = user.dataValues;

        // User.title returned from model should match User.title supplied
        expect(user.name).to.be.equal(fakeUser.name);
        done();
      }
    );
  });

  // Find an User
  it('should Find a User', (done) => {
    // Generate a fake User with a random title
    const targetUser = this.testUsers[0];

    // Call User model for finding
    User.one(targetUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // User.title returned from model should match User.title supplied
        expect(user.name).to.be.equal(targetUser.name);
        done();
      }
    );
  });

  // Update a User
  it('should Update a User', (done) => {
    // Load in the info for an existing user
    const updateUser = this.tempUser;

    // Generate a new name for the User
    updateUser.name = 'Not A Real Name';

    // Call user model for updating
    User.update(updateUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // Save the returned data for later use in tests
        this.tempUser = user;
        // User.name returned from model should match user.name supplied
        expect(user.name).to.be.equal(updateUser.name);
        done();
      }
    );
  });

  // Remove a User
  it('Should Remove a User', (done) => {
    // Load in the info for an existing User
    const removeUser = this.tempUser;
    removeUser.force = true;

    // Call User model for updating
    User.remove(removeUser,
      (err) => {
        throw new Error(err);
      },
      (response) => {
        // if successfully removed a 1 should be returned
        expect(response).to.be.equal(1);
        done();
      }
    );
  });
});
