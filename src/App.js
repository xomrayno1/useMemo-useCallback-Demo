 
import { useCallback, useMemo } from 'react';
import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import List from './components/List';
 

function App() {
  console.log("app render...")
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
   
  const getItems = useCallback(() => { // mỗi lần render nó sẽ tạo 1 đối tượng mới 
                            // sau đó vào List, cùng giá trị nhưng vẫn là đối tượng mới,
                            // dùng useCallBack : để tránh bị 
    return [number + 1 , number + 2, number + 3]
  },[number]) // nếu number thay đổi thì hàm này được chạy và pass vào List
              // click button đã k còn phải là 1 đối tương mới nên bên List ko re-render
  //useCallback tra ve function callback
 
 
              const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  const [chart, setChart] = useState('');
  const [chartInput, setChartInput] = useState('');

  const getChartTitle = useMemo(()=> chart, [chart]);  // useMemo tra ve value =>
                                            //=>getChartTitle type of is value
  const handleSubmitChart = () => {
    setChart(chartInput)
  }
  const handleOnTypeChange = useCallback(() => {
    
  },[])
  return (
   <div className="App">
      <div style={theme}>
          <input type="number"
                  value={number}
                  onChange={e => setNumber(parseInt(e.target.value))} />
          <button onClick={ () =>  setDark(prevDark => !prevDark)}>
            Toggle Theme
          </button>
          <List getItems={getItems} />

          <input  type="text" value={chartInput}
                   onChange={e => setChartInput(e.target.value)}    />
          <button onClick={handleSubmitChart}>Submit</button>
          <Chart chartTitle={getChartTitle} onTypeChange={handleOnTypeChange} />
     </div>
   </div>
  );
}

export default App;
