# gsap-three-plugin
Based on GSAP PIXI Plugin https://github.com/noprotocol/gsap-pixi-plugin

```
// js
import 'ThreePlugin'

TweenLite.to(mesh, 1, {
  three: {
    alpha: 0, // material must be loaded
    color: '#fffffff'

    x: 10, // translate
    y: 10,
    z: 10,

    rotation: 90, // rotate X,Y,Z in deg
    rotationX: 10,
    rotationY: 10,
    rotationZ: 10,

    scale: 0, // if 0 -> .0001
    scaleX: 10,
    scaleY: 10,
    scaleZ: 10,
  },

  ease: Expo.easeOut,
  onComplete: () => {},
  ... blah blah
})
```


