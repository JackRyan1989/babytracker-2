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
  if (data.action.length > 0) {
    try {
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const entries = mongodb.db("ezranotes").collection("entries");
      const result = await entries.insertOne(data);
      if (result) {
        return result
      } else {
        return
      }
    } catch (err) {
      console.log(err);
      return 
    }
  } else {
    return
  }
}

async function getData() {
  try {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const entries = mongodb.db("ezranotes").collection("entries");
    const result = await entries.find();
    if (result) {
      return result;
    } else {
      return "Unable to get Ez data."
    }
  } catch(err){
    console.error(err);
    return "Unable to get Ez data."
  }
}

export {loginUser, getData, saveData};
