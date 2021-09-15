const Selector = ({
  proviceTitle,
  onChangeProvince,
  provinceSelected,
  province,
  districtTitle,
  onChangeDistrict,
  districtSelected,
  district,
  wardTitle,
  onChangeWard,
  wardSelected,
  ward
}) => {
  return (
    <div className="form-row">
      <div className="form-group col-md-4">
        <label htmlFor="vehicle">
          {proviceTitle}<span style={{ color: "red" }}> (*)</span>
        </label>
        <select
          className="form-control"
          id="vehicle"
          onChange={onChangeProvince}
          value={provinceSelected}
          required
        >
          <option value="">-Chọn-</option>
          {province &&
            province.results.map((data, key) => (
              <option value={data.province_name} key={key}>
                {data.province_name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="vehicle">
          {districtTitle}<span style={{ color: "red" }}> (*)</span>
        </label>
        <select
          className="form-control"
          id="vehicle"
          // onChange={(e) => handleDistrict(e)}
          onChange={onChangeDistrict}
          value={districtSelected}
          required
        >
          <option value="">-Chọn-</option>
          {district &&
            district.results.map((data, key) => (
              <option value={data.district_name} key={key}>
                {data.district_name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="vehicle">
          {wardTitle}<span style={{ color: "red" }}> (*)</span>
        </label>
        <select
          className="form-control"
          id="vehicle"
          onChange={onChangeWard}
          value={wardSelected}
          required
        >
          <option value="">-Chọn-</option>
          {ward &&
            ward.results.map((data, key) => (
              <option value={data.ward_name} key={key}>
                {data.ward_name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Selector;
