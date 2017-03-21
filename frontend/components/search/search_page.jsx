import React from 'react';
import OfficeContainer from '../office/office_container';
import SearchContainer from './search_container';
import OfficeMapContainer from '../office_map/office_map_container';

class SearchPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <SearchContainer />
        <h3 className='search-title'>{this.props.offices.length} Results</h3>
        <div className='results-map'>
          <OfficeContainer />
          <OfficeMapContainer />
        </div>
      </div>
    );
  }
}

export default SearchPage;