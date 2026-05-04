
const getProfile = async (req, res) => {
 
  const user = req.user;

  return res.status(200).json({
    success: true,
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
  });
};

export { getProfile };