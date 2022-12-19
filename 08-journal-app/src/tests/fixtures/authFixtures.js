export const initialState = {
  status: "checking", // 'not-authenticated' "checking" 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated", // 'not-authenticated' "checking" 'authenticated'
  uid: "123ABC",
  email: "demo@google.com",
  displayName: "Demo User",
  photoURL: "https://demo.com/photo.png",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated", // 'not-authenticated' "checking" 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "123ABC",
  email: "demo@google.com",
  displayName: "Demo User",
  photoURL: "https://demo.com/photo.png",
};
