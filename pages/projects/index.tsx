import { motion } from "framer-motion";
import React from "react";
import CustomHead from "../../components/Head";
import HomeLayout from "../../components/layouts/HomeLayout";
import { ProjectItem } from "../../components/ProjectItem";
import { Project } from "../../interfaces/project";

type Props = {
  projects: Project[];
};

export default function ProjectsPage() {
  const projects = [
    {
      "id": "1",
      "slug": "portfolio-website",
      "description": "A personal portfolio website to showcase projects and skills.",
      "title": "Portfolio Website",
      "likes": 25,
      "content": "Detailed content about the Portfolio Website.",
      "serializedContent": {
        "compiledSource": "Compiled MDX content here",
        "scope": {}
      },
      "status": "DEVELOPMENT",
      "url": "https://example.com/portfolio-website",
      "author": {
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "profile_image": "https://example.com/john-doe.jpg"
      },
      "preview_image": {
        "url": "https://example.com/preview-image.jpg",
        "formats": {
          "large": { "url": "https://example.com/large.jpg" },
          "small": { "url": "https://example.com/small.jpg" },
          "medium": { "url": "https://example.com/medium.jpg" },
          "thumbnail": { "url": "https://example.com/thumbnail.jpg" }
        }
      },
      "featured": true,
      "publishedAt": "2024-12-01T10:30:00Z",
      "updatedAt": "2024-12-10T10:30:00Z",
      "createdAt": "2024-11-01T10:30:00Z"
    },
    {
      "id": "2",
      "slug": "ecommerce-platform",
      "description": "An online store for electronics and gadgets.",
      "title": "E-commerce Platform",
      "likes": 102,
      "content": "Detailed content about the E-commerce Platform.",
      "serializedContent": {
        "compiledSource": "Compiled MDX content here",
        "scope": {}
      },
      "status": "PRODUCTION",
      "url": "https://example.com/ecommerce-platform",
      "author": {
        "firstname": "Jane",
        "lastname": "Smith",
        "email": "jane.smith@example.com",
        "profile_image": "https://example.com/jane-smith.jpg"
      },
      "preview_image": {
        "url": "https://example.com/preview-image.jpg",
        "formats": {
          "large": { "url": "https://example.com/large.jpg" },
          "small": { "url": "https://example.com/small.jpg" },
          "medium": { "url": "https://example.com/medium.jpg" },
          "thumbnail": { "url": "https://example.com/thumbnail.jpg" }
        }
      },
      "featured": false,
      "publishedAt": "2024-11-15T14:00:00Z",
      "updatedAt": "2024-12-20T14:00:00Z",
      "createdAt": "2024-10-20T14:00:00Z"
    }
  ]


  return (
    <HomeLayout>
      <CustomHead
        title="Rankit Thakur | Projects"
        description="I have worked on numerous projects throughout my career. Here you can find a selection of my latest projects."
      />
      <div className="w-full">
        <div className="container px-4 py-16 mx-auto">
          <div className="relative inline-block">
            <h1 className="inline text-4xl font-black tracking-tight">
              My Projects
            </h1>
            <span className="ml-2 text-gray-400">
              ({projects.length.toString()})
            </span>
            <div className="w-full h-[2px] bg-gray-500 mt-2"></div>
          </div>

          <div className="flex flex-row flex-wrap mt-10">
            {projects.map((p, i) => {
              return (
                <motion.div
                  className="w-full pb-10 pr-10 md:w-1/2 lg:w-1/3"
                  key={p.slug}
                  initial={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <ProjectItem project={p} index={i + 1} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export async function getStaticProps() {
  // const res = await fetch(
  //   `${process.env.STRAPI_BASE_URL}/projects?populate=*&sort[0]=weight%3Adesc`
  // );
  // let projects = await res.json();

  // if (!projects.data) {
  //   return { props: {}, revalidate: 10 };
  // }

  // projects = projects?.data?.map((p: any) => {
  //   let project: Project = p.attributes;
  //   project.author = p.attributes.author.data.attributes;
  //   if (p.attributes.preview_image.data != null) {
  //     project.preview_image = p.attributes.preview_image.data.attributes;
  //   }
  //   return project;
  // });
  let projects = [{}]
  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}
