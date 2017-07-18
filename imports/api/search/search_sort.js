const SearchSort = {
  lookup: {
    relevancy: {
      id: 'relevancy',
      field: 'score',
      order: 'desc',
      orderNum: -1,
    },
    lastModifiedDesc: {
      id: 'lastModifiedDesc',
      field: 'th_terbit',
      order: 'desc',
      orderNum: -1,
    },
    lastModifiedAsc: {
      id: 'lastModifiedAsc',
      field: 'th_terbit',
      order: 'asc',
      orderNum: 1,
    },
  },

  getSolrSort(id) {
    return `${this.g[id].field}+${this.lookup[id].order}`;
  },

  getMongoSort(id) {
    return {
      [this.lookup[id].field]: this.lookup[id].orderNum,
    };
  },
};

export default SearchSort;
