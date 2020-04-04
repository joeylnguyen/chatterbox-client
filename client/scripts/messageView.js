// Renders each message to be HTML ready

var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="message"><%- text %></div>
      </div>
    `)

};