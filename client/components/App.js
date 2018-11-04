//client/components/App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import '../css/App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {selectedclassSO: 'Nov', selectedScope: 2016, data: []};
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData(this, '2016');
  }
  componentWillReceiveProps(nextProps) {
    this.getData(this, '2016');
  }
  getData(ev, scope) {
    axios.get('/getAll')
      .then(function(response) {
        ev.setState({data: response.data});
        
      });
  }
  render() {
    return (
      <div>
        <Add selectedclassSO={this.state.selectedclassSO} selectedScope={this.state.selectedScope} />
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="desc-col">Наименование СИ</th>
              <th className="button-col">Тип СИ</th>
              <th className="button-col">Категория СИ</th>
              <th className="button-col">Сфера применения</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map(function(exp) {
                return <tr>
                  <td className="counterCell"></td>
                  <td className="desc-col">{exp.title}</td>
                  <td className="button-col">{exp.typeSO}</td>
                  <td className="button-col">{exp.classSO}</td>
                  <td className="button-col">{exp.scope}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

