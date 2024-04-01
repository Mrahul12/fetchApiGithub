import React from "react";

// ! value--> comes from app , value is an object
const Collectdata = ({ value }) => {
  // console.log(value); //! Array(30) [ {…}, {…}]

  return (
    <>
      {value.map((data, ind) => {
        // ! data --> is an object
        // !  so , object destructuring
        // console.log(data);
        const { login, id, html_url, avatar_url } = data;
        return (
          <>
            <section className="flex flex-col justify-evenly bg-sky-300 p-10 rounded-xl shadow-[2px_2px_20px] " key={ind}>
              <div className="bg-green-900 p-1 rounded-[50%] flex justify-center items-center mb-3 shadow-[5px_5px_15px]">
                <img
                  src={avatar_url}
                  alt="githubUserImage"
                  className="w-[200px] h-[200px] object-cover object-center rounded-[50%] "
                />
              </div>
              <article
                className="flex flex-col gap-2 justify-center items-center"
                key={Math.random() * 999}
              >
                <h2 className="flex flex-col">
                  <span className="text-1xl font-bold  "> Id : {id}</span>
                  <p className="font-semibold text-xl "> Name : {login}</p>
                </h2>
                <a href={html_url} className='bg-green-700 p-2 rounded text-sm  font-semibold text-white'>Click to go User Github</a>
              </article>
            </section>
          </>
        );
      })}
    </>
  );
};
export default Collectdata;
