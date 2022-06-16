# Alt JSON Schema

Makes managing internationalization easier.

# Installation

```JavaScript
npm install -s @sleeksky/alt-redux

const { getReducers } = require('@sleeksky/alt-redux')

import { getReducers } from '@sleeksky/alt-redux';
```

# Usage

```JavaScript
import { getReducers } from '@sleeksky/alt-redux';
createSlice({
    name: 'model',
    initialState: null,
    extraReducers: getReducers('users')
})
```
