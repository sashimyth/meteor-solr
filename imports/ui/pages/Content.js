import React from 'react';

import { Router, Route, Link } from 'react-router'

import Container from '../components/Container/Container';

const Search = ({ params }) => (
  <Container keysearch={params.judul} />
);

export default Search;
