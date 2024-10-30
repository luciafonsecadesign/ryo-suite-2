var APP_DATA = {
  "scenes": [
    {
      "id": "0-cama",
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
        "yaw": -2.2686230164482897,
        "pitch": 0.2980218841528206,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": -1.1690655876918594,
          "pitch": 0.1941591936557181,
          "rotation": 0,
          "target": "1-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala",
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
        "yaw": -0.2873724312342407,
        "pitch": 0.08928547077821491,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": -0.31750457125622056,
          "pitch": 0.08281330341323212,
          "rotation": 0,
          "target": "2-bao"
        },
        {
          "yaw": -3.0980570981304396,
          "pitch": 0.15514485794596844,
          "rotation": 0,
          "target": "0-cama"
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
        "yaw": -0.004027682889217843,
        "pitch": 0.3407425109290969,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": -2.7197739765866356,
          "pitch": 0.00858166848760078,
          "rotation": 0,
          "target": "1-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ryo Suite 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
