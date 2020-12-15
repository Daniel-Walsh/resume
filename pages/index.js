import Intro from "../src/sections/Intro";
import Projects from "../src/sections/Projects";
import Contact from "../src/sections/Contact";
import Footer from "../src/sections/Footer";
import matter from "gray-matter";
import BlogSection from "../src/sections/Blog";
import Head from "next/head";

const HomePage = ({ projects, blog }) => {
  return (
    <>
      <Head>
        <title>Dan Walsh | Web Developer Designer | Geelong</title>
        <meta
          name="description"
          content="My name is Dan Walsh. I'm a web developer, based in Geelong &mdash; Let's talk!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <script
          src="https://kit.fontawesome.com/6af084fa5a.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Intro />
      <Projects projects={projects} />
      <BlogSection blog={blog} />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;

// export async function getServerSideProps() {
//   var myHeaders = new Headers();
//   myHeaders.append("api-key", "wxPNoEDGPbwKQsWgpvfRaWt9");

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   let blog;

//   await fetch(
//     "https://dev.to/api/articles/me/published?page=1&per_page=2",
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((result) => (blog = result))
//     .catch((error) => console.log("error", error));

//   return {
//     props: {
//       // projects,
//       blog,
//     },
//   };
// }

export async function getStaticProps() {
  const projectsPath = `${process.cwd()}/src/projects`;
  const fs = require("fs");
  const files = fs.readdirSync(projectsPath, "utf-8");
  const projectFiles = files.filter((fn) => fn.endsWith(".md"));

  const projects = projectFiles.map((project) => {
    const projectsPath = `${process.cwd()}/src/projects`;
    const path = `${projectsPath}/${project}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    const projectMatter = matter(rawContent);

    return {
      content: projectMatter.content,
      data: projectMatter.data,
    };
  });

  var myHeaders = new Headers();
  myHeaders.append("api-key", "wxPNoEDGPbwKQsWgpvfRaWt9");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let blog;

  await fetch(
    "https://dev.to/api/articles/me/published?page=1&per_page=2",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => (blog = result))
    .catch((error) => console.log("error", error));

  return {
    props: {
      projects,
      blog,
    },
  };
}
