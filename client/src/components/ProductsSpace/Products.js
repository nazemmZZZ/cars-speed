import React from 'react';

import {range} from 'lodash';
import ProductsList from './ProductsList';


class Products extends React.Component{
    constructor(props){
      super(props);
      this.state={
        activePage:1,
        pageSize:6
      }
    }
    setActivePage(activePage){
      
      //console.log('yaaaaa : '+activePage);
      this.setState({activePage:activePage});
      
    }    

    setPageSize(size){
      this.setState({activePage:1,pageSize:size});
    }
     
    render(){
        const table = range(1, Math.ceil(this.props.productsList.length / this.state.pageSize)+1 ,1);
        {table.map((i)=>{ 
          return(<li key={i} className={this.state.activePage === i ? 'active' : ''}><a   onClick={()=>this.setActivePage(i)} >{i}</a></li>);
        })}
        return(
            <div className="col-sm-8 col-md-9 col-lg-9">
            <div className="product product-grid">
              <div className="heading heading-2 m-b-lg-0">
                <h3 className="p-l-lg-20">Tyres & Wheels</h3>
              </div>
              <div className="product-filter p-t-xs-20 p-l-xs-20">
                <div className="m-b-xs-10 pull-left">
                  <a href="product_grid.html" className="active ">
                    <i className="fa fa-th" />
                  </a>
                  <a href="product_list.html">
                    <i className="fa fa-th-list" />
                  </a>
                </div>
                <div className="pull-right">
                  <div className="m-b-xs-10 m-r-lg-20 pull-left">
                    <div className="select-wrapper">
                      <label>
                        <i className="fa fa-sort-alpha-asc" />Filter :{" "}
                      </label>
                      <div className="dropdown pull-left">
                        <button className="dropdown-toggle form-item w-130" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          Latest
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li>Offer</li>
                          <li>Best Seller</li>
                          <li>Featured</li>
                          <li>Latest</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pull-left">
                    <div className="select-wrapper">
                      <label>
                        <i className="fa fa-sort-alpha-asc" />Show :{" "}
                      </label>
                      <div className="dropdown pull-left">
                        <button className="dropdown-toggle form-item w-80" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          6
                        </button>
                        <ul  className="dropdown-menu" aria-labelledby="dropdownMenu2">
                          <li ><a onClick={()=>this.setPageSize(4)}>4</a></li>
                          <li ><a onClick={()=>this.setPageSize(6)}>6</a></li>
                          <li ><a onClick={()=>this.setPageSize(this.props.productsList.length)}>All</a></li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="row">    
                <ProductsList productslist={this.props.productsList.slice((this.state.activePage-1)*this.state.pageSize,(this.state.activePage-1)*this.state.pageSize+this.state.pageSize)}/>
              </div>
              <nav aria-label="Page navigation">
                <ul className="pagination ht-pagination">
                  <li>
                    <a aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="fa fa-chevron-left" />
                      </span>
                    </a>
                    </li>
                    {table.map((i)=>{ 
                      return(<li key={i} className={this.state.activePage === i ? 'active' : ''}><a   onClick={()=>this.setActivePage(i)} >{i}</a></li>);
                    })}
                  <li>
                    <a aria-label="Next">
                      <span aria-hidden="true">
                        <i className="fa fa-chevron-right"/>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
        );
    }
};






export default Products ;
