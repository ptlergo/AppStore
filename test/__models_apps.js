const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');
const util = require('../src/lib/util').debug;


describe('App Model', () => {
  util({ msg: 'describe App Model: ', info: 'SUCCESS' });

  let testApps;
  let tempApp;

  // Test to add an App
  it('should Add a new App', (done) => {
    util({ msg: 'Add App stub: ', info: 'SUCCESS' });

    // Generate a fake App
    const fakeApp = {
      title: faker.name.title(),
      description: faker.company.catchPhraseDescriptor(),
      releaseDate: faker.phone.phoneNumber(),
    };
    // Call app model for adding
    App.add(fakeApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // Save the returned data for later use in test
        this.tempApp = app.dataValues;
        // Expect the app in database to match the fakeApp initially provided
        expect(app.title).to.be.equal(fakeApp.title);
        expect(app.description).to.be.equal(fakeApp.description);
        expect(app.releaseDate).to.be.equal(fakeApp.releaseDate);
        done();
      }
    );
  });

  // Test to find all Apps
  it('should Read All apps', (done) => {
    util({ msg: 'Read All Apps stub: ', info: 'SUCCESS' });

    App.all(
      (err) => {
        throw new Error(err);
      },
      (apps) => {
        this.testApps = apps;
        expect(this.testApps.length).to.be.above(0);
        done();
      }
    );
  });

  // Test to find an App
  it('should Find an App', (done) => {
    util({ msg: 'Find App stub: ', info: 'SUCCESS' });
    const targetApp = this.testApps[0];
    // Call app model for finding an app in database
    App.one(targetApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // App.title returned from model should match app.title supplied
        expect(app.title).to.be.equal(targetApp.title);
        expect(app.description).to.be.equal(targetApp.description);
        expect(app.releaseDate).to.be.equal(targetApp.releaseDate);
        done();
      }
    );
  });

  // Test to update an App
  it('should Update an App', (done) => {
    util({ msg: 'Update App stub: ', info: 'SUCCESS' });
    // Load in exisiting faked app object saved from 'Add' stub
    const updateApp = this.tempApp;
    // Generate a new app info
    updateApp.title = faker.name.title();
    updateApp.description = faker.company.catchPhraseDescriptor();
    updateApp.releaseDate = faker.phone.phoneNumber();
    // Call app model for updating
    App.update(updateApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // Save the returned data for later use in tests
        this.tempApp = app;
        // Expect the app in database to match the updated app info
        expect(app.title).to.be.equal(updateApp.title);
        expect(app.description).to.be.equal(updateApp.description);
        expect(app.releaseDate).to.be.equal(updateApp.releaseDate);
        done();
      }
    );
  });

  // Test to remove an App
  it('should Remove an App', (done) => {
    util({ msg: 'Remove App stub: ', info: 'SUCCESS' });
    // Load in existing app info
    const removeApp = this.tempApp;
    removeApp.force = true;

    // Call app model for deleteing
    App.remove(removeApp,
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
