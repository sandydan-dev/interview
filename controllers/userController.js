const User = [
  { id: 1, name: "sandeep", city: "nagpur" },
  { id: 2, name: "john", city: "pune" },
];

const getUsers = async (req, res) => {
  try {
    const user = await User;

    if (user.lenght === 0) {
      return res.status(404).send("user not found");
    }

    return res.status(200).json({ message: true, data: user });
  } catch (error) {
    return res.status(500).json({ message: false, error: error.message });
  }
};

const usersData = async (req, res) => {
  try {

    return res.status(200).json({ message: true, data: User });
  } catch (error) {
    return res.status(500).json({ message: false, error: error.message });
  }
};

module.exports = { getUsers, usersData };
