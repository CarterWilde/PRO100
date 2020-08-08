import * as mongoose from "mongoose"

class User extends mongoose.Document {
    public Username: mongoose.Schema.Types.String;
    public Email: mongoose.Schema.Types.String;
    private Password: mongoose.Schema.Types.String;
}

export default User;