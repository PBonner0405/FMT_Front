import React from 'react';


class ChildStock extends React.Component{
    render(){
        return(
            <div class="col-md-3">
                <div class="counters-item">
                    <span>{this.props.desc}</span>
                </div>
            </div>
        );
    }
}

export default ChildStock;