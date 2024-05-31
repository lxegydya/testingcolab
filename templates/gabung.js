$(document).ready(function() {
  // Common code for both pages

  // Homepage-specific code
  if (window.location.pathname === '/') {
    $.get('https://my-json-server.typicode.com/jjjosephhh/test-db-002/people')
      .done(function(people) {
        var tableBody = $('#people-table tbody');
        people.forEach(function(person) {
          var row = $('<tr>')
            .append($('<td>', { text: person.fname }))
            .append($('<td>', { text: person.lname }))
            .append($('<td>', { text: person.age }));
            // Closing bracket for the object
            
          tableBody.append(row);
        });
      });
  }
});
