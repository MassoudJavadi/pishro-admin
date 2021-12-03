import React from 'react';
import './home.css';
import Menu from '../../components/menu/Menu';
import portfolios from '../../data/portfolios';
import Searchbar from '../../components/searchbar/Searchbar';
import Pagination from '@mui/material/Pagination';



export default function Home() {

 
    const menuItem = portfolios;
    return (
        <div className="home">
            <div className="homeWidgets">
                
                <div className='searchbarWrapper'>
                    <p className='titleOne'>شرکت ها</p>
                    <Searchbar />
                </div>
                <div className="menuWrapper">
                     <Menu menuItem={menuItem}/>
                </div>
     
                <Pagination className='pagination' count={15} shape="rounded" />
            </div>
            
        </div>
    )
}
