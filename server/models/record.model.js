
import mongoose from "mongoose";
const record = mongoose.model('Record', {
	field1: String,
	field2: String,
	field3: String,

});

export default mongoose.model("record", recordShema);