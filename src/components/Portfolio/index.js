import React from 'react';
import ChildPortfolio from './ChildPortfolio';
import Pagination from 'react-js-pagination';
import Modal from './Modal';
import { connect } from 'react-redux';

class Portfolio extends React.Component{
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
        this.setState({activePage:pageNumber});
        this.setState({selectedPageId:pageNumber});
    }
    clearModal(event){
        event.preventDefault();
        this.superheroElement.current.clearModal();
    }
    render(){
        let {selectedPageId} = this.state;
        let {list} = this.props;
        let listShow = [...list];
        listShow = listShow.splice((selectedPageId - 1) * 3, 3);
        return(
            <section class="pricing-table  section" id="portfolio">
                <div class="title text-center">
                    <div class="container">
                        <div className="row">
                            {listShow.map(i => <ChildPortfolio key={i.title} title={i.title}  comment = {i.comment} likes={i.likes}/>)}
                        </div>
                        <Pagination
                            hideNavigation
                            hideDisabled
                            itemCountPerPage ={10}
                            activePage={this.state.activePage}
                            totalItemsCount={list.length * 10 / 3}
                            pageRangeDisplayed={4}
                            onChange={this.handlePageChange.bind(this)}/>
                            <img style={{width:'50px',cursor:'pointer'}}src="assets/img/plus.jpg" data-toggle="modal" data-target="#PortfolioModal" onClick={e => this.clearModal(e)}></img>
                            <Modal ref={this.superheroElement}/>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return state.inform.portfolios == undefined ? {list:[]}:{list: state.inform.portfolios};
}
export default connect(mapStateToProps)(Portfolio);