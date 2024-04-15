import './App.css';
import Cards from './cards.js';
import Products from './products.js';
import Header from './header.js';
import { useEffect, useState } from 'react';

function App() {
  const[items,setItems]=useState([]);
  const[filterItems,setFilterItems]=useState([]);
  const[searchList,setSearchList]=useState('');


  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    .then(response=>response.json()).then(data=>{
    setItems(data);
    setFilterItems(data)})
    .catch(error=>console.log(error))},[]);

  const FilteredCards=(filterOption)=>{
    if(filterOption === "available-items"){
    const filteredCardset = items.filter(item=>item.available);
    setFilterItems(filteredCardset)}else{
    setFilterItems(items)
    }
  }

  const ListToSearch=(searchItems)=>{
    setSearchList(searchItems);
    if(searchItems.trim() === ""){
      setFilterItems(items)}else{
        const searchedItems = items.filter(item=>item.name.toLowerCase().startsWith(searchItems.toLowerCase()))
        setFilterItems(searchedItems)
        console.log(searchList)
      }
    }


  return (
    <div>
  <Header/>
  <Products onFilter={FilteredCards} onSearch={ListToSearch} />
  <div className='card-container'>
  {filterItems.map(item=> <Cards key={item.id} item={item} />)}
  </div>
    </div>
  );
}

export default App;
