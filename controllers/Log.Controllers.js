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

  exports.findAll = function(req, res) {
    Blog.find(function(err, blogs) {
      if (err) {
        console.log(err);
        res.status(500).send({ message: "Some error occurred while retrieving blogs" });
      } else {
        res.send(blogs);
      }
    });
  };

  exports.updateByAuthor = function(req, res) {
    let query = { author: 'HyperionDev' };
  
    Blog.findOneAndUpdate(query, { author: 'HyperionDev' }, { new: true }, function(err, doc) {
      if (err) {
        console.log("Something went wrong when updating data.");
      }
      res.send("Updated");
    });
  }

  exports.deleteBlogsByAuthor = function(req, res) {
    Blog.remove({ author: 'HyperionDev' }, function(err) {
      if (err)
        return handleError(err);
      console.log("Blogs removed");
      res.send("Blogs removed");
    });
  }
  
  // Import the Mongoose library
let mongoose = require('mongoose');

// Define the URI (Uniform Resource Identifier) for connecting to the MongoDB database
const uri = 'mongodb://hyperionDB:password@hyperion-shard-00-00-f78fc.mongodb.net:27017/test?ssl=true&replicaSet=hyperion-shard-0&authSource=admin';

// Set Mongoose's default Promise library to Node.js' global Promise library
mongoose.Promise = global.Promise;

// Connect to the MongoDB database using the provided URI
mongoose.connect(uri, { useMongoClient: true });

// Event listener for the 'error' event
mongoose.connection.on('error', function() {
    console.log('Connection to Mongo established.');
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
  });
  
  // Event listener for the 'open' event
  mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
  })
  

  
  
  