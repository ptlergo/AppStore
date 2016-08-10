const expect = require('chai').expect;
const faker = require('faker');
const User = require('../src/models/user');

describe('User Model', () => {
  let testUsers;
  let tempUser;


  // Test to add a user
  it('should Add a new User', (done) => {
    // Generate a fake User
    const fakeUser = {
      name: faker.name.findName(),
      age: faker.random.number(),
    };
    // Call user model for adding
    User.add(fakeUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // Save the returned data for later use in test
        this.tempUser = user.dataValues;
        // Expect the user in database to match the fakeuser initially provided
        expect(user.name).to.be.equal(fakeUser.name);
        expect(user.age).to.be.equal(fakeUser.age);
        done();
      }
    );
  });

  // Test for all users
  it('should GET All users', (done) => {
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

  // Test to find a user
  it('should Find a User', (done) => {
    const targetUser = this.testUsers[0];
    // Call app model for finding an app in database
    User.one(targetUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // App.title returned from model should match app.title supplied
        expect(user.name).to.be.equal(targetUser.name);
        expect(user.age).to.be.equal(targetUser.age);
        expect(user.appId).to.be.equal(targetUser.appId);
        done();
      }
    );
  });

  // Test to update a user
  it('should Update a User', (done) => {
    // Load in exisiting app info
    const updateUser = this.tempUser;
    // Generate a new user object name and age
    updateUser.name = faker.name.findName();
    updateUser.age = faker.random.number();
    // Call app model for updating
    User.update(updateUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // Save the returned data for later use in tests
        this.tempUser = user;
        // Expect the app in database to match the updated app info
        expect(user.name).to.be.equal(updateUser.name);
        expect(user.age).to.be.equal(updateUser.age);
        done();
      }
    );
  });

  // Test to remove a user
  it('should Remove a User', (done) => {
    // Load in existing user info
    const removeUser = this.tempUser;
    removeUser.force = true;

    // Call app model for deleteing
    User.remove(removeUser,
      (err) => {
        throw new Error(err);
      },
      (response) => {
        // If successfully removed a 1 should be returned
        expect(response).to.be.equal(1);
        done();
      }
    );
  });
});// END of User Model describe
