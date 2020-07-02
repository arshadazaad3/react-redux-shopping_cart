import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div style={{color:'black'}} className="col-md-4">
                    {this.props.count} Product Found
                </div>
                <div className="col-md-4">
                    <label style={{color:'black'}}>
                        Filter Size
                        <select className="form-control" value={this.props.size}
                            onChange={this.props.handleChangeSize}>
                            <option value="">ALL</option>
                            <option value="xsmall">xsmall</option>
                            <option value="small">small</option>
                            <option value="large">large</option>
                        </select>
                    </label>

                </div>  
                <div className="col-md-4">
                    <label style={{color:'black'}}>
                        Order by
                        <select className="form-control" value={this.props.sort}
                            onChange={this.props.handleChangeSort}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest Price</option>
                            <option value="highest">Highest Price</option>
                        </select>
                    </label>
                </div>

            </div>
        )
    }
}