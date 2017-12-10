import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import _ from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {

  constructor(props) {
		super(props)
		this.state = { data: [] }
	}

   componentDidMount() {
     this._loadData();
   }

   _loadData() {
   		fetch('./AnalyticsData.json')
   			.then(response => response.json())
   			.then(data => {
   				this.setState({data: data })
   		})
   			.catch(err => console.error(this.props.url, err.toString()))
 	 }

   _generateLayout() {
     return _.map(this.state.data, function(item, i) {
       return {x: item.x, y: item.y, w: item.w, h: item.h};
     });
   }

   _generateGrid() {
     // Generate items with properties from the layout, rather than pass the layout directly
     const layout = this._generateLayout();
     return _.map(this.state.data, function(data, i) {
       console.log(data);
       return (
         <div
            key={i}
            style={{
              width: '50%',
              margin: '0 auto',
              border: '2px solid #FF9800',
              backgroundColor: '#ffd699',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            data-grid={layout[i]}>
             {data.value}
          </div>
        );
     });
   }

   render() {
      return (
         <MuiThemeProvider>
        <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          {this._generateGrid()}
        </ReactGridLayout>
         </MuiThemeProvider>
      );
   }
}
export default App;
