import React from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';


class UserStripe extends React.Component {
    render () {
        return (
            <ListItem dense button>
                <Avatar>{this.props.user.id}</Avatar>
                <ListItemText>{this.props.user.email}</ListItemText>
                <ListItemSecondaryAction>
                    <Link href={`/user/${this.props.user.id}`}>
                        <Button variant="outlined">Details</Button>
                    </Link>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default UserStripe;