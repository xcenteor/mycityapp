import logo from "./logo.svg";
import "./App.css";
import { Button, Select, Space } from "antd";

import "antd/dist/antd.css";
import { PoweroffOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Option } from "antd/lib/mentions";

const DropdownElements = [
  {
    key: 1,
    title: "Şehir",
    placeholder: "Şehir Seçiniz",
    apiUrl: "https://api.npoint.io/995de746afde6410e3bd",
    type: "city",
    selecteditem: "",
    data : [],
  },
  {
    key: 2,
    title: "İlçe",
    placeholder: "İlçe Seçiniz",
    apiUrl: "https://api.npoint.io/fc801dbd3fc23c2c1679", // its my apis. They hold datas from json
    type: "district",
    selecteditem: "",
    data : [],
  },

  {
    key: 3,
    title: "Köy",
    placeholder: "Köy Seçiniz",
    apiUrl: "https://api.npoint.io/72cf025083b70615b8bb",
    type: "village",
    selecteditem: "",
    data : [],
  },
  // {
  //   key: 4,
  //   title: 'Mahalle',
  //   placeholder:'Mahalle Seçiniz',
  //   apiUrl: 'https://api.npoint.io/0c04c63923c8ca4e117b',
  //   type: 'neighborhood',
  // selecteditem: "",
  //   data : [],
  // },


];

const PickerCompanent = (props) => {
  const [xdata, setData] = useState([]);
  const [newData, setNewData] = useState([]);
let x;
let y=[];
  // data.filter((a) => a.il_id == "3");
  useEffect(() => {
    props.datasource.then(setData);


    switch (props.type) {
      case 'city': x=props.selecteditem
      setNewData(xdata)
      break;
    case 'district':y=xdata.filter(element=>{
      if(props.selecteditem===element.id){
        return element
      }
    })
      
    
    
    // x=xdata.filter(z=>{
      
    //   if(z.id===props.selecteditem){
        
    //   }
    // })
      break;
      case'village':console.log('village')
     break;
      default:console.log('def')
        break;

    }
    console.log('x degeri',props.type,x)
    console.log('y degeri',props.type,y)
    console.log('xData --->',props.type,xdata)

    // let xy=xdata.filter(e=>{
      
    

    // xdata.filter()
  }, [props.datasource]);
//   console.log('prp',props)
//  console.log(xdata)



 
  return (
    <Select
      showSearch
      style={{ width: 200, marginLeft: 15 }}
      
      placeholder={props.placeholder}
      optionFilterProp="children"
      onChange={(x) => props.onChange(x)}
      onFocus={props.onFocus()}
      datasource={xdata}
      onSearch={props.onSearch()}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {xdata &&
        xdata.map((x) => {
          return (
            <Select.Option key={x.id} value={x.id}>
              {x.name}{" "}
            </Select.Option>
          );
        })}
    </Select>
  );
};

const App = () => {
  const [dataap, setDataAp] = useState([]);
  const [idhold,setIDHold]=useState();

  const filldata = (value)=>{

  }


  function onChange(value) {
    
      setIDHold(value)
      console.log(value)
    
  }

  const getData = (value,type) => {
   
    return fetch(value)
      .then((x) => x.json())
      .then((y) => {
        return y
      });



  };

  function onFocus() {
   
  }

  function onSearch(val) {
   
  }
  
  return (
    <Space>
      {DropdownElements.map((x) => {
        return (
        
          <PickerCompanent
            showSearch
            selecteditem={idhold}
            key={x.key}
            
            placeholder={x.placeholder}
            type={x.type}
            datasource={getData(x.apiUrl)}
            onFocus={onFocus}
            onChange={z=>onChange(z)}
            onFocus={onFocus}
            onSearch={onSearch}
          ></PickerCompanent>
        );
      })}
    </Space>
  );
};

export default App;
