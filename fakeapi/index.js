var applicationRoot = __dirname.replace(/\\/g, '/')
var ipaddress = process.env.FAKEAPI_IP || '127.0.0.1'
var port = 8080
var mockRoot = applicationRoot + '/responses'
var mockFilePattern = '.json|.js'
var mockRootPattern = mockRoot + '/**/*' + '@(' + mockFilePattern + ')'
var apiRoot = ''
var glob = require('glob')

var morgan = require('morgan')
var errorhandler = require('errorhandler')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(morgan('tiny'))
app.use(errorhandler({ dumpExceptions: true, showStack: true }))
app.use(cors())

let byDepthDesc = function(a, b) {
  return b.split('/').length - a.split('/').length
}

var files = glob.sync(mockRootPattern).sort(byDepthDesc)

if (files && files.length > 0) {
  files.forEach(function(fileName) {
    var mapping = apiRoot + fileName.replace(mockRoot, '').replace(new RegExp(mockFilePattern), '')

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    var data = require(fileName)

    if (fileName.endsWith('.json')) {
      app.get(mapping, function(request, response) {
        response.set('Content-Type', 'application/json')
        response.write(JSON.stringify(data))
        response.send()
      })

      console.log('Registered mapping: %s -> GET %s', mapping, fileName)
    } else if (Object.keys(data).length === 0 && fileName.endsWith('video.js')) {
      app.get(mapping, function(request, response) {
        data(request, response)
      })

      console.log('Registered video mapping: %s -> GET %s', mapping, fileName)
    } else if (Object.keys(data).length === 0) {
      app.get(mapping, function(request, response) {
        response.set('Content-Type', 'application/json')
        var content = data(request, response)
        if (content) {
          response.write(JSON.stringify(content))
        }
        response.send()
      })

      console.log('Registered mapping: %s -> GET %s', mapping, fileName)
    } else {
      Object.keys(data).forEach(function(method) {
        app[method](mapping, function(request, response) {
          response.set('Content-Type', 'application/json')
          var content = data[method](request, response)
          if (content) {
            response.write(JSON.stringify(content))
          }
          response.send()
        })

        console.log('Registered mapping: %s -> ' + method.toUpperCase() + ' %s', mapping, fileName)
      })
    }
  })
} else {
  console.log('No mappings found! Please check the configuration.')
}

console.log('Application root directory: [' + applicationRoot + ']')
console.log('Mock Api Server listening: [http://' + ipaddress + ':' + port + ']')
app.listen(port, ipaddress)
