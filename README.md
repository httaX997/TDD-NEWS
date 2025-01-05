l
<h1 align="center">TDD NEWS BOT</h1>

<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">

<p align="center">
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=33&pause=1000&color=5513F7&width=435&lines=TDD+NEWS+WHATSAPP+BOT" alt="Typing SVG" /></a>
</p>
<p align="center">
<a href="https://github.com/TDD-GANGS/">
    <img src="https://i.ibb.co/zGWnNZK/IMG-20241224-WA0179.jpg"  width="700px">
</a>
<hr>




## 💡 FOLLOW OUR CHANAL

<a href="https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"><img src="https://img.shields.io/badge/Join%20Our%20WhatsApp%20Channel-blue" alt="📎 Join Our WhatsApp Channel" width="350"></a>

<br>

<div align="center">

<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">
 
  <h1>👇 DEPLOY NOW 👇</h1>
</div>

## DEPLOY NOW

<a href="https://tdd-gangs.github.io/Deployments/"><img src="https://img.shields.io/badge/DEPLOYMENT%20METHODS-green" alt="DEPLOY PLATFORMS" width="300"></a>
<br>


## How to deploy

```1st Fork the repo```

```2nd Take session id```

```3rd Put News sender group jid to config.js```

```4th Select Deploy Platform and deploy 🤤 enjoy now```


## Important Message

```No any Commands```










<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">










































## Workflow Deploy Code 👇


```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
```

