import * as Realm from "realm-web";

// Set up Realm user auth
const app = new Realm.App({ id: "ezranotes-jojyq" });
const credentials = Realm.Credentials.anonymous();

function assert(condition, message) {
  if (!condition) {
    throw message || "Assertion failed";
  }
}

async function loginUser() {
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    assert(
      user.id === app.currentUser.id,
      "User ID not equal to current user ID."
    );
    return user;
  } catch (err) {
    console.error("Failed to log in", err);
  }
}

async function saveData(data) {
  try {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const entries = mongodb.db("ezranotes").collection("entries");
    const result = await entries.insertOne(data);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

async function getData() {
  try {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const entries = mongodb.db("ezranotes").collection("entries");
    const result = await entries.find();
    console.log(`Get Data ${result}`);
  } catch(err){

  }
}

export {loginUser, getData, saveData};
