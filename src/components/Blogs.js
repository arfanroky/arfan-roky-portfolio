import React from 'react';

const Blogs = () => {
  return (
    <article className="p-4">
      <div className="text-center">
        <p className="font-medium mb-8 text-gray-400 my-4 border-b-4 border-cyan-300 inline-block tracking-widest uppercase text-3xl">
          Projects
        </p>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center min-h-screen">
        <div className="w-[350px] h-[400px] border-2">
          <h1 className="text-center text-5xl font-bold text-cyan-400 py-12 border-b">
            Coming Soon
          </h1>
          <div className="text-gray-300 p-3">
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              aspernatur praesentium nihil pariatur voluptate qui et, delectus
              a, aut repellendus mollitia esse, quod labore quam. Delectus culpa
              vel consectetur nesciunt.
            </p>

            <a
              className="block text-right mt-12 text-cyan-600 font-medium underline"
              href="https//"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Blogs;
