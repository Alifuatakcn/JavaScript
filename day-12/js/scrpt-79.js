import { countries } from "../data/countries.js";

const filterData = (val) => {
  const filteredData = countries.filter((country) =>
    country.name.common.toLowerCase().includes(val.toLowerCase())
  );

  return filteredData;
};



document.getElementById("txtSearch").addEventListener("input", ()=>{
    
})