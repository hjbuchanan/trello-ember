export default function() {
  this.get('/lists', function() {
    return { 
      "data": [{
        "type": "lists",
        "id": 1,
        "attributes": {
          "title": "grocery list",
          "description": "my lists for groceries",
          "item_id": [1, 2]
        }
      }, {
        "type": "lists",
        "id": 2, 
        "attributes": {
          "title": "todo",
          "description": "my todos for today",
          "item_id": []
        }
      }]
    }
  });

  this.get('/items', function() {
    return { 
      "data": [{
        "type": "items",
        "id": 1,
        "attributes" : {
          "list_id": 1,
          "title": "bell peppers",
          "description": "for cooking"
        }
      }, {
        "type": "items",
        "id": 2,
        "attributes": {
          "list_id": 1, 
          "title": "chicken",
          "description": "for soup"
        }
      }]
    };
  })
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
}
