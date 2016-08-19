const expect = require('chai').expect;
const faker = require('faker');
const User = require('../src/models/user');
const util = require('lincoln-logs').debug;


describe('User Model', () => {
  util({ msg: 'Describe User Model: ', info: 'SUCCESS' });
  let testUsers;
  let tempUser;


  // Test to add a user
  it('should Add a new User', (done) => {
    util({ msg: 'Add User stub: ', info: 'SUCCESS' });

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
    util({ msg: 'Get All Users stub: ', info: 'SUCCESS' });

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
    util({ msg: 'Find A User stub: ', info: 'SUCCESS' });

    const targetUser = this.testUsers[0];
    // Call user model for finding an user in database
    User.one(targetUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // user.title returned from model should match user.title supplied
        expect(user.name).to.be.equal(targetUser.name);
        expect(user.age).to.be.equal(targetUser.age);
        expect(user.appId).to.be.equal(targetUser.appId);
        done();
      }
    );
  });

  // Test to update a user
  it('should Update a User', (done) => {
    util({ msg: 'Update A User stub: ', info: 'SUCCESS' });
    // Load in exisiting faked user object from 'Add' stub
    const updateUser = this.tempUser;
    // Generate a new user object name and age
    updateUser.name = faker.name.findName();
    updateUser.age = faker.random.number();
    // Call user model for updating
    User.update(updateUser,
      (err) => {
        throw new Error(err);
      },
      (user) => {
        // Save the returned data for later use in tests
        this.tempUser = user;
        // Expect the user in database to match the updated user info
        expect(user.name).to.be.equal(updateUser.name);
        expect(user.age).to.be.equal(updateUser.age);
        done();
      }
    );
  });

  // Test to remove a user
  it('should Remove a User', (done) => {
    util({ msg: 'Remove a User stub: ', info: 'SUCCESS' });
    // Load in existing user info
    const removeUser = this.tempUser;
    removeUser.force = true;

    // Call user model for deleteing
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
