import * as Realm from "realm-web";

// Set up Realm user auth
const app = new Realm.App({ id: "ezranotes-jojyq" });
const credentials = Realm.Credentials.anonymous();
let appInfo = {};

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
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const entries = mongodb.db("ezraNotes").collection("entries");
    return (appInfo = {
      user,
      mongodb,
      entries,
    });
  } catch (err) {
    console.error("Failed to log in", err);
  }
}

async function save(input) {
  console.log(entries);
  try {
    const result = await entries.insertOne(input);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

export const login = loginUser();
export const saveData = save();
