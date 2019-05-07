import React, {Component} from 'react';
import ChildStock from './ChildStock';
import Pagination from 'react-js-pagination';
import Modal from './Modal';
import { connect } from 'react-redux';


class Stock extends Component{

    constructor(props){
        super(props);
        this.state = {    
            selectedPageId:1,
            activePage:1,
        };
        this.superheroElement = React.createRef();
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

    clearModal(event){
        event.preventDefault();
        this.superheroElement.current.clearModal();
    }
    render(){    
        let {selectedPageId} = this.state;
        let { list } = this.props;
        let listShow = [...list];
        
        listShow = listShow.splice((selectedPageId - 1) * 4, 4);
        return(
            <section className="counter section-sm" id="stock">
                <div className="container">
                    <div class="title text-center">
                        <h2>STOCK</h2>
                        <span class="border"></span>
                        <Modal ref={this.superheroElement}/>
                        <div className="row">
                            {listShow.map(i => <ChildStock key={i.stockName} desc={i.stockName}></ChildStock>)}
                        </div>
                        <Pagination
                            hideNavigation
                            hideDisabled
                            itemCountPerPage ={10}
                            activePage={this.state.activePage}
                            totalItemsCount={list.length * 10 / 4}
                            pageRangeDisplayed={4}
                            onChange={this.handlePageChange.bind(this)}/> 
                        <img style={{width:'50px',cursor:'pointer'}}src="assets/img/plus.jpg" data-toggle="modal" data-target="#StockModal" onClick={e => this.clearModal(e)}></img>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps = (state) => {
    console.log("STATE:-------------",state);
    
    return state.inform.stocks === undefined ? {list:[]} : {list: state.inform.stocks};
}

export default connect(mapStateToProps)(Stock);