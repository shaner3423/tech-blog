//user-seeds code came from Dana Bottoni @github.com/dbottoni/ 

const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post: 'https://nasa.gov/donec.json',
    user_id: 8
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = () => seedPosts;