import React, { Component } from 'react';

class footerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        
    }


    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>BSC Demo App</span>
                </footer>
            </div>
        );
    }
}

export default footerComponent;


