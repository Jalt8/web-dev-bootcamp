const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO sCONNECTION ERROR!")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

const makeTweets = async () => {
    const user = new User({ name: 'chickenfan29',age: 19})
    const tweet1 = new Tweet({text: 'Omg i love chickens', likes: 100})
    tweet1.user = user
    tweet1.save()
    user.save()
}

const makeTweets2 = async () => {
    const user = await User.findOne({name: 'chickenfan29'})
    const tweet2 = new Tweet({text: 'bock bock bock', likes: 12345})
    tweet2.user = user
    tweet2.save()
    user.save()
}

const findTweet = async () => {
    const tweet = await Tweet.findOne({}).populate('user', 'name')
    console.log(tweet)
}

findTweet()