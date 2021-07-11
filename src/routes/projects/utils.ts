import { Project } from "../../global-types"

export function compareProjectsByPriority(a: Project, b: Project) {
  return a.priority > b.priority ? -1 : 1
}

export function arrayIntersect<T>(
  array1: Array<T>,
  array2: Array<T>
): Array<T> {
  return array1.filter((value) => array2.includes(value))
}

export function intersects<T>(array1: Array<T>, array2: Array<T>): boolean {
  return arrayIntersect(array1, array2).length > 0
}
