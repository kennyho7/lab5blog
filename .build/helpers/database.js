"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var database_exports = {};
__export(database_exports, {
  run_insert: () => run_insert,
  run_query: () => run_query
});
module.exports = __toCommonJS(database_exports);
var import_sequelize = require("sequelize");
const run_query = async (query2, values) => {
  try {
    const squelize = new import_sequelize.Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
    await sequelize.authenticate();
    let data = await sequelize.query(query2, {
      replacements: values,
      type: import_sequelize.QueryTypes.SELECT
    });
    await sequelize.close();
    return data;
  } catch (err) {
    console.error(err, query2, values);
    throw "Database query error";
  }
};
const run_insert = async function run_insert2(sql, values) {
  try {
    const sequelize2 = new import_sequelize.Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
    await sequelize2.authenticate();
    let data = await sequelize2.query(sql, {
      replacements: values,
      type: import_sequelize.QueryTypes.INSERT
    });
    await sequelize2.close();
    return data;
  } catch (err) {
    console.error(err, query, values);
    throw "Database query error";
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  run_insert,
  run_query
});
//# sourceMappingURL=database.js.map
