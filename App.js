import React from 'react';
import ReactGridLayout from 'react-grid-layout';

class App extends React.Component {
   render() {
      return (
        <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          <div
            key="a"
            style={{
              width: '50%',
              margin: '0 auto',
              border: '2px solid #FF9800',
              backgroundColor: '#ffd699',
            }}
            data-grid={{x: 0, y: 0, w: 1, h: 2}}
          >
            Android
          </div>
          <div
            key="b"
            style={{
              width: '50%',
              margin: '0 auto',
              border: '2px solid #FF9800',
              backgroundColor: '#ffd699',
            }}
            data-grid={{x: 1, y: 0, w: 3, h: 2}}
          >
            React-Native
          </div>
          <div
            key="c"
            style={{
              width: '50%',
              margin: '0 auto',
              border: '2px solid #FF9800',
              backgroundColor: '#ffd699',
            }}
            data-grid={{x: 4, y: 0, w: 1, h: 2}}
          >
            IOS
          </div>
        </ReactGridLayout>
      );
   }
}
export default App;
