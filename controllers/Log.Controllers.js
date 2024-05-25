exports.create = function(req, res) {
    // Create and save a new blog
    let blogModel = new blogModel({
      title: 'Example Code',
      text: 'This is to demonstrate how to add data to a database using Mongoose',
      author: 'HyperionDev'
    });
  
    blogModel.save(function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).send({ message: "Some error occurred while creating the blog." });
      } else {
        console.log(data);
        res.send('The blog has been added');
      }
    });
  };
  