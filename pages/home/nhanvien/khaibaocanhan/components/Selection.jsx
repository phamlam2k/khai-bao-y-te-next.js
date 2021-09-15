import React, {useState} from "react";

function Selection(props) {
  const { label, obj, district, ward } = props;
  // const [subItem, setSubItem] = useState({
  //   name: '',
  //   type: '',
  //   index: '',
  //   title: ''
  // });
  const handleSmProvince = (e) => {
    const {name, value} = e.target;
    const type = e.target.selectedOptions[0].getAttribute("custom_type");
    const id = e.target.selectedOptions[0].getAttribute("id");
    const title = e.target.selectedOptions[0].getAttribute("custom_title");
    
    const subItem = {
      name: name,
      type: type,
      index: id,
      title: title
    };
    // setSubItem({
    //   name: name,
    //   type:type,
    //   index: id,
    //   title: title
    // });
    props.handleSmProvince(subItem);
  };
  const listOption = (data) => {
    // console.log(data);
    var reslut = null;
    if (data != null) {
      reslut = data.map((item) => {
        return <option key={item.province_id} custom_type="province" id={item.province_id} custom_title={item.province_name} value={item.province_name}>{item.province_name}</option>;
      });
    }
    if(district != null){
      reslut = district.map((item) =>{
        return <option key={item.district_id} custom_type="district" id={item.district_id} custom_title={item.district_name} value={item.district_name}>{item.district_name}</option>;
      })
    }
    if(ward != null){
      reslut = ward.map((item) =>{
        return <option key={item.ward_id} custom_type="ward" id={item.ward_id} custom_title={item.ward_name} value={item.ward_name}>{item.ward_name}</option>;
      })
    }
    return reslut;
  };
  
  return (
    <div className="selection_container">
      <label>
        {label}
        <span>(*)</span>
      </label>
      <select id="nationality" name={props.name} onChange={handleSmProvince} required>
        <option defaultValue value="">
          ----
        </option>
        {listOption(obj)}
      </select>
    </div>
  );
}

export default Selection;
