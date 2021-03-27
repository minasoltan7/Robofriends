import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div  >
            <input
                className='pa3 ba bg-lightest-blue ma3  br4 bw1 b-green tc'
                placeholder="Search Robot"
                onChange={searchChange}
                type='Search'
            />
        </div>
    )
}
export default SearchBox;

