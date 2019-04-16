import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Template from 'templates/default';
import store from 'store';
import Button from '@material-ui/core/Button';
import styles from './styles';



class About extends Component {
    componentWillMount() {
        this.props.store.title.title = 'About';
    }

    handleClick = () => {
        console.log('Radi');
    }

    render() {
        return (
            <Template style={{}}>
                <div style={styles.content}>
                    <div className="wrapper">
                        <h1>Wellcome</h1>
                        <h3>Lorem ipsum dolor est satum itc serum</h3>
                        <Button variant="contained" color="secondary" onClick={this.handleClick}>
                            Hello World!
                        </Button>
                    </div>
                </div>
            </Template>
        )
    }
}


About.propTypes = {
    store: PropTypes.shape({
        title: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        todo: PropTypes.shape({
            addTodo: PropTypes.func.isRequired,
            todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        }).isRequired,
    }),
}

export default observer((props) => <About {...props} store={store} />)
