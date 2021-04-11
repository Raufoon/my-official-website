import { ProjectType } from '../../global-types'

interface LabelFreqPair {
  label: string
  freq: number
}

type LabelFreqMap = {
  [key: string]: number
}

function getUniques(items: Array<string>): Array<string> {
  const uniques = new Set(items)
  return Array.from(uniques)
}

function getFreqMapFromLabels(labels: Array<string>): LabelFreqMap {
  let freqMap: LabelFreqMap = {}
  const uniqueLabels = getUniques(labels)

  uniqueLabels.forEach((label) => (freqMap[label] = 0))

  labels.forEach((label) => freqMap[label]++)

  return freqMap
}

function getLabelFreqPairs(labels: Array<string>): Array<LabelFreqPair> {
  const uniqueLabels = getUniques(labels)
  const freqMap: LabelFreqMap = getFreqMapFromLabels(labels)

  const uniqueLabelsWithCounts = uniqueLabels.map((label) => ({
    label,
    freq: freqMap[label],
  }))

  return uniqueLabelsWithCounts
}

export function getSortedLabelFreqPairs(
  labels: Array<string>
): Array<LabelFreqPair> {
  return getLabelFreqPairs(labels).sort((a, b) => (a.label < b.label ? -1 : 1))
}

export function compareProjectsByPriority(a: ProjectType, b: ProjectType) {
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
