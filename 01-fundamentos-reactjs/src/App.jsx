import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post 
      author="julia martins"
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos earum laborum blanditiis"
      />
      <Post
      author="gabriel carvalho"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis libero laudantium sequi in adipisci nisi numquam iste. Corporis debitis nobis culpa est harum, facilis ipsa fugiat unde iure tempora!"
      ></Post>
    </div>
  );
}
