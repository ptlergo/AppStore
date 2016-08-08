const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');

describe('App Model', () => {
  let server;
  let testApps;

  // Open server at each stub
  beforeEach(() => {
    server = require('../src/server');
  });

  // Close server after each stub done
  afterEach(() => {
    server.close();
  });

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
});// END of App Model describe
