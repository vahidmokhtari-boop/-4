TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "partial": false,
  "vfov": 180,
  "label": "1",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_0_HS_1_0_0_map.gif",
           "height": 90,
           "width": 78
          }
         ]
        },
        "pitch": 0.68,
        "yaw": -93.2,
        "hfov": 9.38
       }
      ],
      "id": "overlay_1711591D_1B03_D418_41B5_6DFD0DDF699A",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_0_HS_1_0.png",
           "height": 181,
           "width": 156
          }
         ]
        },
        "yaw": -93.2,
        "pitch": 0.68,
        "hfov": 9.38
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.setComponentVisibility(this.Image_16B485E2_1B02_DC36_41A1_D2AA54A22A56, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "toolTip": "\u0647\u06cc\u062f\u0631\u0648\u06a9\u0646",
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC, this.camera_16E80875_1B7E_540C_41A1_DB74298DD3CF); this.mainPlayList.set('selectedIndex', 1)",
        "rollOut": "this.setComponentVisibility(this.Image_16B485E2_1B02_DC36_41A1_D2AA54A22A56, false, 0, null, null, false)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_t.jpg",
  "hfovMax": 120,
  "id": "panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveUp": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
   "width": 30,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
   "height": 30
  },
  "buttonMoveLeft": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
   "width": 30,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
   "height": 30
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
   "width": 30,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
   "height": 30
  },
  "viewerArea": "this.MainViewer",
  "buttonMoveRight": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
   "width": 30,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
   "height": 30
  },
  "buttonPlayRight": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "width": 38,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "height": 38
  },
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonZoomOut": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "width": 30,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "height": 30
  },
  "buttonZoomIn": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "width": 30,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "height": 30
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonRestart": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "width": 38,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "height": 38
  },
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "buttonPlayLeft": {
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "transparencyActive": false,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "paddingTop": 0,
   "minHeight": 0,
   "class": "IconButton",
   "paddingBottom": 0,
   "cursor": "hand",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "width": 38,
   "backgroundOpacity": 0,
   "horizontalAlign": "center",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "height": 38
  },
  "displayPlaybackBar": true
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "id": "sequence_17A6155E_1B01_DC7A_419B_5419E873C632"
  },
  "idleSequence": "this.sequence_17A6155E_1B01_DC7A_419B_5419E873C632",
  "id": "panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_camera",
  "automaticZoomSpeed": 10,
  "timeToIdle": 5000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 1.09,
   "hfov": 105,
   "yaw": -84.26
  }
 },
 {
  "class": "Panorama",
  "partial": false,
  "vfov": 180,
  "label": "2",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_0_HS_1_0_0_map.gif",
           "height": 80,
           "width": 65
          }
         ]
        },
        "pitch": -1.74,
        "yaw": 51.32,
        "hfov": 7.89
       }
      ],
      "id": "overlay_16B69746_1B06_5C00_4197_343B0778BD98",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_0_HS_1_0.png",
           "height": 161,
           "width": 131
          }
         ]
        },
        "yaw": 51.32,
        "pitch": -1.74,
        "hfov": 7.89
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.setComponentVisibility(this.Image_15D2A9C8_1B02_740A_4166_D223DD7057E4, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "toolTip": "\u0641\u06cc\u062f\u0631 \u0632\u0645\u06cc\u0646\u06cc",
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326, this.camera_16E4188A_1B7E_5404_41B8_5B535716FC87); this.mainPlayList.set('selectedIndex', 0)",
        "rollOut": "this.setComponentVisibility(this.Image_15D2A9C8_1B02_740A_4166_D223DD7057E4, false, 0, null, null, false)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_0_HS_0_0_0_map.gif",
           "height": 72,
           "width": 67
          }
         ]
        },
        "pitch": -1.99,
        "yaw": -3.38,
        "hfov": 8.14
       }
      ],
      "id": "overlay_15551D0D_1B06_4C03_41A4_E54F1F72CA86",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_0_HS_0_0.png",
           "height": 144,
           "width": 135
          }
         ]
        },
        "yaw": -3.38,
        "pitch": -1.99,
        "hfov": 8.14
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.setComponentVisibility(this.Image_169C83D5_1B01_D405_41A4_43F9EFF9634F, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "toolTip": "\u0633\u0631\u0646\u062f",
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "rollOut": "this.setComponentVisibility(this.Image_169C83D5_1B01_D405_41A4_43F9EFF9634F, false, 0, null, null, false)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_0_HS_2_0_0_map.gif",
           "height": 67,
           "width": 59
          }
         ]
        },
        "pitch": -1.99,
        "yaw": -73.36,
        "hfov": 7.13
       }
      ],
      "id": "overlay_1577E648_1B01_DC05_41BB_3A050161C526",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_0_HS_2_0.png",
           "height": 135,
           "width": 118
          }
         ]
        },
        "yaw": -73.36,
        "pitch": -1.99,
        "hfov": 7.13
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.setComponentVisibility(this.Image_16A40CBF_1B0E_CC05_41A7_D8A562F08D5E, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "toolTip": "\u062f\u0631\u0627\u0645",
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "rollOut": "this.setComponentVisibility(this.Image_16A40CBF_1B0E_CC05_41A7_D8A562F08D5E, false, 0, null, null, false)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_0_HS_3_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": 3.85,
        "yaw": -25.64,
        "hfov": 25.21
       }
      ],
      "id": "overlay_0B554306_1B02_7411_4175_68FB6970A27D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_0_HS_3_0.png",
           "height": 421,
           "width": 421
          }
         ]
        },
        "yaw": -25.64,
        "pitch": 3.85,
        "hfov": 25.21
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.showWindow(this.window_0B89F86C_1B02_54ED_419E_01B5AEBFCAB6, null, false)",
        "mapColor": "#FF0000",
        "toolTip": "\u0647\u06cc\u062f\u0631\u0648\u06a9\u0646",
        "displayTooltipInTouchScreens": true
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_t.jpg",
  "hfovMax": 120,
  "id": "panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 1.76,
   "hfov": 105,
   "yaw": 7.15
  }
 },
 {
  "class": "Panorama",
  "partial": false,
  "vfov": 180,
  "label": "3",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_0_HS_0_0_0_map.gif",
           "height": 80,
           "width": 80
          }
         ]
        },
        "pitch": -5.24,
        "yaw": 166.36,
        "hfov": 9.56
       }
      ],
      "id": "overlay_157B9847_1B02_540A_41A1_ED3C5E7E8551",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_0_HS_0_0.png",
           "height": 160,
           "width": 160
          }
         ]
        },
        "yaw": 166.36,
        "pitch": -5.24,
        "hfov": 9.56
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.setComponentVisibility(this.Image_16B485E2_1B02_DC36_41A1_D2AA54A22A56, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "toolTip": "\u0647\u06cc\u062f\u0631\u0648\u06a9\u0646",
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "rollOut": "this.setComponentVisibility(this.Image_16B485E2_1B02_DC36_41A1_D2AA54A22A56, false, 0, null, null, false)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_t.jpg",
  "hfovMax": 120,
  "id": "panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 6.09,
   "hfov": 105,
   "yaw": -42.46
  }
 },
 {
  "class": "Panorama",
  "partial": false,
  "vfov": 180,
  "label": "4",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_0_HS_2_0_0_map.gif",
           "height": 95,
           "width": 110
          }
         ]
        },
        "pitch": 4.71,
        "yaw": 109.55,
        "hfov": 13.16
       }
      ],
      "id": "overlay_144B6716_1B06_5C08_41B9_64747BF79A7B",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_0_HS_2_0.png",
           "height": 190,
           "width": 220
          }
         ]
        },
        "yaw": 109.55,
        "pitch": 4.71,
        "hfov": 13.16
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.setComponentVisibility(this.Image_16B485E2_1B02_DC36_41A1_D2AA54A22A56, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "rollOut": "this.setComponentVisibility(this.Image_16B485E2_1B02_DC36_41A1_D2AA54A22A56, false, 0, null, null, false)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_0_HS_3_0_0_map.gif",
           "height": 84,
           "width": 76
          }
         ]
        },
        "pitch": 1.55,
        "yaw": -85.48,
        "hfov": 9.15
       }
      ],
      "id": "overlay_156CD18C_1B0E_541A_419B_7660F70A573F",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_0_HS_3_0.png",
           "height": 169,
           "width": 152
          }
         ]
        },
        "yaw": -85.48,
        "pitch": 1.55,
        "hfov": 9.15
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "rollOver": "this.setComponentVisibility(this.Image_164B5507_1B0E_5C05_41A1_7C41876AC7B5, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "rollOut": "this.setComponentVisibility(this.Image_164B5507_1B0E_5C05_41A1_7C41876AC7B5, false, 0, null, null, false)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_1DDEF914_1B01_D599_419D_A05C320AF313_t.jpg",
  "hfovMax": 120,
  "id": "panorama_1DDEF914_1B01_D599_419D_A05C320AF313",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_1DDEF914_1B01_D599_419D_A05C320AF313_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 10.11,
   "hfov": 105,
   "yaw": -25.26
  }
 },
 {
  "class": "Panorama",
  "partial": false,
  "vfov": 180,
  "label": "5",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_t.jpg",
  "hfovMax": 120,
  "id": "panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0.25,
   "hfov": 105,
   "yaw": 11.37
  }
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album p1",
  "thumbnailUrl": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_t.png",
  "id": "album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C",
  "playList": {
   "class": "PhotoPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "p1",
      "thumbnailUrl": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_0_t.png",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_0.png"
        }
       ]
      },
      "width": 1914,
      "height": 956,
      "id": "album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_0"
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      },
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.27",
       "zoomFactor": 1.1,
       "x": "0.30"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "p2",
      "thumbnailUrl": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_1_t.png",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_1.png"
        }
       ]
      },
      "width": 1915,
      "height": 957,
      "id": "album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_1"
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      },
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.46",
       "zoomFactor": 1.1,
       "x": "0.58"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "p3",
      "thumbnailUrl": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_2_t.png",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_2.png"
        }
       ]
      },
      "width": 1913,
      "height": 953,
      "id": "album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_2"
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      },
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.34",
       "zoomFactor": 1.1,
       "x": "0.71"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "p4",
      "thumbnailUrl": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_3_t.png",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_3.png"
        }
       ]
      },
      "width": 1911,
      "height": 953,
      "id": "album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_3"
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      },
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.43",
       "zoomFactor": 1.1,
       "x": "0.45"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "p5",
      "thumbnailUrl": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_4_t.png",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_4.png"
        }
       ]
      },
      "width": 1907,
      "height": 951,
      "id": "album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_4"
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      },
      "scaleMode": "fit_outside",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.72",
       "zoomFactor": 1.1,
       "x": "0.62"
      }
     }
    }
   ],
   "id": "album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_AlbumPlayList"
  }
 },
 {
  "class": "PhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "id": "MainViewerPhotoAlbumPlayer"
 },
 "this.album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_0",
 "this.album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_1",
 "this.album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_2",
 "this.album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_3",
 "this.album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C_4",
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1DDEF914_1B01_D599_419D_A05C320AF313",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_1DDEF914_1B01_D599_419D_A05C320AF313_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_camera"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "camera": "this.panorama_1CAF8A5B_1B01_D78F_419A_FC039D824326_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "camera": "this.panorama_1DE3943E_1B01_F388_41B5_EB74EFFD52DC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "camera": "this.panorama_1DDEFE98_1B01_CC89_41A9_898DD55A0BB8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1DDEF914_1B01_D599_419D_A05C320AF313",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "camera": "this.panorama_1DDEF914_1B01_D599_419D_A05C320AF313_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "camera": "this.panorama_1DDE936D_1B01_B58B_41B2_3C34164D7883_camera"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "media": "this.album_17E74402_1B3F_B3C8_4146_10ABEEF4A50C",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 0)"
   }
  ],
  "id": "thumbnaillist5245_playlist"
 },
 {
  "class": "Map",
  "fieldOfViewOverlayOutsideColor": "#000000",
  "height": 183,
  "label": "Untitled",
  "scaleMode": "fit_inside",
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_0B7A5C78_1B03_CCFC_41AE_3A35B3E05F19.jpeg",
     "height": 183,
     "width": 258
    },
    {
     "class": "ImageResourceLevel",
     "url": "media/map_0B7A5C78_1B03_CCFC_41AE_3A35B3E05F19_lq.jpeg",
     "height": 91,
     "width": 129,
     "grayscale": true
    }
   ]
  },
  "width": 258,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "id": "map_0B7A5C78_1B03_CCFC_41AE_3A35B3E05F19",
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "thumbnailUrl": "media/map_0B7A5C78_1B03_CCFC_41AE_3A35B3E05F19_t.jpg",
  "initialZoomFactor": 1,
  "minimumZoomFactor": 0.5
 },
 {
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
  "id": "MapViewerMapPlayer",
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "viewerArea": "this.MapViewer",
  "movementMode": "constrained"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_0B7A5C78_1B03_CCFC_41AE_3A35B3E05F19",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_14A359E1_1B06_F7E4_41B5_1DDEBF87B6C5"
 },
 {
  "scrollBarWidth": 10,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerBackgroundOpacity": 1,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingTop": 10,
  "closeButtonBorderRadius": 11,
  "closeButtonIconLineWidth": 2,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontSize": 14,
  "closeButtonBackgroundColorRatios": [],
  "paddingLeft": 0,
  "bodyBorderSize": 0,
  "headerBorderColor": "#000000",
  "shadow": true,
  "titlePaddingBottom": 5,
  "modal": true,
  "minWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "backgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "overflow": "scroll",
  "paddingBottom": 0,
  "titleFontStyle": "normal",
  "scrollBarColor": "#000000",
  "width": 100,
  "height": 100,
  "title": "",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "id": "window_0B89F86C_1B02_54ED_419E_01B5AEBFCAB6",
  "children": [
   {
    "scrollBarWidth": 10,
    "paddingRight": 10,
    "paddingLeft": 10,
    "borderRadius": 0,
    "shadow": false,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\u0628\u0627\u062f\u0645\u0646\u0628\u0644\u0627\u0633\u0644\u0627\u0642\u0627\u0627\u062f\u0628\u0641\u0627\u062a\u0641\u0627\u0642\u0641\u0627\u0645\u0634\u0635</SPAN></DIV></div>",
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 0,
    "backgroundOpacity": 0,
    "paddingTop": 10,
    "minHeight": 0,
    "class": "HTMLText",
    "paddingBottom": 10,
    "scrollBarMargin": 2,
    "scrollBarColor": "#000000",
    "id": "htmlText_uid14ACF9E0_1B06_F7E4_4193_BEAA467CD9D1",
    "scrollBarOpacity": 0.5,
    "width": "100%",
    "height": "100%"
   }
  ],
  "bodyPaddingRight": 5,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingRight": 0,
  "headerPaddingRight": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "shadowSpread": 1,
  "closeButtonIconHeight": 12,
  "shadowColor": "#000000",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyPaddingLeft": 5,
  "headerVerticalAlign": "middle",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontColor": "#000000",
  "closeButtonBackgroundColor": [],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundColorDirection": "vertical",
  "contentOpaque": false,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "borderRadius": 5,
  "closeButtonIconWidth": 12,
  "titleFontWeight": "normal",
  "veilColorDirection": "horizontal",
  "titlePaddingRight": 5,
  "shadowBlurRadius": 6,
  "shadowHorizontalLength": 3,
  "borderSize": 0,
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "backgroundOpacity": 1,
  "headerPaddingBottom": 10,
  "paddingTop": 0,
  "shadowOpacity": 0.5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontFamily": "Arial",
  "bodyBorderColor": "#000000",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingLeft": 5,
  "class": "Window",
  "headerPaddingLeft": 10,
  "scrollBarMargin": 2,
  "backgroundColorRatios": [],
  "shadowVerticalLength": 0,
  "backgroundColor": [],
  "closeButtonIconColor": "#000000",
  "bodyPaddingBottom": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "center",
  "gap": 10,
  "bodyPaddingTop": 5,
  "scrollBarOpacity": 0.5,
  "titleTextDecoration": "none",
  "layout": "vertical",
  "headerBorderSize": 0
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "top": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0,
  "paddingLeft": 0,
  "progressLeft": 10,
  "toolTipBorderRadius": 3,
  "playbackBarProgressOpacity": 1,
  "shadow": false,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderSize": 2,
  "playbackBarLeft": 0,
  "minWidth": 100,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadHeight": 30,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "minHeight": 50,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowBlurRadius": 3,
  "toolTipFontSize": 20,
  "toolTipPaddingRight": 6,
  "paddingBottom": 0,
  "toolTipShadowColor": "#CCCCCC",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "height": "100%",
  "playbackBarBottom": 10,
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "bold",
  "playbackBarHeadShadow": true,
  "progressOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderSize": 1,
  "playbackBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressHeight": 20,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "width": "100%",
  "toolTipBackgroundColor": "transparent",
  "borderRadius": 0,
  "progressBorderSize": 2,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeight": 20,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "borderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "paddingTop": 0,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 4,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarRight": 0,
  "toolTipFontColor": "#FFFFFF",
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "left": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "playbackBarBorderRadius": 4
 },
 {
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "itemBackgroundColorDirection": "vertical",
  "right": 9,
  "itemLabelFontSize": 14,
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelHorizontalAlign": "center",
  "top": 84,
  "scrollBarColor": "#FFFFFF",
  "itemBorderRadius": 0,
  "itemBackgroundColor": [],
  "gap": 10,
  "bottom": 100,
  "itemLabelGap": 5,
  "itemThumbnailShadowOpacity": 0.8,
  "itemThumbnailShadow": true,
  "borderRadius": 5,
  "itemThumbnailWidth": 100,
  "shadow": false,
  "selectedItemLabelFontWeight": "bold",
  "paddingLeft": 20,
  "playList": "this.thumbnaillist5245_playlist",
  "borderSize": 0,
  "itemThumbnailShadowSpread": 1,
  "minWidth": 0,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "itemPaddingLeft": 3,
  "scrollBarVisible": "rollOver",
  "itemBackgroundColorRatios": [],
  "backgroundOpacity": 0.2,
  "itemPaddingBottom": 3,
  "paddingTop": 10,
  "itemMode": "normal",
  "itemBackgroundOpacity": 0,
  "minHeight": 0,
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemThumbnailHeight": 75,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailShadowBlurRadius": 4,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "itemHorizontalAlign": "center",
  "paddingBottom": 10,
  "scrollBarMargin": 2,
  "itemLabelFontStyle": "normal",
  "itemLabelFontColor": "#FFFFFF",
  "class": "ThumbnailList",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailBorderRadius": 5,
  "backgroundColorRatios": [
   0
  ],
  "maxWidth": 800,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelPosition": "bottom",
  "id": "thumbnaillist5245",
  "itemLabelFontWeight": "normal",
  "itemVerticalAlign": "middle",
  "itemPaddingTop": 3,
  "itemOpacity": 1,
  "itemLabelTextDecoration": "none",
  "maxHeight": 800,
  "itemThumbnailShadowColor": "#000000",
  "layout": "vertical",
  "paddingRight": 20
 },
 {
  "scrollBarWidth": 10,
  "paddingRight": 0,
  "children": [
   {
    "scrollBarWidth": 10,
    "paddingRight": 0,
    "children": [
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     {
      "paddingRight": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "transparencyActive": false,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
      "paddingTop": 0,
      "minHeight": 0,
      "class": "IconButton",
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 38,
      "backgroundOpacity": 0,
      "horizontalAlign": "center",
      "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
      "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
      "height": 38
     },
     {
      "scrollBarWidth": 10,
      "paddingRight": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
       {
        "scrollBarWidth": 10,
        "paddingRight": 0,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
        ],
        "paddingLeft": 0,
        "contentOpaque": false,
        "borderRadius": 0,
        "shadow": false,
        "borderSize": 0,
        "minWidth": 20,
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver",
        "backgroundOpacity": 1,
        "paddingTop": 0,
        "minHeight": 20,
        "backgroundColorDirection": "vertical",
        "overflow": "hidden",
        "class": "Container",
        "paddingBottom": 0,
        "scrollBarMargin": 2,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColor": [
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "width": 47,
        "horizontalAlign": "center",
        "gap": 10,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "layout": "vertical"
       },
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
      ],
      "paddingLeft": 0,
      "contentOpaque": false,
      "borderRadius": 0,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 20,
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "minHeight": 20,
      "backgroundColorDirection": "vertical",
      "overflow": "hidden",
      "class": "Container",
      "paddingBottom": 0,
      "scrollBarMargin": 2,
      "backgroundColorRatios": [
       0
      ],
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "width": 133,
      "horizontalAlign": "center",
      "gap": 5,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "layout": "horizontal"
     },
     {
      "scrollBarWidth": 10,
      "paddingRight": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "paddingLeft": 0,
      "contentOpaque": false,
      "borderRadius": 0,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 20,
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "minHeight": 20,
      "backgroundColorDirection": "vertical",
      "overflow": "hidden",
      "class": "Container",
      "paddingBottom": 0,
      "scrollBarMargin": 2,
      "backgroundColorRatios": [
       0
      ],
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "width": 85,
      "horizontalAlign": "center",
      "gap": 10,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "layout": "horizontal"
     }
    ],
    "paddingLeft": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "shadow": false,
    "borderSize": 0,
    "minWidth": 468,
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "paddingTop": 0,
    "minHeight": 20,
    "backgroundColorDirection": "vertical",
    "overflow": "hidden",
    "class": "Container",
    "paddingBottom": 0,
    "scrollBarMargin": 2,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "width": 468,
    "horizontalAlign": "center",
    "gap": 10,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "scrollBarOpacity": 0.5,
    "height": "93.478%",
    "layout": "horizontal"
   }
  ],
  "bottom": "0%",
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "shadow": false,
  "borderSize": 0,
  "minWidth": 1,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "minHeight": 1,
  "backgroundColorDirection": "vertical",
  "left": "0%",
  "overflow": "scroll",
  "class": "Container",
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarColor": "#000000",
  "height": 92,
  "horizontalAlign": "center",
  "gap": 6,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "layout": "horizontal"
 },
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "top": "8.33%",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0,
  "paddingLeft": 0,
  "progressLeft": 10,
  "toolTipBorderRadius": 3,
  "playbackBarProgressOpacity": 1,
  "shadow": false,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderSize": 2,
  "playbackBarLeft": 0,
  "minWidth": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadHeight": 30,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "minHeight": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowBlurRadius": 3,
  "toolTipFontSize": 20,
  "toolTipPaddingRight": 6,
  "paddingBottom": 0,
  "toolTipShadowColor": "#CCCCCC",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "height": "22.478%",
  "playbackBarBottom": 0,
  "id": "MapViewer",
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "bold",
  "playbackBarHeadShadow": true,
  "progressOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderSize": 1,
  "playbackBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 2,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressHeight": 20,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "width": "21.455%",
  "toolTipBackgroundColor": "transparent",
  "borderRadius": 0,
  "progressBorderSize": 2,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeight": 20,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "borderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "paddingTop": 0,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 4,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarRight": 0,
  "toolTipFontColor": "#FFFFFF",
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "left": "0.91%",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "playbackBarBorderRadius": 4
 },
 {
  "paddingRight": 0,
  "height": "15.351%",
  "top": "30.04%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "borderSize": 0,
  "minWidth": 1,
  "verticalAlign": "middle",
  "scaleMode": "fit_inside",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "minHeight": 1,
  "left": "40.79%",
  "class": "Image",
  "paddingBottom": 0,
  "maxWidth": 1549,
  "horizontalAlign": "center",
  "id": "Image_16B485E2_1B02_DC36_41A1_D2AA54A22A56",
  "width": "16.848%",
  "url": "skin/Image_16B485E2_1B02_DC36_41A1_D2AA54A22A56.png",
  "visible": false,
  "maxHeight": 774
 },
 {
  "paddingRight": 0,
  "height": "23.136%",
  "top": "23.25%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "borderSize": 0,
  "minWidth": 1,
  "verticalAlign": "middle",
  "scaleMode": "fit_inside",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "minHeight": 1,
  "class": "Image",
  "paddingBottom": 0,
  "right": "41.58%",
  "maxWidth": 1550,
  "horizontalAlign": "center",
  "id": "Image_15D2A9C8_1B02_740A_4166_D223DD7057E4",
  "width": "16.242%",
  "url": "skin/Image_15D2A9C8_1B02_740A_4166_D223DD7057E4.png",
  "visible": false,
  "maxHeight": 774
 },
 {
  "paddingRight": 0,
  "height": "30.263%",
  "top": "19.52%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "borderSize": 0,
  "minWidth": 1,
  "verticalAlign": "middle",
  "scaleMode": "fit_inside",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "minHeight": 1,
  "class": "Image",
  "paddingBottom": 0,
  "right": "39.09%",
  "maxWidth": 1552,
  "horizontalAlign": "center",
  "id": "Image_169C83D5_1B01_D405_41A4_43F9EFF9634F",
  "width": "21.636%",
  "url": "skin/Image_169C83D5_1B01_D405_41A4_43F9EFF9634F.png",
  "visible": false,
  "maxHeight": 773
 },
 {
  "paddingRight": 0,
  "height": "32.456%",
  "top": "18.2%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "borderSize": 0,
  "minWidth": 1,
  "verticalAlign": "middle",
  "scaleMode": "fit_inside",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "minHeight": 1,
  "class": "Image",
  "paddingBottom": 0,
  "right": "37.33%",
  "maxWidth": 1551,
  "horizontalAlign": "center",
  "id": "Image_16A40CBF_1B0E_CC05_41A7_D8A562F08D5E",
  "width": "24.182%",
  "url": "skin/Image_16A40CBF_1B0E_CC05_41A7_D8A562F08D5E.png",
  "visible": false,
  "maxHeight": 773
 },
 {
  "paddingRight": 0,
  "height": "40.241%",
  "top": "13.49%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "borderSize": 0,
  "minWidth": 1,
  "verticalAlign": "middle",
  "scaleMode": "fit_inside",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "minHeight": 1,
  "left": "40.73%",
  "class": "Image",
  "paddingBottom": 0,
  "maxWidth": 1551,
  "horizontalAlign": "center",
  "id": "Image_164B5507_1B0E_5C05_41A1_7C41876AC7B5",
  "width": "16.97%",
  "url": "skin/Image_164B5507_1B0E_5C05_41A1_7C41876AC7B5.png",
  "visible": false,
  "maxHeight": 773
 },
 {
  "fontSize": 22,
  "paddingRight": 0,
  "width": "7.697%",
  "height": "5.921%",
  "fontFamily": "Arial",
  "top": "1.54%",
  "paddingLeft": 0,
  "fontStyle": "normal",
  "borderRadius": 0,
  "fontColor": "#000000",
  "shadow": false,
  "borderSize": 0,
  "minWidth": 1,
  "fontWeight": "bold",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "class": "Label",
  "paddingBottom": 0,
  "right": "1.52%",
  "text": "توسعه خط چهار",
  "horizontalAlign": "center",
  "id": "Label_1440C649_1B06_BC1C_4184_64E241181882",
  "textDecoration": "none"
 }
], 
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_14A359E1_1B06_F7E4_41B5_1DDEBF87B6C5.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "shadow": false,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){    return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "unregisterKey": function(key){    delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "existsKey": function(key){    return key in window; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); }
 },
 "borderSize": 0,
 "minWidth": 20,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "minHeight": 20,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "overflow": "visible",
 "class": "Player",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "layout": "absolute"
})