module.exports = {
  dialect: "postgres",
  host: "192.168.99.100",
  port: "5433",
  username: "postgres",
  password: "docker",
  database: "products",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
