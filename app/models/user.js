import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  profilePicture: DS.attr(),
  pictures: DS.hasMany('picture', {async: true})
});
