import React from 'react';
import ChildPortfolio from './ChildPortfolio';
import Pagination from 'react-js-pagination';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {...props};
    }

    handlePageChange(pageNumber)
    {
        this.setState({activePage:pageNumber});
        this.setState({selectedPageId:pageNumber});
    }

    render(){
        let {selectedPageId, list} = this.state;
        let listShow = [...list];
        listShow = listShow.splice((selectedPageId - 1) * 3, 3);
        return(
            <section class="pricing-table  section" id="portfolio">
                <div class="container">
                    <div className="row">
                        {listShow.map(i => <ChildPortfolio key={i.name} desc={i.name}/>)}
                    </div>
                    <Pagination
                        hideNavigation
                        hideDisabled
                        itemCountPerPage ={10}
                        activePage={this.state.activePage}
                        totalItemsCount={list.length * 10 / 3}
                        pageRangeDisplayed={4}
                        onChange={this.handlePageChange.bind(this)}/>
                </div>
            </section>
        );
    }
}

Portfolio.defaultProps = {
    selectedPageId:1,
    activePage:1,
    list: [
        {name: 'Earn money from Cars'},{name:'Earn money from Oil'},{name:'Earn money from Furniture'},{name: 'Earn money from Cars1'},{name:'Earn money from Oil1'},{name:'Earn money from Furniture1'},{name: 'Earn money from Cars2'},{name:'Earn money from Oil2'}
    ]
    
}
export default Portfolio;