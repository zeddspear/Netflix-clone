import React, { useState, useEffect, useContext } from 'react';
import { SelectProfileContainer } from './Profiles';
import { Loading, Header, Card, VideoPlayer } from '../Components';
import { FirebaseContext } from '../Context/firebaseContext';
import logo from '../logo.svg';
import * as PATHS from '../Constants/routes';
import FooterContainer from './Footer';
import Fuse from 'fuse.js';

function BrowseContainer({ slides, user }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const firebase = useContext(FirebaseContext);
  const [category, setCategory] = useState('series');
  const [slidesRows, setSlidesRows] = useState([]);

  useEffect(() => {
    setSlidesRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    const fuse = new Fuse(slidesRows, {
      keys: ['description', 'title', 'genre']
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slidesRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlidesRows(results);
    } else {
      setSlidesRows(slides[category]);
    }
  }, [searchTerm, category, slidesRows, setSlidesRows, slides]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1.jpg">
        <Header.Frame>
          <Header.Group>
            <Header.Logo src={logo} alt="Netflix" to={PATHS.HOME} />
            <Header.TextLink
              active={category === 'series' ? true : false}
              onClick={() => setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setCategory('films')}
              active={category === 'films' ? true : false}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={profile.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={profile.photoURL} />
                  <Header.TextLink>{profile.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the
            streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a
            clown, and the guise he projects in a futile attempt to feel like he is part of the
            world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slidesRows.map((singleRow) => {
          return (
            <Card key={`${category}-${singleRow.title.toLowerCase()}`}>
              <Card.Title>{singleRow.title}</Card.Title>
              <Card.Entities>
                {singleRow.data.map((item) => {
                  return (
                    <Card.Item key={item.docID} item={item}>
                      <Card.Image
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
              </Card.Entities>

              <Card.Feature category={category}>
                <VideoPlayer>
                  <VideoPlayer.Button>Play</VideoPlayer.Button>
                  <VideoPlayer.Video src={'/videos/rickroll.mp4'} />
                </VideoPlayer>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
