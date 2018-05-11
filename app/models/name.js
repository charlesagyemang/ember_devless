import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  devless_user_id: DS.attr("number")
});
