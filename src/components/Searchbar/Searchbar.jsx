import {
  HeaderSearch,
  FormSearch,
  ButtonSearch,
  InputSearch,
} from './Searchbar.styled.js';

import React, { useState } from 'react';

export const Searchbar = ({ handleClearImages, handleSearch }) => {
  const [value, setValue] = useState('');

  const handleInputChange = event => {
    const newValue = event.target.value;
    setValue(newValue);

    if (newValue === '') {
      handleClearImages();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <HeaderSearch>
      <FormSearch onSubmit={handleSubmit}>
        <ButtonSearch type="submit">
          <span className="button-label">🔍</span>
        </ButtonSearch>

        <InputSearch
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={value}
        />
      </FormSearch>
    </HeaderSearch>
  );
};

// class Searchbar extends Component {
//   state = {
//     value: '',
//   };

//   handleInputChange = event => {
//     this.setState({ value: event.target.value }, () => {
//       if (this.state.value === '') {
//         this.props.handleClearImages();
//       }
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.handleSearch(this.state.value);
//   };

//   render() {
//     return (
//       <HeaderSearch>
//         <FormSearch onSubmit={this.handleSubmit}>
//           <ButtonSearch type="submit">
//             <span className="button-label">🔍</span>
//           </ButtonSearch>

//           <InputSearch
//             type="search"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleInputChange}
//             value={this.state.value}
//           />
//         </FormSearch>
//       </HeaderSearch>
//     );
//   }
// }

// export default Searchbar;
