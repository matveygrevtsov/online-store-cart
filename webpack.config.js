const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

const OUTPUT_FOLDER_NAME = path.resolve(__dirname, "dist"); // Папка, куда всё заливаться сбилженный проект.

const mainUrl = process.env.MAIN_URL
  ? process.env.MAIN_URL
  : "http://localhost:3000";

const moduleFederationConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  exposes: {
    "./Cart": "./src/components/Cart/Cart",
  },
  remotes: {
    main: `main@${mainUrl}/remoteEntry.js`,
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
      eager: true,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
      eager: true,
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: deps["react-router-dom"],
      eager: true,
    },
    antd: {
      singleton: true,
      requiredVersion: deps.antd,
      eager: true,
    },
  },
};

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: OUTPUT_FOLDER_NAME,
    filename: "bundle.js",
  }, // выходной файл
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin(moduleFederationConfig),
  ],
  devServer: {
    static: {
      directory: OUTPUT_FOLDER_NAME,
    },
    port: 3002,
    historyApiFallback: true,
    compress: true,
  },
};
