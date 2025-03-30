// When metadata exists in multiple places along a route, they merge together, with the page metadata overriding layout metadata for matching properties
export const metadata = {
  title: 'About Codevolution',
};

export default function About() {
  return <h1>About me</h1>;
}
