const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');

describe('App Model', () => {
  let server;
  // Generate a fake App with a random title
  const tempApp = {
    title: faker.name.title(),
    description: faker.company.catchPhraseDescriptor(),
    releaseDate: faker.date.recent(),
  };
  console.log('tempApp', tempApp);
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

  // // Add an App
  // it('should Add a new App', (done) => {
  //   // Call app model for adding
  //   App.add(testApps,
  //     (err) => {
  //       throw new Error(err);
  //     },
  //     (app) => {
  //       // Save the returned data for later use in tests
  //       this.tempApp = app.dataValues;
  //
  //       // App.title returned from model should match app.title supplied
  //       expect(app.title).to.be.equal(testApps.name);
  //       done();
  //     }
  //   );
  // });
});// END of App Model describe
