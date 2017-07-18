import React from 'react';

import SearchContainer from '../components/SearchContainer/SearchContainer';

const Search = ({params}) => (
    <SearchContainer />
);
{/*!params ? <SearchContainer /> : <SearchContainer keysearch={params.judul} />*/}

export default Search;
