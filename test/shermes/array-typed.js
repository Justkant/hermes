/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %shermes -typed -exec %s | %FileCheck --match-full-lines %s

'use strict';

(function () {

var x: number[] = [1, 2, 3];

print(x[0]);
// CHECK-LABEL: 1

for(var i = 0, e = x.length; i < e ; i++)
  print(x[i]);

// CHECK-NEXT: 1
// CHECK-NEXT: 2
// CHECK-NEXT: 3

})();
