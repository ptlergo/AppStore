const expect = require('chai').expect;
const assert = require('chai').assert;
const faker = require('faker');
const ArtAsset = require('../src/models/artasset');

describe('Art Assets Model', () => {
  let testArtAsset;

  // Test for all art assets
  it('should GET all art assets', (done) => {
    ArtAsset.all(
      (err) => {
        throw new Error(err);
      },
      (artassets) => {
        this.testArtAsset = artassets;
        done();
      }
    );
  });

  it('should Add an art assets', (done) => {
    // Generate fake art assets
    const fakeArt = {
      title: faker.random.bs_noun(),
      srcLink: faker.image.imageUrl(),
    };
    ArtAsset.add()
    done();
  });

  it('should GET a single art asset', (done) => {
    done();
  });

  it('should UPDATE an art asset', (done) => {
    done();
  });

  it('should DELETE an art asset', (done) => {
    done();
  });
});// END of descirbe
