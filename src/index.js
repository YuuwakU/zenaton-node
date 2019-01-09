/* global process, __dirname, __filename */

// store path to this file for use by Zenaton worker
process.env.ZENATON_LIBRARY_PATH = require("path").resolve(
  __dirname,
  __filename,
);

const { version: appVersion } = require("../package.json");

const Errors = require("./Errors");

// v1 sources
const Client = require("./v1/Client");
const Engine = require("./v1/Engine/Engine");
const { Task, taskManager, Wait } = require("./v1/Tasks");
const { Workflow, workflowManager, Version } = require("./v1/Workflows");
const serializer = require("./v1/Services/Serializer");
const Parallel = require("./v1/Parallel/Parallel");

// if below functions are already defined, use Parallel class

// Parallel dispatchs
if (!Array.prototype.dispatch) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.dispatch = function dispatch() {
    console.warn(
      "DeprecationWarning: Usage of '[].dispatch()' is deprecated. Please use 'new Parallel([]).dispatch()' instead.",
    );
    new Engine().dispatch(this);
  };
}

// Parallel executions
if (!Array.prototype.execute) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.execute = function execute() {
    console.warn(
      "DeprecationWarning: Usage of '[].execute()' is deprecated. Please use 'new Parallel([]).execute()' instead.",
    );
    return new Engine().execute(this);
  };
}

module.exports = {
  infos: {
    appVersion,
  },
  Client,
  Engine,
  serializer,
  Parallel,
  Task,
  Wait,
  taskManager,
  Version,
  Workflow,
  workflowManager,
  Errors,
};
