const Schema = require("mongoose").Schema;
const ObjectId = Schema.ObjectId;

const MessageModel = new Schema({
    author: ObjectId,
    body: String,
    date: Date
});

const Message = mongoose.model("MessageModel");

export default Message;