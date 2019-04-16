import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Template from 'templates/default';
import store from 'store';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import styles from './styles';
import TildaButton from 'components/atoms/tilda-button';
import UserStripe from 'templates/user-stripe';



const users = [
    {
        id: 1,
        email: 'some@mail.com',
    },
    {
        id: 2,
        email: 'some@mail.com',
    },
    {
        id: 3,
        email: 'another@mail.com',
    },
    {
        id: 4,
        email: 'random@mail.com',
    },
    {
        id: 5,
        email: 'example@email.com',
    },
];

class Landing extends Component {
  componentWillMount() {
    this.props.store.title.title = 'Landing';
  }

  handleClick = () => {
      console.log('Radi');
  }

  render() {
      const usersVeiw = users.map((user) => {
          return (
              <UserStripe user={user} key={user.id}/>
          )
      });

    return (
      <Template style={{}}>
        <div style={styles.content}>
          <div className="wrapper">
            <h1>Wellcome</h1>
            <h3>Lorem ipsum dolor est satum itc serum</h3>
            <Button variant="contained" color="secondary" onClick={this.handleClick}>
                Hello World!
            </Button>
            <TildaButton style={styles.tb}>Tilda</TildaButton>
          </div>
            <List style={styles.lista}>
              {usersVeiw}
            </List>
        </div>
      </Template>
    )
  }
}


Landing.propTypes = {
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

export default observer((props) => <Landing {...props} store={store} />)
