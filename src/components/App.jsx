import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import { getImages } from 'api/imagesApi';

export class App extends Component {
  state = {
    searchText: '',
    images: [],
    isLoading: false,
    page: 1,
  };

  handleSearch = searchText => {
    this.setState({ searchText, images: [], page: 1 }, () => {
      this.fetchImages(this.state.searchText, this.state.page);
    });
  };

  fetchImages = (searchText, page) => {
    const perPage = 12;
    this.setState({ isLoading: true });
    getImages(searchText, page, perPage)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: prevState.images.concat(data.hits),
          page: page,
        }));
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchImages(this.state.searchText, this.state.page);
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClearImages = () => {
    this.setState({ images: [] });
  };

  render() {
    const hasImages = this.state.images.length > 0;
    const hasMoreImages = this.state.images.length % 12 === 0;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          lineHeight: 0,
          flexDirection: 'column',
        }}
      >
        <Searchbar
          handleSearch={this.handleSearch}
          handleClearImages={this.handleClearImages}
        />
        <ImageGallery
          images={this.state.images}
          isLoading={this.state.isLoading}
          searchText={this.state.searchText}
        />
        {hasImages && hasMoreImages && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
