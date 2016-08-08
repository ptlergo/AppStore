const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');

describe('App Model', () => {
  let testApps;

  // Test for all Apps
  it('should GET All apps', (done) => {
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

  // Add an App
  it('should Add a new App', (done) => {
    // Call app model for adding
    // Generate a fake App with a random title
    const fakeApp = {
      title: faker.name.title(),
      description: faker.company.catchPhraseDescriptor(),
      releaseDate: faker.phone.phoneNumber(),
    };
    App.add(fakeApp,
    (err) => {
      throw new Error(err);
    },
    (app) => {
      // Save the returned data for later use in testApps
      this.tempApp = app.dataValues;
      // Expect the app in database to match the fakeApp initially provided
      expect(app.title).to.be.equal(fakeApp.title);
      expect(app.description).to.be.equal(fakeApp.description);
      expect(app.releaseDate).to.be.equal(fakeApp.releaseDate);
      done();
    }
  );
  });

  // Find an App
  it('should Find an App', (done) => {
    // Generate a fake App with a random title
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
});// END of App Model describe
