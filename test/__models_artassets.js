const expect = require('chai').expect;
const assert = require('chai').assert;
const faker = require('faker');
const ArtAsset = require('../src/models/artasset');

describe('Art Assets Model', () => {
  let testArtAsset;
  let tempArtAsset;

  // Test to find all art assets
  it('should Read all art assets', (done) => {
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

  // Test to add an art asset
  it('should Add an art assets', (done) => {
    // Generate fake art assets
    const fakeArtAsset = {
      title: faker.random.number(),
      srcLink: faker.image.imageUrl(),
    };

    ArtAsset.add(fakeArtAsset,
      (err) => {
        throw new Error(err);
      },
      (artasset) => {
        this.tempArtAsset = artasset.dataValues;
        expect(artasset.title).to.be.equal(fakeArtAsset.title);
        expect(artasset.srcLink).to.be.equal(fakeArtAsset.srcLink);
        done();
      }
    );
  });

  // Test to find one art asset
  it('should Find a single art asset', (done) => {
    const targetArtAsset = this.testArtAsset[0];

    ArtAsset.one(targetArtAsset,
      (err) => {
        throw new Error(err);
      },
      (artasset) => {
        expect(artasset.title).to.be.equal(targetArtAsset.title);
        expect(artasset.srcLink).to.be.equal(targetArtAsset.srcLink);
        done();
      }
    );
  });

  // Test to update an art asset
  it('should UPDATE an art asset', (done) => {
    // Load existing faked art asset object from 'Add' stub
    const updateArtAsset = this.tempArtAsset;
    // Generate new art asset data to test
    updateArtAsset.title = faker.random.number();
    updateArtAsset.srcLink = faker.image.imageUrl();

    ArtAsset.update(updateArtAsset,
      (err) => {
        throw new Error(err);
      },
      (artasset) => {
        // update tempArtAsset with updated attributes
        this.tempArtAsset = artasset;
        expect(artasset.title).to.be.equal(updateArtAsset.title);
        expect(artasset.srcLink).to.be.equal(updateArtAsset.srcLink);
        done();
      }
    );
  });
  // Test to delete an art asset
  it('should DELETE an art asset', (done) => {
    done();
  });
});// END of descirbe
