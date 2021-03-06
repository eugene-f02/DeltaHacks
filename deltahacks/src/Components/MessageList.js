import React, { Component } from 'react';

class MessageList extends Component {
    render() {
        return (
            <ul className="message-list">
                <li className = "dateText" >ROOM ID: {this.props.roomId} </li>
                {this.props.messages.map((message, index) => (
                    <li key={index}>
                        <h4 className="message-sender">{message.senderId}</h4>
                        <h5 className="dateText">{message.createdAt.substring(0,10)} {message.createdAt.substring(11,16)}</h5>
                        <p className="message-text">{message.text}</p>
                    </li>
                ))}
                <li></li>
            </ul>
        )
    }
}
export default MessageList;