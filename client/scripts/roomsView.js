var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click(Rooms.add);
  },

  renderRoom: function(newRoom) {
    RoomsView.$select.append(`
    <option value="${newRoom}">${newRoom}</option>`);
  }
};
