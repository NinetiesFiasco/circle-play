const defaultParams = {
  cx: 0,
  cy: 0,
  r: 10,
  fill: 'red',
  highlighted: false,
  velocity: 5,
  direction: {
    angle: 0,
    x: 1,
    y: 1
  }
}

const create = function(parent, circleParams) {
  const params = {
    ...defaultParams,
    ...circleParams,
    direction: { 
      ...defaultParams.direction,
      angle: Math.PI * Math.random() * 2,
      ...circleParams.direction
    }
  }
  const svg = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  
  const draw = function() {
    svg.setAttribute('cx', params.cx);
    svg.setAttribute('cy', params.cy);
    svg.setAttribute('r', params.r);  
    svg.setAttribute('fill', params.highlighted ? 'red' : params.fill);
  }

  const move = function() {

    const {cx, cy, r, direction, velocity} = circle.params
    const {clientWidth, clientHeight} = circle.parent
    const dx = Math.cos(direction.angle) * velocity * direction.x
    const dy = Math.sin(direction.angle) * velocity * direction.y

    if (dx) {
      const rightBound = cx + r + dx
      const leftBound = cx - r + dx
      let value
      if (cx + r === clientWidth || cx - r === 0) {
        circle.params.direction.x *= -1
        value = cx - dx
      } else if (rightBound > clientWidth) {
        value = clientWidth - r
      } else if (leftBound < 0) {
        value = r
      } else if (rightBound <= clientWidth) {
        value = cx + dx
      }
      
      circle.params.cx = value
    }
    if (dy) {
      const bottomBound = cy + r + dy
      const topBound = cy - r + dy
      let value
      if (cy + r === clientHeight || cy - r === 0) {
        circle.params.direction.y *= -1
        value = cy - dy
      } else if (topBound < 0) {
        value = r
      } else if (bottomBound > clientHeight) {
        value = clientHeight - r
      } else if (bottomBound <= clientHeight) {
        value = cy + dy
      }
      
      circle.params.cy = value
    }
    draw();
  }
  
  const circle = {
    parent,
    svg,
    params,
    move
  }
  return circle
}

const rndCircle = function(parent) {
  const colors = ['white', 'black', 'brown', 'silver', 'maroon', 'yellow', 'green', 'lime', 'aqua ', 'fuchsia', 'purple', 'teal', 'olive']
  const r = rnd(30)
  return create(parent, {
    r,
    cx: rnd(parseInt(parent.style.width) - r, r), 
    cy: rnd(parseInt(parent.style.height) - r, r), 
    fill: colors[rnd(colors.length)],
    velocity: rnd(15, 5)
  })
}

const rnd = function(max = 999999999, min = 0) {
  return Math.round(Math.random() * (max - min) + min)
}

export {rndCircle}
export default create