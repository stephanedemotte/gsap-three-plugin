var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
  (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {
     "use strict";

var toRadians = function(angle) {
  return angle * (Math.PI / 180)
}

var hexToRgb = function(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
  } : null;
}

_gsScope._gsDefine.plugin({
    propName: 'three',
    priority: 0,
    API: 2,
    global: true,
    version: "1.0.0",
    init: function(target, values, tween) {
      for(const property in values) {
        let value = values[property]

        if(typeof value == 'function')
          value = value()

        if(['scale', 'scaleX', 'scaleY', 'scaleZ'].indexOf(property) !== -1 && value === 0)
          value = .0001

        switch (property) {
          case 'alpha':
            target.material.transparent = true
            this._addTween(target.material, "opacity", target.material.opacity, value, property)
            break
          case 'color':
            let matColor = target.material.color
            let color = hexToRgb(value)
            this._addTween(matColor, "r", matColor.r, color.r, "colorR")
            this._addTween(matColor, "g", matColor.g, color.g, "colorG")
            this._addTween(matColor, "b", matColor.b, color.b, "colorB")
            this._overwriteProps.push("colorR", "colorG", "colorB")
            break
          case 'x':
            this._addTween(target.position, "x", target.position.x, value, property)
            break
          case 'y':
            this._addTween(target.position, "y", target.position.y, value, property)
            break
          case 'z':
            this._addTween(target.position, "z", target.position.z, value, property)
            break
          case 'scale':
            this._addTween(target.scale, "x", target.scale.x, value, "scaleX")
            this._addTween(target.scale, "y", target.scale.y, value, "scaleY")
            this._addTween(target.scale, "z", target.scale.z, value, "scaleZ")
            this._overwriteProps.push("scaleX", "scaleY", "scaleZ")
            break
          case 'scaleX':
            this._addTween(target.scale, "x", target.scale.x, value, property)
            break
          case 'scaleY':
            this._addTween(target.scale, "y", target.scale.y, value, property)
            break
          case 'scaleZ':
            this._addTween(target.scale, "z", target.scale.z, value, property)
            break
          case 'rotation':
            this._addTween(target.rotation, "x", target.rotation.x, toRadians(value), "rotationX")
            this._addTween(target.rotation, "y", target.rotation.y, toRadians(value), "rotationY")
            this._addTween(target.rotation, "z", target.rotation.z, toRadians(value), "rotationZ")
            this._overwriteProps.push("rotationX", "rotationY", "rotationZ")
            break
          case 'rotationX':
            this._addTween(target.rotation, "x", target.rotation.x, toRadians(value), property)
            break
          case 'rotationY':
            this._addTween(target.rotation, "y", target.rotation.y, toRadians(value), property)
            break
          case 'rotationZ':
            this._addTween(target.rotation, "z", target.rotation.z, toRadians(value), property)
            break
          default:
            console.warn('Property "' + property + '" is not supported by the Three Plugin')
        }

        if(property !== 'scale' && property !== 'rotation' && property !== 'color')
          this._overwriteProps.push(property)
      }
      return true
    },

  })
}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

