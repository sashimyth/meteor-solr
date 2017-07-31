module.exports = {
  servers: {
    one: {
      host: '10.9.8.106',
      username: 'root',
      // pem: '/home/user/.ssh/id_rsa',
       password: 'digilibfisip2017',
      // or leave blank to authenticate using ssh-agent
      opts: {
        port: 22,
      },
    }
  },

  meteor: {
    name: 'meteor-solr',
    path: '../',
    // lets you add docker volumes (optional)
    volumes: {
      // passed as '-v /host/path:/container/path' to the docker run command
      '/host/path': '/container/path',
      '/second/host/path': '/second/container/path'
    },
    docker: {
      // Change the image to 'kadirahq/meteord' if you abernix/meteord:base
      // are using Meteor 1.3 or older
      image: 'abernix/meteord:base' , // (optional)
      imagePort: 80, // (optional, default: 80)

      // lets you add/overwrite any parameter on
      // the docker run command (optional)
      //args: [
        //'--link=myCustomMongoDB:myCustomMongoDB', // linking example
        //'--memory-reservation 200M' // memory reservation example
      //],
      // (optional) Only used if using your own ssl certificates.
      // Default is "meteorhacks/mup-frontend-server"
      imageFrontendServer: 'meteorhacks/mup-frontend-server',
      // lets you bind the docker container to a
      // specific network interface (optional)
      bind: '10.9.8.106',
      // lets you add network connections to perform after run
      // (runs docker network connect <net name> for each network listed here)
      networks: [
        //'docker0'
      ]
    },

     // list of servers to deploy, from the 'servers' list
    servers: {
      one: {},
    },

    buildOptions: {
      // skip building mobile apps, but still build the web.cordova architecture
      serverOnly: true,
      debug: true,
      cleanAfterBuild: true, // default
      buildLocation: 'D:/www/project_real/deploys', // defaults to /tmp/<uuid>

      // set serverOnly: false if want to build mobile apps when deploying

      // Remove this property for mobileSettings to use your settings.json
      // (optional)
      mobileSettings: {
        yourMobileSetting: 'setting value'
      },
      server: 'http://10.9.8.106', // your app url for mobile app access (optional)
       // adds --allow-incompatible-updates arg to build command (optional)
      allowIncompatibleUpdates: true,
    },
    env: {
      // PORT: 8000, // useful when deploying multiple instances (optional)
      ROOT_URL: 'http://10.9.8.106', // If you are using ssl, this needs to start with https
      MONGO_URL: 'mongodb://localhost/meteor'
      },

    // ssl: {
    //   // Enables let's encrypt (optional)
    //   autogenerate: {
    //     email: 'email.address@domain.com',
    //     domains: 'website.com,www.website.com' // comma seperated list of domains
    //   }
    // },
    deployCheckWaitTime: 180, // default 10
    // lets you define which port to check after the deploy process, if it
    // differs from the meteor port you are serving
    // (like meteor behind a proxy/firewall) (optional)
    deployCheckPort: 80,

    // Shows progress bar while uploading bundle to server (optional)
    // You might need to disable it on CI servers
    enableUploadProgressBar: true // default false.
  },

  mongo: { // (optional but remove it if you want to use a remote mongodb!)
    port: 27017,
    version: '3.4.6', // (optional), default is 3.4.1
    servers: {
      one: {},
    }
  }
};
