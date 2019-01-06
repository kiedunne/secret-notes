
describe('Note', function () {

  before(function() {
    note = new Note()
  });

  it('saves the title and text of the note', function(){
    note.create("my title", "my note")
    equal(note.titile, "my title")
    equal(note.text, "my note")
  });

});
