export interface Word {
  id: number
  text: string
}

export interface Words {
  words: Word[]
}

export interface State {
  items: Word[]
  selected: Word[]
} 