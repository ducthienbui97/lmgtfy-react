# lmgtfy-react
[![Build Status](https://travis-ci.org/ducthienbui97/lmgtfy-react.svg?branch=master)](https://travis-ci.org/ducthienbui97/lmgtfy-react)
[![codecov](https://codecov.io/gh/ducthienbui97/lmgtfy-react/branch/master/graph/badge.svg)](https://codecov.io/gh/ducthienbui97/lmgtfy-react)
[![Code Climate](https://codeclimate.com/github/ducthienbui97/lmgtfy-react/badges/gpa.svg)](https://codeclimate.com/github/ducthienbui97/lmgtfy-react)
[![GitLicense](https://gitlicense.com/badge/ducthienbui97/lmgtfy-react)](https://gitlicense.com/license/ducthienbui97/lmgtfy-react)
 
Lmgtfy link for your React component

## Install
[![NPM](https://nodei.co/npm/lmgtfy-react.png?mini=true)](https://nodei.co/npm/lmgtfy-react/)
```bash
npm install -S lmgtfy-react
```
## Usage
```jsx
<Lmgtfy query="bing">
    Search "Bing" on "Google" in current Frame
</Lmgtfy>

<Lmgtfy query="google" engine="bing">
    Search "Google" on "Bing" in current Frame
</Lmgtfy>

<Lmgtfy query="duckduckgo" target="_blank">
    Search "duckduckgo" on "Google" in new tab
</Lmgtfy>
```
Currently, lmgtfy supports 6 search engine: Google (default), Bing, Ask, Aol, Duckduckgo, Yahoo.

## License
MIT License

Copyright (c) 2017 Duc Thien Bui
