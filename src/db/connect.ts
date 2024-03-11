import mongoose from 'mongoose';

const connectDB = (url: string) => {
  return mongoose.connect(url
    // 
    //,{
   //useNewUrlParser: true,         //depreciated and no longer need for current mongoose node drivers
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true, }
    );
};

export default connectDB;
