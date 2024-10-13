import RecipeTag from './RecipeTag'

interface IRecipeTagListProps { 
    tagList: string[]; 
    onSelectTag: (tagName: string) => void; 
}

export default function RecipeTagList({tagList, onSelectTag}: IRecipeTagListProps) {
  return (
    <div>
        <h3>Choose a tag below</h3>
        {tagList.map((tag) => {
            return <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
        })}
    </div>
  )
}