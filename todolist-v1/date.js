exports.getDate = () => {
  const date = new Date();

  const options = { weekday: "long", day: "numeric", month: "long" };

  return date.toLocaleDateString("en-EN", options);
};

exports.getDay = () => {
  const date = new Date();

  const options = { weekday: "long" };

  return date.toLocaleDateString("en-EN", options);
};
