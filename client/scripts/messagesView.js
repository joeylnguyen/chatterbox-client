var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // $('#chats.username').click(Friends.toggleStatus);
  },

  renderMessage: function(message) {

    // var messages = message.results; // This is an array of all messages in the server

    // Loop through all the messages in the server
    //   _.forEach(Messages, (message) => {
    //     MessagesView.$chats.append(`
    //   <div >
    //   <div class="username"> Username: ${message.username}</div>
    //   <div>${message.text}</div>
    // </div>`);
    //    });
    _.each(Messages, (message) => {
      MessagesView.$chats.append(MessageView.render(message));
    });
  }
};