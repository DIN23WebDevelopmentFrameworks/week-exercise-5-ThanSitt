import React, {useState, useEffect} from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

const App = () => {

  const [tags, setTags] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [view, setView] = useState<'tags' | 'recipes'>('tags');

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
    .then(response => response.json())
    .then(data => setTags(data));
  }, []);

  const handleSelectTag = (tagName: string) => {
    setSelectedTag(tagName);
    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
    .then(response => response.json())
    .then(data => {
      setRecipes(data.recipes);
      setView('recipes');
    });
  }; 

  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        {view === 'tags' ? (
          <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
        ) : (
          <RecipeList recipes={recipes} onBack={() => setView('tags')}/> 
        )}
    </div>
  );
};

export default App;
