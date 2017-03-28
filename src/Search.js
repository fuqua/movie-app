import React, { Component } from 'react';
import RequestApi from './RequestApi.js';
import TextField from 'material-ui/TextField';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionSearch from 'material-ui/svg-icons/action/search'
import DialogBox from './DialogBox';

class SearchMovies extends Component {
  state = {
    emptySearch: true,
    movies: [],
    query: '',
  };

  handleSearch = (el) => {
    const value = el.target.value;

    this.setState({
      query: value,
      emptySearch: false,
    });

    RequestApi.search(value, (movies) => {
      this.setState({
        movies: movies.results,
      });
    });
  };

  handleClear = () => {
    this.setState({
      emptySearch: true,
      movies: [],
      query: '',
    });
  };

  render() {
    const movies = this.state.movies;
    const resultsShow = this.state.emptySearch ? { visibility: 'hidden' } : {};

    const results = movies.map(movie => (
      <TableRow key={movie.id}>
        <TableRowColumn>
          {movie.title}
        </TableRowColumn>
        <TableRowColumn>
          {movie.release_date.split('-')[0]}
        </TableRowColumn>
        <TableRowColumn>
          <DialogBox title={movie.title} overview={movie.overview} />
        </TableRowColumn>
      </TableRow>
    ));

    return (
      <div>
        <div className="search-field">
          <TextField
            hintText="Logan, Star Wars, etc"
            floatingLabelText="Movie title"
            value={this.state.query} 
            onChange={this.handleSearch}
            />
          { this.state.emptySearch ? <ActionSearch /> : <NavigationClose onClick={this.handleClear} /> }
        </div>
        <Table style={resultsShow}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Release Year</TableHeaderColumn>
              <TableHeaderColumn>Plot</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {results}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default SearchMovies;