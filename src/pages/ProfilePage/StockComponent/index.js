import React, {Component} from 'react';
import ChildStock from './ChildStock';
import Pagination from 'react-js-pagination';

class StockComponenet extends Component{

    constructor(props){
        super(props);
        this.state = {...props};
    }

    handlePageChange(pageNumber)
    {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage : pageNumber});
        this.setState((prevState, props) => {
            return {
                ...prevState,
                selectedPageId: pageNumber
            }
        });
    }
    render(){    
        let {selectedPageId, list} = this.state;
        let listShow = [...list];
        console.log(listShow,"-----------");
        console.log(list.length,"-----------");
        listShow = listShow.splice((selectedPageId - 1) * 4, 4);
        return(
            <section className="counter section-sm" id="stock">
                <div className="container">
                    <div class="title text-center">
                            <h2>STOCK</h2>
                            <span class="border"></span>
                        </div>
                    <div className="row">
                        {listShow.map(i => <ChildStock key={i.name} desc={i.name}></ChildStock>)}
                    </div>
                    <Pagination
                        hideNavigation
                        hideDisabled
                        itemCountPerPage ={10}
                        activePage={this.state.activePage}
                        totalItemsCount={list.length * 10 / 4}
                        pageRangeDisplayed={4}
                        onChange={this.handlePageChange.bind(this)}/>                    
                </div>
            </section>
            // <div style={divStyle}>
            //     <div className="row">
            //         {listShow.map(i => <ChildStock key={i.name} desc={i.name}></ChildStock>)}
            //     </div>
            //     <Pagination
            //         hideNavigation
            //         hideDisabled
            //         itemCountPerPage ={10}
            //         activePage={this.state.activePage}
            //         totalItemsCount={list.length * 10 / 4}
            //         pageRangeDisplayed={4}
            //         onChange={this.handlePageChange.bind(this)}/>
            // </div>
        )
    }
}
StockComponenet.defaultProps = {
    selectedPageId:1,
    activePage:1,
    list: [
        {name: 'Oil'},{name:'Furniture'},{name:'Cars'},{name:'Food'},{name: 'Oil1'},{name:'Furniture1'},{name:'Cars1'},{name:'Food1'},{name: 'Oil2'},{name:'Furniture2'},{name:'Cars2'},{name:'Food2'},{name: 'Oil3'},{name:'Furniture3'}
    ]
    
}
export default StockComponenet;