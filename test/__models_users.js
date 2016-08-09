const expect = require('chai').expect;
const faker = require('faker');
const User = require('../src/models/user');

describe('User Model', () => {
  let testUsers;
  let tempUser;


  // Add a User
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

  // Test for all Apps
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

  // Find an App
  it('should Find a User', (done) => {
    // Generate a fake user with a random name
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

  // Update a User
  it('should Update a User', (done) => {
    // Load in exisiting app info
    const updateUser = this.tempUser;
    // Generate a new user info
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

  // Remove an App
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
});// END of App Model describe
