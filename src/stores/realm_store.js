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
        return result;
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
      return;
    }
  } else {
    return;
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
      return "Unable to get Ez data.";
    }
  } catch (err) {
    console.error(err);
    return "Unable to get Ez data.";
  }
}

async function deleteData(input) {
  try {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const entries = mongodb.db("ezranotes").collection("entries");
    entries
      .deleteOne(input)
      .then((result) => result.deletedCount)
      .catch((err) => err);
  } catch (err) {
    console.error(err);
    return "Unable to delete Ez data.";
  }
}

async function updateData(query, update, options) {
  try {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const entries = mongodb.db("ezranotes").collection("entries");
    entries
      .updateOne(query, update, options)
      .then((result) => {
        const { matchedCount, modifiedCount } = result;
        if (matchedCount && modifiedCount) {
          console.log(`Successfully updated the item.`);
        }
      })
      .catch((err) => console.error(`Failed to update the item: ${err}`));
  } catch (err) {
    console.error(err);
    return "Unable to updated Ez data.";
  }
}

export { loginUser, getData, saveData, deleteData, updateData };
