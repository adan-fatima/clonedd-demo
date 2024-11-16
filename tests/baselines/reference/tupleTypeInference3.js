//// [tests/cases/compiler/tupleTypeInference3.ts] ////

//// [tupleTypeInference3.ts]
// Repro from #55632

type InferArg =
  | [1, (a: number) => void]
  | [2, (b: string) => void];
const arg: InferArg = [1, (a) => { }];

// More tests

type T1 = [1, (a: number) => void];
type T2 = { 0: 1, 1: (a: boolean) => void, 2: number };
type T3 = T1 | T2;
const v31: T3 = [1, (a) => { a === 0 }];
const v32: T3 = [1, (a) => { a === true }, 0];
const v33: T3 = [1, (a) => { a === true }, 0, 0]; // Error
const v34: T3 = [1, (a: boolean) => { a === true }]; // Error

type T4 = T3 | [2, (b: string) => void]
const v41: T4 = [1, (a) => { a === 0 }];
const v42: T4 = [1, (a) => { a === true }, 0];
const v43: T4 = [2, (a) => { a === "" }];

type T5 = T4 | {}
const v52: T5 = [1, (a) => { a === 0 }];
const v53: T5 = [1, (a) => { a === true }, 0];
const v54: T5 = [2, (a) => { a === "" }];

type T6 = T1 | { 0: 1, 1: (a: boolean) => void, 2?: number }
const v61: T6 = [1, (a) => { a === true }, 0];
const v62: T6 = [1, (a) => { }]; // Error

type T7 = [1, (a: number) => void, ...number[]];
type T8 = T7 | [1, (a: boolean) => void]
const v81: T8 = [1, (a) => { a === 0 }, 0];
const v82: T8 = [1, (a) => { }]; // Error

type T9 = [1, (a: number) => void, ...[number, string]] | [1, (b: string) => void, number?];
const v91: T9 = [1, (a) => { a === 0 }, 0, ""];
const v92: T9 = [1, (a) => { a === "" }];
const v93: T9 = [1, (a) => { a === "" }, 0];

type T10 = [1, (a: number) => void, ...[number, string]] | [1, (b: string) => void, number?, string?];
const v101: T10 = [1, (a) => { a === "" }];
const v102: T10 = [1, (a) => { a === "" }, 0];
const v103: T10 = [1, (a) => { }, 0, ""]; // Error

type T11 = [1, (a: number) => void, ...[number, string]] | [1, (b: string) => void, number?, boolean?];
const v111: T11 = [1, (a) => { a === "" }];
const v112: T11 = [1, (a) => { a === "" }, 0];
const v113: T11 = [1, (a) => { a === 0 }, 0, ""];
const v114: T11 = [1, (a) => { a === "" }, 0, true];


//// [tupleTypeInference3.js]
"use strict";
// Repro from #55632
var arg = [1, function (a) { }];
var v31 = [1, function (a) { a === 0; }];
var v32 = [1, function (a) { a === true; }, 0];
var v33 = [1, function (a) { a === true; }, 0, 0]; // Error
var v34 = [1, function (a) { a === true; }]; // Error
var v41 = [1, function (a) { a === 0; }];
var v42 = [1, function (a) { a === true; }, 0];
var v43 = [2, function (a) { a === ""; }];
var v52 = [1, function (a) { a === 0; }];
var v53 = [1, function (a) { a === true; }, 0];
var v54 = [2, function (a) { a === ""; }];
var v61 = [1, function (a) { a === true; }, 0];
var v62 = [1, function (a) { }]; // Error
var v81 = [1, function (a) { a === 0; }, 0];
var v82 = [1, function (a) { }]; // Error
var v91 = [1, function (a) { a === 0; }, 0, ""];
var v92 = [1, function (a) { a === ""; }];
var v93 = [1, function (a) { a === ""; }, 0];
var v101 = [1, function (a) { a === ""; }];
var v102 = [1, function (a) { a === ""; }, 0];
var v103 = [1, function (a) { }, 0, ""]; // Error
var v111 = [1, function (a) { a === ""; }];
var v112 = [1, function (a) { a === ""; }, 0];
var v113 = [1, function (a) { a === 0; }, 0, ""];
var v114 = [1, function (a) { a === ""; }, 0, true];
