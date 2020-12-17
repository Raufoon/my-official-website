let usedZIndices = [2001]

export function getAvailableZIndex() {
  const last = usedZIndices[usedZIndices.length - 1]
  usedZIndices.push(last + 1)
  return last + 1
}

export function releaseZIndex(value) {
  const idx = usedZIndices.indexOf(value)
  if (idx > -1) {
    usedZIndices.splice(idx, 1)
  }
}

export function releaseLastZIndex() {
  usedZIndices.pop()
}
