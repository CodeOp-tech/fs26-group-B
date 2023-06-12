
export const login = async (username, password) => {
    // simulate a successful authentication response
    const fakeResponse = {
      success: true,
      token: 'fake-auth-token',
      user: {
        id: 1,
        username: username,
        name: 'John Doe',
      },
    };
  
    // return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse);
      }, 500);
    });
  };
  
  export const logout = async () => {
    // simulate a successful authentication response
    const fakeResponse = {
      success: true,
    };
  
    // return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse);
      }, 500);
    });
  };
  
  export const getCurrentUser = async () => {
    // simulate a successful authentication response
    const fakeResponse = {
      data: {
        id: 1,
        username: 'john.doe',
        name: 'John Doe',
      },
    };
  
    // return a promise that resolves with the fake response object after 500ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse);
      }, 500);
    });
  };