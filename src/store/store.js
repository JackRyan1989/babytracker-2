import { writable } from 'svelte/store';
import * as Realm from "realm-web";

// Set up Realm user auth
const app = new Realm.App({ id: "<Your App ID>" });
const credentials = Realm.Credentials.anonymous();

function assert(condition, message) {
        if (!condition) {
          throw message || "Assertion failed";
        }
      }

function login() {
    try {
        // Authenticate the user
        const user = await app.logIn(credentials);
        // `App.currentUser` updates to match the logged in user
        assert(user.id === app.currentUser.id, "User ID not equal to current user ID.")
        return user
      } catch(err) {
        console.error("Failed to log in", err);
      }
}

function dataStore() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        login: login(),
    }
}

export const data = dataStore();