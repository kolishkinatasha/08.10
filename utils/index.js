const showError = err => console.error(err);

const generateUsers = count =>
  Array.from({ length: count }, (_, index) => ({
    name: `test${++index}`,
    id: index
  }));

module.exports = {
  showError,
  generateUsers
};
