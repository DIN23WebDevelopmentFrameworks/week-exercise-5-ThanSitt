interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTag({onSelectTag, tagName}: IRecipeTagProps) {
  return (
    <div>
        <li onClick={() => onSelectTag(tagName)}>{tagName}</li>
    </div>
  )
}