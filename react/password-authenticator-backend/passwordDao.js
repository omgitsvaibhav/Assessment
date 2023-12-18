let password;

export default class PasswordDao {
  static async injectDB(conn) {
    if (password) {
      return;
    }
    try {
      password = await conn.db("credentials").collection("password");
      console.log("successfully established collection");
    } catch (e) {
      console.error(`unable to establish collection: ${e}`);
    }
  }

  static async storePassword(passwordValue) {
    try {
      const passwordDoc = await password.insertOne({ password: passwordValue });
      return passwordDoc;
    } catch (e) {
      console.error(`unable to store password: ${e}`);
      return {error:e};
    }
  }
}
