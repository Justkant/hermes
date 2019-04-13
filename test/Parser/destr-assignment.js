// RUN: %hermes -dump-ast --pretty-json %s | %FileCheck %s --match-full-lines

//CHECK:      {
//CHECK-NEXT:   "type": "File",
//CHECK-NEXT:   "program": {
//CHECK-NEXT:     "type": "Program",
//CHECK-NEXT:     "body": [

({a : [x[y], z = 1] = [], b} = x);
//CHECK-NEXT:       {
//CHECK-NEXT:         "type": "ExpressionStatement",
//CHECK-NEXT:         "expression": {
//CHECK-NEXT:           "type": "AssignmentExpression",
//CHECK-NEXT:           "operator": "=",
//CHECK-NEXT:           "left": {
//CHECK-NEXT:             "type": "ObjectPattern",
//CHECK-NEXT:             "properties": [
//CHECK-NEXT:               {
//CHECK-NEXT:                 "type": "Property",
//CHECK-NEXT:                 "key": {
//CHECK-NEXT:                   "type": "Identifier",
//CHECK-NEXT:                   "name": "a",
//CHECK-NEXT:                   "typeAnnotation": null
//CHECK-NEXT:                 },
//CHECK-NEXT:                 "value": {
//CHECK-NEXT:                   "type": "AssignmentPattern",
//CHECK-NEXT:                   "left": {
//CHECK-NEXT:                     "type": "ArrayPattern",
//CHECK-NEXT:                     "elements": [
//CHECK-NEXT:                       {
//CHECK-NEXT:                         "type": "MemberExpression",
//CHECK-NEXT:                         "object": {
//CHECK-NEXT:                           "type": "Identifier",
//CHECK-NEXT:                           "name": "x",
//CHECK-NEXT:                           "typeAnnotation": null
//CHECK-NEXT:                         },
//CHECK-NEXT:                         "property": {
//CHECK-NEXT:                           "type": "Identifier",
//CHECK-NEXT:                           "name": "y",
//CHECK-NEXT:                           "typeAnnotation": null
//CHECK-NEXT:                         },
//CHECK-NEXT:                         "computed": true
//CHECK-NEXT:                       },
//CHECK-NEXT:                       {
//CHECK-NEXT:                         "type": "AssignmentPattern",
//CHECK-NEXT:                         "left": {
//CHECK-NEXT:                           "type": "Identifier",
//CHECK-NEXT:                           "name": "z",
//CHECK-NEXT:                           "typeAnnotation": null
//CHECK-NEXT:                         },
//CHECK-NEXT:                         "right": {
//CHECK-NEXT:                           "type": "NumericLiteral",
//CHECK-NEXT:                           "value": 1
//CHECK-NEXT:                         }
//CHECK-NEXT:                       }
//CHECK-NEXT:                     ]
//CHECK-NEXT:                   },
//CHECK-NEXT:                   "right": {
//CHECK-NEXT:                     "type": "ArrayExpression",
//CHECK-NEXT:                     "elements": []
//CHECK-NEXT:                   }
//CHECK-NEXT:                 },
//CHECK-NEXT:                 "kind": "init"
//CHECK-NEXT:               },
//CHECK-NEXT:               {
//CHECK-NEXT:                 "type": "Property",
//CHECK-NEXT:                 "key": {
//CHECK-NEXT:                   "type": "Identifier",
//CHECK-NEXT:                   "name": "b",
//CHECK-NEXT:                   "typeAnnotation": null
//CHECK-NEXT:                 },
//CHECK-NEXT:                 "value": {
//CHECK-NEXT:                   "type": "Identifier",
//CHECK-NEXT:                   "name": "b",
//CHECK-NEXT:                   "typeAnnotation": null
//CHECK-NEXT:                 },
//CHECK-NEXT:                 "kind": "init"
//CHECK-NEXT:               }
//CHECK-NEXT:             ]
//CHECK-NEXT:           },
//CHECK-NEXT:           "right": {
//CHECK-NEXT:             "type": "Identifier",
//CHECK-NEXT:             "name": "x",
//CHECK-NEXT:             "typeAnnotation": null
//CHECK-NEXT:           }
//CHECK-NEXT:         },
//CHECK-NEXT:         "directive": null
//CHECK-NEXT:       },

({a = 10} = x);
//CHECK-NEXT:      {
//CHECK-NEXT:        "type": "ExpressionStatement",
//CHECK-NEXT:        "expression": {
//CHECK-NEXT:          "type": "AssignmentExpression",
//CHECK-NEXT:          "operator": "=",
//CHECK-NEXT:          "left": {
//CHECK-NEXT:            "type": "ObjectPattern",
//CHECK-NEXT:            "properties": [
//CHECK-NEXT:              {
//CHECK-NEXT:                "type": "Property",
//CHECK-NEXT:                "key": {
//CHECK-NEXT:                  "type": "Identifier",
//CHECK-NEXT:                  "name": "a",
//CHECK-NEXT:                  "typeAnnotation": null
//CHECK-NEXT:                },
//CHECK-NEXT:                "value": {
//CHECK-NEXT:                  "type": "AssignmentPattern",
//CHECK-NEXT:                  "left": {
//CHECK-NEXT:                    "type": "Identifier",
//CHECK-NEXT:                    "name": "a",
//CHECK-NEXT:                    "typeAnnotation": null
//CHECK-NEXT:                  },
//CHECK-NEXT:                  "right": {
//CHECK-NEXT:                    "type": "NumericLiteral",
//CHECK-NEXT:                    "value": 10
//CHECK-NEXT:                  }
//CHECK-NEXT:                },
//CHECK-NEXT:                "kind": "init"
//CHECK-NEXT:              }
//CHECK-NEXT:            ]
//CHECK-NEXT:          },
//CHECK-NEXT:          "right": {
//CHECK-NEXT:            "type": "Identifier",
//CHECK-NEXT:            "name": "x",
//CHECK-NEXT:            "typeAnnotation": null
//CHECK-NEXT:          }
//CHECK-NEXT:        },
//CHECK-NEXT:        "directive": null
//CHECK-NEXT:      }

//CHECK-NEXT:     ]
//CHECK-NEXT:   }
//CHECK-NEXT: }
