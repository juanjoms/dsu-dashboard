import { ExampleClient } from "./example-client";

export default function Example() {
  return (
    <div className="text-center text-lg font-semibold bg-cyan-950 p-4 rounded-lg shadow-md">
      <h2>Example Component</h2>
      This is an example component in <code>app/components/example.tsx</code>.
      <br />
      And this is a server component, which means it can be used in the app directory.
      <ExampleClient />
    </div>
  );
}
