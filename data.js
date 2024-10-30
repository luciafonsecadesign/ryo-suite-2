var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1919862177193803,
        "pitch": 0.20044007629787686,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": -0.3581140955194204,
          "pitch": 0.051789707461471934,
          "rotation": 0,
          "target": "2-bao"
        },
        {
          "yaw": -3.0385757181536572,
          "pitch": -0.03786380116296684,
          "rotation": 0,
          "target": "1-cama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cama",
      "name": "Cama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04161938985525104,
        "pitch": 0.3446939633455237,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": 1.3151735590680982,
          "pitch": 0.04674471604346664,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.252026702682576,
        "pitch": 0.3991360361502796,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": -2.735369746858007,
          "pitch": 0.1327565372525612,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ryo suite 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
