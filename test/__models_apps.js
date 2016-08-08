const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');

describe('App Model', () => {
  let server;
  let testApps;
  let tempApp;

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
    // Generate a fake App with a random title
    const fakeApp = { title: faker.title.lastName() };

    // Call app model for adding
    App.add(fakeApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // Save the returned data for later use in tests
        this.tempApp = app.dataValues;

        // App.title returned from model should match app.title supplied
        expect(app.title).to.be.equal(fakeApp.title);
        done();
      }
    );
  });

  // Find an App
  it('should Find an App', (done) => {
    // Generate a fake App with a random title
    const targetApp = this.testApps[0];

    // Call app model for finding
    App.one(targetApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // App.title returned from model should match app.title supplied
        expect(app.title).to.be.equal(targetApp.title);
        done();
      }
    );
  });

  // Update an App
  it('should Update an App', (done) => {
    // Load in the info for an existing app
    const updateApp = this.tempApp;

    // Generate a new title for hte app
    updateApp.title = 'Not A Real Title';

    // Call app model for updating
    App.update(updateApp,
      (err) => {
        throw new Error(err);
      },
      (app) => {
        // Save the returned data for later use in tests
        this.tempApp = app;
        // App.title returned from model should match app.title supplied
        expect(app.title).to.be.equal(updateApp.title);
        done();
      }
    );
  });

  // Remove an App
  it('should Remove an App', (done) => {
    // Load in the info for an existing app
    const removeApp = this.tempApp;
    removeApp.force = true;

    // Call app model for updating
    App.remove(removeApp,
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
