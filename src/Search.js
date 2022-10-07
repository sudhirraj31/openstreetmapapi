import React, {useState} from 'react';
import { Input, Button } from '@material-ui/core';

function Search({setSelectSearch}) {
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]);
    const NOMINATION_BASE_URL = "https://nominatim.openstreetmap.org/search?";
    const handleSearch = () =>{
        const params = {
            q: searchText,
            format:"json",
            addressdetails:1,
            polygon_geojson:0
        };
        const paramsToString = new URLSearchParams(params).toString();
        fetch(`${NOMINATION_BASE_URL}${paramsToString}`, {
            method:"GET",
            redirect:"follow"
        }).then(res => res.json())
        .then(res => {
            // setSearchList([...res.filter(search => search.address.state === searchText.toLowerCase())]);
            setSearchList([...res])
        });
    }
    console.log(searchList)
  return (
    <div style={{}}>
        <Input type="text" name="search" value ={searchText} onChange = {(e) => setSearchText(e.target.value)} placeholder="Search here..." />
        <Button onClick={handleSearch}>Look Up</Button>
        <div style={{margin:'0.5em 0'}}>
            {searchList.map(search => {
                return(
                    <div key = {search.osm_id} style={{padding: "2px 0", display:'flex', cursor:'pointer'}} onClick={() => setSelectSearch(search)}>
                        <div><img src="./placeholder.png" alt= "placeholder icon" width={30} height={30}/></div>
                        <div style={{marginLeft:'3px'}}>{search.display_name}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Search