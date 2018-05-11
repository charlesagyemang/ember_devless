import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.RESTAdapter.extend({

  host: 'http://onyeka.herokuapp.com',
  namespace: "api/v1/service",
  headers: computed(function() {
        return {
           'Devless-token': 'a2f2abeda7ce0759eda8b0e3b1fcc246'
        }
    })

});
