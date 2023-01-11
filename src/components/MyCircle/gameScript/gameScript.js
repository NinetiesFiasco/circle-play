import {rndCircle} from './createCircle'
import collider from './collider'

const start = function(container) {
  
  const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
  svg.style.width = container.offsetWidth +'px'
  svg.style.height = container.offsetHeight + 'px'

  const objects = []
  for (let i=0; i<100; i++)
    objects.push(rndCircle(svg))

  for (const obj of objects)
    svg.appendChild(obj.svg)

  container.appendChild(svg)

  
  const loop = function() {
    for (const obj of objects)
      obj.move()

    collider(objects)
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
}

export default start