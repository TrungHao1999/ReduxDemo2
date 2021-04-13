export function toggleIsAdding() {
  return {type: 'TOGGLE_IS_ADDING'};
}

export function addWord(en, vn) {
  return {type: 'ADD_WORD', en, vn};
}

export function toggleMemorized(id) {
  return {type: 'TOGGLE_MEMORIZED', id};
}

export function showAll() {
  return {type: 'FILTER_SHOW_ALL'};
}

export function showMemorized() {
  return {type: 'FILTER_MEMOZIRED'};
}

export function showNeedPractice() {
  return {type: 'FILTER_NEED_PRACTICE'};
}
