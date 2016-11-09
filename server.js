const express = require('express')


express().use('/', express.static('./src')).listen(9090)
console.log('server up on 9090')
