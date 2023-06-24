// Create a new user
const newUser = User.build({
  firstName: 'kleo',
  lastName: 'mitri',
  email: 'km@example.com',
});

// Save the user to the database
newUser.save()
  .then(() => {
    console.log('User saved successfully');
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });

// Retrieve user data
User.findAll()
  .then((users) => {
    console.log('Users:', users);
  })
  .catch((error) => {
    console.error('Error retrieving users:', error);
  });
