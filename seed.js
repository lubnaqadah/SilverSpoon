module.exports = function(db) {

  db.User.create({
    name: 'lubna'
  }).success(function(user) {
    db.List.bulkCreate([{
      id: 1,
      title: 'birthday',
      description: 'blah blah blah',
    }, {
      id: 2,
       title: 'birthday',
      description: 'blah blah blah',
    }]);
  });

};