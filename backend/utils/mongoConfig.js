module.exports.DB_URL = 'mongodb://localhost:27017/rocket-db'

module.exports.mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}
