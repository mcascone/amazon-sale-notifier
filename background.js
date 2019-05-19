// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This is purely to figure out how to place an API call to a simple test endpoint.
fetch('https://jsonplaceholder.typicode.com/todos/3')
  .then(response => response.json())
  .then(json => console.log(json))


  // now how do i show it in the popup?

