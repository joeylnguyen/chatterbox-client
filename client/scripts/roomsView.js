var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(newRoom) {
    RoomsView.$select.append(`
    <option value="${newRoom}">${newRoom}</option>`);
  }
};
