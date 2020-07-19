import React from 'react';

const Homepage = (props) => {
  const responseArr = props.result;
  const CitiesForForm = [...new Set(responseArr.map((Object) => Object.city))];
  let sitesForForm = [];
  let phaseForForm = [];
  let floorForForm = [];
  if (props.selectedCity) {
    let tsitesForForm = [
      ...new Set(
        responseArr.map((Object) => {
          if (props.selectedCity === Object.city) return Object.site;
          else return null;
        })
      ),
    ];
    sitesForForm = tsitesForForm.filter(function (el) {
      return el != null;
    });
    let tphaseForForm = [
      ...new Set(
        responseArr.map((Object) => {
          if (props.selectedCity === Object.city) return Object.phase;
          else return null;
        })
      ),
    ];
    phaseForForm = tphaseForForm.filter(function (el) {
      return el != null;
    });
    let tfloorForForm = [
      ...new Set(
        responseArr.map((Object) => {
          if (props.selectedCity === Object.city) return Object.floor;
          else return null;
        })
      ),
    ];
    floorForForm = tfloorForForm.filter(function (el) {
      return el != null;
    });
  }
  return (
    <div>
      <div className='form-group p-2 m-auto'>
        <label>City</label>

        <select
          className='form-control'
          value={props.selectedCity}
          name='selectedCity'
          placeholder='Enter city'
          onChange={(e) => {
            props.onSelect(e);
          }}>
          <option value=''>Select City</option>
          {CitiesForForm.map((e) => (
            <option key={e.value} value={e.value}>
              {e}
            </option>
          ))}
        </select>

        <label>Site</label>

        <select
          className='form-control'
          value={props.selectedSite}
          name='selectedSite'
          onChange={(e) => {
            props.onSelect(e);
          }}>
          <option value=''>Select Site</option>
          {sitesForForm.map((e) => (
            <option key={e.value} value={e.value}>
              {e}
            </option>
          ))}
        </select>

        <label>Phase</label>

        <select
          className='form-control'
          value={props.selectedPhase}
          name='selectedPhase'
          onChange={(e) => {
            props.onSelect(e);
          }}>
          <option value=''>Select Phase</option>
          {phaseForForm.map((e) => (
            <option key={e.value} value={e.value}>
              {e}
            </option>
          ))}
        </select>

        <label>Floor</label>

        <select
          className='form-control'
          value={props.selectedFloor}
          name='selectedFloor'
          onChange={(e) => {
            props.onSelect(e);
          }}>
          <option value=''>Select Floor</option>
          {floorForForm.map((e) => (
            <option key={e.value} value={e.value}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Homepage;
