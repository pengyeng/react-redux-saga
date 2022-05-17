import {apm} from '@elastic/apm-rum'

export function initiate() {
  console.log("Initiatelise APM package...");
    apm.init({
      serviceName: "react-redux-saga",
      pageLoadTransactionName: 'News UI',
  
      serverUrl: 'https://dec3e88298514a13ab33a697b888cab1.apm.us-central1.gcp.cloud.es.io:443',
  
      // Set the service version (required for source map feature)
      serviceVersion: '',
  
      // Set the service environment
      environment: 'production'      
    })
}
  