"use strict";(self.webpackChunkcachiql_demo=self.webpackChunkcachiql_demo||[]).push([[178],{24178:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97480);\n/* harmony import */ var _index_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59361);\n/* harmony import */ var _onlineParser_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98007);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73935);\nvar __defProp = Object.defineProperty;\nvar __name = (target, value) => __defProp(target, "name", { value, configurable: true });\n\n\n\n\n\n\n_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.C.defineMode("graphql-variables", (config) => {\n  const parser = (0,_onlineParser_es_js__WEBPACK_IMPORTED_MODULE_2__.o)({\n    eatWhitespace: (stream) => stream.eatSpace(),\n    lexRules: LexRules,\n    parseRules: ParseRules,\n    editorConfig: { tabSize: config.tabSize }\n  });\n  return {\n    config,\n    startState: parser.startState,\n    token: parser.token,\n    indent,\n    electricInput: /^\\s*[}\\]]/,\n    fold: "brace",\n    closeBrackets: {\n      pairs: \'[]{}""\',\n      explode: "[]{}"\n    }\n  };\n});\nfunction indent(state, textAfter) {\n  var _a, _b;\n  const levels = state.levels;\n  const level = !levels || levels.length === 0 ? state.indentLevel : levels[levels.length - 1] - (((_a = this.electricInput) === null || _a === void 0 ? void 0 : _a.test(textAfter)) ? 1 : 0);\n  return (level || 0) * (((_b = this.config) === null || _b === void 0 ? void 0 : _b.indentUnit) || 0);\n}\n__name(indent, "indent");\nconst LexRules = {\n  Punctuation: /^\\[|]|\\{|\\}|:|,/,\n  Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,\n  String: /^"(?:[^"\\\\]|\\\\(?:"|\\/|\\\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,\n  Keyword: /^true|false|null/\n};\nconst ParseRules = {\n  Document: [(0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)("{"), (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.l)("Variable", (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.o)((0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)(","))), (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)("}")],\n  Variable: [namedKey("variable"), (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)(":"), "Value"],\n  Value(token) {\n    switch (token.kind) {\n      case "Number":\n        return "NumberValue";\n      case "String":\n        return "StringValue";\n      case "Punctuation":\n        switch (token.value) {\n          case "[":\n            return "ListValue";\n          case "{":\n            return "ObjectValue";\n        }\n        return null;\n      case "Keyword":\n        switch (token.value) {\n          case "true":\n          case "false":\n            return "BooleanValue";\n          case "null":\n            return "NullValue";\n        }\n        return null;\n    }\n  },\n  NumberValue: [(0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.t)("Number", "number")],\n  StringValue: [(0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.t)("String", "string")],\n  BooleanValue: [(0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.t)("Keyword", "builtin")],\n  NullValue: [(0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.t)("Keyword", "keyword")],\n  ListValue: [(0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)("["), (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.l)("Value", (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.o)((0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)(","))), (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)("]")],\n  ObjectValue: [(0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)("{"), (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.l)("ObjectField", (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.o)((0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)(","))), (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)("}")],\n  ObjectField: [namedKey("attribute"), (0,_index_es_js__WEBPACK_IMPORTED_MODULE_1__.p)(":"), "Value"]\n};\nfunction namedKey(style) {\n  return {\n    style,\n    match: (token) => token.kind === "String",\n    update(state, token) {\n      state.name = token.value.slice(1, -1);\n    }\n  };\n}\n__name(namedKey, "namedKey");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQxNzguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSw0REFBNEQsMkJBQTJCO0FBQ2xDO0FBQ3BDO0FBQ3lDO0FBQ0Q7QUFDMUM7QUFDSTtBQUNuQiwyREFBcUI7QUFDckIsaUJBQWlCLHNEQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRztBQUMzQjtBQUNBLDJEQUEyRCxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQUMsR0FBRyxJQUFJLCtDQUFJLGFBQWEsK0NBQUcsQ0FBQywrQ0FBQyxTQUFTLCtDQUFDLEdBQUc7QUFDeEQsbUNBQW1DLCtDQUFDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGdCQUFnQiwrQ0FBQztBQUNqQixnQkFBZ0IsK0NBQUM7QUFDakIsaUJBQWlCLCtDQUFDO0FBQ2xCLGNBQWMsK0NBQUM7QUFDZixjQUFjLCtDQUFDLE9BQU8sK0NBQUksVUFBVSwrQ0FBRyxDQUFDLCtDQUFDLFNBQVMsK0NBQUM7QUFDbkQsZ0JBQWdCLCtDQUFDLEdBQUcsSUFBSSwrQ0FBSSxnQkFBZ0IsK0NBQUcsQ0FBQywrQ0FBQyxTQUFTLCtDQUFDLEdBQUc7QUFDOUQsdUNBQXVDLCtDQUFDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWNoaXFsLWRlbW8vLi9ub2RlX21vZHVsZXMvQGdyYXBoaXFsL3JlYWN0L2Rpc3QvbW9kZS5lczMuanM/NGJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuaW1wb3J0IHsgQyBhcyBDb2RlTWlycm9yIH0gZnJvbSBcIi4vY29kZW1pcnJvci5lcy5qc1wiO1xuaW1wb3J0IFwiZ3JhcGhxbFwiO1xuaW1wb3J0IHsgcCwgbCBhcyBsaXN0LCBvIGFzIG9wdCwgdCB9IGZyb20gXCIuL2luZGV4LmVzLmpzXCI7XG5pbXBvcnQgeyBvIGFzIG9ubGluZVBhcnNlciB9IGZyb20gXCIuL29ubGluZVBhcnNlci5lcy5qc1wiO1xuaW1wb3J0IFwicmVhY3RcIjtcbmltcG9ydCBcInJlYWN0LWRvbVwiO1xuQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwiZ3JhcGhxbC12YXJpYWJsZXNcIiwgKGNvbmZpZykgPT4ge1xuICBjb25zdCBwYXJzZXIgPSBvbmxpbmVQYXJzZXIoe1xuICAgIGVhdFdoaXRlc3BhY2U6IChzdHJlYW0pID0+IHN0cmVhbS5lYXRTcGFjZSgpLFxuICAgIGxleFJ1bGVzOiBMZXhSdWxlcyxcbiAgICBwYXJzZVJ1bGVzOiBQYXJzZVJ1bGVzLFxuICAgIGVkaXRvckNvbmZpZzogeyB0YWJTaXplOiBjb25maWcudGFiU2l6ZSB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNvbmZpZyxcbiAgICBzdGFydFN0YXRlOiBwYXJzZXIuc3RhcnRTdGF0ZSxcbiAgICB0b2tlbjogcGFyc2VyLnRva2VuLFxuICAgIGluZGVudCxcbiAgICBlbGVjdHJpY0lucHV0OiAvXlxccypbfVxcXV0vLFxuICAgIGZvbGQ6IFwiYnJhY2VcIixcbiAgICBjbG9zZUJyYWNrZXRzOiB7XG4gICAgICBwYWlyczogJ1tde31cIlwiJyxcbiAgICAgIGV4cGxvZGU6IFwiW117fVwiXG4gICAgfVxuICB9O1xufSk7XG5mdW5jdGlvbiBpbmRlbnQoc3RhdGUsIHRleHRBZnRlcikge1xuICB2YXIgX2EsIF9iO1xuICBjb25zdCBsZXZlbHMgPSBzdGF0ZS5sZXZlbHM7XG4gIGNvbnN0IGxldmVsID0gIWxldmVscyB8fCBsZXZlbHMubGVuZ3RoID09PSAwID8gc3RhdGUuaW5kZW50TGV2ZWwgOiBsZXZlbHNbbGV2ZWxzLmxlbmd0aCAtIDFdIC0gKCgoX2EgPSB0aGlzLmVsZWN0cmljSW5wdXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXN0KHRleHRBZnRlcikpID8gMSA6IDApO1xuICByZXR1cm4gKGxldmVsIHx8IDApICogKCgoX2IgPSB0aGlzLmNvbmZpZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluZGVudFVuaXQpIHx8IDApO1xufVxuX19uYW1lKGluZGVudCwgXCJpbmRlbnRcIik7XG5jb25zdCBMZXhSdWxlcyA9IHtcbiAgUHVuY3R1YXRpb246IC9eXFxbfF18XFx7fFxcfXw6fCwvLFxuICBOdW1iZXI6IC9eLT8oPzowfCg/OlsxLTldWzAtOV0qKSkoPzpcXC5bMC05XSopPyg/OltlRV1bKy1dP1swLTldKyk/LyxcbiAgU3RyaW5nOiAvXlwiKD86W15cIlxcXFxdfFxcXFwoPzpcInxcXC98XFxcXHxifGZ8bnxyfHR8dVswLTlhLWZBLUZdezR9KSkqXCI/LyxcbiAgS2V5d29yZDogL150cnVlfGZhbHNlfG51bGwvXG59O1xuY29uc3QgUGFyc2VSdWxlcyA9IHtcbiAgRG9jdW1lbnQ6IFtwKFwie1wiKSwgbGlzdChcIlZhcmlhYmxlXCIsIG9wdChwKFwiLFwiKSkpLCBwKFwifVwiKV0sXG4gIFZhcmlhYmxlOiBbbmFtZWRLZXkoXCJ2YXJpYWJsZVwiKSwgcChcIjpcIiksIFwiVmFsdWVcIl0sXG4gIFZhbHVlKHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbi5raW5kKSB7XG4gICAgICBjYXNlIFwiTnVtYmVyXCI6XG4gICAgICAgIHJldHVybiBcIk51bWJlclZhbHVlXCI7XG4gICAgICBjYXNlIFwiU3RyaW5nXCI6XG4gICAgICAgIHJldHVybiBcIlN0cmluZ1ZhbHVlXCI7XG4gICAgICBjYXNlIFwiUHVuY3R1YXRpb25cIjpcbiAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xuICAgICAgICAgIGNhc2UgXCJbXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJMaXN0VmFsdWVcIjtcbiAgICAgICAgICBjYXNlIFwie1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiT2JqZWN0VmFsdWVcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgXCJLZXl3b3JkXCI6XG4gICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcbiAgICAgICAgICBjYXNlIFwidHJ1ZVwiOlxuICAgICAgICAgIGNhc2UgXCJmYWxzZVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiQm9vbGVhblZhbHVlXCI7XG4gICAgICAgICAgY2FzZSBcIm51bGxcIjpcbiAgICAgICAgICAgIHJldHVybiBcIk51bGxWYWx1ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcbiAgTnVtYmVyVmFsdWU6IFt0KFwiTnVtYmVyXCIsIFwibnVtYmVyXCIpXSxcbiAgU3RyaW5nVmFsdWU6IFt0KFwiU3RyaW5nXCIsIFwic3RyaW5nXCIpXSxcbiAgQm9vbGVhblZhbHVlOiBbdChcIktleXdvcmRcIiwgXCJidWlsdGluXCIpXSxcbiAgTnVsbFZhbHVlOiBbdChcIktleXdvcmRcIiwgXCJrZXl3b3JkXCIpXSxcbiAgTGlzdFZhbHVlOiBbcChcIltcIiksIGxpc3QoXCJWYWx1ZVwiLCBvcHQocChcIixcIikpKSwgcChcIl1cIildLFxuICBPYmplY3RWYWx1ZTogW3AoXCJ7XCIpLCBsaXN0KFwiT2JqZWN0RmllbGRcIiwgb3B0KHAoXCIsXCIpKSksIHAoXCJ9XCIpXSxcbiAgT2JqZWN0RmllbGQ6IFtuYW1lZEtleShcImF0dHJpYnV0ZVwiKSwgcChcIjpcIiksIFwiVmFsdWVcIl1cbn07XG5mdW5jdGlvbiBuYW1lZEtleShzdHlsZSkge1xuICByZXR1cm4ge1xuICAgIHN0eWxlLFxuICAgIG1hdGNoOiAodG9rZW4pID0+IHRva2VuLmtpbmQgPT09IFwiU3RyaW5nXCIsXG4gICAgdXBkYXRlKHN0YXRlLCB0b2tlbikge1xuICAgICAgc3RhdGUubmFtZSA9IHRva2VuLnZhbHVlLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gIH07XG59XG5fX25hbWUobmFtZWRLZXksIFwibmFtZWRLZXlcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24178\n')},98007:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "o": () => (/* binding */ onlineParser)\n/* harmony export */ });\n/* harmony import */ var _index_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59361);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97359);\nvar __defProp = Object.defineProperty;\nvar __name = (target, value) => __defProp(target, "name", { value, configurable: true });\n\n\nfunction onlineParser(options = {\n  eatWhitespace: (stream) => stream.eatWhile(_index_es_js__WEBPACK_IMPORTED_MODULE_0__.i),\n  lexRules: _index_es_js__WEBPACK_IMPORTED_MODULE_0__.L,\n  parseRules: _index_es_js__WEBPACK_IMPORTED_MODULE_0__.P,\n  editorConfig: {}\n}) {\n  return {\n    startState() {\n      const initialState = {\n        level: 0,\n        step: 0,\n        name: null,\n        kind: null,\n        type: null,\n        rule: null,\n        needsSeparator: false,\n        prevState: null\n      };\n      pushRule(options.parseRules, initialState, graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind.DOCUMENT */ .h.DOCUMENT);\n      return initialState;\n    },\n    token(stream, state) {\n      return getToken(stream, state, options);\n    }\n  };\n}\n__name(onlineParser, "onlineParser");\nfunction getToken(stream, state, options) {\n  var _a;\n  if (state.inBlockstring) {\n    if (stream.match(/.*"""/)) {\n      state.inBlockstring = false;\n      return "string";\n    } else {\n      stream.skipToEnd();\n      return "string";\n    }\n  }\n  const { lexRules, parseRules, eatWhitespace, editorConfig } = options;\n  if (state.rule && state.rule.length === 0) {\n    popRule(state);\n  } else if (state.needsAdvance) {\n    state.needsAdvance = false;\n    advanceRule(state, true);\n  }\n  if (stream.sol()) {\n    const tabSize = (editorConfig === null || editorConfig === void 0 ? void 0 : editorConfig.tabSize) || 2;\n    state.indentLevel = Math.floor(stream.indentation() / tabSize);\n  }\n  if (eatWhitespace(stream)) {\n    return "ws";\n  }\n  const token = lex(lexRules, stream);\n  if (!token) {\n    const matchedSomething = stream.match(/\\S+/);\n    if (!matchedSomething) {\n      stream.match(/\\s/);\n    }\n    pushRule(SpecialParseRules, state, "Invalid");\n    return "invalidchar";\n  }\n  if (token.kind === "Comment") {\n    pushRule(SpecialParseRules, state, "Comment");\n    return "comment";\n  }\n  const backupState = assign({}, state);\n  if (token.kind === "Punctuation") {\n    if (/^[{([]/.test(token.value)) {\n      if (state.indentLevel !== void 0) {\n        state.levels = (state.levels || []).concat(state.indentLevel + 1);\n      }\n    } else if (/^[})\\]]/.test(token.value)) {\n      const levels = state.levels = (state.levels || []).slice(0, -1);\n      if (state.indentLevel) {\n        if (levels.length > 0 && levels[levels.length - 1] < state.indentLevel) {\n          state.indentLevel = levels[levels.length - 1];\n        }\n      }\n    }\n  }\n  while (state.rule) {\n    let expected = typeof state.rule === "function" ? state.step === 0 ? state.rule(token, stream) : null : state.rule[state.step];\n    if (state.needsSeparator) {\n      expected = expected === null || expected === void 0 ? void 0 : expected.separator;\n    }\n    if (expected) {\n      if (expected.ofRule) {\n        expected = expected.ofRule;\n      }\n      if (typeof expected === "string") {\n        pushRule(parseRules, state, expected);\n        continue;\n      }\n      if ((_a = expected.match) === null || _a === void 0 ? void 0 : _a.call(expected, token)) {\n        if (expected.update) {\n          expected.update(state, token);\n        }\n        if (token.kind === "Punctuation") {\n          advanceRule(state, true);\n        } else {\n          state.needsAdvance = true;\n        }\n        return expected.style;\n      }\n    }\n    unsuccessful(state);\n  }\n  assign(state, backupState);\n  pushRule(SpecialParseRules, state, "Invalid");\n  return "invalidchar";\n}\n__name(getToken, "getToken");\nfunction assign(to, from) {\n  const keys = Object.keys(from);\n  for (let i = 0; i < keys.length; i++) {\n    to[keys[i]] = from[keys[i]];\n  }\n  return to;\n}\n__name(assign, "assign");\nconst SpecialParseRules = {\n  Invalid: [],\n  Comment: []\n};\nfunction pushRule(rules, state, ruleKind) {\n  if (!rules[ruleKind]) {\n    throw new TypeError("Unknown rule: " + ruleKind);\n  }\n  state.prevState = Object.assign({}, state);\n  state.kind = ruleKind;\n  state.name = null;\n  state.type = null;\n  state.rule = rules[ruleKind];\n  state.step = 0;\n  state.needsSeparator = false;\n}\n__name(pushRule, "pushRule");\nfunction popRule(state) {\n  if (!state.prevState) {\n    return;\n  }\n  state.kind = state.prevState.kind;\n  state.name = state.prevState.name;\n  state.type = state.prevState.type;\n  state.rule = state.prevState.rule;\n  state.step = state.prevState.step;\n  state.needsSeparator = state.prevState.needsSeparator;\n  state.prevState = state.prevState.prevState;\n}\n__name(popRule, "popRule");\nfunction advanceRule(state, successful) {\n  var _a;\n  if (isList(state) && state.rule) {\n    const step = state.rule[state.step];\n    if (step.separator) {\n      const separator = step.separator;\n      state.needsSeparator = !state.needsSeparator;\n      if (!state.needsSeparator && separator.ofRule) {\n        return;\n      }\n    }\n    if (successful) {\n      return;\n    }\n  }\n  state.needsSeparator = false;\n  state.step++;\n  while (state.rule && !(Array.isArray(state.rule) && state.step < state.rule.length)) {\n    popRule(state);\n    if (state.rule) {\n      if (isList(state)) {\n        if ((_a = state.rule) === null || _a === void 0 ? void 0 : _a[state.step].separator) {\n          state.needsSeparator = !state.needsSeparator;\n        }\n      } else {\n        state.needsSeparator = false;\n        state.step++;\n      }\n    }\n  }\n}\n__name(advanceRule, "advanceRule");\nfunction isList(state) {\n  const step = Array.isArray(state.rule) && typeof state.rule[state.step] !== "string" && state.rule[state.step];\n  return step && step.isList;\n}\n__name(isList, "isList");\nfunction unsuccessful(state) {\n  while (state.rule && !(Array.isArray(state.rule) && state.rule[state.step].ofRule)) {\n    popRule(state);\n  }\n  if (state.rule) {\n    advanceRule(state, false);\n  }\n}\n__name(unsuccessful, "unsuccessful");\nfunction lex(lexRules, stream) {\n  const kinds = Object.keys(lexRules);\n  for (let i = 0; i < kinds.length; i++) {\n    const match = stream.match(lexRules[kinds[i]]);\n    if (match && match instanceof Array) {\n      return { kind: kinds[i], value: match[0] };\n    }\n  }\n}\n__name(lex, "lex");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTgwMDcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLDREQUE0RCwyQkFBMkI7QUFDUjtBQUNoRDtBQUMvQjtBQUNBLDZDQUE2QywyQ0FBUztBQUN0RCxZQUFZLDJDQUFRO0FBQ3BCLGNBQWMsMkNBQVU7QUFDeEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9FQUFhO0FBQzlEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQW9EO0FBQzlEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxNQUFNLGFBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQzZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FjaGlxbC1kZW1vLy4vbm9kZV9tb2R1bGVzL0BncmFwaGlxbC9yZWFjdC9kaXN0L29ubGluZVBhcnNlci5lcy5qcz9jZjQ0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG5pbXBvcnQgeyBpIGFzIGlzSWdub3JlZCwgTCBhcyBMZXhSdWxlcywgUCBhcyBQYXJzZVJ1bGVzIH0gZnJvbSBcIi4vaW5kZXguZXMuanNcIjtcbmltcG9ydCB7IEtpbmQgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuZnVuY3Rpb24gb25saW5lUGFyc2VyKG9wdGlvbnMgPSB7XG4gIGVhdFdoaXRlc3BhY2U6IChzdHJlYW0pID0+IHN0cmVhbS5lYXRXaGlsZShpc0lnbm9yZWQpLFxuICBsZXhSdWxlczogTGV4UnVsZXMsXG4gIHBhcnNlUnVsZXM6IFBhcnNlUnVsZXMsXG4gIGVkaXRvckNvbmZpZzoge31cbn0pIHtcbiAgcmV0dXJuIHtcbiAgICBzdGFydFN0YXRlKCkge1xuICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAga2luZDogbnVsbCxcbiAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgcnVsZTogbnVsbCxcbiAgICAgICAgbmVlZHNTZXBhcmF0b3I6IGZhbHNlLFxuICAgICAgICBwcmV2U3RhdGU6IG51bGxcbiAgICAgIH07XG4gICAgICBwdXNoUnVsZShvcHRpb25zLnBhcnNlUnVsZXMsIGluaXRpYWxTdGF0ZSwgS2luZC5ET0NVTUVOVCk7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH0sXG4gICAgdG9rZW4oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldFRva2VuKHN0cmVhbSwgc3RhdGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbn1cbl9fbmFtZShvbmxpbmVQYXJzZXIsIFwib25saW5lUGFyc2VyXCIpO1xuZnVuY3Rpb24gZ2V0VG9rZW4oc3RyZWFtLCBzdGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX2E7XG4gIGlmIChzdGF0ZS5pbkJsb2Nrc3RyaW5nKSB7XG4gICAgaWYgKHN0cmVhbS5tYXRjaCgvLipcIlwiXCIvKSkge1xuICAgICAgc3RhdGUuaW5CbG9ja3N0cmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmVhbS5za2lwVG9FbmQoKTtcbiAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgIH1cbiAgfVxuICBjb25zdCB7IGxleFJ1bGVzLCBwYXJzZVJ1bGVzLCBlYXRXaGl0ZXNwYWNlLCBlZGl0b3JDb25maWcgfSA9IG9wdGlvbnM7XG4gIGlmIChzdGF0ZS5ydWxlICYmIHN0YXRlLnJ1bGUubGVuZ3RoID09PSAwKSB7XG4gICAgcG9wUnVsZShzdGF0ZSk7XG4gIH0gZWxzZSBpZiAoc3RhdGUubmVlZHNBZHZhbmNlKSB7XG4gICAgc3RhdGUubmVlZHNBZHZhbmNlID0gZmFsc2U7XG4gICAgYWR2YW5jZVJ1bGUoc3RhdGUsIHRydWUpO1xuICB9XG4gIGlmIChzdHJlYW0uc29sKCkpIHtcbiAgICBjb25zdCB0YWJTaXplID0gKGVkaXRvckNvbmZpZyA9PT0gbnVsbCB8fCBlZGl0b3JDb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVkaXRvckNvbmZpZy50YWJTaXplKSB8fCAyO1xuICAgIHN0YXRlLmluZGVudExldmVsID0gTWF0aC5mbG9vcihzdHJlYW0uaW5kZW50YXRpb24oKSAvIHRhYlNpemUpO1xuICB9XG4gIGlmIChlYXRXaGl0ZXNwYWNlKHN0cmVhbSkpIHtcbiAgICByZXR1cm4gXCJ3c1wiO1xuICB9XG4gIGNvbnN0IHRva2VuID0gbGV4KGxleFJ1bGVzLCBzdHJlYW0pO1xuICBpZiAoIXRva2VuKSB7XG4gICAgY29uc3QgbWF0Y2hlZFNvbWV0aGluZyA9IHN0cmVhbS5tYXRjaCgvXFxTKy8pO1xuICAgIGlmICghbWF0Y2hlZFNvbWV0aGluZykge1xuICAgICAgc3RyZWFtLm1hdGNoKC9cXHMvKTtcbiAgICB9XG4gICAgcHVzaFJ1bGUoU3BlY2lhbFBhcnNlUnVsZXMsIHN0YXRlLCBcIkludmFsaWRcIik7XG4gICAgcmV0dXJuIFwiaW52YWxpZGNoYXJcIjtcbiAgfVxuICBpZiAodG9rZW4ua2luZCA9PT0gXCJDb21tZW50XCIpIHtcbiAgICBwdXNoUnVsZShTcGVjaWFsUGFyc2VSdWxlcywgc3RhdGUsIFwiQ29tbWVudFwiKTtcbiAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gIH1cbiAgY29uc3QgYmFja3VwU3RhdGUgPSBhc3NpZ24oe30sIHN0YXRlKTtcbiAgaWYgKHRva2VuLmtpbmQgPT09IFwiUHVuY3R1YXRpb25cIikge1xuICAgIGlmICgvXlt7KFtdLy50ZXN0KHRva2VuLnZhbHVlKSkge1xuICAgICAgaWYgKHN0YXRlLmluZGVudExldmVsICE9PSB2b2lkIDApIHtcbiAgICAgICAgc3RhdGUubGV2ZWxzID0gKHN0YXRlLmxldmVscyB8fCBbXSkuY29uY2F0KHN0YXRlLmluZGVudExldmVsICsgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvXlt9KVxcXV0vLnRlc3QodG9rZW4udmFsdWUpKSB7XG4gICAgICBjb25zdCBsZXZlbHMgPSBzdGF0ZS5sZXZlbHMgPSAoc3RhdGUubGV2ZWxzIHx8IFtdKS5zbGljZSgwLCAtMSk7XG4gICAgICBpZiAoc3RhdGUuaW5kZW50TGV2ZWwpIHtcbiAgICAgICAgaWYgKGxldmVscy5sZW5ndGggPiAwICYmIGxldmVsc1tsZXZlbHMubGVuZ3RoIC0gMV0gPCBzdGF0ZS5pbmRlbnRMZXZlbCkge1xuICAgICAgICAgIHN0YXRlLmluZGVudExldmVsID0gbGV2ZWxzW2xldmVscy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB3aGlsZSAoc3RhdGUucnVsZSkge1xuICAgIGxldCBleHBlY3RlZCA9IHR5cGVvZiBzdGF0ZS5ydWxlID09PSBcImZ1bmN0aW9uXCIgPyBzdGF0ZS5zdGVwID09PSAwID8gc3RhdGUucnVsZSh0b2tlbiwgc3RyZWFtKSA6IG51bGwgOiBzdGF0ZS5ydWxlW3N0YXRlLnN0ZXBdO1xuICAgIGlmIChzdGF0ZS5uZWVkc1NlcGFyYXRvcikge1xuICAgICAgZXhwZWN0ZWQgPSBleHBlY3RlZCA9PT0gbnVsbCB8fCBleHBlY3RlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhwZWN0ZWQuc2VwYXJhdG9yO1xuICAgIH1cbiAgICBpZiAoZXhwZWN0ZWQpIHtcbiAgICAgIGlmIChleHBlY3RlZC5vZlJ1bGUpIHtcbiAgICAgICAgZXhwZWN0ZWQgPSBleHBlY3RlZC5vZlJ1bGU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGV4cGVjdGVkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHB1c2hSdWxlKHBhcnNlUnVsZXMsIHN0YXRlLCBleHBlY3RlZCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKChfYSA9IGV4cGVjdGVkLm1hdGNoKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChleHBlY3RlZCwgdG9rZW4pKSB7XG4gICAgICAgIGlmIChleHBlY3RlZC51cGRhdGUpIHtcbiAgICAgICAgICBleHBlY3RlZC51cGRhdGUoc3RhdGUsIHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4ua2luZCA9PT0gXCJQdW5jdHVhdGlvblwiKSB7XG4gICAgICAgICAgYWR2YW5jZVJ1bGUoc3RhdGUsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLm5lZWRzQWR2YW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cGVjdGVkLnN0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgICB1bnN1Y2Nlc3NmdWwoc3RhdGUpO1xuICB9XG4gIGFzc2lnbihzdGF0ZSwgYmFja3VwU3RhdGUpO1xuICBwdXNoUnVsZShTcGVjaWFsUGFyc2VSdWxlcywgc3RhdGUsIFwiSW52YWxpZFwiKTtcbiAgcmV0dXJuIFwiaW52YWxpZGNoYXJcIjtcbn1cbl9fbmFtZShnZXRUb2tlbiwgXCJnZXRUb2tlblwiKTtcbmZ1bmN0aW9uIGFzc2lnbih0bywgZnJvbSkge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZnJvbSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHRvW2tleXNbaV1dID0gZnJvbVtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gdG87XG59XG5fX25hbWUoYXNzaWduLCBcImFzc2lnblwiKTtcbmNvbnN0IFNwZWNpYWxQYXJzZVJ1bGVzID0ge1xuICBJbnZhbGlkOiBbXSxcbiAgQ29tbWVudDogW11cbn07XG5mdW5jdGlvbiBwdXNoUnVsZShydWxlcywgc3RhdGUsIHJ1bGVLaW5kKSB7XG4gIGlmICghcnVsZXNbcnVsZUtpbmRdKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gcnVsZTogXCIgKyBydWxlS2luZCk7XG4gIH1cbiAgc3RhdGUucHJldlN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuICBzdGF0ZS5raW5kID0gcnVsZUtpbmQ7XG4gIHN0YXRlLm5hbWUgPSBudWxsO1xuICBzdGF0ZS50eXBlID0gbnVsbDtcbiAgc3RhdGUucnVsZSA9IHJ1bGVzW3J1bGVLaW5kXTtcbiAgc3RhdGUuc3RlcCA9IDA7XG4gIHN0YXRlLm5lZWRzU2VwYXJhdG9yID0gZmFsc2U7XG59XG5fX25hbWUocHVzaFJ1bGUsIFwicHVzaFJ1bGVcIik7XG5mdW5jdGlvbiBwb3BSdWxlKHN0YXRlKSB7XG4gIGlmICghc3RhdGUucHJldlN0YXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN0YXRlLmtpbmQgPSBzdGF0ZS5wcmV2U3RhdGUua2luZDtcbiAgc3RhdGUubmFtZSA9IHN0YXRlLnByZXZTdGF0ZS5uYW1lO1xuICBzdGF0ZS50eXBlID0gc3RhdGUucHJldlN0YXRlLnR5cGU7XG4gIHN0YXRlLnJ1bGUgPSBzdGF0ZS5wcmV2U3RhdGUucnVsZTtcbiAgc3RhdGUuc3RlcCA9IHN0YXRlLnByZXZTdGF0ZS5zdGVwO1xuICBzdGF0ZS5uZWVkc1NlcGFyYXRvciA9IHN0YXRlLnByZXZTdGF0ZS5uZWVkc1NlcGFyYXRvcjtcbiAgc3RhdGUucHJldlN0YXRlID0gc3RhdGUucHJldlN0YXRlLnByZXZTdGF0ZTtcbn1cbl9fbmFtZShwb3BSdWxlLCBcInBvcFJ1bGVcIik7XG5mdW5jdGlvbiBhZHZhbmNlUnVsZShzdGF0ZSwgc3VjY2Vzc2Z1bCkge1xuICB2YXIgX2E7XG4gIGlmIChpc0xpc3Qoc3RhdGUpICYmIHN0YXRlLnJ1bGUpIHtcbiAgICBjb25zdCBzdGVwID0gc3RhdGUucnVsZVtzdGF0ZS5zdGVwXTtcbiAgICBpZiAoc3RlcC5zZXBhcmF0b3IpIHtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHN0ZXAuc2VwYXJhdG9yO1xuICAgICAgc3RhdGUubmVlZHNTZXBhcmF0b3IgPSAhc3RhdGUubmVlZHNTZXBhcmF0b3I7XG4gICAgICBpZiAoIXN0YXRlLm5lZWRzU2VwYXJhdG9yICYmIHNlcGFyYXRvci5vZlJ1bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3VjY2Vzc2Z1bCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBzdGF0ZS5uZWVkc1NlcGFyYXRvciA9IGZhbHNlO1xuICBzdGF0ZS5zdGVwKys7XG4gIHdoaWxlIChzdGF0ZS5ydWxlICYmICEoQXJyYXkuaXNBcnJheShzdGF0ZS5ydWxlKSAmJiBzdGF0ZS5zdGVwIDwgc3RhdGUucnVsZS5sZW5ndGgpKSB7XG4gICAgcG9wUnVsZShzdGF0ZSk7XG4gICAgaWYgKHN0YXRlLnJ1bGUpIHtcbiAgICAgIGlmIChpc0xpc3Qoc3RhdGUpKSB7XG4gICAgICAgIGlmICgoX2EgPSBzdGF0ZS5ydWxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Fbc3RhdGUuc3RlcF0uc2VwYXJhdG9yKSB7XG4gICAgICAgICAgc3RhdGUubmVlZHNTZXBhcmF0b3IgPSAhc3RhdGUubmVlZHNTZXBhcmF0b3I7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLm5lZWRzU2VwYXJhdG9yID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnN0ZXArKztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbl9fbmFtZShhZHZhbmNlUnVsZSwgXCJhZHZhbmNlUnVsZVwiKTtcbmZ1bmN0aW9uIGlzTGlzdChzdGF0ZSkge1xuICBjb25zdCBzdGVwID0gQXJyYXkuaXNBcnJheShzdGF0ZS5ydWxlKSAmJiB0eXBlb2Ygc3RhdGUucnVsZVtzdGF0ZS5zdGVwXSAhPT0gXCJzdHJpbmdcIiAmJiBzdGF0ZS5ydWxlW3N0YXRlLnN0ZXBdO1xuICByZXR1cm4gc3RlcCAmJiBzdGVwLmlzTGlzdDtcbn1cbl9fbmFtZShpc0xpc3QsIFwiaXNMaXN0XCIpO1xuZnVuY3Rpb24gdW5zdWNjZXNzZnVsKHN0YXRlKSB7XG4gIHdoaWxlIChzdGF0ZS5ydWxlICYmICEoQXJyYXkuaXNBcnJheShzdGF0ZS5ydWxlKSAmJiBzdGF0ZS5ydWxlW3N0YXRlLnN0ZXBdLm9mUnVsZSkpIHtcbiAgICBwb3BSdWxlKHN0YXRlKTtcbiAgfVxuICBpZiAoc3RhdGUucnVsZSkge1xuICAgIGFkdmFuY2VSdWxlKHN0YXRlLCBmYWxzZSk7XG4gIH1cbn1cbl9fbmFtZSh1bnN1Y2Nlc3NmdWwsIFwidW5zdWNjZXNzZnVsXCIpO1xuZnVuY3Rpb24gbGV4KGxleFJ1bGVzLCBzdHJlYW0pIHtcbiAgY29uc3Qga2luZHMgPSBPYmplY3Qua2V5cyhsZXhSdWxlcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2luZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaCA9IHN0cmVhbS5tYXRjaChsZXhSdWxlc1traW5kc1tpXV0pO1xuICAgIGlmIChtYXRjaCAmJiBtYXRjaCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4geyBraW5kOiBraW5kc1tpXSwgdmFsdWU6IG1hdGNoWzBdIH07XG4gICAgfVxuICB9XG59XG5fX25hbWUobGV4LCBcImxleFwiKTtcbmV4cG9ydCB7IG9ubGluZVBhcnNlciBhcyBvIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///98007\n')}}]);