import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import BrowseContainer from '../Containers/Browse';

function Browse({ user }) {
  const films = useContent('films').films;
  const series = useContent('series').series;

  const slides = selectionFilter({ films, series });

  // pass it to the browse container

  return <BrowseContainer slides={slides} user={user} />;
}

export default Browse;
