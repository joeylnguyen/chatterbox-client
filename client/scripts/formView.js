var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // var messages = message.results; // This is an array of all messages in the server
    var message = {
      roomname: 'mainroom',
      username: App.username,
      text: FormView.$form.find('#message').val(),
    };

    Parse.create(message, () => {
      Messages = Messages.concat(message);
      MessagesView.renderMessage(message);
      console.log(message);
    });
    console.log('click!');
    //refetch
    App.fetch();

  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};