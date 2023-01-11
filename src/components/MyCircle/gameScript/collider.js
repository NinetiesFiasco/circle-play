export default function(objects) {
  for (const obj of objects) {
    obj.params.highlighted = false
  }
  const highlights = {};
  for (let i = 0, len = objects.length; i < len; i++) {
    for (let j=i + 1; j < len; j++) {
      const {cx:x1, cy:y1, r:r1} = objects[i].params
      const {cx:x2, cy:y2, r:r2} = objects[j].params
      const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
      if (distance < r1 + r2) {
        highlights[i] = true
        highlights[j] = true
      }
    }
  }
  for (const index of Object.keys(highlights)) {
    objects[index].params.highlighted = true
  }
}