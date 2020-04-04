var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  // Put message in server
  // post: function(callback = ()=>{}) {
  //   Parse.create((data) => {

  //   });

  //   callback();
  // },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages = data.results;
      MessagesView.renderMessage(data);
      console.log(data);

      callback();

      // Push inbound messages to message storage
      // MessagesView.renderMessage(data);
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
